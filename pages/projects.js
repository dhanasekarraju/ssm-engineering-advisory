import Head from 'next/head';
import Link from 'next/link';
import Image from 'next/image';
import { useState } from 'react';

export default function Projects() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [selectedProject, setSelectedProject] = useState(null);
  const [showModal, setShowModal] = useState(false);
  const [selectedImage, setSelectedImage] = useState(null);
  const [logoError, setLogoError] = useState(false);
  const [activeTab, setActiveTab] = useState('major'); // 'major' or 'detail'

  // Major Projects (from first file)
  const majorProjects = [
    {
      id: 1,
      name: "THERMAL POWER PLANT",
      location: "Trichy",
      sector: "Power",
      scope: "CIVIL & STRUCTURAL DESIGN AND DETAILING",
      responsibility: "DESIGN & DETAILING OF RCC & STEEL BUILDING",
      structures: "TURBINE GENERATOR DECK & STRUCTURES BUILDING, BOILER BUILDING, CHIMNEY, SUB STATION",
      dimensions: { length: 60, width: 25, height: 27 },
      cost: "₹ 70 MILLION",
      image: "/images/thermal.jpg",
      client: "Various",
      category: "Power"
    },
    {
      id: 2,
      name: "PETRO CHEMICALS",
      location: "Chennai & Zürich, Switzerland",
      sector: "Industrial",
      scope: "CIVIL & STRUCTURAL DESIGN AND DETAILING",
      responsibility: "DESIGN & DETAILING OF RCC & STEEL BUILDING",
      structures: "PIPE RACK FOR REFINERY INDUSTRY, POLYMER PRODUCTION BUILDING",
      dimensions: { length: 100, width: 37, height: 42 },
      cost: "₹ 270 MILLION",
      image: "/images/petrochemicals.jpg",
      client: "Various",
      category: "Industrial"
    },
    {
      id: 3,
      name: "SILO BUILDING & FACTORY",
      location: "Chennai & Hyderabad",
      sector: "Industrial",
      scope: "CONCEPT PREPARATION, FEED FROND END ENGINEERING CIVIL & STRUCTRUAL - DETAIL & DETAIL ENGINEERING",
      responsibility: "ENGINEERING & CONSULTANCY, PROJECT MANAGEMENT",
      structures: "SILO BUILDING FOR TYRE FACTORY, CHOCOLATE PRODUCTION FACTORY",
      dimensions: { length: 126, width: 36, height: 14 },
      cost: "₹ 1,000 MILLION",
      image: "/images/silo.jpg",
      client: "Various",
      category: "Industrial"
    },
    {
      id: 4,
      name: "COMMERCIAL HIGH RISE",
      location: "Mumbai",
      sector: "Buildings",
      scope: "ENGINEERING DESIGN",
      responsibility: "ENGINEERING & CONSULTANCY, PROJECT MANAGEMENT",
      structures: "RCC FRAMED STRUCTURE WITH 3 FLOORS OF BASEMENT & 11 FLOORS",
      dimensions: { length: 30, width: 30, height: "3 basements + 11 floors" },
      cost: "₹ 400 MILLION",
      image: "/images/commercial.jpg",
      client: "Various",
      category: "Commercial"
    },
    {
      id: 5,
      name: "DAIRY & BEVERAGES FACTORY",
      location: "Hyderabad",
      sector: "FMCG",
      scope: "DESIGN & DETAIL ENGINEERING",
      responsibility: "DESIGN",
      structures: "DAIRY & BEVERAGES PRODUCTS PRODUCTION FACTORY, COLD ROOM WAREHOUSE",
      dimensions: { length: 100, width: 90, height: 21 },
      cost: "₹ 3,500 MILLION",
      image: "/images/dairybevarges.jpg",
      client: "Various",
      category: "FMCG"
    }
  ];

  // Detail Engineering Projects (from second file)
  const detailProjects = [
    {
      id: 101,
      title: "Michelin Tyers – Mixing Plant",
      name: "Michelin Tyers – Mixing Plant",
      client: "M/s. Michelin Tyers",
      location: "Chennai",
      category: "Industrial",
      sector: "Industrial",
      description: "Complete detailed engineering design for mixing plant facility including structural design and detailing.",
      image: "/images/michelin.jpg",
      placeholder: "🏭",
      cost: "Confidential",
      structures: "Mixing plant facility with structural design",
      dimensions: { length: "Various", width: "Various", height: "Various" }
    },
    {
      id: 102,
      title: "Hatsun Ice Cream Plant",
      name: "Hatsun Ice Cream Plant",
      client: "M/s. Hatsun",
      location: "Hyderabad",
      category: "FMCG",
      sector: "FMCG",
      description: "Detailed engineering design for ice cream production facility with cold storage integration.",
      image: "/images/HatsunHydrabad.jpg",
      placeholder: "🍦",
      cost: "Confidential",
      structures: "Ice cream production facility with cold storage",
      dimensions: { length: "Various", width: "Various", height: "Various" }
    },
    {
      id: 103,
      title: "Mondelez – Chocolate Plant",
      name: "Mondelez – Chocolate Plant",
      client: "M/s. Mondelez",
      location: "Sri City Tada",
      category: "FMCG",
      sector: "FMCG",
      description: "Comprehensive design and detailing for chocolate production facility.",
      image: "/images/Chocolate Plant.webp",
      placeholder: "🍫",
      cost: "Confidential",
      structures: "Chocolate production facility",
      dimensions: { length: "Various", width: "Various", height: "Various" }
    },
    {
      id: 104,
      title: "Mega Frozen Storage Warehouse",
      name: "Mega Frozen Storage Warehouse",
      client: "M/s. Mega Frozen",
      location: "Chennai",
      category: "Warehousing",
      sector: "Warehousing",
      description: "Detailed engineering for large-scale frozen storage facility with temperature-controlled zones.",
      image: "/images/FrozenStorageWarehouse.jpg",
      placeholder: "❄️",
      cost: "Confidential",
      structures: "Frozen storage facility with temperature-controlled zones",
      dimensions: { length: "Various", width: "Various", height: "Various" }
    },
    {
      id: 105,
      title: "Nxtra Data Center",
      name: "Nxtra Data Center",
      client: "M/s. Nxtra",
      location: "Chennai",
      category: "Technology",
      sector: "Technology",
      description: "Complete structural and architectural design for state-of-the-art data center facility.",
      image: "/images/Nxtra.avif",
      placeholder: "💻",
      cost: "Confidential",
      structures: "Data center facility",
      dimensions: { length: "Various", width: "Various", height: "Various" }
    },
    {
      id: 106,
      title: "Oberoi Maxima",
      name: "Oberoi Maxima",
      client: "M/s. Oberoi",
      location: "Mumbai",
      category: "Commercial",
      sector: "Commercial",
      description: "Detailed engineering design for premium commercial complex.",
      image: "/images/Mumbai.jpg",
      placeholder: "🏢",
      cost: "Confidential",
      structures: "Commercial complex",
      dimensions: { length: "Various", width: "Various", height: "Various" }
    },
    {
      id: 107,
      title: "Mega Frozen Storage",
      name: "Mega Frozen Storage",
      client: "M/s. Mega Frozen",
      location: "Chennai",
      category: "Warehousing",
      sector: "Warehousing",
      description: "Expansion and detailed design for additional frozen storage capacity.",
      image: "/images/FrozenStorage.jpg",
      placeholder: "❄️",
      cost: "Confidential",
      structures: "Frozen storage expansion",
      dimensions: { length: "Various", width: "Various", height: "Various" }
    },
    {
      id: 108,
      title: "Biocon Facility",
      name: "Biocon Facility",
      client: "M/s. Biocon",
      location: "Bengaluru",
      category: "Pharmaceutical",
      sector: "Pharmaceutical",
      description: "Detailed engineering design for biopharmaceutical manufacturing facility.",
      image: "/images/Biocon.jpg",
      placeholder: "🔬",
      cost: "Confidential",
      structures: "Biopharmaceutical manufacturing facility",
      dimensions: { length: "Various", width: "Various", height: "Various" }
    }
  ];

  // Get current projects based on active tab
  const currentProjects = activeTab === 'major' ? majorProjects : detailProjects;

  const openProjectDetails = (project) => {
    setSelectedProject(project);
    setShowModal(true);
  };

  // Group detail projects by location (from second file feature)
  const groupedDetailProjects = {
    chennai: detailProjects.filter(p => p.location === "Chennai"),
    hyderabad: detailProjects.filter(p => p.location === "Hyderabad"),
    others: detailProjects.filter(p => !["Chennai", "Hyderabad"].includes(p.location))
  };

  return (
    <>
      <Head>
        <title>Our Projects - SSM ENGINEERING & PROJECT ADVISORY</title>
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
              <Link href="/contact" className="block text-primary hover:text-accent transition py-1">Contact</Link>
            </div>
          )}
        </div>
      </nav>

      {/* Hero Section - Combined style from both files */}
      <section className="relative h-[400px] overflow-hidden">
        <div className="absolute inset-0">
          <Image
            src="https://images.unsplash.com/photo-1504307651254-35680f356dfd?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&q=80"
            alt="Projects"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-r from-primary/90 to-primary/70"></div>
        </div>
        <div className="relative container-custom h-full flex items-center">
          <div className="text-white max-w-3xl animate-fadeInLeft">
            <h1 className="text-5xl md:text-6xl font-bold mb-4">Our Projects</h1>
            <p className="text-xl text-accent mb-6">Delivering Engineering Excellence Across Industries</p>

            {/* Tab Navigation - New feature combining both sections */}
            <div className="flex space-x-4 mt-4">
              <button
                onClick={() => setActiveTab('major')}
                className={`px-6 py-2 rounded-full font-medium transition-all ${
                  activeTab === 'major'
                    ? 'bg-accent text-primary shadow-lg'
                    : 'bg-white/20 text-white hover:bg-white/30'
                }`}
              >
                Major Projects
              </button>
              <button
                onClick={() => setActiveTab('detail')}
                className={`px-6 py-2 rounded-full font-medium transition-all ${
                  activeTab === 'detail'
                    ? 'bg-accent text-primary shadow-lg'
                    : 'bg-white/20 text-white hover:bg-white/30'
                }`}
              >
                Detail Engineering
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Projects Display Section */}
      <section className="py-20">
        <div className="container-custom">

          {/* Tab Description */}
          <div className="mb-12 text-center">
            <h2 className="text-3xl font-bold text-primary mb-4">
              {activeTab === 'major' ? 'Major Projects Portfolio' : 'Detail Engineering Projects'}
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              {activeTab === 'major'
                ? 'Comprehensive engineering projects showcasing our expertise in structural design and project management across various sectors.'
                : 'Detailed engineering design projects demonstrating our capability in delivering complex design solutions for diverse industries.'}
            </p>
          </div>

          {/* Major Projects Grid - Style from first file */}
          {activeTab === 'major' && (
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 stagger-children">
              {majorProjects.map((project) => (
                <div
                  key={project.id}
                  className="bg-white rounded-2xl shadow-xl overflow-hidden hover-lift hover:shadow-2xl transition-all duration-300 group cursor-pointer"
                  onClick={() => openProjectDetails(project)}
                >
                  <div className="relative h-64 overflow-hidden">
                    <Image
                      src={project.image}
                      alt={project.name}
                      fill
                      className="object-cover group-hover:scale-110 transition duration-700"
                    />
                    <div className="absolute top-4 right-4 bg-accent text-primary px-3 py-1 rounded-full text-sm font-bold">
                      {project.sector}
                    </div>
                    <div className="absolute bottom-4 left-4">
                      <span className="bg-primary/80 text-white px-3 py-1 rounded-full text-sm">
                        {project.cost}
                      </span>
                    </div>
                  </div>
                  <div className="p-6">
                    <h3 className="text-2xl font-bold text-primary mb-2">{project.name}</h3>
                    <p className="text-accent font-semibold mb-3">{project.location}</p>
                    <p className="text-gray-600 mb-4 line-clamp-2">{project.structures}</p>

                    {/* Quick Specs */}
                    <div className="grid grid-cols-3 gap-2 mb-4">
                      <div className="text-center p-2 bg-gray-50 rounded">
                        <p className="text-xs text-gray-500">Length</p>
                        <p className="font-bold text-primary">{project.dimensions.length}m</p>
                      </div>
                      <div className="text-center p-2 bg-gray-50 rounded">
                        <p className="text-xs text-gray-500">Width</p>
                        <p className="font-bold text-primary">{project.dimensions.width}m</p>
                      </div>
                      <div className="text-center p-2 bg-gray-50 rounded">
                        <p className="text-xs text-gray-500">Height</p>
                        <p className="font-bold text-primary">
                          {typeof project.dimensions.height === 'number' ? `${project.dimensions.height}m` : project.dimensions.height}
                        </p>
                      </div>
                    </div>

                    <button className="text-primary font-medium flex items-center group-hover:text-accent transition">
                      <span>View Full Details</span>
                      <svg className="w-5 h-5 ml-2 group-hover:translate-x-2 transition" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                      </svg>
                    </button>
                  </div>
                </div>
              ))}
            </div>
          )}

          {/* Detail Engineering Projects Grid - Style from second file with grouping */}
          {activeTab === 'detail' && (
            <>
              {/* Chennai Projects */}
              <div className="mb-16">
                <div className="flex items-center mb-8">
                  <div className="w-12 h-12 bg-accent rounded-full flex items-center justify-center text-primary text-2xl font-bold">
                    🏙️
                  </div>
                  <h2 className="text-2xl md:text-3xl font-bold text-primary ml-4">Chennai Projects</h2>
                  <span className="ml-4 bg-accent/20 text-primary px-3 py-1 rounded-full text-sm">
                    {groupedDetailProjects.chennai.length} Projects
                  </span>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 stagger-children">
                  {groupedDetailProjects.chennai.map((project) => (
                    <div
                      key={project.id}
                      className="bg-white rounded-xl shadow-lg overflow-hidden hover-lift hover:shadow-xl transition-all duration-300 group cursor-pointer"
                      onClick={() => openProjectDetails(project)}
                    >
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
                        <p className="text-gray-600 text-sm mb-4 line-clamp-2">{project.description}</p>
                        <div className="flex items-center text-gray-500 text-sm">
                          <svg className="w-4 h-4 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                          </svg>
                          {project.location}
                        </div>
                        <button className="mt-3 text-primary text-sm font-medium flex items-center group-hover:text-accent transition">
                          <span>View Details</span>
                          <svg className="w-4 h-4 ml-1 group-hover:translate-x-1 transition" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                          </svg>
                        </button>
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
                    {groupedDetailProjects.hyderabad.length} Projects
                  </span>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 stagger-children">
                  {groupedDetailProjects.hyderabad.map((project) => (
                    <div
                      key={project.id}
                      className="bg-white rounded-xl shadow-lg overflow-hidden hover-lift hover:shadow-xl transition-all duration-300 group cursor-pointer"
                      onClick={() => openProjectDetails(project)}
                    >
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
                        <p className="text-gray-600 text-sm mb-4 line-clamp-2">{project.description}</p>
                        <div className="flex items-center text-gray-500 text-sm">
                          <svg className="w-4 h-4 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                          </svg>
                          {project.location}
                        </div>
                        <button className="mt-3 text-primary text-sm font-medium flex items-center group-hover:text-accent transition">
                          <span>View Details</span>
                          <svg className="w-4 h-4 ml-1 group-hover:translate-x-1 transition" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                          </svg>
                        </button>
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
                    {groupedDetailProjects.others.length} Projects
                  </span>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 stagger-children">
                  {groupedDetailProjects.others.map((project) => (
                    <div
                      key={project.id}
                      className="bg-white rounded-xl shadow-lg overflow-hidden hover-lift hover:shadow-xl transition-all duration-300 group cursor-pointer"
                      onClick={() => openProjectDetails(project)}
                    >
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
                        <p className="text-gray-600 text-sm mb-4 line-clamp-2">{project.description}</p>
                        <div className="flex items-center text-gray-500 text-sm">
                          <svg className="w-4 h-4 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                          </svg>
                          {project.location}
                        </div>
                        <button className="mt-3 text-primary text-sm font-medium flex items-center group-hover:text-accent transition">
                          <span>View Details</span>
                          <svg className="w-4 h-4 ml-1 group-hover:translate-x-1 transition" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                          </svg>
                        </button>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </>
          )}
        </div>
      </section>

      {/* Project Details Modal - Enhanced to handle both project types */}
      {showModal && selectedProject && (
        <div className="fixed inset-0 z-50 overflow-y-auto" aria-labelledby="modal-title" role="dialog" aria-modal="true">
          <div className="flex items-end justify-center min-h-screen pt-4 px-4 pb-20 text-center sm:block sm:p-0">
            <div className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity" aria-hidden="true" onClick={() => setShowModal(false)}></div>

            <div className="inline-block align-bottom bg-white rounded-2xl text-left overflow-hidden shadow-xl transform transition-all sm:my-8 sm:align-middle sm:max-w-4xl sm:w-full animate-scaleIn">
              <div className="bg-white px-4 pt-5 pb-4 sm:p-6 sm:pb-4">
                <div className="sm:flex sm:items-start">
                  <div className="mt-3 text-center sm:mt-0 sm:text-left w-full">
                    <div className="flex justify-between items-center mb-4">
                      <h3 className="text-2xl font-bold text-primary" id="modal-title">
                        {selectedProject.name || selectedProject.title}
                      </h3>
                      <button onClick={() => setShowModal(false)} className="text-gray-400 hover:text-gray-500">
                        <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                        </svg>
                      </button>
                    </div>

                    <div className="bg-gray-50 p-6 rounded-xl mb-6">
                      <div className="grid md:grid-cols-2 gap-6">
                        <div>
                          <p className="text-sm text-gray-500 mb-1">Location</p>
                          <p className="font-semibold text-primary mb-4">{selectedProject.location}</p>

                          {selectedProject.scope && (
                            <>
                              <p className="text-sm text-gray-500 mb-1">Scope of Work</p>
                              <p className="text-gray-700 mb-4">{selectedProject.scope}</p>
                            </>
                          )}

                          {selectedProject.client && (
                            <>
                              <p className="text-sm text-gray-500 mb-1">Client</p>
                              <p className="text-gray-700 mb-4">{selectedProject.client}</p>
                            </>
                          )}

                          <p className="text-sm text-gray-500 mb-1">Responsibility</p>
                          <p className="text-gray-700 mb-4">{selectedProject.responsibility || 'Detailed Engineering Design'}</p>
                        </div>

                        <div>
                          <p className="text-sm text-gray-500 mb-1">Project Cost</p>
                          <p className="text-2xl font-bold text-accent mb-4">{selectedProject.cost}</p>

                          <p className="text-sm text-gray-500 mb-1">Structures Designed</p>
                          <p className="text-gray-700">{selectedProject.structures}</p>
                        </div>
                      </div>
                    </div>

                    {/* Detailed Dimensions Table */}
                    <div className="mb-6">
                      <h4 className="font-bold text-primary text-lg mb-3">Project Dimensions</h4>
                      <div className="grid grid-cols-3 gap-4">
                        <div className="bg-primary text-white p-4 rounded-lg text-center">
                          <p className="text-sm opacity-80">Length</p>
                          <p className="text-2xl font-bold">
                            {typeof selectedProject.dimensions.length === 'number'
                              ? `${selectedProject.dimensions.length}m`
                              : selectedProject.dimensions.length}
                          </p>
                        </div>
                        <div className="bg-primary text-white p-4 rounded-lg text-center">
                          <p className="text-sm opacity-80">Width</p>
                          <p className="text-2xl font-bold">
                            {typeof selectedProject.dimensions.width === 'number'
                              ? `${selectedProject.dimensions.width}m`
                              : selectedProject.dimensions.width}
                          </p>
                        </div>
                        <div className="bg-primary text-white p-4 rounded-lg text-center">
                          <p className="text-sm opacity-80">Height</p>
                          <p className="text-2xl font-bold">
                            {typeof selectedProject.dimensions.height === 'number'
                              ? `${selectedProject.dimensions.height}m`
                              : selectedProject.dimensions.height}
                          </p>
                        </div>
                      </div>
                    </div>

                    {/* Description for detail projects */}
                    {selectedProject.description && (
                      <div className="mb-4">
                        <h4 className="font-bold text-primary text-lg mb-2">Project Description</h4>
                        <p className="text-gray-700">{selectedProject.description}</p>
                      </div>
                    )}

                    {/* Additional Info */}
                    <div className="border-t pt-4">
                      <p className="text-sm text-gray-500">
                        * Detailed engineering design and project management services provided for complete project lifecycle.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="bg-gray-50 px-4 py-3 sm:px-6 sm:flex sm:flex-row-reverse">
                <button
                  type="button"
                  className="btn-primary"
                  onClick={() => setShowModal(false)}
                >
                  Close
                </button>
              </div>
            </div>
          </div>
        </div>
      )}

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
                <li><Link href="/contact" className="text-gray-300 hover:text-accent transition">Contact</Link></li>
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