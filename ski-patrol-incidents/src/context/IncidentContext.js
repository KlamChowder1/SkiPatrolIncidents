import React, { createContext, useState, useEffect } from 'react';

export const IncidentContext = createContext();

export const IncidentProvider = ({ children }) => {
  const [incidents, setIncidents] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const fetchIncidents = async () => {
    try {
      const response = await fetch('/api/incidents');
      if (!response.ok) throw new Error('Failed to fetch incidents');
      const json = await response.json();
      setIncidents(json);
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchIncidents();
  }, []);

  return (
    <IncidentContext.Provider
      value={{ fetchIncidents, incidents, loading, error }}
    >
      {children}
    </IncidentContext.Provider>
  );
};
