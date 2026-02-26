import Head from 'next/head';
import Link from 'next/link';
import Image from 'next/image';
import { useState } from 'react';

export default function About() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [logoError, setLogoError] = useState(false);

  return (
      <>
        <Head>
          <title>About Us - SSM ENGINEERING & PROJECT ADVISORY</title>
          <meta name="description" content="Learn about SSM ENGINEERING & PROJECT ADVISORY - Integrated Engineering & Project Advisory Firm" />
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
                src="/images/about us.jpg"
                alt="Services"
                fill
                className="object-cover"
                priority
            />
            <div className="absolute inset-0 bg-gradient-to-r from-primary/90 to-primary/70"></div>
          </div>
          <div className="relative container-custom h-full flex items-center">
            <div className="text-white max-w-3xl animate-fadeInLeft">
              <h1 className="text-5xl md:text-6xl font-bold mb-4">About Us</h1>
              <p className="text-xl text-accent">SSM ENGINEERING & PROJECT ADVISORY</p>
            </div>
          </div>
        </section>

      {/* Company Overview */}
      <section className="py-16">
        <div className="container-custom">
          <h2 className="section-title">Who We Are</h2>
          <div className="max-w-4xl mx-auto space-y-6 text-gray-700 text-lg leading-relaxed">
            <p className="font-medium text-primary text-xl">INTEGRATED ENGINEERING & PROJECT ADVISORY FIRM</p>
            <p>
              In an environment defined by complexity, capital intensity, and heightened stakeholder expectations, 
              successful infrastructure delivery demands structured decision-making, strong governance, and disciplined 
              execution. We are not a conventional design consultancy—we are a project advisory and engineering management 
              firm that partners with clients from project inception through commissioning and handover.
            </p>
            <p>
              Founded on extensive experience in civil and structural engineering, project management, and industrial 
              project execution, our role extends far beyond producing drawings. We support clients and developers at 
              every stage of the project lifecycle—from early feasibility, planning, and design development to procurement, 
              construction management, and operational readiness—ensuring that technical decisions consistently align with 
              commercial and business objectives.
            </p>
            <p>
              Through our EPCM and project management services, we provide independent oversight, governance, risk management, 
              and performance control across diverse sectors. By applying rigorous methodologies, data-driven controls, and 
              multidisciplinary expertise, we help clients achieve predictable outcomes in cost, schedule, quality, safety, 
              and long-term asset performance.
            </p>
            <p>
              Our focus is on creating long-term value, not merely completing projects. We work collaboratively with clients, 
              owners, developers, and key stakeholders to protect investments, enhance asset efficiency and deliver infrastructure 
              that is resilient, sustainable, and future-ready.
            </p>
            <p className="font-medium">
              We partner with organizations that value insight-led execution, accountability, and excellence in end-to-end project 
              delivery.
            </p>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-16 bg-gray-50">
        <div className="container-custom">
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-white p-8 rounded-xl shadow-lg">
              <h3 className="text-2xl font-bold text-primary mb-4">Our Vision</h3>
              <p className="text-gray-700 text-lg">
                To be a leading multidisciplinary engineering and consulting firm, recognized for delivering sustainable, 
                innovative, and high-value infrastructure through integrated expertise and disciplined execution.
              </p>
            </div>
            <div className="bg-white p-8 rounded-xl shadow-lg">
              <h3 className="text-2xl font-bold text-primary mb-4">Our Mission</h3>
              <p className="text-gray-700 text-lg">
                To provide end-to-end infrastructure solutions by seamlessly combining architecture, engineering, and 
                project management—driving efficiency, technical excellence, and measurable long-term value for clients 
                and communities.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Our Approach */}
      <section className="py-16">
        <div className="container-custom">
          <h2 className="section-title">Our Approach</h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="p-6 border-l-4 border-accent bg-gray-50">
              <h3 className="text-xl font-bold text-primary mb-3">Leadership & Team Building</h3>
              <p className="text-gray-700">Leading cross-functional teams through complex projects, fostering collaboration and efficiency.</p>
            </div>
            <div className="p-6 border-l-4 border-accent bg-gray-50">
              <h3 className="text-xl font-bold text-primary mb-3">Problem-Solving</h3>
              <p className="text-gray-700">Quickly identifying issues during design, procurement, or construction phases and developing cost-effective solutions.</p>
            </div>
            <div className="p-6 border-l-4 border-accent bg-gray-50">
              <h3 className="text-xl font-bold text-primary mb-3">Communication Skills</h3>
              <p className="text-gray-700">Effectively communicating technical details to both technical and non-technical stakeholders.</p>
            </div>
            <div className="p-6 border-l-4 border-accent bg-gray-50">
              <h3 className="text-xl font-bold text-primary mb-3">Time Management</h3>
              <p className="text-gray-700">Ensuring project timelines are adhered to, even in the face of unforeseen challenges, while maintaining high-quality outcomes.</p>
            </div>
            <div className="p-6 border-l-4 border-accent bg-gray-50 md:col-span-2">
              <h3 className="text-xl font-bold text-primary mb-3">Adaptability</h3>
              <p className="text-gray-700">Ability to adapt to changing project scopes, industry trends, and client needs while maintaining a focus on project goals.</p>
            </div>
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
