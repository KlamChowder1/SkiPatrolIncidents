import React, { useState } from 'react';
import {
  Container,
  TextField,
  Button,
  Typography,
  Box,
  MenuItem,
  FormControl,
} from '@mui/material';
import { useSnackbar } from '../hooks/useSnackbar';

export default function AddIncidentForm() {
  // TODO:check if I should camelCase or snake_case this
  const [formData, setFormData] = useState({
    datetime: '',
    type_of_incident: '',
    ski_run: {
      name: '',
      difficulty: '',
    },
    skier_age: '',
    description: '',
  });
  const { showSnackbar } = useSnackbar();

  const handleChange = (e) => {
    const { name, value } = e.target;

    // Handling nested ski_run field separately
    if (name === 'ski_run_name' || name === 'ski_run_difficulty') {
      setFormData({
        ...formData,
        ski_run: {
          ...formData.ski_run,
          [name === 'ski_run_name' ? 'name' : 'difficulty']: value,
        },
      });
    } else {
      setFormData({ ...formData, [name]: value });
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch('/api/incidents', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });
      if (response.ok) {
        console.log('POSTED OKAY');
        setFormData({
          datetime: '',
          type_of_incident: '',
          ski_run: {
            name: '',
            difficulty: '',
          },
          skier_age: '',
          description: '',
        });
        showSnackbar('Incident submitted successfully!', 'success');
      } else {
        showSnackbar('Failed to submit the incident!', 'error');
      }
    } catch (e) {
      showSnackbar('Failed to submit the incident!', 'error');
    }
  };

  const isFormValid = () => {
    return (
      formData.datetime &&
      formData.type_of_incident &&
      formData.ski_run.name &&
      formData.ski_run.difficulty &&
      formData.skier_age &&
      formData.description
    );
  };

  return (
    <Container maxWidth="md">
      <Box sx={{ mt: 5 }}>
        <Typography variant="h4" gutterBottom>
          Add Ski Incident
        </Typography>
        <form onSubmit={handleSubmit}>
          <FormControl fullWidth>
            <TextField
              label="Date"
              type="datetime-local"
              name="datetime"
              value={formData.datetime}
              onChange={handleChange}
              fullWidth
              InputLabelProps={{ shrink: true }}
              required
            />
            <TextField
              label="Type of Incident"
              name="type_of_incident"
              value={formData.type_of_incident}
              onChange={handleChange}
              fullWidth
              margin="normal"
              required
            />
            <TextField
              label="Location (Ski Run Name)"
              name="ski_run_name"
              value={formData.ski_run.name}
              onChange={handleChange}
              fullWidth
              margin="normal"
              required
            />
            <TextField
              label="Ski Run Difficulty"
              name="ski_run_difficulty"
              value={formData.ski_run.difficulty}
              onChange={handleChange}
              fullWidth
              margin="normal"
              required
              select
            >
              <MenuItem value="Green">Green</MenuItem>
              <MenuItem value="Blue">Blue</MenuItem>
              <MenuItem value="Black Diamond">Black Diamond</MenuItem>
            </TextField>
            <TextField
              label="Skier Age"
              name="skier_age"
              type="number"
              value={formData.skier_age}
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
              disabled={!isFormValid()}
            >
              Submit Incident
            </Button>
          </FormControl>
        </form>
      </Box>
    </Container>
  );
}
