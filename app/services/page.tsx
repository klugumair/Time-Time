'use client';

import { useState } from 'react';
import { Calendar, Phone, Mail, User, Watch, AlertCircle } from 'lucide-react';

const SERVICES = [
  {
    id: 1,
    icon: '🔧',
    name: 'Watch Servicing & Overhaul',
    description: 'Complete mechanical and electronic watch servicing with precision tools and expert technicians.',
    price: 5000,
    days: '7-10',
  },
  {
    id: 2,
    icon: '🔋',
    name: 'Battery Replacement',
    description: 'Quick and reliable battery replacement for all watch types with quality assurance testing.',
    price: 1500,
    days: '1-2',
  },
  {
    id: 3,
    icon: '⌚',
    name: 'Strap & Bracelet Change',
    description: 'Professional strap and bracelet replacement with authentic materials and proper fitting.',
    price: 3000,
    days: '1-2',
  },
  {
    id: 4,
    icon: '💎',
    name: 'Crystal/Glass Replacement',
    description: 'Scratch-resistant crystal and glass replacement for all watch models with precision.',
    price: 4000,
    days: '3-4',
  },
  {
    id: 5,
    icon: '💧',
    name: 'Water Resistance Testing',
    description: 'Professional water resistance testing to ensure your watch meets specifications.',
    price: 2000,
    days: '1-2',
  },
  {
    id: 6,
    icon: '✨',
    name: 'Watch Polishing & Restoration',
    description: 'Expert polishing and restoration to bring your watch back to its original shine.',
    price: 3500,
    days: '2-3',
  },
];

