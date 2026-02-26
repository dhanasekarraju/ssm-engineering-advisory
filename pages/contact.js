import Head from 'next/head';
import Link from 'next/link';
import Image from 'next/image';
import { useState } from 'react';

export default function Contact() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [logoError, setLogoError] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: ''
  });

  const handleChange = (e) => {
    setFormData({...formData, [e.target.name]: e.target.value});
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert('Thank you for contacting us! We will get back to you soon.');
  };

  return (
      <>
        <Head>
          <title>Contact Us - SSM ENGINEERING & PROJECT ADVISORY</title>
          <meta name="description" content="Get in touch with SSM ENGINEERING for your project advisory needs." />
        </Head>

        {/* Navigation */}
        <nav className="bg-white shadow-lg sticky top-0 z-50">
          <div className="container-custom py-1 md:py-2">
            <div className="flex justify-between items-center">
              {/* Logo */}
              <Link href="/" className="flex items-center group">
                {!logoError ? (
                    <div className="relative h-14 md:h-16 lg:h-20 w-auto -my-1 md:-my-2">
                      <Image
                          src="/images/ssm-logo.png"
                          alt="SSM ENGINEERING"
                          width={0}
                          height={0}
                          sizes="(max-width: 768px) 140px, 180px"
                          style={{ width: 'auto', height: '100%' }}
                          priority
                          onError={() => setLogoError(true)}
                      />
                    </div>
                ) : (
                    <div className="flex flex-col">
            <span className="text-primary font-bold text-lg md:text-xl lg:text-2xl leading-tight">
              SSM ENGINEERING
            </span>
                      <span className="text-gray-600 text-xs md:text-sm">
              & PROJECT ADVISORY
            </span>
                    </div>
                )}
              </Link>

              {/* Desktop Menu */}
              <div className="hidden md:flex space-x-4 lg:space-x-6 items-center">
                <Link href="/" className="text-primary hover:text-accent transition font-medium">Home</Link>
                <Link href="/about" className="text-primary hover:text-accent transition font-medium">About</Link>
                <Link href="/services" className="text-primary hover:text-accent transition font-medium">Services</Link>
                <Link href="/team" className="text-primary hover:text-accent transition font-medium">Team</Link>
                <Link href="/projects" className="text-primary hover:text-accent transition font-medium">Projects</Link>
                <Link href="/detail-engineering" className="text-primary hover:text-accent transition font-medium">Detail Design</Link>
                <Link href="/contact" className="text-primary hover:text-accent transition font-medium">Contact</Link>
              </div>

              {/* Mobile Menu Button */}
              <button
                  className="md:hidden text-primary"
                  onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              >
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  {mobileMenuOpen ? (
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                  ) : (
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                  )}
                </svg>
              </button>
            </div>

            {/* Mobile Menu */}
            {mobileMenuOpen && (
                <div className="md:hidden mt-2 pb-2 space-y-2 bg-white rounded-lg shadow-xl p-3 border">
                  <Link href="/" className="block text-primary hover:text-accent transition py-1">Home</Link>
                  <Link href="/about" className="block text-primary hover:text-accent transition py-1">About</Link>
                  <Link href="/services" className="block text-primary hover:text-accent transition py-1">Services</Link>
                  <Link href="/team" className="block text-primary hover:text-accent transition py-1">Team</Link>
                  <Link href="/projects" className="block text-primary hover:text-accent transition py-1">Projects</Link>
                  <Link href="/detail-engineering" className="block text-primary hover:text-accent transition py-1">Detail Design</Link>
                  <Link href="/contact" className="block text-primary hover:text-accent transition py-1">Contact</Link>
                </div>
            )}
          </div>
        </nav>

        {/* Hero Section */}
        <section className="relative h-[400px] overflow-hidden">
          <div className="absolute inset-0">
            <Image
                src="https://images.unsplash.com/photo-1423666639041-f56000c27a9a?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&q=80"
                alt="Contact"
                fill
                className="object-cover"
                priority
            />
            <div className="absolute inset-0 bg-gradient-to-r from-primary/90 to-primary/70"></div>
          </div>
          <div className="relative container-custom h-full flex items-center">
            <div className="text-white max-w-3xl animate-fadeInLeft">
              <h1 className="text-5xl md:text-6xl font-bold mb-4">Contact Us</h1>
              <p className="text-xl text-accent">Let's Discuss Your Next Project</p>
            </div>
          </div>
        </section>

        {/* Contact Information */}
        <section className="py-20">
          <div className="container-custom">
            <div className="grid md:grid-cols-2 gap-12">
              <div className="animate-fadeInLeft">
                <span className="text-accent font-bold text-sm uppercase tracking-wider">Get In Touch</span>
                <h2 className="text-3xl md:text-4xl font-bold text-primary mt-2 mb-6">Let's Work Together</h2>
                <p className="text-gray-600 mb-8 text-lg">
                  Partner with us for insight-led execution, accountability, and excellence in end-to-end project delivery.
                </p>

                <div className="space-y-6">
                  <div className="flex items-start group hover:translate-x-2 transition-transform">
                    <div className="flex-shrink-0 w-12 h-12 bg-accent/10 rounded-lg flex items-center justify-center group-hover:bg-accent group-hover:text-primary transition-all">
                      <svg className="w-6 h-6 text-accent group-hover:text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                      </svg>
                    </div>
                    <div className="ml-4">
                      <h3 className="font-bold text-primary text-lg">Head Office</h3>
                      <p className="text-gray-600">123, Vellakal, Ayodhya Colony,</p>
                      <p className="text-gray-600">Velachery, Chennai - 600 042</p>
                    </div>
                  </div>

                  <div className="flex items-start group hover:translate-x-2 transition-transform">
                    <div className="flex-shrink-0 w-12 h-12 bg-accent/10 rounded-lg flex items-center justify-center group-hover:bg-accent group-hover:text-primary transition-all">
                      <svg className="w-6 h-6 text-accent group-hover:text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                      </svg>
                    </div>
                    <div className="ml-4">
                      <h3 className="font-bold text-primary text-lg">Email</h3>
                      <p className="text-gray-600">senthemzurugan@gmail.com</p>
                    </div>
                  </div>

                  <div className="flex items-start group hover:translate-x-2 transition-transform">
                    <div className="flex-shrink-0 w-12 h-12 bg-accent/10 rounded-lg flex items-center justify-center group-hover:bg-accent group-hover:text-primary transition-all">
                      <svg className="w-6 h-6 text-accent group-hover:text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                      </svg>
                    </div>
                    <div className="ml-4">
                      <h3 className="font-bold text-primary text-lg">Phone</h3>
                      <p className="text-gray-600">+91 97909 93232</p>
                    </div>
                  </div>

                  <div className="flex items-start group hover:translate-x-2 transition-transform">
                    <div className="flex-shrink-0 w-12 h-12 bg-accent/10 rounded-lg flex items-center justify-center group-hover:bg-accent group-hover:text-primary transition-all">
                      <svg className="w-6 h-6 text-accent group-hover:text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                      </svg>
                    </div>
                    <div className="ml-4">
                      <h3 className="font-bold text-primary text-lg">Register Office</h3>
                      <p className="text-gray-600">10R, 5th street, Bharathipuram,</p>
                      <p className="text-gray-600">Dharmapuri - 636 705</p>
                    </div>
                  </div>
                </div>

                <div className="mt-8 p-4 bg-gray-50 rounded-lg border-l-4 border-accent">
                  <h3 className="font-bold text-primary text-lg mb-2">GST Details</h3>
                  <p className="text-gray-600 font-mono">33ASGPG0886J2ZN</p>
                </div>
              </div>

              <div className="bg-white rounded-2xl shadow-xl p-8 animate-fadeInRight hover:shadow-2xl transition">
                <h3 className="text-2xl font-bold text-primary mb-6">Send Us a Message</h3>
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div>
                    <label className="block text-gray-700 font-medium mb-2">Your Name *</label>
                    <input
                        type="text"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-accent focus:border-transparent transition"
                        placeholder="Enter your name"
                    />
                  </div>
                  <div>
                    <label className="block text-gray-700 font-medium mb-2">Email Address *</label>
                    <input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-accent focus:border-transparent transition"
                        placeholder="Enter your email"
                    />
                  </div>
                  <div>
                    <label className="block text-gray-700 font-medium mb-2">Phone Number</label>
                    <input
                        type="tel"
                        name="phone"
                        value={formData.phone}
                        onChange={handleChange}
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-accent focus:border-transparent transition"
                        placeholder="Enter your phone number"
                    />
                  </div>
                  <div>
                    <label className="block text-gray-700 font-medium mb-2">Your Message *</label>
                    <textarea
                        name="message"
                        value={formData.message}
                        onChange={handleChange}
                        required
                        rows="5"
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-accent focus:border-transparent transition"
                        placeholder="Tell us about your project..."
                    ></textarea>
                  </div>
                  <button
                      type="submit"
                      className="w-full btn-primary text-center py-4 text-lg animate-pulse-glow"
                  >
                    Send Message
                  </button>
                </form>
              </div>
            </div>
          </div>
        </section>

        {/* Map Section */}
        <section className="h-[450px] relative">
          <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3887.977645613989!2d80.218757!3d12.978999!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a525d7f3a8b7c9d%3A0x8b5e5d5c5a5b5a5b!2sVelachery%2C%20Chennai%2C%20Tamil%20Nadu!5e0!3m2!1sen!2sin!4v1620000000000!5m2!1sen!2sin"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              className="grayscale hover:grayscale-0 transition-all duration-1000"
          ></iframe>

          {/* Map Overlay with Office Location */}
          <div className="absolute bottom-8 left-8 bg-white p-4 rounded-lg shadow-xl animate-float-slow">
            <div className="flex items-center">
              <div className="w-3 h-3 bg-accent rounded-full animate-pulse mr-2"></div>
              <span className="font-bold text-primary">Our Head Office</span>
            </div>
            <p className="text-sm text-gray-600 mt-1">Velachery, Chennai</p>
          </div>
        </section>

        {/* Business Hours */}
        <section className="py-16 bg-gray-50">
          <div className="container-custom">
            <div className="grid md:grid-cols-3 gap-8 stagger-children">
              <div className="bg-white p-8 rounded-xl shadow-lg text-center hover-lift">
                <div className="text-4xl mb-4 animate-float-slow">🕒</div>
                <h3 className="font-bold text-primary text-xl mb-2">Business Hours</h3>
                <p className="text-gray-600">Monday - Friday: 9:00 AM - 6:00 PM</p>
                <p className="text-gray-600">Saturday: 10:00 AM - 4:00 PM</p>
                <p className="text-gray-400 text-sm mt-2">Sunday: Closed</p>
              </div>

              <div className="bg-white p-8 rounded-xl shadow-lg text-center hover-lift">
                <div className="text-4xl mb-4 animate-float-slow">📞</div>
                <h3 className="font-bold text-primary text-xl mb-2">Emergency Contact</h3>
                <p className="text-gray-600">24/7 Project Support</p>
                <p className="text-accent font-bold text-xl mt-2">+91 97909 93232</p>
              </div>

              <div className="bg-white p-8 rounded-xl shadow-lg text-center hover-lift">
                <div className="text-4xl mb-4 animate-float-slow">📧</div>
                <h3 className="font-bold text-primary text-xl mb-2">Quick Response</h3>
                <p className="text-gray-600">Email us anytime</p>
                <p className="text-accent font-bold text-xl mt-2">senthemzurugan@gmail.com</p>
                <p className="text-xs text-gray-400 mt-2">We reply within 24 hours</p>
              </div>
            </div>
          </div>
        </section>

        {/* Footer */}
        <footer className="bg-primary text-white pt-16 pb-8">
          <div className="container-custom">
            <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-12">
              <div className="col-span-1 md:col-span-2">
                <h4 className="text-accent font-bold text-2xl mb-4">SSM ENGINEERING</h4>
                <p className="text-gray-300 mb-4">Integrated Engineering & Project Advisory Firm</p>
                <p className="text-gray-400 text-sm">
                  Structured Decision-Making, Strong Governance, Disciplined Execution
                </p>
              </div>
              <div>
                <h4 className="text-accent font-bold text-xl mb-4">Contact</h4>
                <ul className="space-y-3 text-gray-300">
                  <li>Head Office: Velachery, Chennai - 600 042</li>
                  <li>Email: senthemzurugan@gmail.com</li>
                  <li>Mobile: 97909 93232</li>
                </ul>
              </div>
              <div>
                <h4 className="text-accent font-bold text-xl mb-4">Quick Links</h4>
                <ul className="space-y-2">
                  <li><Link href="/about" className="text-gray-300 hover:text-accent transition">About Us</Link></li>
                  <li><Link href="/team" className="text-gray-300 hover:text-accent transition">Our Team</Link></li>
                  <li><Link href="/services" className="text-gray-300 hover:text-accent transition">Services</Link></li>
                  <li><Link href="/projects" className="text-gray-300 hover:text-accent transition">Projects</Link></li>
                  <li><Link href="/detail-engineering" className="text-gray-300 hover:text-accent transition">Detail Design</Link></li>
                </ul>
              </div>
            </div>
            <div className="border-t border-gray-700 pt-8 text-center text-gray-400">
              <p>© 2026 SSM ENGINEERING & PROJECT ADVISORY. All rights reserved.</p>
              <p className="text-sm mt-2">GST: 33ASGPG0886J2ZN | Proprietor: N. GOKUL B.E.</p>
            </div>
          </div>
        </footer>
      </>
  );
}