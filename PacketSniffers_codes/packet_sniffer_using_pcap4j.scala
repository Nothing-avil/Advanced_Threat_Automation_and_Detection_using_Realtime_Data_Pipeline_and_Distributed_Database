// its hard to process after working a lot decided to change language for easy packet sniffing
package packetcapturing

import org.pcap4j.core._
import org.pcap4j.core.PcapNetworkInterface.PromiscuousMode
import org.pcap4j.packet.{Packet, TcpPacket, IpV4Packet, IpV6Packet}
import org.pcap4j.util.{NifSelector}
import java.io.IOException
import java.util.concurrent.TimeoutException


object PacketCapture{
    def processPacket(packet: Packet): Unit = {
        val ipV4Packet = packet.get(classOf[IpV4Packet])
        val ipV6Packet = packet.get(classOf[IpV6Packet])

        if (ipV4Packet != null) {
            println(s"IPv4 Source IP: ${ipV4Packet.getHeader.getSrcAddr}")
            println(s"IPv4 Destination IP: ${ipV4Packet.getHeader.getDstAddr}")
            
            val tcpPacket = ipV4Packet.get(classOf[TcpPacket])
            if (tcpPacket != null) {
                println(s"Source Port: ${tcpPacket.getHeader.getSrcPort}")
                println(s"Destination Port: ${tcpPacket.getHeader.getDstPort}")

                val payload = tcpPacket.getPayload
                if (payload != null) {
                    println("Payload (hex): " + payload.getRawData.map("%02X" format _).mkString(" "))
                } else {
                    println("No Payload in TCP packet")
                }
            } else {
                println("No TCP packet found in IPv4 packet")
            }
        } else if (ipV6Packet != null) {
            println("IPv6 packet detected.")
            println(s"IPv6 Source IP: ${ipV6Packet.getHeader.getSrcAddr}")
            println(s"IPv6 Destination IP: ${ipV6Packet.getHeader.getDstAddr}")
            
            val tcpPacket = ipV6Packet.get(classOf[TcpPacket])
            if (tcpPacket != null) {
                println(s"Source Port: ${tcpPacket.getHeader.getSrcPort}")
                println(s"Destination Port: ${tcpPacket.getHeader.getDstPort}")

                val payload = tcpPacket.getPayload
                if (payload != null) {
                    println("Payload (hex): " + payload.getRawData.map("%02X" format _).mkString(" "))
                } else {
                    println("No Payload in TCP packet")
                }
            } else {
                println("No TCP packet found in IPv6 packet")
            }
        } else {
            println("No IP packet found in captured packet")
        }
    }


    def capture_packets() : Unit = {

        val device: PcapNetworkInterface = try {
            new NifSelector().selectNetworkInterface()
        } catch {
            case e: IOException => e.printStackTrace(); null
        }

        if(device == null){
            println("No device selected.")
            return
        }

        println("Device Choosed : " + device)


        // public PcapHandle openLive​(int snaplen, PcapNetworkInterface.PromiscuousMode mode, int timeoutMillis) throws PcapNativeException
        
        // Parameters:
        //     snaplen - Snapshot length, which is the number of bytes captured for each packet.
        //     mode - mode
        //     timeoutMillis - Read timeout. Most OSs buffer packets. The OSs pass the packets to Pcap4j after the buffer gets full or the read timeout expires. Must be non-negative. May be ignored by some OSs. 0 means disable buffering on Solaris. 0 means infinite on the other OSs. 1 through 9 means infinite on Solaris.
        //     Returns:
        //     a new PcapHandle object.
        
        val snapshotLength : Int = 65536; // in bytes   
        val readTimeout : Int = 5000; // in milliseconds  
        val handle : PcapHandle = device.openLive(snapshotLength, PromiscuousMode.PROMISCUOUS, readTimeout)


        //  filter for HTTP/2 traffic (port 443 or 80 for HTTP traffic)
        val filter : String = ""
        handle.setFilter(filter, BpfProgram.BpfCompileMode.OPTIMIZE)

        try{
            while(true){

                // getNextPacketEx
                //     public PcapPacket getNextPacketEx() throws PcapNativeException, java.io.EOFException, java.util.concurrent.TimeoutException, NotOpenException
                //     Returns:
                //     a PcapPacket object that contains captured packet. Not null.
                //     Throws:
                //     PcapNativeException - if an error occurs in the pcap native library.
                //     java.io.EOFException - if packets are being read from a pcap file and there are no more packets to read from the file.
                //     java.util.concurrent.TimeoutException - if packets are being read from a live capture and the timeout expired.
                //     NotOpenException - if this PcapHandle is not open.


                try {
                    val packet: Packet = handle.getNextPacketEx
                    processPacket(packet)
                } 
                catch {
                    case e: TimeoutException =>
                        println("Packet capture timeout reached.")
                    case e: NotOpenException =>
                        println("Error: Pcap handle not open.")
                        throw e
                }
            }
        }
        catch{
            case e : PcapNativeException  => e.printStackTrace()
        } 
        finally{

            var stats : PcapStat = handle.getStats()

            println("Packets received: " + stats.getNumPacketsReceived());
            println("Packets dropped: " + stats.getNumPacketsDropped());
            println("Packets dropped by interface: " + stats.getNumPacketsDroppedByIf());
            handle.close()
        }

    }
}