export default function ServicesPage() {
  const [formData, setFormData] = useState({
    fullName: '',
    phone: '',
    email: '',
    brandModel: '',
    watchDescription: '',
    serviceType: '',
    dropoffDate: '',
    issueDescription: '',
  });

  const [submitted, setSubmitted] = useState(false);

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    setFormData({
      fullName: '',
      phone: '',
      email: '',
      brandModel: '',
      watchDescription: '',
      serviceType: '',
      dropoffDate: '',
      issueDescription: '',
    });
    setTimeout(() => setSubmitted(false), 3000);
  };

  return (
    <div className="bg-[#0A0A0A] text-[#F5F0E8]">
      {/* HERO SECTION */}
      <section className="h-[50vh] bg-gradient-to-r from-[#0A0A0A] to-[#1E1E1E] border-b border-[rgba(201,168,76,0.2)] flex items-center justify-center px-6">
        <div className="text-center max-w-3xl">
          <h1
            className="text-5xl md:text-6xl font-light mb-4 text-[#F5F0E8]"
            style={{ fontFamily: 'Cormorant Garamond' }}
          >
            Expert Watch Care
          </h1>
          <p
            className="text-lg md:text-xl text-[#C9A84C]"
            style={{ fontFamily: 'DM Sans' }}
          >
            Trusted by watch enthusiasts across Rawalpindi
          </p>
        </div>
      </section>

      {/* SERVICES GRID */}
      <section className="py-20 px-6 sm:px-12 md:px-20">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {SERVICES.map((service) => (
              <div
                key={service.id}
                className="bg-[#141414] p-8 rounded-sm border border-[rgba(201,168,76,0.15)] transition-all duration-300 hover:border-[#C9A84C] hover:shadow-lg hover:shadow-[rgba(201,168,76,0.2)] group flex flex-col"
              >
                <div className="text-5xl mb-4">{service.icon}</div>
                
                <h3
                  className="text-xl font-medium text-[#C9A84C] mb-3"
                  style={{ fontFamily: 'Cinzel' }}
                >
                  {service.name}
                </h3>
                
                <p
                  className="text-sm text-[rgba(245,240,232,0.65)] mb-6 flex-grow"
                  style={{ fontFamily: 'DM Sans' }}
                >
                  {service.description}
                </p>
                
                <div className="flex items-center justify-between mb-4 pt-6 border-t border-[rgba(201,168,76,0.1)]">
                  <span
                    className="text-lg font-semibold text-[#E8C96A]"
                    style={{ fontFamily: 'DM Sans' }}
                  >
                    From PKR {service.price.toLocaleString()}
                  </span>
                  <span
                    className="text-xs px-3 py-1 rounded-full bg-[#0D0D0D] text-[#C9A84C] border border-[rgba(201,168,76,0.3)]"
                    style={{ fontFamily: 'DM Sans' }}
                  >
                    {service.days} Days
                  </span>
                </div>
                
                <button
                  style={{
                    fontFamily: 'DM Sans',
                    background: 'linear-gradient(135deg, #8B6914 0%, #C9A84C 100%)',
                    color: '#0A0A0A',
                  }}
                  className="w-full py-2 rounded-sm font-medium transition-all duration-300 hover:shadow-lg"
                >
                  Book Now
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* BOOKING FORM SECTION */}
      <section className="py-20 px-6 sm:px-12 md:px-20 bg-[#0D0D0D]">
        <div className="max-w-4xl mx-auto">
          <h2
            className="text-4xl md:text-5xl font-light text-center mb-12 text-[#F5F0E8]"
            style={{ fontFamily: 'Cinzel' }}
          >
            Book a Service
          </h2>

          {submitted && (
            <div className="mb-8 p-4 rounded-sm bg-[#1E1E1E] border border-[#E8C96A] text-[#E8C96A] text-center" style={{ fontFamily: 'DM Sans' }}>
              ✓ Booking request submitted! We'll contact you shortly.
            </div>
          )}

          <form
            onSubmit={handleSubmit}
            className="bg-[#141414] p-8 md:p-12 rounded-sm border border-[#C9A84C]"
          >
            {/* Customer Information */}
            <div className="mb-10">
              <h3
                className="text-lg font-medium text-[#C9A84C] mb-6"
                style={{ fontFamily: 'Cinzel' }}
              >
                Customer Information
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label
                    className="block text-xs uppercase tracking-widest text-[#C9A84C] mb-2"
                    style={{ fontFamily: 'DM Sans' }}
                  >
                    Full Name *
                  </label>
                  <input
                    type="text"
                    name="fullName"
                    value={formData.fullName}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 rounded-sm bg-[#0D0D0D] border border-[rgba(201,168,76,0.2)] text-[#F5F0E8] focus:border-[#C9A84C] focus:outline-none transition-colors"
                    style={{ fontFamily: 'DM Sans' }}
                    placeholder="John Doe"
                  />
                </div>

                <div>
                  <label
                    className="block text-xs uppercase tracking-widest text-[#C9A84C] mb-2"
                    style={{ fontFamily: 'DM Sans' }}
                  >
                    Phone *
                  </label>
                  <input
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 rounded-sm bg-[#0D0D0D] border border-[rgba(201,168,76,0.2)] text-[#F5F0E8] focus:border-[#C9A84C] focus:outline-none transition-colors"
                    style={{ fontFamily: 'DM Sans' }}
                    placeholder="+92 300 1234567"
                  />
                </div>

                <div>
                  <label
                    className="block text-xs uppercase tracking-widest text-[#C9A84C] mb-2"
                    style={{ fontFamily: 'DM Sans' }}
                  >
                    Email *
                  </label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 rounded-sm bg-[#0D0D0D] border border-[rgba(201,168,76,0.2)] text-[#F5F0E8] focus:border-[#C9A84C] focus:outline-none transition-colors"
                    style={{ fontFamily: 'DM Sans' }}
                    placeholder="john@example.com"
                  />
                </div>
              </div>
            </div>

            {/* Watch Details */}
            <div className="mb-10">
              <h3
                className="text-lg font-medium text-[#C9A84C] mb-6"
                style={{ fontFamily: 'Cinzel' }}
              >
                Watch Details
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                <div>
                  <label
                    className="block text-xs uppercase tracking-widest text-[#C9A84C] mb-2"
                    style={{ fontFamily: 'DM Sans' }}
                  >
                    Brand & Model *
                  </label>
                  <input
                    type="text"
                    name="brandModel"
                    value={formData.brandModel}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 rounded-sm bg-[#0D0D0D] border border-[rgba(201,168,76,0.2)] text-[#F5F0E8] focus:border-[#C9A84C] focus:outline-none transition-colors"
                    style={{ fontFamily: 'DM Sans' }}
                    placeholder="Rolex Submariner"
                  />
                </div>

                <div>
                  <label
                    className="block text-xs uppercase tracking-widest text-[#C9A84C] mb-2"
                    style={{ fontFamily: 'DM Sans' }}
                  >
                    Service Type *
                  </label>
                  <select
                    name="serviceType"
                    value={formData.serviceType}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 rounded-sm bg-[#0D0D0D] border border-[rgba(201,168,76,0.2)] text-[#F5F0E8] focus:border-[#C9A84C] focus:outline-none transition-colors appearance-none"
                    style={{ fontFamily: 'DM Sans' }}
                  >
                    <option value="">Select a service...</option>
                    {SERVICES.map((service) => (
                      <option key={service.id} value={service.name}>
                        {service.name}
                      </option>
                    ))}
                  </select>
                </div>
              </div>

              <div>
                <label
                  className="block text-xs uppercase tracking-widest text-[#C9A84C] mb-2"
                  style={{ fontFamily: 'DM Sans' }}
                >
                  Watch Description
                </label>
                <textarea
                  name="watchDescription"
                  value={formData.watchDescription}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 rounded-sm bg-[#0D0D0D] border border-[rgba(201,168,76,0.2)] text-[#F5F0E8] focus:border-[#C9A84C] focus:outline-none transition-colors resize-none"
                  style={{ fontFamily: 'DM Sans' }}
                  rows={3}
                  placeholder="Describe your watch condition, color, material, etc."
                />
              </div>
            </div>

            {/* Service Details */}
            <div className="mb-10">
              <h3
                className="text-lg font-medium text-[#C9A84C] mb-6"
                style={{ fontFamily: 'Cinzel' }}
              >
                Service Details
              </h3>
              <div>
                <label
                  className="block text-xs uppercase tracking-widest text-[#C9A84C] mb-2"
                  style={{ fontFamily: 'DM Sans' }}
                >
                  Preferred Drop-off Date *
                </label>
                <input
                  type="date"
                  name="dropoffDate"
                  value={formData.dropoffDate}
                  onChange={handleInputChange}
                  required
                  className="w-full px-4 py-3 rounded-sm bg-[#0D0D0D] border border-[rgba(201,168,76,0.2)] text-[#F5F0E8] focus:border-[#C9A84C] focus:outline-none transition-colors"
                  style={{ fontFamily: 'DM Sans' }}
                />
              </div>

              <div className="mt-6">
                <label
                  className="block text-xs uppercase tracking-widest text-[#C9A84C] mb-2"
                  style={{ fontFamily: 'DM Sans' }}
                >
                  Describe the Problem *
                </label>
                <textarea
                  name="issueDescription"
                  value={formData.issueDescription}
                  onChange={handleInputChange}
                  required
                  className="w-full px-4 py-3 rounded-sm bg-[#0D0D0D] border border-[rgba(201,168,76,0.2)] text-[#F5F0E8] focus:border-[#C9A84C] focus:outline-none transition-colors resize-none"
                  style={{ fontFamily: 'DM Sans' }}
                  rows={4}
                  placeholder="What issues is your watch experiencing?"
                />
              </div>
            </div>

            <button
              type="submit"
              style={{
                fontFamily: 'DM Sans',
                background: 'linear-gradient(135deg, #8B6914 0%, #C9A84C 100%)',
                color: '#0A0A0A',
              }}
              className="w-full py-3 rounded-sm font-medium transition-all duration-300 hover:shadow-lg text-base"
            >
              Submit Booking Request
            </button>
          </form>
        </div>
      </section>
    </div>
  );
}
