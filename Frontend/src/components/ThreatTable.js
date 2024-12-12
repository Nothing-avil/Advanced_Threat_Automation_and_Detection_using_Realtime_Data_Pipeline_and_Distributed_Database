import React from 'react';
import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
  Chip,
  IconButton,
} from '@mui/material';
import { Info as InfoIcon } from '@mui/icons-material';
import { useNavigate } from 'react-router-dom';

const getSeverityColor = (severity) => {
  switch (severity.toLowerCase()) {
    case 'high':
      return 'error';
    case 'medium':
      return 'warning';
    case 'low':
      return 'info';
    default:
      return 'default';
  }
};

function ThreatTable({ threats = [] }) {
  const navigate = useNavigate();

  return (
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 650 }} aria-label="threat detection table">
        <TableHead>
          <TableRow>
            <TableCell>Timestamp</TableCell>
            <TableCell>Type</TableCell>
            <TableCell>Source</TableCell>
            <TableCell>Severity</TableCell>
            <TableCell>Status</TableCell>
            <TableCell align="right">Actions</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {threats.map((threat) => (
            <TableRow
              key={threat.id}
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
              <TableCell component="th" scope="row">
                {new Date(threat.timestamp).toLocaleString()}
              </TableCell>
              <TableCell>{threat.type}</TableCell>
              <TableCell>{threat.source}</TableCell>
              <TableCell>
                <Chip
                  label={threat.severity}
                  color={getSeverityColor(threat.severity)}
                  size="small"
                />
              </TableCell>
              <TableCell>
                <Chip
                  label={threat.status}
                  color={threat.status === 'Active' ? 'error' : 'success'}
                  size="small"
                />
              </TableCell>
              <TableCell align="right">
                <IconButton
                  size="small"
                  onClick={() => navigate(`/threats/${threat.id}`)}
                >
                  <InfoIcon />
                </IconButton>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}

export default ThreatTable;
