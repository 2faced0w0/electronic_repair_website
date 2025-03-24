import React from 'react';
import NavBar from './components/NavBar';
import './App.css';

function App() {
  const services = [
    { id: 1, name: 'Phone Repair', description: 'Screen replacement, battery service, and more' },
    { id: 2, name: 'Laptop Repair', description: 'Hardware upgrades, software issues, screen repairs' },
    { id: 3, name: 'Tablet Repair', description: 'Screen fixes, charging problems, battery replacement' },
    { id: 4, name: 'Gaming Console Repair', description: 'Hardware fixes, maintenance, and upgrades' }
  ];

  return (
    <div className="app">
      <header className="header">
        <NavBar />
      </header>

      <main>
        <section className="hero">
          <h1>Expert Electronics Repair Service</h1>
          <p>Fast, reliable repairs for your valuable devices</p>
          <button className="cta-btn">Book Now</button>
        </section>

        <section id="services" className="services">
          <h2>Our Services</h2>
          <div className="services-grid">
            {services.map(service => (
              <div key={service.id} className="service-card">
                <h3>{service.name}</h3>
                <p>{service.description}</p>
                <button className="service-btn">Learn More</button>
              </div>
            ))}
          </div>
        </section>

        <section id="why-us" className="why-us">
          <h2>Why Choose Us?</h2>
          <div className="features">
            <div className="feature">
              <h3>Expert Technicians</h3>
              <p>Certified professionals with years of experience</p>
            </div>
            <div className="feature">
              <h3>Quick Turnaround</h3>
              <p>Most repairs completed within 24-48 hours</p>
            </div>
            <div className="feature">
              <h3>Warranty</h3>
              <p>90-day warranty on all repairs</p>
            </div>
          </div>
        </section>
      </main>

      <footer className="footer">
        <div className="footer-content">
          <div className="footer-section">
            <h3>Contact Us</h3>
            <p>Email: support@electrofix.com</p>
            <p>Phone: (555) 123-4567</p>
          </div>
          <div className="footer-section">
            <h3>Hours</h3>
            <p>Mon-Fri: 9am - 6pm</p>
            <p>Sat: 10am - 4pm</p>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;