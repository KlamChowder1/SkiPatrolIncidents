import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import { AppBar, Toolbar, Typography, Button, Box } from '@mui/material';
import AddIncidentForm from './components/AddIncidentForm';

function App() {
  return (
    <Router>
      <AppBar position="static">
        <Toolbar>
          <Typography variant="h6" sx={{ flexGrow: 1 }}>
            Ski Patrol Incident Reports
          </Typography>
          <Box sx={{ display: { xs: 'none', md: 'flex' } }}>
            <Button color="inherit" component={Link} to="/add-incident">
              Add Incident
            </Button>
            <Button color="inherit" component={Link} to="/incidents">
              All Incidents
            </Button>
            <Button color="inherit" component={Link} to="/charts">
              Charts
            </Button>
          </Box>
        </Toolbar>
      </AppBar>

      <Box sx={{ mt: 2 }}>
        <Routes>
          <Route path="/add-incident" element={<AddIncidentForm />} />
        </Routes>
      </Box>
    </Router>
  );
}

export default App;
