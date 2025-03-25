import React from 'react';
import NavBar from './components/NavBar';
import HeroSection from './components/herosection';
import './App.css';

function App() {
  const services = [
    { id: 1, name: 'Phone Repair', description: 'Screen replacement, battery service, and more' },
    { id: 2, name: 'Laptop Repair', description: 'Hardware upgrades, software issues, screen repairs' },
    { id: 3, name: 'Tablet Repair', description: 'Screen fixes, charging problems, battery replacement' },
    { id: 4, name: 'Gaming Console Repair', description: 'Hardware fixes, maintenance, and upgrades' }
  ];

  return (
    <div className="min-h-screen bg-white text-black">
      <header className="bg-gray-100 p-4">
        <NavBar />
      </header>

      <main className="p-8">
        <HeroSection />

        <section id="services" className="mb-12">
          <h2 className="text-3xl font-bold mb-6">Our Services</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {services.map(service => (
              <div key={service.id} className="bg-gray-100 p-6 rounded shadow">
                <h3 className="text-xl font-semibold mb-2">{service.name}</h3>
                <p className="mb-4">{service.description}</p>
                <button className="bg-black text-white px-4 py-2 rounded">Learn More</button>
              </div>
            ))}
          </div>
        </section>

        <section id="why-us" className="mb-12">
          <h2 className="text-3xl font-bold mb-6">Why Choose Us?</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-gray-100 p-6 rounded shadow">
              <h3 className="text-xl font-semibold mb-2">Expert Technicians</h3>
              <p>Certified professionals with years of experience</p>
            </div>
            <div className="bg-gray-100 p-6 rounded shadow">
              <h3 className="text-xl font-semibold mb-2">Quick Turnaround</h3>
              <p>Most repairs completed within 24-48 hours</p>
            </div>
            <div className="bg-gray-100 p-6 rounded shadow">
              <h3 className="text-xl font-semibold mb-2">Warranty</h3>
              <p>90-day warranty on all repairs</p>
            </div>
          </div>
        </section>
      </main>

      <footer className="bg-gray-100 p-8">
        <div className="flex flex-col md:flex-row justify-between">
          <div className="mb-6 md:mb-0">
            <h3 className="text-xl font-semibold mb-2">Contact Us</h3>
            <p>Email: support@electrofix.com</p>
            <p>Phone: (555) 123-4567</p>
          </div>
          <div>
            <h3 className="text-xl font-semibold mb-2">Hours</h3>
            <p>Mon-Fri: 9am - 6pm</p>
            <p>Sat: 10am - 4pm</p>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;