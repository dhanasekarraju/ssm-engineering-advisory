import Head from 'next/head';
import Link from 'next/link';
import Image from 'next/image';
import {useState} from "react";

export default function Team() {
  const [logoError, setLogoError] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const leadership = [
    {
      name: "Mr. Suriya Narayanan",
      role: "Chief Engineer",
      qualification: "M.E. (HONS) Civil & Structural Engg | Chartered Engg | ISSE",
      experience: "20 Years",
      description: "Dynamic project leadership in large-scale industrial and infrastructure projects. Specializes in process optimization, automation, and utilities across food processing, dairy, beverage, warehousing, data centers, transportation, commercial developments, power generation, high-rise buildings, and solar projects."
    },
    {
      name: "Mr. Hari Krishnan",
      role: "Principle Engineer",
      qualification: "M.Tech. Civil & Structural Engg | AMIE | MIE | Chartered Engg",
      experience: "22+ Years",
      description: "Extensive experience in planning, design, and execution of complex civil and structural engineering projects across hospital buildings, oil & gas facilities, cement plants, offshore structures, high-rise developments, and low-rise buildings."
    }
  ];

  const designTeam = [
    { name: "Mr. Rohin", role: "Design Engineer", qualification: "M.E. Civil & Structural Engg", experience: "3 Years", expertise: "All types of industrial structures" },
    { name: "Ms. Dhanuksha", role: "Design Engineer", qualification: "M.E. Civil & Structural Engg, GET from Anna University with Hons", experience: "Fresh" },
    { name: "Mr. Roobika", role: "Design Engineer", qualification: "B.E. Civil Engg", experience: "2 Years", expertise: "Commercial buildings, residences, and villas" },
    { name: "Mr. Ajay Kumar", role: "Design Engineer", qualification: "B.E. Civil Engg", experience: "3 Years", expertise: "Infrastructure projects" }
  ];

  const draftingTeam = [
    { name: "Mr. Annadurai", role: "Senior Draftsman", qualification: "DCE", experience: "20 Years", expertise: "Inter-department coordination, checking and drafting for all types of civil & structures" },
    { name: "Mr. Vivek Vijayan", role: "Draftsman", qualification: "DCE", experience: "15 Years", expertise: "Drafting and coordination between disciplines" },
    { name: "Mr. Prabhakar", role: "Draftsman", qualification: "DCE", experience: "5 Years", expertise: "Drafting for all types of civil & structures" },
    { name: "Mr. Tharun", role: "Junior Draftsman", qualification: "ITI", experience: "1 Year", expertise: "Drafting of civil building" }
  ];

  const siteTeam = [
    { name: "Mr. Muralidharan", role: "Site Engineer", qualification: "B.E. Mech Engg", experience: "15 Years", expertise: "Steel structural fabrication and erection in all types of steel building, shed, high rise structures, pipe racks" },
    { name: "Mr. Sathish", role: "Site Engineer", qualification: "B.E. Civil Engg", experience: "12 Years", expertise: "Civil & steel structural of all types of steel building, shed, high rise structures, pipe racks" },
    { name: "Mr. Elavarasan", role: "Site Engineer", qualification: "B.E. Civil Engg", experience: "8 Years", expertise: "Civil & steel structural of all types of steel building, shed, high rise structures, pipe racks" },
    { name: "Mr. Saravanan", role: "Site Engineer", qualification: "B.E. Civil Engg", experience: "12 Years", expertise: "Civil & steel structural of all types of steel building, shed, high rise structures, pipe racks" }
  ];

  const supportTeam = [
    { name: "Ms. Jennifer", role: "HR & Accounts", qualification: "B.Com", experience: "3 Years", expertise: "Accounting operations, invoice management, project billing, and HR administration" }
  ];

  return (
      <>
        <Head>
          <title>Our Team - SSM ENGINEERING & PROJECT ADVISORY</title>
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
              <h1 className="text-5xl md:text-6xl font-bold mb-4">Our Team</h1>
              <p className="text-xl text-accent">Experienced Professionals Dedicated to Excellence</p>
            </div>
          </div>
        </section>

      {/* Leadership Team */}
      <section className="py-16">
        <div className="container-custom">
          <h2 className="section-title">Leadership Team</h2>
          <div className="grid md:grid-cols-2 gap-8">
            {leadership.map((member, i) => (
              <div key={i} className="bg-white rounded-xl shadow-lg overflow-hidden border border-gray-100">
                <div className="bg-primary p-4">
                  <h3 className="text-2xl font-bold text-white">{member.name}</h3>
                  <p className="text-accent font-semibold">{member.role}</p>
                </div>
                <div className="p-6">
                  <p className="text-primary font-semibold mb-2">{member.qualification}</p>
                  <p className="text-accent font-bold mb-3">Experience: {member.experience}</p>
                  <p className="text-gray-600">{member.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Design Team */}
      <section className="py-16 bg-gray-50">
        <div className="container-custom">
          <h2 className="section-title">Design Team</h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {designTeam.map((member, i) => (
              <div key={i} className="bg-white p-6 rounded-xl shadow-lg">
                <h3 className="text-xl font-bold text-primary mb-2">{member.name}</h3>
                <p className="text-accent font-semibold mb-2">{member.role}</p>
                <p className="text-sm text-gray-500 mb-2">{member.qualification}</p>
                <p className="font-bold text-primary">Exp: {member.experience}</p>
                {member.expertise && <p className="text-sm text-gray-600 mt-2">{member.expertise}</p>}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Drafting Team */}
      <section className="py-16">
        <div className="container-custom">
          <h2 className="section-title">Drafting Team</h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {draftingTeam.map((member, i) => (
              <div key={i} className="bg-white p-6 rounded-xl shadow-lg border border-gray-100">
                <h3 className="text-xl font-bold text-primary mb-2">{member.name}</h3>
                <p className="text-accent font-semibold mb-2">{member.role}</p>
                <p className="text-sm text-gray-500 mb-2">{member.qualification}</p>
                <p className="font-bold text-primary">Exp: {member.experience}</p>
                <p className="text-sm text-gray-600 mt-2">{member.expertise}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Site Team */}
      <section className="py-16 bg-gray-50">
        <div className="container-custom">
          <h2 className="section-title">Site Team</h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {siteTeam.map((member, i) => (
              <div key={i} className="bg-white p-6 rounded-xl shadow-lg">
                <h3 className="text-xl font-bold text-primary mb-2">{member.name}</h3>
                <p className="text-accent font-semibold mb-2">{member.role}</p>
                <p className="text-sm text-gray-500 mb-2">{member.qualification}</p>
                <p className="font-bold text-primary">Exp: {member.experience}</p>
                <p className="text-sm text-gray-600 mt-2">{member.expertise}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Support Team */}
      <section className="py-16">
        <div className="container-custom">
          <h2 className="section-title">HR & Accounts</h2>
          <div className="max-w-md mx-auto">
            {supportTeam.map((member, i) => (
              <div key={i} className="bg-white p-6 rounded-xl shadow-lg border border-gray-100">
                <h3 className="text-xl font-bold text-primary mb-2">{member.name}</h3>
                <p className="text-accent font-semibold mb-2">{member.role}</p>
                <p className="text-sm text-gray-500 mb-2">{member.qualification}</p>
                <p className="font-bold text-primary">Exp: {member.experience}</p>
                <p className="text-gray-600 mt-3">{member.expertise}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-primary text-white py-12">
        <div className="container-custom">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
            <div>
              <h4 className="text-accent font-bold text-xl mb-4">SSM ENGINEERING</h4>
              <p className="text-gray-300">Integrated Engineering & Project Advisory Firm</p>
            </div>
            <div>
              <h4 className="text-accent font-bold text-xl mb-4">Contact</h4>
              <p className="text-gray-300">Head Office: Velachery, Chennai - 600 042</p>
              <p className="text-gray-300">Email: senthemzurugan@gmail.com</p>
              <p className="text-gray-300">Mobile: 97909 93232</p>
            </div>
            <div>
              <h4 className="text-accent font-bold text-xl mb-4">Quick Links</h4>
              <ul className="space-y-2">
                <li><Link href="/about" className="text-gray-300 hover:text-accent">About</Link></li>
                <li><Link href="/team" className="text-gray-300 hover:text-accent">Team</Link></li>
                <li><Link href="/projects" className="text-gray-300 hover:text-accent">Projects</Link></li>
              </ul>
            </div>
          </div>
          <div className="border-t border-gray-700 pt-8 text-center text-gray-400">
            © 2026 SSM ENGINEERING & PROJECT ADVISORY. All rights reserved.
          </div>
        </div>
      </footer>
    </>
  );
}
