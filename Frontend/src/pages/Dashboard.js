import React, { useState } from 'react';
import { Grid, Paper, Typography, Box, Card, CardContent, IconButton, Tooltip } from '@mui/material';
import { Chart as ChartJS, ArcElement, Tooltip as ChartTooltip, Legend, CategoryScale, LinearScale, PointElement, LineElement } from 'chart.js';
import { Pie, Line } from 'react-chartjs-2';
import ThreatTable from '../components/ThreatTable.js';
import WarningIcon from '@mui/icons-material/Warning';
import SecurityIcon from '@mui/icons-material/Security';
import NetworkCheckIcon from '@mui/icons-material/NetworkCheck';
import RefreshIcon from '@mui/icons-material/Refresh';
import '../styles/Dashboard.css';

ChartJS.register(
  ArcElement,
  ChartTooltip,
  Legend,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement
);

// Sample data - replace with actual API data in production
const sampleThreats = [
  {
    id: 1,
    timestamp: new Date().toISOString(),
    type: 'Malware Detection',
    source: '192.168.1.100',
    severity: 'High',
    status: 'Active',
  },
  {
    id: 2,
    timestamp: new Date().toISOString(),
    type: 'Suspicious Login',
    source: '192.168.1.105',
    severity: 'Medium',
    status: 'Resolved',
  },
];

const severityData = {
  labels: ['High', 'Medium', 'Low'],
  datasets: [{
    data: [4, 6, 2],
    backgroundColor: ['#ff4d4f', '#faad14', '#52c41a'],
    borderWidth: 0,
  }],
};

const timelineData = {
  labels: Array.from({ length: 24 }, (_, i) => `${i}:00`),
  datasets: [{
    label: 'Threats Detected',
    data: Array.from({ length: 24 }, () => Math.floor(Math.random() * 10)),
    borderColor: '#1890ff',
    backgroundColor: 'rgba(24, 144, 255, 0.1)',
    tension: 0.4,
    fill: true,
  }],
};

function Dashboard() {
  const [threats] = useState(sampleThreats);

  const stats = {
    activeThreats: 12,
    criticalAlerts: 3,
    systemsMonitored: 156,
    networkStatus: 'Healthy'
  };

  return (
    <Box className="dashboard-container">
      <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', mb: 3 }}>
        <Typography variant="h4" className="dashboard-title">
          Security Dashboard
        </Typography>
        <Tooltip title="Refresh Data">
          <IconButton>
            <RefreshIcon />
          </IconButton>
        </Tooltip>
      </Box>

      {/* Stats Cards */}
      <Grid container spacing={3} sx={{ mb: 4 }}>
        <Grid item xs={12} sm={6} md={3}>
          <Card className="stat-card active-threats">
            <CardContent>
              <Box sx={{ display: 'flex', alignItems: 'center', mb: 2 }}>
                <WarningIcon sx={{ fontSize: 40, color: '#ff4d4f' }} />
                <Box sx={{ ml: 2 }}>
                  <Typography variant="h4" className="stat-value">
                    {stats.activeThreats}
                  </Typography>
                  <Typography variant="body2" className="stat-label">
                    Active Threats
                  </Typography>
                </Box>
              </Box>
            </CardContent>
          </Card>
        </Grid>
        <Grid item xs={12} sm={6} md={3}>
          <Card className="stat-card critical-alerts">
            <CardContent>
              <Box sx={{ display: 'flex', alignItems: 'center', mb: 2 }}>
                <SecurityIcon sx={{ fontSize: 40, color: '#faad14' }} />
                <Box sx={{ ml: 2 }}>
                  <Typography variant="h4" className="stat-value">
                    {stats.criticalAlerts}
                  </Typography>
                  <Typography variant="body2" className="stat-label">
                    Critical Alerts
                  </Typography>
                </Box>
              </Box>
            </CardContent>
          </Card>
        </Grid>
        <Grid item xs={12} sm={6} md={3}>
          <Card className="stat-card systems-monitored">
            <CardContent>
              <Box sx={{ display: 'flex', alignItems: 'center', mb: 2 }}>
                <NetworkCheckIcon sx={{ fontSize: 40, color: '#52c41a' }} />
                <Box sx={{ ml: 2 }}>
                  <Typography variant="h4" className="stat-value">
                    {stats.systemsMonitored}
                  </Typography>
                  <Typography variant="body2" className="stat-label">
                    Systems Monitored
                  </Typography>
                </Box>
              </Box>
            </CardContent>
          </Card>
        </Grid>
        <Grid item xs={12} sm={6} md={3}>
          <Card className="stat-card network-status">
            <CardContent>
              <Box sx={{ display: 'flex', alignItems: 'center', mb: 2 }}>
                <NetworkCheckIcon sx={{ fontSize: 40, color: '#1890ff' }} />
                <Box sx={{ ml: 2 }}>
                  <Typography variant="h4" className="stat-value">
                    {stats.networkStatus}
                  </Typography>
                  <Typography variant="body2" className="stat-label">
                    Network Status
                  </Typography>
                </Box>
              </Box>
            </CardContent>
          </Card>
        </Grid>
      </Grid>

      <Grid container spacing={3}>
        {/* Threat Timeline */}
        <Grid item xs={12} md={8}>
          <Paper className="chart-card">
            <Box sx={{ p: 3 }}>
              <Typography variant="h6" className="chart-title">
                Threat Activity Timeline
              </Typography>
              <Box sx={{ height: 300 }}>
                <Line 
                  data={timelineData}
                  options={{
                    responsive: true,
                    maintainAspectRatio: false,
                    plugins: {
                      legend: {
                        display: false
                      }
                    },
                    scales: {
                      y: {
                        beginAtZero: true,
                        grid: {
                          color: 'rgba(255, 255, 255, 0.1)'
                        }
                      },
                      x: {
                        grid: {
                          color: 'rgba(255, 255, 255, 0.1)'
                        }
                      }
                    }
                  }}
                />
              </Box>
            </Box>
          </Paper>
        </Grid>

        {/* Severity Distribution */}
        <Grid item xs={12} md={4}>
          <Paper className="chart-card">
            <Box sx={{ p: 3 }}>
              <Typography variant="h6" className="chart-title">
                Threat Severity Distribution
              </Typography>
              <Box sx={{ height: 300, display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                <Pie 
                  data={severityData}
                  options={{
                    responsive: true,
                    maintainAspectRatio: false,
                    plugins: {
                      legend: {
                        position: 'bottom',
                        labels: {
                          padding: 20,
                          color: '#fff'
                        }
                      }
                    }
                  }}
                />
              </Box>
            </Box>
          </Paper>
        </Grid>

        {/* Recent Threats Table */}
        <Grid item xs={12}>
          <Paper className="threat-table-container" sx={{ p: 3 }}>
            <Typography variant="h6" className="section-title" gutterBottom>
              Recent Threats
            </Typography>
            <ThreatTable threats={threats} />
          </Paper>
        </Grid>
      </Grid>
    </Box>
  );
}

export default Dashboard;
