import axios from 'axios';

const API_BASE_URL = process.env.REACT_APP_API_BASE_URL || 'http://localhost:3001/api';

const api = axios.create({
  baseURL: API_BASE_URL,
  headers: {
    'Content-Type': 'application/json',
  },
});

export const threatService = {
  // Get all threats with optional filters
  getThreats: async (filters = {}) => {
    try {
      const response = await api.get('/threats', { params: filters });
      return response.data;
    } catch (error) {
      console.error('Error fetching threats:', error);
      throw error;
    }
  },

  // Get a specific threat by ID
  getThreatById: async (id) => {
    try {
      const response = await api.get(`/threats/${id}`);
      return response.data;
    } catch (error) {
      console.error('Error fetching threat details:', error);
      throw error;
    }
  },

  // Get threat statistics
  getStatistics: async (timeRange) => {
    try {
      const response = await api.get('/threats/statistics', { params: { timeRange } });
      return response.data;
    } catch (error) {
      console.error('Error fetching threat statistics:', error);
      throw error;
    }
  },

  // Update threat status
  updateThreatStatus: async (id, status) => {
    try {
      const response = await api.patch(`/threats/${id}`, { status });
      return response.data;
    } catch (error) {
      console.error('Error updating threat status:', error);
      throw error;
    }
  },
};

export const reportService = {
  // Get threat reports
  getReports: async (timeRange) => {
    try {
      const response = await api.get('/reports', { params: { timeRange } });
      return response.data;
    } catch (error) {
      console.error('Error fetching reports:', error);
      throw error;
    }
  },

  // Generate a custom report
  generateReport: async (params) => {
    try {
      const response = await api.post('/reports/generate', params);
      return response.data;
    } catch (error) {
      console.error('Error generating report:', error);
      throw error;
    }
  },
};

export default api;
