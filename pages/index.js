import Head from 'next/head';
import Link from 'next/link';
import Image from 'next/image';
import { useState } from 'react';

export default function Home() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [logoError, setLogoError] = useState(false);

  return (
      <>
        <Head>
          <title>SSM ENGINEERING & PROJECT ADVISORY</title>
          <meta name="description" content="Integrated Engineering & Project Advisory Firm" />
          <meta name="viewport" content="width=device-width, initial-scale=1" />
        </Head>

        {/* Navigation */}
        <nav className="bg-primary/95 backdrop-blur-sm sticky top-0 z-50 shadow-lg">
          <div className="container-custom py-3">
            <div className="flex justify-between items-center">
              {/* Logo + Company Name */}
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
                <Link href="/services" className="text-white hover:text-accent transition font-medium">Services</Link>
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
                  <Link href="/services" className="block text-white hover:text-accent transition py-2">Services</Link>
                  <Link href="/team" className="block text-white hover:text-accent transition py-2">Team</Link>
                  <Link href="/projects" className="block text-white hover:text-accent transition py-2">Projects</Link>
                  <Link href="/detail-engineering" className="block text-white hover:text-accent transition py-2">Detail Design</Link>
                  <Link href="/contact" className="block text-white hover:text-accent transition py-2">Contact</Link>
                </div>
            )}
          </div>
        </nav>

        {/* Hero Section with VIDEO Background */}
        <section className="relative h-[600px] md:h-[700px] overflow-hidden">
          {/* Video Background */}
          <div className="absolute inset-0">
            <video
                className="absolute inset-0 w-full h-full object-cover"
                autoPlay
                loop
                muted
                playsInline
                poster="/images/hero/hero-poster.jpg" // Optional: fallback image while video loads
            >
              <source src="/videos/hero-video.mp4" type="video/mp4" />
              {/* Add WebM format for better browser support */}
              <source src="/videos/hero-video.webm" type="video/webm" />
              Your browser does not support the video tag.
            </video>
            {/* Dark Overlay */}
            <div className="absolute inset-0 bg-gradient-to-r from-primary/90 to-primary/70"></div>
          </div>

          {/* Hero Content */}
          <div className="relative container-custom h-full flex items-center">
            <div className="text-white max-w-3xl animate-fadeIn">
      <span className="bg-accent text-primary px-4 py-2 rounded-full text-sm font-bold inline-block mb-6">
        INTEGRATED ENGINEERING & PROJECT ADVISORY
      </span>
              <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
                Building Tomorrow's<br />
                <span className="text-accent">Infrastructure Today</span>
              </h1>
              <p className="text-xl md:text-2xl mb-8 text-gray-200">
                Structured Decision-Making, Strong Governance, Disciplined Execution
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link href="/contact" className="btn-primary text-center">Partner With Us</Link>
                <Link href="/projects" className="btn-secondary text-center">View Our Projects</Link>
              </div>
            </div>
          </div>

          {/* Scroll Indicator */}
          <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
            <div className="w-6 h-10 border-2 border-white rounded-full flex justify-center">
              <div className="w-1 h-2 bg-white rounded-full mt-2 animate-pulse"></div>
            </div>
          </div>
        </section>

        {/* Stats Section */}
        <section className="bg-primary py-12 border-t border-b border-accent/20">
          <div className="container-custom">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
              {[
                { number: "150+", label: "Projects Completed" },
                { number: "25+", label: "Years Experience" },
                { number: "13+", label: "Expert Engineers" },
                { number: "100%", label: "Client Satisfaction" }
              ].map((stat, i) => (
                  <div key={i} className="text-white">
                    <div className="text-3xl md:text-4xl font-bold text-accent mb-2">{stat.number}</div>
                    <div className="text-sm uppercase tracking-wider">{stat.label}</div>
                  </div>
              ))}
            </div>
          </div>
        </section>

        {/* Company Overview with YOUR image */}
        <section className="py-20">
          <div className="container-custom">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div className="relative h-[400px] md:h-[500px] rounded-2xl overflow-hidden shadow-2xl">
                <Image
                    src="/images/doc-image.jpg" // CHANGE THIS
                    alt="Engineering team"
                    fill
                    className="object-cover hover:scale-105 transition duration-700"
                />
              </div>
              <div>
                <span className="text-accent font-bold text-sm uppercase tracking-wider">Who We Are</span>
                <h2 className="text-3xl md:text-4xl font-bold text-primary mt-2 mb-6">
                  Integrated Engineering & Project Advisory Firm
                </h2>
                <div className="space-y-4 text-gray-600">
                  <p>
                    In an environment defined by complexity, capital intensity, and heightened stakeholder expectations,
                    successful infrastructure delivery demands structured decision-making, strong governance, and disciplined
                    execution. We are not a conventional design consultancy—we are a project advisory and engineering management
                    firm that partners with clients from project inception through commissioning and handover.
                  </p>
                  <p>
                    Founded on extensive experience in civil and structural engineering, project management, and industrial
                    project execution, our role extends far beyond producing drawings. We support clients and developers at
                    every stage of the project lifecycle.
                  </p>
                </div>
                <Link href="/about" className="inline-flex items-center text-primary font-bold mt-6 group">
                  Learn More About Us
                  <svg className="w-5 h-5 ml-2 group-hover:translate-x-2 transition" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* Services Section with YOUR images */}
        <section className="py-20 bg-gray-50">
          <div className="container-custom">
            <div className="text-center mb-12">
              <span className="text-accent font-bold text-sm uppercase tracking-wider">What We Do</span>
              <h2 className="text-3xl md:text-4xl font-bold text-primary mt-2">Our Core Services</h2>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {[
                {
                  title: "EPCM Services",
                  desc: "Independent oversight, governance, risk management, and performance control across diverse sectors.",
                  icon: "/images/epcm.jpg"
                },
                {
                  title: "Project Management",
                  desc: "End-to-end project delivery with rigorous methodologies and data-driven controls.",
                  icon: "https://images.unsplash.com/photo-1552664730-d307ca884978?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80"
                },
                {
                  title: "Engineering Design",
                  desc: "Multidisciplinary expertise delivering predictable outcomes in cost, schedule, and quality.",
                  icon: "https://images.unsplash.com/photo-1581091226033-d5c48150dbaa?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80"
                },
                {
                  title: "Construction Management",
                  desc: "Disciplined execution ensuring safety and long-term asset performance.",
                  icon: "https://images.unsplash.com/photo-1541888946425-d81bb19240f5?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80"
                }
              ].map((service, i) => (
                  <div key={i} className="group bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-2xl transition">
                    <div className="relative h-48">
                      <Image
                          src={service.icon}
                          alt={service.title}
                          fill
                          className="object-cover group-hover:scale-110 transition duration-500"
                      />
                      <div className="absolute inset-0 bg-primary/40 group-hover:bg-primary/20 transition"></div>
                    </div>
                    <div className="p-6">
                      <h3 className="text-xl font-bold text-primary mb-3">{service.title}</h3>
                      <p className="text-gray-600 text-sm">{service.desc}</p>
                    </div>
                  </div>
              ))}
            </div>
            <div className="text-center mt-12">
              <Link href="/services" className="btn-primary">Explore All Services</Link>
            </div>
          </div>
        </section>

        {/* Mission & Vision with YOUR background */}
        <section className="relative py-20 overflow-hidden">
          <div className="absolute inset-0">
            <Image
                src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&q=80"
                alt="Background"
                fill
                className="object-cover"
            />
            <div className="absolute inset-0 bg-primary/90"></div>
          </div>
          <div className="relative container-custom">
            <div className="grid md:grid-cols-2 gap-8 text-white">
              <div className="backdrop-blur-sm bg-white/10 p-8 rounded-2xl border border-white/20">
                <h3 className="text-2xl font-bold text-accent mb-4">Our Vision</h3>
                <p className="text-lg leading-relaxed">
                  To be a leading multidisciplinary engineering and consulting firm, recognized for delivering sustainable,
                  innovative, and high-value infrastructure through integrated expertise and disciplined execution.
                </p>
              </div>
              <div className="backdrop-blur-sm bg-white/10 p-8 rounded-2xl border border-white/20">
                <h3 className="text-2xl font-bold text-accent mb-4">Our Mission</h3>
                <p className="text-lg leading-relaxed">
                  To provide end-to-end infrastructure solutions by seamlessly combining architecture, engineering, and
                  project management—driving efficiency, technical excellence, and measurable long-term value for clients
                  and communities.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Featured Projects with YOUR images */}
        <section className="py-20">
          <div className="container-custom">
            <div className="text-center mb-12">
              <span className="text-accent font-bold text-sm uppercase tracking-wider">Our Work</span>
              <h2 className="text-3xl md:text-4xl font-bold text-primary mt-2">Featured Projects</h2>
            </div>
            <div className="grid md:grid-cols-3 gap-6">
              {[
                {
                  title: "Michelin Tyres - Mixing Plant",
                  location: "Chennai",
                  image: "/images/michelin.jpg" // CHANGE THIS
                },
                {
                  title: "Commercial High Rise",
                  location: "Salem",
                  image: "/images/commercial.jpg" // CHANGE THIS
                },
                {
                  title: "Industrial Warehouse",
                  location: "Hyderabad",
                  image: "/images/silo.jpg"
                }
              ].map((project, i) => (
                  <div key={i} className="group relative h-80 rounded-xl overflow-hidden shadow-xl">
                    <Image
                        src={project.image}
                        alt={project.title}
                        fill
                        className="object-cover group-hover:scale-110 transition duration-700"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-primary via-primary/50 to-transparent opacity-0 group-hover:opacity-100 transition duration-500"></div>
                    <div className="absolute bottom-0 left-0 right-0 p-6 text-white transform translate-y-full group-hover:translate-y-0 transition duration-500">
                      <h3 className="text-xl font-bold mb-1">{project.title}</h3>
                      <p className="text-accent">{project.location}</p>
                    </div>
                  </div>
              ))}
            </div>
            <div className="text-center mt-12">
              <Link href="/projects" className="btn-primary">View All Projects</Link>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="bg-accent py-16">
          <div className="container-custom text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">
              Ready to Start Your Project?
            </h2>
            <p className="text-xl text-primary/80 mb-8 max-w-2xl mx-auto">
              Partner with us for insight-led execution, accountability, and excellence in end-to-end project delivery.
            </p>
            <Link href="/contact" className="bg-primary text-white font-bold py-4 px-8 rounded-lg hover:bg-primary/90 transition inline-block shadow-lg">
              Get In Touch Today
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

        <style jsx>{`
          @keyframes fadeIn {
            from { opacity: 0; transform: translateY(20px); }
            to { opacity: 1; transform: translateY(0); }
          }
          .animate-fadeIn {
            animation: fadeIn 1s ease-out;
          }
        `}</style>
      </>
  );
}