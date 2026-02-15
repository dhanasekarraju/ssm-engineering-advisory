import Head from 'next/head';
import Link from 'next/link';
import Image from 'next/image';
import { useState } from 'react';

export default function DetailEngineering() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [selectedImage, setSelectedImage] = useState(null);
  const [logoError, setLogoError] = useState(false);

  const projects = [
    {
      id: 1,
      title: "Michelin Tyers – Mixing Plant",
      client: "M/s. Michelin Tyers",
      location: "Chennai",
      category: "Industrial",
      description: "Complete detailed engineering design for mixing plant facility including structural design and detailing.",
      image: null, // You'll add image path later
      placeholder: "🏭"
    },
    {
      id: 2,
      title: "Hatsun Ice Cream Plant",
      client: "M/s. Hatsun",
      location: "Hyderabad",
      category: "FMCG",
      description: "Detailed engineering design for ice cream production facility with cold storage integration.",
      image: null,
      placeholder: "🍦"
    },
    {
      id: 3,
      title: "Mondelez – Chocolate Plant",
      client: "M/s. Mondelez",
      location: "Sri City Tada",
      category: "FMCG",
      description: "Comprehensive design and detailing for chocolate production facility.",
      image: null,
      placeholder: "🍫"
    },
    {
      id: 4,
      title: "Mega Frozen Storage Warehouse",
      client: "M/s. Mega Frozen",
      location: "Chennai",
      category: "Warehousing",
      description: "Detailed engineering for large-scale frozen storage facility with temperature-controlled zones.",
      image: null,
      placeholder: "❄️"
    },
    {
      id: 5,
      title: "Nxtra Data Center",
      client: "M/s. Nxtra",
      location: "Chennai",
      category: "Technology",
      description: "Complete structural and architectural design for state-of-the-art data center facility.",
      image: null,
      placeholder: "💻"
    },
    {
      id: 6,
      title: "Oberoi Maxima",
      client: "M/s. Oberoi",
      location: "Mumbai",
      category: "Commercial",
      description: "Detailed engineering design for premium commercial complex.",
      image: null,
      placeholder: "🏢"
    },
    {
      id: 7,
      title: "Mega Frozen Storage",
      client: "M/s. Mega Frozen",
      location: "Chennai",
      category: "Warehousing",
      description: "Expansion and detailed design for additional frozen storage capacity.",
      image: null,
      placeholder: "❄️"
    },
    {
      id: 8,
      title: "Biocon Facility",
      client: "M/s. Biocon",
      location: "Bengaluru",
      category: "Pharmaceutical",
      description: "Detailed engineering design for biopharmaceutical manufacturing facility.",
      image: null,
      placeholder: "🔬"
    }
  ];

  // Group projects by location/category for better display
  const groupedProjects = {
    chennai: projects.filter(p => p.location === "Chennai"),
    hyderabad: projects.filter(p => p.location === "Hyderabad"),
    others: projects.filter(p => !["Chennai", "Hyderabad"].includes(p.location))
  };

  return (
      <>
        <Head>
          <title>Detail Engineering Design - SSM ENGINEERING & PROJECT ADVISORY</title>
        </Head>

        {/* Navigation - Same structure with Detail Design active */}
        <nav className="bg-primary/95 backdrop-blur-sm sticky top-0 z-50 shadow-lg">
          <div className="container-custom py-3">
            <div className="flex justify-between items-center">
              {/* Logo + Company Name (same code) */}
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
                <Link href="/detail-engineering" className="text-accent transition font-medium">Detail Design</Link>
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
                  <Link href="/detail-engineering" className="block text-accent transition py-2">Detail Design</Link>
                  <Link href="/contact" className="block text-white hover:text-accent transition py-2">Contact</Link>
                </div>
            )}
          </div>
        </nav>

      {/* Hero Section */}
      <section className="relative h-[300px] overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-primary to-primary/80">
          <div className="absolute inset-0 opacity-10">
            <svg className="w-full h-full" viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
              <pattern id="grid" x="0" y="0" width="10" height="10" patternUnits="userSpaceOnUse">
                <path d="M 10 0 L 0 0 0 10" fill="none" stroke="white" strokeWidth="0.5"/>
              </pattern>
              <rect width="100" height="100" fill="url(#grid)" />
            </svg>
          </div>
        </div>
        <div className="relative container-custom h-full flex items-center">
          <div className="text-white max-w-3xl animate-fadeInLeft">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">Detail Engineering Design</h1>
            <p className="text-xl text-accent">Comprehensive Design Solutions for Complex Projects</p>
          </div>
        </div>
      </section>

      {/* Projects Grid */}
      <section className="py-20">
        <div className="container-custom">
          
          {/* Chennai Projects */}
          <div className="mb-16">
            <div className="flex items-center mb-8">
              <div className="w-12 h-12 bg-accent rounded-full flex items-center justify-center text-primary text-2xl font-bold">
                🏙️
              </div>
              <h2 className="text-2xl md:text-3xl font-bold text-primary ml-4">Chennai Projects</h2>
              <span className="ml-4 bg-accent/20 text-primary px-3 py-1 rounded-full text-sm">
                {groupedProjects.chennai.length} Projects
              </span>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 stagger-children">
              {groupedProjects.chennai.map((project) => (
                <div key={project.id} className="bg-white rounded-xl shadow-lg overflow-hidden hover-lift hover:shadow-xl transition-all duration-300 group">
                  <div className="relative h-48 bg-gradient-to-br from-primary/5 to-accent/5 flex items-center justify-center">
                    {project.image ? (
                      <Image src={project.image} alt={project.title} fill className="object-cover" />
                    ) : (
                      <div className="text-7xl animate-float-slow">{project.placeholder}</div>
                    )}
                    <div className="absolute top-4 right-4 bg-accent text-primary px-3 py-1 rounded-full text-sm font-bold">
                      {project.category}
                    </div>
                  </div>
                  <div className="p-6">
                    <h3 className="text-xl font-bold text-primary mb-2">{project.title}</h3>
                    <p className="text-accent font-medium mb-2">{project.client}</p>
                    <p className="text-gray-600 text-sm mb-4">{project.description}</p>
                    <div className="flex items-center text-gray-500 text-sm">
                      <svg className="w-4 h-4 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                      </svg>
                      {project.location}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Hyderabad Projects */}
          <div className="mb-16">
            <div className="flex items-center mb-8">
              <div className="w-12 h-12 bg-accent rounded-full flex items-center justify-center text-primary text-2xl font-bold">
                🌆
              </div>
              <h2 className="text-2xl md:text-3xl font-bold text-primary ml-4">Hyderabad Projects</h2>
              <span className="ml-4 bg-accent/20 text-primary px-3 py-1 rounded-full text-sm">
                {groupedProjects.hyderabad.length} Projects
              </span>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 stagger-children">
              {groupedProjects.hyderabad.map((project) => (
                <div key={project.id} className="bg-white rounded-xl shadow-lg overflow-hidden hover-lift hover:shadow-xl transition-all duration-300 group">
                  <div className="relative h-48 bg-gradient-to-br from-primary/5 to-accent/5 flex items-center justify-center">
                    {project.image ? (
                      <Image src={project.image} alt={project.title} fill className="object-cover" />
                    ) : (
                      <div className="text-7xl animate-float-slow">{project.placeholder}</div>
                    )}
                    <div className="absolute top-4 right-4 bg-accent text-primary px-3 py-1 rounded-full text-sm font-bold">
                      {project.category}
                    </div>
                  </div>
                  <div className="p-6">
                    <h3 className="text-xl font-bold text-primary mb-2">{project.title}</h3>
                    <p className="text-accent font-medium mb-2">{project.client}</p>
                    <p className="text-gray-600 text-sm mb-4">{project.description}</p>
                    <div className="flex items-center text-gray-500 text-sm">
                      <svg className="w-4 h-4 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                      </svg>
                      {project.location}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Other Locations */}
          <div>
            <div className="flex items-center mb-8">
              <div className="w-12 h-12 bg-accent rounded-full flex items-center justify-center text-primary text-2xl font-bold">
                🌍
              </div>
              <h2 className="text-2xl md:text-3xl font-bold text-primary ml-4">Other Locations</h2>
              <span className="ml-4 bg-accent/20 text-primary px-3 py-1 rounded-full text-sm">
                {groupedProjects.others.length} Projects
              </span>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 stagger-children">
              {groupedProjects.others.map((project) => (
                <div key={project.id} className="bg-white rounded-xl shadow-lg overflow-hidden hover-lift hover:shadow-xl transition-all duration-300 group">
                  <div className="relative h-48 bg-gradient-to-br from-primary/5 to-accent/5 flex items-center justify-center">
                    {project.image ? (
                      <Image src={project.image} alt={project.title} fill className="object-cover" />
                    ) : (
                      <div className="text-7xl animate-float-slow">{project.placeholder}</div>
                    )}
                    <div className="absolute top-4 right-4 bg-accent text-primary px-3 py-1 rounded-full text-sm font-bold">
                      {project.category}
                    </div>
                  </div>
                  <div className="p-6">
                    <h3 className="text-xl font-bold text-primary mb-2">{project.title}</h3>
                    <p className="text-accent font-medium mb-2">{project.client}</p>
                    <p className="text-gray-600 text-sm mb-4">{project.description}</p>
                    <div className="flex items-center text-gray-500 text-sm">
                      <svg className="w-4 h-4 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                      </svg>
                      {project.location}
                    </div>
                  </div>
                </div>
              ))}
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
