import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { 
  Truck, 
  Package, 
  Activity, 
  Globe, 
  MapPin, 
  Clock, 
  Phone, 
  Mail, 
  Navigation, 
  ShieldCheck, 
  Box, 
  Menu, 
  X,
  ChevronRight,
  TrendingUp,
  Award
} from "lucide-react";
import { Link } from "wouter";

// Animation Variants
const fadeInUp = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } }
};

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1
    }
  }
};

export default function Home() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    setMobileMenuOpen(false);
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div className="min-h-[100dvh] bg-background text-foreground font-sans dark overflow-hidden selection:bg-primary selection:text-primary-foreground">
      
      {/* Navigation */}
      <nav 
        className={`fixed top-0 w-full z-50 transition-all duration-300 ${
          isScrolled ? "bg-[#0e1b2c]/95 backdrop-blur-md border-b border-white/10 py-4 shadow-lg" : "bg-transparent py-6"
        }`}
        data-testid="navbar"
      >
        <div className="container mx-auto px-6 md:px-12 flex justify-between items-center">
          <div className="flex items-center gap-2 cursor-pointer" onClick={() => scrollToSection("home")} data-testid="nav-logo">
            <div className="w-10 h-10 bg-primary flex items-center justify-center font-bold text-white text-xl tracking-tighter">
              E
            </div>
            <span className="font-bold text-xl tracking-wider text-white hidden sm:block">ECTSA</span>
          </div>

          <div className="hidden md:flex gap-8 items-center text-sm font-semibold tracking-wide text-white/90">
            <button onClick={() => scrollToSection("about")} className="hover:text-primary transition-colors uppercase" data-testid="nav-about">About</button>
            <button onClick={() => scrollToSection("services")} className="hover:text-primary transition-colors uppercase" data-testid="nav-services">Services</button>
            <button onClick={() => scrollToSection("technology")} className="hover:text-primary transition-colors uppercase" data-testid="nav-technology">Technology</button>
            <button onClick={() => scrollToSection("contact")} className="bg-primary text-white px-6 py-2.5 font-bold hover:bg-primary/90 transition-colors uppercase tracking-widest" data-testid="nav-cta">
              Request a Quote
            </button>
          </div>

          <button 
            className="md:hidden text-white p-2" 
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            data-testid="nav-mobile-toggle"
          >
            {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </nav>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="fixed inset-0 z-40 bg-[#0e1b2c] flex flex-col items-center justify-center gap-8 md:hidden">
          <button onClick={() => scrollToSection("about")} className="text-2xl font-bold text-white uppercase tracking-widest" data-testid="mobile-nav-about">About</button>
          <button onClick={() => scrollToSection("services")} className="text-2xl font-bold text-white uppercase tracking-widest" data-testid="mobile-nav-services">Services</button>
          <button onClick={() => scrollToSection("technology")} className="text-2xl font-bold text-white uppercase tracking-widest" data-testid="mobile-nav-technology">Technology</button>
          <button onClick={() => scrollToSection("contact")} className="mt-8 bg-primary text-white px-8 py-4 text-xl font-bold uppercase tracking-widest" data-testid="mobile-nav-cta">
            Request a Quote
          </button>
        </div>
      )}

      {/* Hero Section */}
      <section id="home" className="relative h-[100vh] flex items-center justify-center pt-20" data-testid="section-hero">
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-gradient-to-r from-[#0e1b2c] via-[#0e1b2c]/80 to-transparent z-10" />
          <div className="absolute inset-0 bg-black/40 z-10" />
          <img 
            src="/hero-bg.png" 
            alt="Logistics trucks on highway at dusk" 
            className="w-full h-full object-cover"
          />
        </div>

        <div className="container relative z-20 mx-auto px-6 md:px-12 text-white">
          <motion.div 
            initial="hidden"
            animate="visible"
            variants={staggerContainer}
            className="max-w-3xl"
          >
            <motion.div variants={fadeInUp} className="flex items-center gap-4 mb-6">
              <div className="h-[2px] w-12 bg-primary"></div>
              <span className="text-primary font-bold uppercase tracking-widest text-sm">Empresa Coclesana de Transporte, S.A.</span>
            </motion.div>
            
            <motion.h1 variants={fadeInUp} className="text-5xl md:text-7xl font-black leading-[1.1] mb-6 tracking-tight">
              RELIABLE <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-orange-400">LOGISTICS</span><br />
              SOLUTIONS ACROSS PANAMA
            </motion.h1>
            
            <motion.p variants={fadeInUp} className="text-lg md:text-xl text-white/80 mb-10 max-w-2xl font-medium leading-relaxed">
              Over 28 years of experience in transportation, distribution, and dry cargo logistics. The heavyweight backbone of Panama's supply chain.
            </motion.p>
            
            <motion.div variants={fadeInUp} className="flex flex-wrap gap-4">
              <button onClick={() => scrollToSection("contact")} className="bg-primary text-white px-8 py-4 font-bold hover:bg-white hover:text-[#0e1b2c] transition-colors uppercase tracking-widest flex items-center gap-2 group" data-testid="hero-cta">
                Request a Quote <ChevronRight className="group-hover:translate-x-1 transition-transform" />
              </button>
              <button onClick={() => scrollToSection("services")} className="border border-white/30 bg-white/5 backdrop-blur-sm text-white px-8 py-4 font-bold hover:bg-white/10 transition-colors uppercase tracking-widest" data-testid="hero-secondary-cta">
                Explore Services
              </button>
            </motion.div>
          </motion.div>
        </div>

        {/* Stats Strip Overlaid */}
        <div className="absolute bottom-0 left-0 w-full z-30 transform translate-y-1/2 px-6 md:px-12 hidden md:block">
          <div className="container mx-auto">
            <div className="bg-white text-[#0e1b2c] shadow-2xl flex divide-x divide-gray-200">
              <div className="flex-1 p-8 flex items-center gap-6">
                <div className="bg-[#0e1b2c] p-4 text-primary"><TrendingUp size={32} /></div>
                <div>
                  <h4 className="text-3xl font-black">28+</h4>
                  <p className="text-sm font-bold text-gray-500 uppercase tracking-widest">Years Experience</p>
                </div>
              </div>
              <div className="flex-1 p-8 flex items-center gap-6">
                <div className="bg-[#0e1b2c] p-4 text-primary"><MapPin size={32} /></div>
                <div>
                  <h4 className="text-3xl font-black">100%</h4>
                  <p className="text-sm font-bold text-gray-500 uppercase tracking-widest">Nationwide Coverage</p>
                </div>
              </div>
              <div className="flex-1 p-8 flex items-center gap-6">
                <div className="bg-[#0e1b2c] p-4 text-primary"><Clock size={32} /></div>
                <div>
                  <h4 className="text-3xl font-black">24/7</h4>
                  <p className="text-sm font-bold text-gray-500 uppercase tracking-widest">Operations Support</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-24 md:py-32 bg-white text-[#0e1b2c]" data-testid="section-about">
        <div className="container mx-auto px-6 md:px-12">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <motion.div 
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }}
              variants={staggerContainer}
            >
              <motion.div variants={fadeInUp} className="flex items-center gap-4 mb-4">
                <div className="h-[2px] w-12 bg-primary"></div>
                <span className="text-primary font-bold uppercase tracking-widest text-sm">About ECTSA</span>
              </motion.div>
              <motion.h2 variants={fadeInUp} className="text-4xl md:text-5xl font-black mb-6 leading-tight">
                THE LOGISTICS BACKBONE <br/>OF THE ECONOMY
              </motion.h2>
              <motion.p variants={fadeInUp} className="text-gray-600 mb-6 text-lg leading-relaxed">
                We are a Panamanian logistics company with extensive experience in transportation, dry cargo distribution, and supply chain operations nationwide. 
              </motion.p>
              <motion.p variants={fadeInUp} className="text-gray-600 mb-8 text-lg leading-relaxed">
                Through innovation, operational efficiency, and continuous improvement, ECTSA has evolved into a fully logistics-focused powerhouse. We don't just move cargo; we optimize your entire distribution network with industrial authority.
              </motion.p>
              
              <motion.div variants={fadeInUp} className="grid grid-cols-2 gap-6 mb-8">
                <div className="flex items-start gap-3">
                  <ShieldCheck className="text-primary mt-1 flex-shrink-0" />
                  <div>
                    <h5 className="font-bold">Trusted Reliability</h5>
                    <p className="text-sm text-gray-500">Zero compromises on delivery.</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <Award className="text-primary mt-1 flex-shrink-0" />
                  <div>
                    <h5 className="font-bold">Industry Leaders</h5>
                    <p className="text-sm text-gray-500">Setting the standard since 1996.</p>
                  </div>
                </div>
              </motion.div>
              
              <motion.button 
                variants={fadeInUp}
                onClick={() => scrollToSection("contact")}
                className="bg-[#0e1b2c] text-white px-8 py-4 font-bold hover:bg-primary transition-colors uppercase tracking-widest inline-block"
                data-testid="about-cta"
              >
                Partner With Us
              </motion.button>
            </motion.div>

            <motion.div 
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.8 }}
              className="relative h-[600px] w-full"
            >
              <div className="absolute inset-0 bg-[#0e1b2c] transform translate-x-4 translate-y-4"></div>
              <img 
                src="/fleet-bg.png" 
                alt="ECTSA Fleet Operations" 
                className="absolute inset-0 w-full h-full object-cover border-4 border-white shadow-xl grayscale-[20%] hover:grayscale-0 transition-all duration-500"
              />
              
              {/* Floating Badge */}
              <div className="absolute bottom-8 left-8 bg-primary text-white p-6 shadow-2xl max-w-xs">
                <div className="flex items-center gap-4 mb-2">
                  <Globe size={32} />
                  <span className="font-black text-2xl">100%</span>
                </div>
                <p className="font-bold text-sm uppercase tracking-widest">National Coverage</p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-24 md:py-32 bg-[#0e1b2c] relative" data-testid="section-services">
        <div className="absolute top-0 right-0 w-1/3 h-full bg-[#13253a]"></div>
        <div className="container relative z-10 mx-auto px-6 md:px-12">
          
          <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-8">
            <motion.div 
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={staggerContainer}
              className="max-w-2xl"
            >
              <motion.div variants={fadeInUp} className="flex items-center gap-4 mb-4">
                <div className="h-[2px] w-12 bg-primary"></div>
                <span className="text-primary font-bold uppercase tracking-widest text-sm">Our Operations</span>
              </motion.div>
              <motion.h2 variants={fadeInUp} className="text-4xl md:text-5xl font-black text-white leading-tight">
                INDUSTRIAL SCALE <br/>LOGISTICS SERVICES
              </motion.h2>
            </motion.div>
          </div>

          <motion.div 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-50px" }}
            variants={staggerContainer}
            className="grid md:grid-cols-2 lg:grid-cols-4 gap-6"
          >
            {/* Service 1 */}
            <motion.div variants={fadeInUp} className="bg-[#172a42] border border-white/5 p-8 hover:bg-[#1e3656] transition-colors group">
              <div className="w-16 h-16 bg-[#0e1b2c] text-primary flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                <Truck size={32} />
              </div>
              <h3 className="text-xl font-bold text-white mb-4">National Dry Cargo Transportation</h3>
              <p className="text-white/60 mb-6 text-sm leading-relaxed">
                Heavy-duty road transport across Panama with modern fleet capabilities for bulk and dry cargo.
              </p>
              <div className="h-[2px] w-12 bg-primary/30 group-hover:w-full group-hover:bg-primary transition-all duration-300"></div>
            </motion.div>

            {/* Service 2 */}
            <motion.div variants={fadeInUp} className="bg-[#172a42] border border-white/5 p-8 hover:bg-[#1e3656] transition-colors group">
              <div className="w-16 h-16 bg-[#0e1b2c] text-primary flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                <Package size={32} />
              </div>
              <h3 className="text-xl font-bold text-white mb-4">Distribution & Logistics</h3>
              <p className="text-white/60 mb-6 text-sm leading-relaxed">
                End-to-end supply chain optimization ensuring your products reach their destination efficiently.
              </p>
              <div className="h-[2px] w-12 bg-primary/30 group-hover:w-full group-hover:bg-primary transition-all duration-300"></div>
            </motion.div>

            {/* Service 3 */}
            <motion.div variants={fadeInUp} className="bg-primary p-8 hover:bg-orange-500 transition-colors group transform md:-translate-y-4 shadow-2xl shadow-primary/20">
              <div className="w-16 h-16 bg-white/20 text-white flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                <Box size={32} />
              </div>
              <h3 className="text-xl font-bold text-white mb-4">Cross Docking Operations</h3>
              <p className="text-white/90 mb-6 text-sm leading-relaxed">
                High-speed cargo transfer minimizing storage time and reducing operational costs.
              </p>
              <div className="h-[2px] w-12 bg-white/50 group-hover:w-full group-hover:bg-white transition-all duration-300"></div>
            </motion.div>

            {/* Service 4 */}
            <motion.div variants={fadeInUp} className="bg-[#172a42] border border-white/5 p-8 hover:bg-[#1e3656] transition-colors group">
              <div className="w-16 h-16 bg-[#0e1b2c] text-primary flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                <Activity size={32} />
              </div>
              <h3 className="text-xl font-bold text-white mb-4">Fleet Operations</h3>
              <p className="text-white/60 mb-6 text-sm leading-relaxed">
                Dedicated fleet management, maintenance, and allocation for massive scale requirements.
              </p>
              <div className="h-[2px] w-12 bg-primary/30 group-hover:w-full group-hover:bg-primary transition-all duration-300"></div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Technology Parallax Section */}
      <section id="technology" className="relative py-32 bg-black overflow-hidden" data-testid="section-technology">
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-[#0e1b2c]/90 mix-blend-multiply z-10" />
          <img 
            src="/tech-bg.png" 
            alt="Logistics Technology Dashboard" 
            className="w-full h-full object-cover opacity-40"
          />
        </div>
        
        <div className="container relative z-20 mx-auto px-6 md:px-12 text-white">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            
            <motion.div 
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={staggerContainer}
            >
              <motion.div variants={fadeInUp} className="flex items-center gap-4 mb-4">
                <div className="h-[2px] w-12 bg-primary"></div>
                <span className="text-primary font-bold uppercase tracking-widest text-sm">Digital Edge</span>
              </motion.div>
              <motion.h2 variants={fadeInUp} className="text-4xl md:text-5xl font-black mb-8 leading-tight">
                OPERATIONAL <br/>TRANSPARENCY
              </motion.h2>
              <motion.p variants={fadeInUp} className="text-white/80 mb-10 text-lg leading-relaxed max-w-lg">
                We leverage cutting-edge technology to maintain total control over the supply chain. You are never in the dark about your cargo.
              </motion.p>

              <div className="space-y-6">
                <motion.div variants={fadeInUp} className="flex items-start gap-4 p-4 bg-white/5 border border-white/10 backdrop-blur-sm">
                  <div className="bg-primary/20 p-3 text-primary"><Navigation size={24} /></div>
                  <div>
                    <h4 className="font-bold text-xl mb-1">Live GPS Tracking</h4>
                    <p className="text-white/60 text-sm">Real-time geolocation of every asset in transit.</p>
                  </div>
                </motion.div>
                
                <motion.div variants={fadeInUp} className="flex items-start gap-4 p-4 bg-white/5 border border-white/10 backdrop-blur-sm">
                  <div className="bg-primary/20 p-3 text-primary"><Activity size={24} /></div>
                  <div>
                    <h4 className="font-bold text-xl mb-1">Delivery Monitoring</h4>
                    <p className="text-white/60 text-sm">Precision analytics on route efficiency and ETA.</p>
                  </div>
                </motion.div>
              </div>
            </motion.div>

            <motion.div 
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="relative hidden md:block"
            >
              <img 
                src="/warehouse-bg.png" 
                alt="Modern Warehouse Operations" 
                className="w-full h-auto object-cover border-8 border-[#0e1b2c] shadow-2xl grayscale-[30%]"
              />
              <div className="absolute -bottom-8 -left-8 bg-primary p-8 max-w-xs border-4 border-[#0e1b2c]">
                <h4 className="font-black text-2xl mb-2 text-white">Digital Coordination</h4>
                <p className="text-white/90 text-sm">Seamless integration between our fleet and your warehouse systems.</p>
              </div>
            </motion.div>

          </div>
        </div>
      </section>

      {/* CTA / Contact Section */}
      <section id="contact" className="py-24 bg-white text-[#0e1b2c]" data-testid="section-contact">
        <div className="container mx-auto px-6 md:px-12">
          <div className="grid lg:grid-cols-2 gap-16">
            
            <motion.div 
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={staggerContainer}
            >
              <motion.div variants={fadeInUp} className="flex items-center gap-4 mb-4">
                <div className="h-[2px] w-12 bg-primary"></div>
                <span className="text-primary font-bold uppercase tracking-widest text-sm">Get in Touch</span>
              </motion.div>
              <motion.h2 variants={fadeInUp} className="text-4xl md:text-5xl font-black mb-6 leading-tight">
                READY TO MOVE<br/>YOUR BUSINESS?
              </motion.h2>
              <motion.p variants={fadeInUp} className="text-gray-600 mb-10 text-lg">
                Contact our logistics experts for a customized assessment of your distribution and transportation needs.
              </motion.p>

              <div className="space-y-8">
                <motion.div variants={fadeInUp} className="flex items-center gap-6">
                  <div className="w-16 h-16 bg-gray-100 flex items-center justify-center text-primary">
                    <Phone size={28} />
                  </div>
                  <div>
                    <p className="text-sm font-bold text-gray-500 uppercase tracking-widest mb-1">Call Us Directly</p>
                    <a href="tel:+50767042577" className="text-2xl font-black hover:text-primary transition-colors">+507 6704-2577</a>
                  </div>
                </motion.div>

                <motion.div variants={fadeInUp} className="flex items-center gap-6">
                  <div className="w-16 h-16 bg-gray-100 flex items-center justify-center text-primary">
                    <Mail size={28} />
                  </div>
                  <div>
                    <p className="text-sm font-bold text-gray-500 uppercase tracking-widest mb-1">Email Operations</p>
                    <a href="mailto:info@ectsa.com" className="text-2xl font-black hover:text-primary transition-colors">info@ectsa.com</a>
                  </div>
                </motion.div>

                <motion.div variants={fadeInUp} className="flex items-center gap-6">
                  <div className="w-16 h-16 bg-gray-100 flex items-center justify-center text-primary">
                    <MapPin size={28} />
                  </div>
                  <div>
                    <p className="text-sm font-bold text-gray-500 uppercase tracking-widest mb-1">Headquarters</p>
                    <p className="text-xl font-bold">Panama City & Nationwide</p>
                  </div>
                </motion.div>
              </div>
            </motion.div>

            <motion.div 
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="bg-[#0e1b2c] p-8 md:p-12 text-white"
            >
              <h3 className="text-3xl font-black mb-8">REQUEST A QUOTE</h3>
              <form className="space-y-6" onSubmit={(e) => e.preventDefault()} data-testid="contact-form">
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label className="text-sm font-bold uppercase tracking-widest text-white/70">Company Name</label>
                    <input type="text" className="w-full bg-[#172a42] border-none text-white px-4 py-4 focus:ring-2 focus:ring-primary outline-none" placeholder="Enter company" />
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm font-bold uppercase tracking-widest text-white/70">Contact Person</label>
                    <input type="text" className="w-full bg-[#172a42] border-none text-white px-4 py-4 focus:ring-2 focus:ring-primary outline-none" placeholder="Enter name" />
                  </div>
                </div>
                
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label className="text-sm font-bold uppercase tracking-widest text-white/70">Email Address</label>
                    <input type="email" className="w-full bg-[#172a42] border-none text-white px-4 py-4 focus:ring-2 focus:ring-primary outline-none" placeholder="Enter email" />
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm font-bold uppercase tracking-widest text-white/70">Phone Number</label>
                    <input type="tel" className="w-full bg-[#172a42] border-none text-white px-4 py-4 focus:ring-2 focus:ring-primary outline-none" placeholder="Enter phone" />
                  </div>
                </div>

                <div className="space-y-2">
                  <label className="text-sm font-bold uppercase tracking-widest text-white/70">Logistics Requirements</label>
                  <textarea rows={4} className="w-full bg-[#172a42] border-none text-white px-4 py-4 focus:ring-2 focus:ring-primary outline-none resize-none" placeholder="Describe your cargo and routes..."></textarea>
                </div>

                <button type="submit" className="w-full bg-primary text-white font-black uppercase tracking-widest py-5 hover:bg-orange-500 transition-colors" data-testid="submit-quote">
                  Submit Request
                </button>
              </form>
            </motion.div>

          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-black py-12 border-t border-white/10" data-testid="footer">
        <div className="container mx-auto px-6 md:px-12 flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 bg-primary flex items-center justify-center font-bold text-white text-sm tracking-tighter">
              E
            </div>
            <span className="font-bold tracking-wider text-white">ECTSA</span>
          </div>
          
          <div className="text-white/50 text-sm font-medium">
            &copy; 2026 ECTSA – Empresa Coclesana de Transporte, S.A. All rights reserved.
          </div>
          
          <div className="flex gap-6 text-sm font-bold text-white/70">
            <a href="#" className="hover:text-primary transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-primary transition-colors">Terms of Service</a>
          </div>
        </div>
      </footer>

    </div>
  );
}
