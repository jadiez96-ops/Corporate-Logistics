import { useState, useEffect } from "react";
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
  Award,
  User,
  Briefcase
} from "lucide-react";
import logoPath from "@/assets/ectsa-logo.png";

const fadeInUp = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } }
};

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.1 } }
};

type Lang = "en" | "es";

const t = {
  en: {
    navAbout: "About",
    navServices: "Services",
    navTechnology: "Technology",
    navContact: "Contact",
    navCta: "Request a Quote",
    heroTag: "Empresa Coclesana de Transporte, S.A.",
    heroTitle1: "RELIABLE",
    heroTitle2: "LOGISTICS",
    heroTitle3: "SOLUTIONS ACROSS PANAMA",
    heroSub: "Over 28 years of experience in transportation, distribution, and dry cargo logistics. The heavyweight backbone of Panama's supply chain.",
    heroCta: "Request a Quote",
    heroSecondary: "Explore Services",
    statYears: "Years Experience",
    statCoverage: "Nationwide Coverage",
    statOps: "Operations Support",
    aboutTag: "About ECTSA",
    aboutTitle: "THE LOGISTICS BACKBONE OF THE ECONOMY",
    aboutP1: "We are a Panamanian logistics company with extensive experience in transportation, dry cargo distribution, and supply chain operations nationwide.",
    aboutP2: "Through innovation, operational efficiency, and continuous improvement, ECTSA has evolved into a fully logistics-focused powerhouse. We don't just move cargo — we optimize your entire distribution network.",
    aboutReliability: "Trusted Reliability",
    aboutReliabilitySub: "Zero compromises on delivery.",
    aboutLeaders: "Industry Leaders",
    aboutLeadersSub: "Setting the standard since 1996.",
    aboutCta: "Partner With Us",
    aboutBadge: "National Coverage",
    servicesTag: "Our Operations",
    servicesTitle: "INDUSTRIAL SCALE LOGISTICS SERVICES",
    s1Title: "National Dry Cargo Transportation",
    s1Desc: "Heavy-duty road transport across Panama with modern fleet capabilities for bulk and dry cargo.",
    s2Title: "Distribution & Logistics",
    s2Desc: "End-to-end supply chain optimization ensuring your products reach their destination efficiently.",
    s3Title: "Cross Docking Operations",
    s3Desc: "High-speed cargo transfer minimizing storage time and reducing operational costs.",
    s4Title: "Fleet Operations",
    s4Desc: "Dedicated fleet management, maintenance, and allocation for massive scale requirements.",
    techTag: "Digital Edge",
    techTitle: "OPERATIONAL TRANSPARENCY",
    techP: "We leverage cutting-edge technology to maintain total control over the supply chain. You are never in the dark about your cargo.",
    tech1Title: "Live GPS Tracking",
    tech1Desc: "Real-time geolocation of every asset in transit.",
    tech2Title: "Delivery Monitoring",
    tech2Desc: "Precision analytics on route efficiency and ETA.",
    techBadgeTitle: "Digital Coordination",
    techBadgeDesc: "Seamless integration between our fleet and your warehouse systems.",
    contactTag: "Get in Touch",
    contactTitle: "READY TO MOVE YOUR BUSINESS?",
    contactSub: "Contact our logistics experts for a customized assessment of your distribution and transportation needs.",
    contactCallLabel: "Call Us Directly",
    contactEmailLabel: "Email Operations",
    contactLocationLabel: "Headquarters",
    contactLocation: "Aguadulce City, Province of Coclé, Panama",
    contactName: "Angel Diez",
    contactRole: "Head of Operations",
    contactOrg: "ECTSA – Empresa Coclesana de Transporte, S.A.",
    formTitle: "REQUEST A QUOTE",
    formCompany: "Company Name",
    formCompanyPh: "Enter company",
    formContact: "Contact Person",
    formContactPh: "Enter name",
    formEmail: "Email Address",
    formEmailPh: "Enter email",
    formPhone: "Phone Number",
    formPhonePh: "Enter phone",
    formReqs: "Logistics Requirements",
    formReqsPh: "Describe your cargo and routes...",
    formSubmit: "Submit Request",
    footerRights: "All rights reserved.",
    footerPrivacy: "Privacy Policy",
    footerTerms: "Terms of Service",
  },
  es: {
    navAbout: "Nosotros",
    navServices: "Servicios",
    navTechnology: "Tecnología",
    navContact: "Contacto",
    navCta: "Solicitar Cotización",
    heroTag: "Empresa Coclesana de Transporte, S.A.",
    heroTitle1: "SOLUCIONES",
    heroTitle2: "LOGÍSTICAS",
    heroTitle3: "CONFIABLES EN PANAMÁ",
    heroSub: "Más de 28 años de experiencia en transporte, distribución y logística de carga seca. La columna vertebral del movimiento de mercancías en Panamá.",
    heroCta: "Solicitar Cotización",
    heroSecondary: "Ver Servicios",
    statYears: "Años de Experiencia",
    statCoverage: "Cobertura Nacional",
    statOps: "Soporte Operativo",
    aboutTag: "Acerca de ECTSA",
    aboutTitle: "LA COLUMNA VERTEBRAL LOGÍSTICA DE LA ECONOMÍA",
    aboutP1: "Somos una empresa panameña de logística con amplia experiencia en transporte, distribución de carga seca y operaciones de cadena de suministro a nivel nacional.",
    aboutP2: "A través de la innovación, la eficiencia operativa y la mejora continua, ECTSA se ha convertido en una empresa plenamente orientada a la logística. No solo movemos carga; optimizamos toda su red de distribución.",
    aboutReliability: "Confiabilidad Comprobada",
    aboutReliabilitySub: "Cero compromisos en la entrega.",
    aboutLeaders: "Líderes de la Industria",
    aboutLeadersSub: "Marcando el estándar desde 1996.",
    aboutCta: "Trabajemos Juntos",
    aboutBadge: "Cobertura Nacional",
    servicesTag: "Nuestras Operaciones",
    servicesTitle: "SERVICIOS LOGÍSTICOS A ESCALA INDUSTRIAL",
    s1Title: "Transporte Nacional de Carga Seca",
    s1Desc: "Transporte por carretera a través de Panamá con capacidades modernas de flota para carga masiva y seca.",
    s2Title: "Distribución y Logística",
    s2Desc: "Optimización de la cadena de suministro de extremo a extremo, garantizando que sus productos lleguen a destino de manera eficiente.",
    s3Title: "Operaciones de Cross Docking",
    s3Desc: "Transferencia de carga de alta velocidad que minimiza el tiempo de almacenamiento y reduce costos operativos.",
    s4Title: "Gestión de Flota",
    s4Desc: "Gestión dedicada, mantenimiento y asignación de flota para necesidades de gran escala.",
    techTag: "Ventaja Digital",
    techTitle: "TRANSPARENCIA OPERACIONAL",
    techP: "Aprovechamos tecnología de vanguardia para mantener control total sobre la cadena de suministro. Nunca estará a oscuras sobre su carga.",
    tech1Title: "Rastreo GPS en Tiempo Real",
    tech1Desc: "Geolocalización en tiempo real de cada activo en tránsito.",
    tech2Title: "Monitoreo de Entregas",
    tech2Desc: "Análisis de precisión sobre eficiencia de rutas y tiempo estimado de llegada.",
    techBadgeTitle: "Coordinación Digital",
    techBadgeDesc: "Integración fluida entre nuestra flota y sus sistemas de almacén.",
    contactTag: "Contáctenos",
    contactTitle: "¿LISTO PARA MOVER SU NEGOCIO?",
    contactSub: "Contacte a nuestros expertos en logística para una evaluación personalizada de sus necesidades de distribución y transporte.",
    contactCallLabel: "Llámenos Directamente",
    contactEmailLabel: "Correo Electrónico",
    contactLocationLabel: "Sede Principal",
    contactLocation: "Aguadulce, Provincia de Coclé, Panamá",
    contactName: "Angel Diez",
    contactRole: "Jefe de Operaciones",
    contactOrg: "ECTSA – Empresa Coclesana de Transporte, S.A.",
    formTitle: "SOLICITAR COTIZACIÓN",
    formCompany: "Nombre de la Empresa",
    formCompanyPh: "Ingrese la empresa",
    formContact: "Persona de Contacto",
    formContactPh: "Ingrese el nombre",
    formEmail: "Correo Electrónico",
    formEmailPh: "Ingrese el correo",
    formPhone: "Número de Teléfono",
    formPhonePh: "Ingrese el teléfono",
    formReqs: "Requerimientos Logísticos",
    formReqsPh: "Describa su carga y rutas...",
    formSubmit: "Enviar Solicitud",
    footerRights: "Todos los derechos reservados.",
    footerPrivacy: "Política de Privacidad",
    footerTerms: "Términos de Servicio",
  }
};

