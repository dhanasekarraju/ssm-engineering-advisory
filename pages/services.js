import Head from 'next/head';
import Link from 'next/link';
import Image from 'next/image';
import { useState } from 'react';

export default function Services() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [logoError, setLogoError] = useState(false);

  const services = [
    {
      title: "EPCM Services",
      description: "Independent oversight, governance, risk management, and performance control across diverse sectors. We provide end-to-end engineering, procurement, and construction management solutions.",
      image: "/images/epcm.jpg",
      features: ["Project Governance", "Risk Management", "Performance Control", "Quality Assurance"]
    },
    {
      title: "Project Management",
      description: "End-to-end project delivery with rigorous methodologies and data-driven controls. We ensure predictable outcomes in cost, schedule, and quality.",
      image: "https://images.unsplash.com/photo-1552664730-d307ca884978?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80",
      features: ["Cost Control", "Schedule Management", "Quality Assurance", "Stakeholder Communication"]
    },
    {
      title: "Engineering Design",
      description: "Multidisciplinary expertise delivering innovative and efficient design solutions for complex infrastructure projects.",
      image: "https://images.unsplash.com/photo-1581091226033-d5c48150dbaa?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80",
      features: ["Structural Design", "Civil Engineering", "Architectural Design", "MEP Coordination"]
    },
    {
      title: "Construction Management",
      description: "Disciplined execution ensuring safety, quality, and long-term asset performance throughout the construction phase.",
      image: "https://images.unsplash.com/photo-1541888946425-d81bb19240f5?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80",
      features: ["Site Supervision", "Safety Management", "Quality Control", "Progress Monitoring"]
    },
    {
      title: "Feasibility Studies",
      description: "Comprehensive analysis of project viability, including technical, financial, and environmental assessments.",
      image: "https://images.unsplash.com/photo-1554224155-8d04cb21cd6c?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80",
      features: ["Technical Assessment", "Financial Analysis", "Environmental Impact", "Risk Evaluation"]
    },
    {
      title: "Procurement Advisory",
      description: "Strategic procurement support including vendor selection, contract management, and supply chain optimization.",
      image: "https://images.unsplash.com/photo-1560179707-f14e90ef3623?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80",
      features: ["Vendor Selection", "Contract Management", "Supply Chain", "Cost Optimization"]
    }
  ];

  const sectors = [
    { name: "Buildings", icon: "🏢", count: "45+ Projects" },
    { name: "FMCG", icon: "🏭", count: "30+ Projects" },
    { name: "Infrastructure", icon: "🌉", count: "25+ Projects" },
    { name: "Mines", icon: "⛏️", count: "15+ Projects" },
    { name: "Power", icon: "⚡", count: "20+ Projects" },
    { name: "Industrial", icon: "🏗️", count: "35+ Projects" }
  ];

  return (
      <>
        <Head>
          <title>Our Services - SSM ENGINEERING & PROJECT ADVISORY</title>
        </Head>

        {/* Navigation - Same as above but with Services active */}
        <nav className="bg-primary/95 backdrop-blur-sm sticky top-0 z-50 shadow-lg">
          <div className="container-custom py-3">
            <div className="flex justify-between items-center">
              {/* Logo + Company Name (same code as about page) */}
              <Link href="/" className="flex items-center group">
                {!logoError ? (
                    <div className="flex items-center space-x-3">
                      <div className="relative h-16 w-16 md:h-20 md:w-20 flex-shrink-0">
                        <Image
                            src="/images/ssm-logo.jpg"
                            alt="SSM ENGINEERING"
                            fill
                            className="object-contain"
                            priority
                            onError={() => setLogoError(true)}
                            sizes="(max-width: 768px) 64px, 80px"
                        />
                      </div>
                      <div className="flex flex-col">
                    <span className="text-accent font-bold text-lg md:text-xl lg:text-2xl leading-tight">
                      SSM ENGINEERING
                    </span>
                        <span className="text-white text-xs md:text-sm lg:text-base opacity-90">
                      & PROJECT ADVISORY
                    </span>
                      </div>
                    </div>
                ) : (
                    <div className="flex flex-col">
                  <span className="text-accent font-bold text-lg md:text-xl lg:text-2xl leading-tight">
                    SSM ENGINEERING
                  </span>
                      <span className="text-white text-xs md:text-sm lg:text-base opacity-90">
                    & PROJECT ADVISORY
                  </span>
                    </div>
                )}
              </Link>

              {/* Desktop Menu */}
              <div className="hidden md:flex space-x-6 lg:space-x-8">
                <Link href="/" className="text-white hover:text-accent transition font-medium">Home</Link>
                <Link href="/about" className="text-white hover:text-accent transition font-medium">About</Link>
                <Link href="/services" className="text-accent transition font-medium">Services</Link>
                <Link href="/team" className="text-white hover:text-accent transition font-medium">Team</Link>
                <Link href="/projects" className="text-white hover:text-accent transition font-medium">Projects</Link>
                <Link href="/detail-engineering" className="text-white hover:text-accent transition font-medium">Detail Design</Link>
                <Link href="/contact" className="text-white hover:text-accent transition font-medium">Contact</Link>
              </div>

              {/* Mobile Menu Button */}
              <button
                  className="md:hidden text-white"
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
                <div className="md:hidden mt-4 pb-4 space-y-3 bg-primary/90 rounded-lg p-4">
                  <Link href="/" className="block text-white hover:text-accent transition py-2">Home</Link>
                  <Link href="/about" className="block text-white hover:text-accent transition py-2">About</Link>
                  <Link href="/services" className="block text-accent transition py-2">Services</Link>
                  <Link href="/team" className="block text-white hover:text-accent transition py-2">Team</Link>
                  <Link href="/projects" className="block text-white hover:text-accent transition py-2">Projects</Link>
                  <Link href="/detail-engineering" className="block text-white hover:text-accent transition py-2">Detail Design</Link>
                  <Link href="/contact" className="block text-white hover:text-accent transition py-2">Contact</Link>
                </div>
            )}
          </div>
        </nav>

      {/* Hero Section */}
      <section className="relative h-[400px] overflow-hidden">
        <div className="absolute inset-0">
          <Image
            src="https://images.unsplash.com/photo-1504917595217-d4dc5ebe6122?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&q=80"
            alt="Services"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-r from-primary/90 to-primary/70"></div>
        </div>
        <div className="relative container-custom h-full flex items-center">
          <div className="text-white max-w-3xl animate-fadeInLeft">
            <h1 className="text-5xl md:text-6xl font-bold mb-4">Our Services</h1>
            <p className="text-xl text-accent">Comprehensive Engineering & Project Advisory Solutions</p>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20">
        <div className="container-custom">
          <div className="text-center mb-12 animate-fadeInUp">
            <span className="text-accent font-bold text-sm uppercase tracking-wider">What We Offer</span>
            <h2 className="text-3xl md:text-4xl font-bold text-primary mt-2">Our Core Expertise</h2>
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 stagger-children">
            {services.map((service, index) => (
              <div key={index} className="bg-white rounded-2xl shadow-xl overflow-hidden hover-lift hover:shadow-2xl transition-all duration-300 group">
                <div className="relative h-64 overflow-hidden">
                  <Image
                    src={service.image}
                    alt={service.title}
                    fill
                    className="object-cover group-hover:scale-110 transition duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-primary to-transparent opacity-60"></div>
                  <div className="absolute bottom-4 left-4">
                    <h3 className="text-2xl font-bold text-white">{service.title}</h3>
                  </div>
                </div>
                <div className="p-6">
                  <p className="text-gray-600 mb-4">{service.description}</p>
                  <div className="grid grid-cols-2 gap-2">
                    {service.features.map((feature, i) => (
                      <div key={i} className="flex items-center text-sm">
                        <svg className="w-4 h-4 text-accent mr-2" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                        </svg>
                        {feature}
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Sectors We Serve */}
      <section className="py-20 bg-gray-50">
        <div className="container-custom">
          <div className="text-center mb-12 animate-fadeInUp">
            <span className="text-accent font-bold text-sm uppercase tracking-wider">Industries</span>
            <h2 className="text-3xl md:text-4xl font-bold text-primary mt-2">Sectors We Serve</h2>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6 stagger-children">
            {sectors.map((sector, index) => (
              <div key={index} className="bg-white rounded-xl shadow-lg p-6 text-center hover-lift hover:shadow-xl transition group">
                <div className="text-4xl mb-3 transform group-hover:scale-110 transition duration-300 animate-float-slow">
                  {sector.icon}
                </div>
                <h3 className="font-bold text-primary mb-1">{sector.name}</h3>
                <p className="text-sm text-accent">{sector.count}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Our Approach */}
      <section className="py-20">
        <div className="container-custom">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="relative h-[500px] rounded-2xl overflow-hidden shadow-2xl animate-fadeInLeft">
              <Image
                src="/images/approach.jpg"
                alt="Our Approach"
                fill
                className="object-cover"
              />
              <div className="absolute inset-0 bg-primary/20"></div>
            </div>
            <div className="animate-fadeInRight">
              <span className="text-accent font-bold text-sm uppercase tracking-wider">How We Work</span>
              <h2 className="text-3xl md:text-4xl font-bold text-primary mt-2 mb-6">Our Approach to Excellence</h2>
              <div className="space-y-4">
                {[
                  "We partner with clients from project inception through commissioning and handover",
                  "Technical decisions consistently align with commercial and business objectives",
                  "Rigorous methodologies and data-driven controls for predictable outcomes",
                  "Focus on creating long-term value, not merely completing projects"
                ].map((item, i) => (
                  <div key={i} className="flex items-start">
                    <div className="flex-shrink-0 w-6 h-6 bg-accent rounded-full flex items-center justify-center mt-1 mr-3">
                      <svg className="w-4 h-4 text-primary" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                      </svg>
                    </div>
                    <p className="text-gray-700">{item}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-primary py-16">
        <div className="container-custom text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4 animate-fadeInUp">
            Need Expert Engineering Advice?
          </h2>
          <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto animate-fadeInUp">
            Let's discuss how our services can help your next project succeed
          </p>
          <Link href="/contact" className="btn-primary inline-block animate-pulse-glow">
            Contact Us Today
          </Link>
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
                <li><Link href="/projects" className="text-gray-300 hover:text-accent transition">Projects</Link></li>
                <li><Link href="/contact" className="text-gray-300 hover:text-accent transition">Contact</Link></li>
              </ul>
            </div>
          </div>
          <div className="border-t border-gray-700 pt-8 text-center text-gray-400">
            <p>© 2026 SSM ENGINEERING & PROJECT ADVISORY. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </>
  );
}
