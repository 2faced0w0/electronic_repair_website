import React, { useEffect, useState } from 'react';
import { getServices } from './api';

const Services = () => {
  const [services, setServices] = useState([]);
  const [error, setError] = useState('');

  useEffect(() => {
    const fetchServices = async () => {
      try {
        const response = await getServices();
        setServices(response.data);
      } catch (err) {
        setError(err.response?.data?.message || 'Failed to fetch services');
      }
    };

    fetchServices();
  }, []);

  return (
    <div>
      <h2>Services</h2>
      {error && <p>{error}</p>}
      <ul>
        {services.map((service) => (
          <li key={service._id}>{service.name} - ${service.price}</li>
        ))}
      </ul>
    </div>
  );
};

export default Services;