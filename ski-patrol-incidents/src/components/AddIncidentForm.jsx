import React, { useState } from 'react';
import {
  Container,
  TextField,
  Button,
  Typography,
  Box,
  Alert,
  Snackbar,
} from '@mui/material';

function AddIncidentForm() {
  const [formData, setFormData] = useState({
    date: '',
    type: '',
    location: '',
    description: '',
  });
  const [openSnackbar, setOpenSnackbar] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Incident Data: ', formData);
    setOpenSnackbar(true);
  };

  return (
    <Container maxWidth="md">
      <Box sx={{ mt: 5 }}>
        <Typography variant="h4" gutterBottom>
          Add Ski Incident
        </Typography>
        <form onSubmit={handleSubmit}>
          <TextField
            label="Date"
            type="date"
            name="date"
            value={formData.date || ''}
            onChange={handleChange}
            fullWidth
            InputLabelProps={{ shrink: true }}
            required
          />
          <TextField
            label="Type of Incident"
            name="type"
            value={formData.type}
            onChange={handleChange}
            fullWidth
            margin="normal"
            required
          />
          <TextField
            label="Location (Run/Area)"
            name="location"
            value={formData.location}
            onChange={handleChange}
            fullWidth
            margin="normal"
            required
          />
          <TextField
            label="Description"
            name="description"
            value={formData.description}
            onChange={handleChange}
            fullWidth
            margin="normal"
            multiline
            rows={4}
            required
          />
          <Button
            type="submit"
            variant="contained"
            color="primary"
            sx={{ mt: 2 }}
            fullWidth
          >
            Submit Incident
          </Button>
        </form>
      </Box>
      {/* TODO: make Snackbar in a share component?  */}
      <Snackbar
        open={openSnackbar}
        autoHideDuration={2000}
        onClose={() => setOpenSnackbar(false)}
        anchorOrigin={{ vertical: 'bottom', horizontal: 'center' }}
      >
        <Alert severity="success" sx={{ width: '100%' }}>
          Incident Submitted Successfully!
        </Alert>
      </Snackbar>
    </Container>
  );
}

export default AddIncidentForm;