export default function Home() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [lang, setLang] = useState<Lang>("es");
  const [formData, setFormData] = useState({ company: "", contact: "", email: "", phone: "", requirements: "" });
  const [formStatus, setFormStatus] = useState<"idle" | "sending" | "sent" | "error">("idle");

  const tx = t[lang];

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    setMobileMenuOpen(false);
    const element = document.getElementById(id);
    if (element) element.scrollIntoView({ behavior: "smooth" });
  };

  const toggleLang = () => setLang(l => l === "en" ? "es" : "en");

  const handleField = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData(prev => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setFormStatus("sending");
    try {
      const res = await fetch("/api/quote", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });
      if (!res.ok) throw new Error("failed");
      setFormStatus("sent");
      setFormData({ company: "", contact: "", email: "", phone: "", requirements: "" });
    } catch {
      setFormStatus("error");
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
          <div className="flex items-center cursor-pointer" onClick={() => scrollToSection("home")} data-testid="nav-logo">
            <img src={logoPath} alt="ECTSA Logo" className="h-12 w-auto" />
          </div>

          <div className="hidden md:flex gap-8 items-center text-sm font-semibold tracking-wide text-white/90">
            <button onClick={() => scrollToSection("about")} className="hover:text-primary transition-colors uppercase" data-testid="nav-about">{tx.navAbout}</button>
            <button onClick={() => scrollToSection("services")} className="hover:text-primary transition-colors uppercase" data-testid="nav-services">{tx.navServices}</button>
            <button onClick={() => scrollToSection("technology")} className="hover:text-primary transition-colors uppercase" data-testid="nav-technology">{tx.navTechnology}</button>
            <button
              onClick={toggleLang}
              className="border border-white/30 text-white px-3 py-1.5 text-xs font-bold uppercase tracking-widest hover:bg-white/10 transition-colors"
              data-testid="lang-toggle"
            >
              {lang === "en" ? "ES" : "EN"}
            </button>
            <button onClick={() => scrollToSection("contact")} className="bg-primary text-white px-6 py-2.5 font-bold hover:bg-red-700 transition-colors uppercase tracking-widest" data-testid="nav-cta">
              {tx.navCta}
            </button>
          </div>

          <div className="md:hidden flex items-center gap-3">
            <button
              onClick={toggleLang}
              className="border border-white/30 text-white px-3 py-1.5 text-xs font-bold uppercase"
              data-testid="lang-toggle-mobile"
            >
              {lang === "en" ? "ES" : "EN"}
            </button>
            <button
              className="text-white p-2"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              data-testid="nav-mobile-toggle"
            >
              {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="fixed inset-0 z-40 bg-[#0e1b2c] flex flex-col items-center justify-center gap-8 md:hidden">
          <button onClick={() => scrollToSection("about")} className="text-2xl font-bold text-white uppercase tracking-widest" data-testid="mobile-nav-about">{tx.navAbout}</button>
          <button onClick={() => scrollToSection("services")} className="text-2xl font-bold text-white uppercase tracking-widest" data-testid="mobile-nav-services">{tx.navServices}</button>
          <button onClick={() => scrollToSection("technology")} className="text-2xl font-bold text-white uppercase tracking-widest" data-testid="mobile-nav-technology">{tx.navTechnology}</button>
          <button onClick={() => scrollToSection("contact")} className="mt-8 bg-primary text-white px-8 py-4 text-xl font-bold uppercase tracking-widest" data-testid="mobile-nav-cta">
            {tx.navCta}
          </button>
        </div>
      )}

      {/* Hero Section */}
      <section id="home" className="relative h-[100vh] flex items-center justify-center pt-20" data-testid="section-hero">
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-gradient-to-r from-[#0e1b2c] via-[#0e1b2c]/80 to-transparent z-10" />
          <div className="absolute inset-0 bg-black/40 z-10" />
          <img src="/hero-bg.png" alt="Logistics trucks on highway at dusk" className="w-full h-full object-cover" />
        </div>

        <div className="container relative z-20 mx-auto px-6 md:px-12 text-white">
          <motion.div initial="hidden" animate="visible" variants={staggerContainer} className="max-w-3xl">
            <motion.div variants={fadeInUp} className="flex items-center gap-4 mb-6">
              <div className="h-[2px] w-12 bg-primary"></div>
              <span className="text-primary font-bold uppercase tracking-widest text-sm">{tx.heroTag}</span>
            </motion.div>

            <motion.h1 variants={fadeInUp} className="text-5xl md:text-7xl font-black leading-[1.1] mb-6 tracking-tight">
              {tx.heroTitle1} <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-red-400">{tx.heroTitle2}</span><br />
              {tx.heroTitle3}
            </motion.h1>

            <motion.p variants={fadeInUp} className="text-lg md:text-xl text-white/80 mb-10 max-w-2xl font-medium leading-relaxed">
              {tx.heroSub}
            </motion.p>

            <motion.div variants={fadeInUp} className="flex flex-wrap gap-4">
              <button onClick={() => scrollToSection("contact")} className="bg-primary text-white px-8 py-4 font-bold hover:bg-white hover:text-[#0e1b2c] transition-colors uppercase tracking-widest flex items-center gap-2 group" data-testid="hero-cta">
                {tx.heroCta} <ChevronRight className="group-hover:translate-x-1 transition-transform" />
              </button>
              <button onClick={() => scrollToSection("services")} className="border border-white/30 bg-white/5 backdrop-blur-sm text-white px-8 py-4 font-bold hover:bg-white/10 transition-colors uppercase tracking-widest" data-testid="hero-secondary-cta">
                {tx.heroSecondary}
              </button>
            </motion.div>
          </motion.div>
        </div>

        {/* Stats Strip */}
        <div className="absolute bottom-0 left-0 w-full z-30 transform translate-y-1/2 px-6 md:px-12 hidden md:block">
          <div className="container mx-auto">
            <div className="bg-white text-[#0e1b2c] shadow-2xl flex divide-x divide-gray-200">
              <div className="flex-1 p-8 flex items-center gap-6">
                <div className="bg-[#0e1b2c] p-4 text-primary"><TrendingUp size={32} /></div>
                <div>
                  <h4 className="text-3xl font-black">28+</h4>
                  <p className="text-sm font-bold text-gray-500 uppercase tracking-widest">{tx.statYears}</p>
                </div>
              </div>
              <div className="flex-1 p-8 flex items-center gap-6">
                <div className="bg-[#0e1b2c] p-4 text-primary"><MapPin size={32} /></div>
                <div>
                  <h4 className="text-3xl font-black">100%</h4>
                  <p className="text-sm font-bold text-gray-500 uppercase tracking-widest">{tx.statCoverage}</p>
                </div>
              </div>
              <div className="flex-1 p-8 flex items-center gap-6">
                <div className="bg-[#0e1b2c] p-4 text-primary"><Clock size={32} /></div>
                <div>
                  <h4 className="text-3xl font-black">24/7</h4>
                  <p className="text-sm font-bold text-gray-500 uppercase tracking-widest">{tx.statOps}</p>
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
            <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }} variants={staggerContainer}>
              <motion.div variants={fadeInUp} className="flex items-center gap-4 mb-4">
                <div className="h-[2px] w-12 bg-primary"></div>
                <span className="text-primary font-bold uppercase tracking-widest text-sm">{tx.aboutTag}</span>
              </motion.div>
              <motion.h2 variants={fadeInUp} className="text-4xl md:text-5xl font-black mb-6 leading-tight">
                {tx.aboutTitle}
              </motion.h2>
              <motion.p variants={fadeInUp} className="text-gray-600 mb-6 text-lg leading-relaxed">{tx.aboutP1}</motion.p>
              <motion.p variants={fadeInUp} className="text-gray-600 mb-8 text-lg leading-relaxed">{tx.aboutP2}</motion.p>

              <motion.div variants={fadeInUp} className="grid grid-cols-2 gap-6 mb-8">
                <div className="flex items-start gap-3">
                  <ShieldCheck className="text-primary mt-1 flex-shrink-0" />
                  <div>
                    <h5 className="font-bold">{tx.aboutReliability}</h5>
                    <p className="text-sm text-gray-500">{tx.aboutReliabilitySub}</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <Award className="text-primary mt-1 flex-shrink-0" />
                  <div>
                    <h5 className="font-bold">{tx.aboutLeaders}</h5>
                    <p className="text-sm text-gray-500">{tx.aboutLeadersSub}</p>
                  </div>
                </div>
              </motion.div>

              <motion.button
                variants={fadeInUp}
                onClick={() => scrollToSection("contact")}
                className="bg-[#0e1b2c] text-white px-8 py-4 font-bold hover:bg-primary transition-colors uppercase tracking-widest inline-block"
                data-testid="about-cta"
              >
                {tx.aboutCta}
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
              <div className="absolute bottom-8 left-8 bg-primary text-white p-6 shadow-2xl max-w-xs">
                <div className="flex items-center gap-4 mb-2">
                  <Globe size={32} />
                  <span className="font-black text-2xl">100%</span>
                </div>
                <p className="font-bold text-sm uppercase tracking-widest">{tx.aboutBadge}</p>
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
            <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={staggerContainer} className="max-w-2xl">
              <motion.div variants={fadeInUp} className="flex items-center gap-4 mb-4">
                <div className="h-[2px] w-12 bg-primary"></div>
                <span className="text-primary font-bold uppercase tracking-widest text-sm">{tx.servicesTag}</span>
              </motion.div>
              <motion.h2 variants={fadeInUp} className="text-4xl md:text-5xl font-black text-white leading-tight">
                {tx.servicesTitle}
              </motion.h2>
            </motion.div>
          </div>

          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-50px" }} variants={staggerContainer} className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            <motion.div variants={fadeInUp} className="bg-[#172a42] border border-white/5 p-8 hover:bg-[#1e3656] transition-colors group" data-testid="service-card-1">
              <div className="w-16 h-16 bg-[#0e1b2c] text-primary flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                <Truck size={32} />
              </div>
              <h3 className="text-xl font-bold text-white mb-4">{tx.s1Title}</h3>
              <p className="text-white/60 mb-6 text-sm leading-relaxed">{tx.s1Desc}</p>
              <div className="h-[2px] w-12 bg-primary/30 group-hover:w-full group-hover:bg-primary transition-all duration-300"></div>
            </motion.div>

            <motion.div variants={fadeInUp} className="bg-[#172a42] border border-white/5 p-8 hover:bg-[#1e3656] transition-colors group" data-testid="service-card-2">
              <div className="w-16 h-16 bg-[#0e1b2c] text-primary flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                <Package size={32} />
              </div>
              <h3 className="text-xl font-bold text-white mb-4">{tx.s2Title}</h3>
              <p className="text-white/60 mb-6 text-sm leading-relaxed">{tx.s2Desc}</p>
              <div className="h-[2px] w-12 bg-primary/30 group-hover:w-full group-hover:bg-primary transition-all duration-300"></div>
            </motion.div>

            <motion.div variants={fadeInUp} className="bg-primary p-8 hover:bg-red-700 transition-colors group transform md:-translate-y-4 shadow-2xl shadow-primary/20" data-testid="service-card-3">
              <div className="w-16 h-16 bg-white/20 text-white flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                <Box size={32} />
              </div>
              <h3 className="text-xl font-bold text-white mb-4">{tx.s3Title}</h3>
              <p className="text-white/90 mb-6 text-sm leading-relaxed">{tx.s3Desc}</p>
              <div className="h-[2px] w-12 bg-white/50 group-hover:w-full group-hover:bg-white transition-all duration-300"></div>
            </motion.div>

            <motion.div variants={fadeInUp} className="bg-[#172a42] border border-white/5 p-8 hover:bg-[#1e3656] transition-colors group" data-testid="service-card-4">
              <div className="w-16 h-16 bg-[#0e1b2c] text-primary flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                <Activity size={32} />
              </div>
              <h3 className="text-xl font-bold text-white mb-4">{tx.s4Title}</h3>
              <p className="text-white/60 mb-6 text-sm leading-relaxed">{tx.s4Desc}</p>
              <div className="h-[2px] w-12 bg-primary/30 group-hover:w-full group-hover:bg-primary transition-all duration-300"></div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Technology Section */}
      <section id="technology" className="relative py-32 bg-black overflow-hidden" data-testid="section-technology">
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-[#0e1b2c]/90 mix-blend-multiply z-10" />
          <img src="/tech-bg.png" alt="Logistics Technology Dashboard" className="w-full h-full object-cover opacity-40" />
        </div>

        <div className="container relative z-20 mx-auto px-6 md:px-12 text-white">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={staggerContainer}>
              <motion.div variants={fadeInUp} className="flex items-center gap-4 mb-4">
                <div className="h-[2px] w-12 bg-primary"></div>
                <span className="text-primary font-bold uppercase tracking-widest text-sm">{tx.techTag}</span>
              </motion.div>
              <motion.h2 variants={fadeInUp} className="text-4xl md:text-5xl font-black mb-8 leading-tight">{tx.techTitle}</motion.h2>
              <motion.p variants={fadeInUp} className="text-white/80 mb-10 text-lg leading-relaxed max-w-lg">{tx.techP}</motion.p>

              <div className="space-y-6">
                <motion.div variants={fadeInUp} className="flex items-start gap-4 p-4 bg-white/5 border border-white/10 backdrop-blur-sm">
                  <div className="bg-primary/20 p-3 text-primary"><Navigation size={24} /></div>
                  <div>
                    <h4 className="font-bold text-xl mb-1">{tx.tech1Title}</h4>
                    <p className="text-white/60 text-sm">{tx.tech1Desc}</p>
                  </div>
                </motion.div>

                <motion.div variants={fadeInUp} className="flex items-start gap-4 p-4 bg-white/5 border border-white/10 backdrop-blur-sm">
                  <div className="bg-primary/20 p-3 text-primary"><Activity size={24} /></div>
                  <div>
                    <h4 className="font-bold text-xl mb-1">{tx.tech2Title}</h4>
                    <p className="text-white/60 text-sm">{tx.tech2Desc}</p>
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
              <img src="/warehouse-bg.png" alt="Modern Warehouse Operations" className="w-full h-auto object-cover border-8 border-[#0e1b2c] shadow-2xl grayscale-[30%]" />
              <div className="absolute -bottom-8 -left-8 bg-primary p-8 max-w-xs border-4 border-[#0e1b2c]">
                <h4 className="font-black text-2xl mb-2 text-white">{tx.techBadgeTitle}</h4>
                <p className="text-white/90 text-sm">{tx.techBadgeDesc}</p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-24 bg-white text-[#0e1b2c]" data-testid="section-contact">
        <div className="container mx-auto px-6 md:px-12">
          <div className="grid lg:grid-cols-2 gap-16">

            <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={staggerContainer}>
              <motion.div variants={fadeInUp} className="flex items-center gap-4 mb-4">
                <div className="h-[2px] w-12 bg-primary"></div>
                <span className="text-primary font-bold uppercase tracking-widest text-sm">{tx.contactTag}</span>
              </motion.div>
              <motion.h2 variants={fadeInUp} className="text-4xl md:text-5xl font-black mb-6 leading-tight">{tx.contactTitle}</motion.h2>
              <motion.p variants={fadeInUp} className="text-gray-600 mb-10 text-lg">{tx.contactSub}</motion.p>

              {/* Contact Person Card */}
              <motion.div variants={fadeInUp} className="mb-10 p-6 bg-gray-50 border-l-4 border-primary flex items-start gap-5">
                <div className="w-14 h-14 bg-[#0e1b2c] flex items-center justify-center text-primary flex-shrink-0">
                  <User size={28} />
                </div>
                <div>
                  <p className="text-xl font-black text-[#0e1b2c]" data-testid="contact-name">{tx.contactName}</p>
                  <div className="flex items-center gap-2 text-primary font-bold text-sm uppercase tracking-widest mt-1">
                    <Briefcase size={14} />
                    <span data-testid="contact-role">{tx.contactRole}</span>
                  </div>
                  <p className="text-gray-500 text-sm mt-1" data-testid="contact-org">{tx.contactOrg}</p>
                </div>
              </motion.div>

              <div className="space-y-8">
                <motion.div variants={fadeInUp} className="flex items-center gap-6">
                  <div className="w-16 h-16 bg-gray-100 flex items-center justify-center text-primary">
                    <Phone size={28} />
                  </div>
                  <div>
                    <p className="text-sm font-bold text-gray-500 uppercase tracking-widest mb-1">{tx.contactCallLabel}</p>
                    <a href="tel:+50767042577" className="text-2xl font-black hover:text-primary transition-colors" data-testid="contact-phone">6704-2577</a>
                  </div>
                </motion.div>

                <motion.div variants={fadeInUp} className="flex items-center gap-6">
                  <div className="w-16 h-16 bg-gray-100 flex items-center justify-center text-primary">
                    <Mail size={28} />
                  </div>
                  <div>
                    <p className="text-sm font-bold text-gray-500 uppercase tracking-widest mb-1">{tx.contactEmailLabel}</p>
                    <a href="mailto:ectsapanama@gmail.com" className="text-xl font-black hover:text-primary transition-colors" data-testid="contact-email">ectsapanama@gmail.com</a>
                  </div>
                </motion.div>

                <motion.div variants={fadeInUp} className="flex items-center gap-6">
                  <div className="w-16 h-16 bg-gray-100 flex items-center justify-center text-primary">
                    <MapPin size={28} />
                  </div>
                  <div>
                    <p className="text-sm font-bold text-gray-500 uppercase tracking-widest mb-1">{tx.contactLocationLabel}</p>
                    <p className="text-xl font-bold" data-testid="contact-location">{tx.contactLocation}</p>
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
              <h3 className="text-3xl font-black mb-8">{tx.formTitle}</h3>

              {formStatus === "sent" ? (
                <div className="flex flex-col items-center justify-center py-16 gap-4 text-center">
                  <div className="w-16 h-16 bg-primary/20 rounded-full flex items-center justify-center text-primary text-3xl font-black">✓</div>
                  <p className="text-xl font-bold text-white">{lang === "es" ? "¡Solicitud enviada!" : "Request sent!"}</p>
                  <p className="text-white/60 text-sm">{lang === "es" ? "Nos pondremos en contacto pronto." : "We will get back to you shortly."}</p>
                  <button onClick={() => setFormStatus("idle")} className="mt-4 border border-white/30 text-white px-6 py-2 text-sm font-bold uppercase tracking-widest hover:bg-white/10 transition-colors">
                    {lang === "es" ? "Enviar otra" : "Send another"}
                  </button>
                </div>
              ) : (
                <form className="space-y-6" onSubmit={handleSubmit} data-testid="contact-form">
                  <div className="grid md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <label className="text-sm font-bold uppercase tracking-widest text-white/70">{tx.formCompany}</label>
                      <input name="company" type="text" value={formData.company} onChange={handleField} className="w-full bg-[#172a42] border-none text-white px-4 py-4 focus:ring-2 focus:ring-primary outline-none" placeholder={tx.formCompanyPh} data-testid="input-company" />
                    </div>
                    <div className="space-y-2">
                      <label className="text-sm font-bold uppercase tracking-widest text-white/70">{tx.formContact}</label>
                      <input name="contact" type="text" value={formData.contact} onChange={handleField} className="w-full bg-[#172a42] border-none text-white px-4 py-4 focus:ring-2 focus:ring-primary outline-none" placeholder={tx.formContactPh} data-testid="input-contact" />
                    </div>
                  </div>

                  <div className="grid md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <label className="text-sm font-bold uppercase tracking-widest text-white/70">{tx.formEmail}</label>
                      <input name="email" type="email" value={formData.email} onChange={handleField} className="w-full bg-[#172a42] border-none text-white px-4 py-4 focus:ring-2 focus:ring-primary outline-none" placeholder={tx.formEmailPh} data-testid="input-email" />
                    </div>
                    <div className="space-y-2">
                      <label className="text-sm font-bold uppercase tracking-widest text-white/70">{tx.formPhone}</label>
                      <input name="phone" type="tel" value={formData.phone} onChange={handleField} className="w-full bg-[#172a42] border-none text-white px-4 py-4 focus:ring-2 focus:ring-primary outline-none" placeholder={tx.formPhonePh} data-testid="input-phone" />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <label className="text-sm font-bold uppercase tracking-widest text-white/70">{tx.formReqs}</label>
                    <textarea name="requirements" rows={4} value={formData.requirements} onChange={handleField} className="w-full bg-[#172a42] border-none text-white px-4 py-4 focus:ring-2 focus:ring-primary outline-none resize-none" placeholder={tx.formReqsPh} data-testid="input-requirements"></textarea>
                  </div>

                  {formStatus === "error" && (
                    <p className="text-red-400 text-sm font-bold">
                      {lang === "es" ? "Error al enviar. Intente de nuevo." : "Failed to send. Please try again."}
                    </p>
                  )}

                  <button type="submit" disabled={formStatus === "sending"} className="w-full bg-primary text-white font-black uppercase tracking-widest py-5 hover:bg-red-700 transition-colors disabled:opacity-60 disabled:cursor-not-allowed" data-testid="submit-quote">
                    {formStatus === "sending" ? (lang === "es" ? "Enviando..." : "Sending...") : tx.formSubmit}
                  </button>
                </form>
              )}
            </motion.div>

          </div>
        </div>
      </section>

      {/* WhatsApp Floating Button */}
      <a
        href="https://wa.me/50767042577"
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-6 right-6 z-50 flex items-center gap-3 bg-[#25D366] text-white px-5 py-3 shadow-2xl hover:bg-[#20b858] transition-all duration-200 group hover:scale-105"
        data-testid="whatsapp-button"
        aria-label="Chat on WhatsApp"
      >
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6 flex-shrink-0">
          <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
        </svg>
        <span className="font-bold text-sm uppercase tracking-widest hidden sm:block">WhatsApp</span>
      </a>

      {/* Footer */}
      <footer className="bg-black py-12 border-t border-white/10" data-testid="footer">
        <div className="container mx-auto px-6 md:px-12 flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="flex items-center cursor-pointer" onClick={() => scrollToSection("home")}>
            <img src={logoPath} alt="ECTSA Logo" className="h-10 w-auto" />
          </div>

          <div className="text-white/50 text-sm font-medium text-center">
            &copy; 2026 ECTSA – Empresa Coclesana de Transporte, S.A. {tx.footerRights}
          </div>

          <div className="flex gap-6 text-sm font-bold text-white/70">
            <a href="#" className="hover:text-primary transition-colors">{tx.footerPrivacy}</a>
            <a href="#" className="hover:text-primary transition-colors">{tx.footerTerms}</a>
          </div>
        </div>
      </footer>

    </div>
  );
}
