import React from 'react';
import { useParams } from 'react-router-dom';
import {
  Box,
  Typography,
  Grid,
  Card,
  CardContent,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
  Chip,
  IconButton,
  Tooltip,
} from '@mui/material';
import {
  Security as SecurityIcon,
  Warning as WarningIcon,
  Block as BlockIcon,
  Visibility as VisibilityIcon,
} from '@mui/icons-material';

function ThreatDetails() {
  const { id } = useParams();

  // Sample threat data
  const threats = [
    {
      id: 1,
      type: 'Malware',
      source: '192.168.1.100',
      timestamp: '2023-12-12 14:30:00',
      severity: 'High',
      status: 'Active',
      description: 'Suspicious file activity detected',
    },
    {
      id: 2,
      type: 'Brute Force',
      source: '10.0.0.50',
      timestamp: '2023-12-12 13:45:00',
      severity: 'Medium',
      status: 'Blocked',
      description: 'Multiple failed login attempts',
    },
    {
      id: 3,
      type: 'SQL Injection',
      source: '172.16.0.25',
      timestamp: '2023-12-12 12:15:00',
      severity: 'Critical',
      status: 'Active',
      description: 'Malicious SQL query detected',
    },
  ];

  const getSeverityColor = (severity) => {
    switch (severity.toLowerCase()) {
      case 'critical':
        return 'error';
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

  const getStatusColor = (status) => {
    switch (status.toLowerCase()) {
      case 'active':
        return 'error';
      case 'blocked':
        return 'success';
      case 'resolved':
        return 'info';
      default:
        return 'default';
    }
  };

  // If no specific threat ID is provided, show the threats list
  if (!id) {
    return (
      <Box sx={{ p: 3 }}>
        <Typography variant="h4" gutterBottom sx={{ mb: 4 }}>
          Active Threats
        </Typography>

        <TableContainer component={Paper} sx={{ backgroundColor: 'background.paper' }}>
          <Table>
            <TableHead>
              <TableRow>
                <TableCell>Type</TableCell>
                <TableCell>Source</TableCell>
                <TableCell>Timestamp</TableCell>
                <TableCell>Severity</TableCell>
                <TableCell>Status</TableCell>
                <TableCell>Actions</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {threats.map((threat) => (
                <TableRow key={threat.id} hover>
                  <TableCell>{threat.type}</TableCell>
                  <TableCell>{threat.source}</TableCell>
                  <TableCell>{threat.timestamp}</TableCell>
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
                      color={getStatusColor(threat.status)}
                      size="small"
                    />
                  </TableCell>
                  <TableCell>
                    <Tooltip title="View Details">
                      <IconButton size="small" color="primary">
                        <VisibilityIcon />
                      </IconButton>
                    </Tooltip>
                    <Tooltip title="Block">
                      <IconButton size="small" color="error">
                        <BlockIcon />
                      </IconButton>
                    </Tooltip>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      </Box>
    );
  }

  // Find the specific threat
  const threat = threats.find(t => t.id === parseInt(id)) || threats[0];

  // Show detailed view for a specific threat
  return (
    <Box sx={{ p: 3 }}>
      <Typography variant="h4" gutterBottom>
        Threat Details
      </Typography>

      <Grid container spacing={3}>
        <Grid item xs={12} md={8}>
          <Card>
            <CardContent>
              <Box sx={{ display: 'flex', alignItems: 'center', mb: 2 }}>
                <SecurityIcon sx={{ mr: 1 }} />
                <Typography variant="h6">
                  {threat.type}
                </Typography>
              </Box>
              
              <Typography variant="body1" paragraph>
                {threat.description}
              </Typography>

              <Grid container spacing={2}>
                <Grid item xs={6}>
                  <Typography variant="subtitle2" color="text.secondary">
                    Source IP
                  </Typography>
                  <Typography variant="body1">
                    {threat.source}
                  </Typography>
                </Grid>
                <Grid item xs={6}>
                  <Typography variant="subtitle2" color="text.secondary">
                    Timestamp
                  </Typography>
                  <Typography variant="body1">
                    {threat.timestamp}
                  </Typography>
                </Grid>
                <Grid item xs={6}>
                  <Typography variant="subtitle2" color="text.secondary">
                    Severity
                  </Typography>
                  <Chip
                    label={threat.severity}
                    color={getSeverityColor(threat.severity)}
                    size="small"
                  />
                </Grid>
                <Grid item xs={6}>
                  <Typography variant="subtitle2" color="text.secondary">
                    Status
                  </Typography>
                  <Chip
                    label={threat.status}
                    color={getStatusColor(threat.status)}
                    size="small"
                  />
                </Grid>
              </Grid>
            </CardContent>
          </Card>
        </Grid>

        <Grid item xs={12} md={4}>
          <Card>
            <CardContent>
              <Typography variant="h6" gutterBottom>
                Recommended Actions
              </Typography>
              <Box sx={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
                <Chip
                  icon={<BlockIcon />}
                  label="Block Source IP"
                  color="error"
                  variant="outlined"
                  onClick={() => {}}
                />
                <Chip
                  icon={<WarningIcon />}
                  label="Escalate to SOC"
                  color="warning"
                  variant="outlined"
                  onClick={() => {}}
                />
              </Box>
            </CardContent>
          </Card>
        </Grid>
      </Grid>
    </Box>
  );
}

export default ThreatDetails;
