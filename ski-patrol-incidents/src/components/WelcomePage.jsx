import React from 'react';
import { Box, Typography, Container, Grid } from '@mui/material';
import cypressMap1 from '../assets/cypressMap1.png';
import cypressMap2 from '../assets/cypressMap2.png';

export default function WelcomePage() {
  return (
    <Container>
      <Box sx={{ boxShadow: 2, textAlign: 'center', p: 2, borderRadius: 2 }}>
        <Typography variant="h2" gutterBottom>
          Welcome to Cypress Mountain Ski Patrol Incident Database
        </Typography>
        <Typography variant="h3" gutterBottom>
          Happy patrolling!
        </Typography>
        <Grid container spacing={2} justifyContent="center">
          <Grid item xs={12} sm={6}>
            {/* images from https://cypressmountain.com/Documents/Cypress/Trail%20Map%20PDFs/2023.24/Downhill%20Map%20WEB-a_13315.pdf */}
            <img
              src={cypressMap1}
              alt="Cypress Mountain Map 1"
              style={{ width: '100%', borderRadius: '8px' }}
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <img
              src={cypressMap2}
              alt="Cypress Mountain Map 2"
              style={{ width: '100%', borderRadius: '8px' }}
            />
          </Grid>
        </Grid>
      </Box>
    </Container>
  );
}
