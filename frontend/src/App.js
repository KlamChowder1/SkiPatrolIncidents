import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import { AppBar, Toolbar, Typography, Button, Box } from '@mui/material';
import WelcomePage from './components/WelcomePage';
import AddIncidentForm from './components/AddIncidentForm';
import IncidentList from './components/IncidentList';
import IncidentCharts from './components/IncidentCharts';
import { SnackbarProvider } from './context/SnackbarContext';
import { IncidentProvider } from './context/IncidentContext';

function App() {
  return (
    <SnackbarProvider>
      <IncidentProvider>
        <Router>
          <AppBar position="static">
            <Toolbar>
              <Box sx={{ flexGrow: 1 }}>
                <Typography
                  variant="h6"
                  component={Link}
                  to="/home"
                  style={{ textDecoration: 'none', color: 'inherit' }}
                >
                  Ski Patrol Incident Reports
                </Typography>
              </Box>
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
              <Route path="/home" element={<WelcomePage />} />
              <Route path="/add-incident" element={<AddIncidentForm />} />
              <Route path="/incidents" element={<IncidentList />} />
              <Route path="/charts" element={<IncidentCharts />} />
            </Routes>
          </Box>
        </Router>
      </IncidentProvider>
    </SnackbarProvider>
  );
}

export default App;
