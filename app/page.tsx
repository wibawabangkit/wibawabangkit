"use client"

import { ArrowRight, Download, Github, Linkedin, Mail, Database, Server, Globe, Cpu, Container, Radio, Box, Menu, X, HeartPulse, Activity, Building2, ShieldCheck, Award, Scan, CheckSquare, Users, Stethoscope, type LucideIcon } from "lucide-react"
import { Button } from "@/components/ui/button"
import { useState } from "react"
import rawData from "@/data/data.json"

const portfolioData = rawData as any

const iconMap: Record<string, LucideIcon> = {
  Server,
  Container,
  Globe,
  Cpu,
  Database,
  Radio,
  Box,
  HeartPulse,
  Activity,
  Building2,
  ShieldCheck,
  Award,
  Scan,
  CheckSquare,
  Users,
  Stethoscope,
}

// Translations for UI elements
const t = {
  id: {
    nav: { tech: "Keahlian", projects: "Proyek", career: "Karir", contact: "Kontak" },
    hero: { hi: "Halo, Saya", contact: "Hubungi Saya", cv: "Unduh CV" },
    tech: { subtitle: "Keahlian", title: "Tech Stack & Tools" },
    portfolio: { subtitle: "Portofolio", title: "Studi Kasus Unggulan" },
    journey: { subtitle: "Perjalanan", title: "Lini Masa Karir", current: "Sekarang" },
    contact: { 
      subtitle: "Hubungi Saya", 
      title: "Mari Berkolaborasi", 
      desc: "Tertarik untuk berkolaborasi dalam proyek IT, konsultasi sistem, atau pengembangan aplikasi? Jangan ragu untuk menghubungi saya secara langsung.",
      btn: "Hubungi via Email"
    },
    footer: "Hak Cipta Dilindungi."
  },
  en: {
    nav: { tech: "Tech Stack", projects: "Projects", career: "Career", contact: "Contact" },
    hero: { hi: "Hi, I'm", contact: "Contact Me", cv: "Download CV" },
    tech: { subtitle: "Expertise", title: "Tech Stack & Tools" },
    portfolio: { subtitle: "Portfolio", title: "Featured Case Studies" },
    journey: { subtitle: "Journey", title: "Career Timeline", current: "Current" },
    contact: { 
      subtitle: "Get in Touch", 
      title: "Let's Work Together", 
      desc: "Interested in collaborating on IT projects, system consultation, or app development? Feel free to reach out to me directly.",
      btn: "Contact via Email"
    },
    footer: "All rights reserved."
  }
}

type Lang = 'id' | 'en'

// Navigation
function Navigation({ lang, setLang }: { lang: Lang, setLang: (l: Lang) => void }) {
  const [isOpen, setIsOpen] = useState(false)
  const strings = t[lang].nav
  
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 px-4 sm:px-6 lg:px-8 py-4">
      <div className="max-w-7xl mx-auto">
        <div className="glass rounded-full px-6 py-3 flex items-center justify-between">
          <a href="#" className="text-xl font-bold text-primary">W</a>
          <div className="hidden md:flex items-center gap-8">
            <a href="#tech-stack" className="text-sm text-muted-foreground hover:text-foreground transition-colors">{strings.tech}</a>
            <a href="#case-studies" className="text-sm text-muted-foreground hover:text-foreground transition-colors">{strings.projects}</a>
            <a href="#career" className="text-sm text-muted-foreground hover:text-foreground transition-colors">{strings.career}</a>
            <a href="#contact" className="text-sm text-muted-foreground hover:text-foreground transition-colors">{strings.contact}</a>
            
            <div className="flex bg-secondary/50 rounded-full p-1 ml-4 border border-border">
              <button 
                onClick={() => setLang('id')}
                className={`px-3 py-1 text-xs font-medium rounded-full transition-colors ${lang === 'id' ? 'bg-primary text-primary-foreground shadow-sm' : 'text-muted-foreground hover:text-foreground'}`}
              >
                ID
              </button>
              <button 
                onClick={() => setLang('en')}
                className={`px-3 py-1 text-xs font-medium rounded-full transition-colors ${lang === 'en' ? 'bg-primary text-primary-foreground shadow-sm' : 'text-muted-foreground hover:text-foreground'}`}
              >
                EN
              </button>
            </div>
          </div>
          
          <div className="flex items-center gap-4 md:hidden">
            <div className="flex bg-secondary/50 rounded-full p-1 border border-border">
              <button onClick={() => setLang('id')} className={`px-2 py-1 text-xs font-medium rounded-full ${lang === 'id' ? 'bg-primary text-primary-foreground' : 'text-muted-foreground'}`}>ID</button>
              <button onClick={() => setLang('en')} className={`px-2 py-1 text-xs font-medium rounded-full ${lang === 'en' ? 'bg-primary text-primary-foreground' : 'text-muted-foreground'}`}>EN</button>
            </div>
            <Button size="sm" variant="ghost" onClick={() => setIsOpen(!isOpen)}>
              {isOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </Button>
          </div>
        </div>
        
        {/* Mobile menu */}
        {isOpen && (
          <div className="md:hidden mt-2 glass rounded-2xl p-4 space-y-2">
            <a href="#tech-stack" className="block px-4 py-2 text-sm text-muted-foreground" onClick={() => setIsOpen(false)}>{strings.tech}</a>
            <a href="#case-studies" className="block px-4 py-2 text-sm text-muted-foreground" onClick={() => setIsOpen(false)}>{strings.projects}</a>
            <a href="#career" className="block px-4 py-2 text-sm text-muted-foreground" onClick={() => setIsOpen(false)}>{strings.career}</a>
            <a href="#contact" className="block px-4 py-2 text-sm text-muted-foreground" onClick={() => setIsOpen(false)}>{strings.contact}</a>
          </div>
        )}
      </div>
    </nav>
  )
}

// Hero Section
function HeroSection({ lang }: { lang: Lang }) {
  const { personalInfo } = portfolioData[lang]
  const strings = t[lang].hero
  
  return (
    <section className="min-h-screen flex items-center justify-center px-4 sm:px-6 lg:px-8 py-20 pt-32">
      <div className="max-w-7xl mx-auto w-full">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Text Content */}
          <div className="space-y-8">
            <div className="space-y-4">
              <p className="text-primary font-mono text-sm tracking-wider uppercase">{personalInfo.role}</p>
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight text-balance">
                {strings.hi} <span className="text-primary">{personalInfo.name}</span>.{" "}
                <span className="text-muted-foreground">{personalInfo.tagline}</span>
              </h1>
            </div>
            <p className="text-lg text-muted-foreground leading-relaxed max-w-xl">
              {personalInfo.bio}
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <a href="mailto:wibawabangkit31@gmail.com" className="w-full sm:w-auto">
                <Button size="lg" className="group w-full">
                  <Mail className="mr-2 h-4 w-4" />
                  {strings.contact} <span className="opacity-70 font-normal ml-1 hidden sm:inline">(wibawabangkit31@gmail.com)</span>
                </Button>
              </a>
              <Button size="lg" variant="outline" className="border-border hover:border-primary/50 hover:bg-primary/5 w-full sm:w-auto" onClick={() => window.print()}>
                <Download className="mr-2 h-4 w-4" />
                {strings.cv}
              </Button>
            </div>
          </div>

          {/* Image Placeholder */}
          <div className="hidden lg:flex items-center justify-center">
            <div className="relative w-full max-w-md aspect-square">
              {/* Glow effect */}
              <div className="absolute inset-0 bg-primary/20 blur-3xl rounded-full animate-pulse" />
              {/* Main card */}
              <div className="relative glass glass-glow rounded-3xl w-full h-full overflow-hidden border border-primary/20 flex items-center justify-center">
                <img src="https://images.unsplash.com/photo-1550751827-4bd374c3f58b?auto=format&fit=crop&w=800&q=80" alt="Tech Abstract" className="w-full h-full object-cover opacity-80 mix-blend-screen" />
                <div className="absolute inset-0 bg-gradient-to-t from-background/80 via-transparent to-transparent" />
              </div>
              {/* Decorative elements */}
              <div className="absolute -top-4 -right-4 w-20 h-20 border border-primary/20 rounded-2xl" />
              <div className="absolute -bottom-4 -left-4 w-16 h-16 border border-primary/10 rounded-xl" />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

// Tech Stack Section
function TechStackSection({ lang }: { lang: Lang }) {
  const { techStack } = portfolioData[lang]
  const strings = t[lang].tech

  return (
    <section id="tech-stack" className="px-4 sm:px-6 lg:px-8 py-24">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <p className="text-primary font-mono text-sm tracking-wider uppercase mb-4">{strings.subtitle}</p>
          <h2 className="text-3xl sm:text-4xl font-bold text-balance">{strings.title}</h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
          {techStack.map((category: any, index: number) => {
            const Icon = iconMap[category.icon] || Cpu
            return (
              <div
                key={index}
                className={`glass rounded-2xl p-6 hover:border-primary/30 transition-all duration-300 group ${category.className}`}
              >
                <div className="flex items-center gap-3 mb-6">
                  <div className="p-2 rounded-lg bg-primary/10 group-hover:bg-primary/20 transition-colors">
                    <Icon className="w-5 h-5 text-primary" />
                  </div>
                  <h3 className="font-semibold text-foreground">{category.title}</h3>
                </div>
                <div className="flex flex-wrap gap-3">
                  {category.skills.map((skill: string, skillIndex: number) => (
                    <div
                      key={skillIndex}
                      className="flex items-center gap-2 px-4 py-2 rounded-lg bg-secondary/50 hover:bg-secondary transition-colors border border-border/50"
                    >
                      <span className="text-sm font-medium">{skill}</span>
                    </div>
                  ))}
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}

// Case Studies Section
function CaseStudiesSection({ lang }: { lang: Lang }) {
  const { projects } = portfolioData[lang]
  const strings = t[lang].portfolio

  return (
    <section id="case-studies" className="px-4 sm:px-6 lg:px-8 py-24 bg-secondary/20">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <p className="text-primary font-mono text-sm tracking-wider uppercase mb-4">{strings.subtitle}</p>
          <h2 className="text-3xl sm:text-4xl font-bold text-balance">{strings.title}</h2>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project: any, index: number) => {
            const Icon = iconMap[project.icon] || Box
            return (
              <div
                key={index}
                className="group glass rounded-2xl overflow-hidden hover:border-primary/30 transition-all duration-300 cursor-pointer hover:-translate-y-1"
              >
                <div className="aspect-video bg-gradient-to-br from-primary/10 via-secondary to-muted flex items-center justify-center relative overflow-hidden">
                  <div className="absolute inset-0 bg-[linear-gradient(rgba(56,189,248,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(56,189,248,0.03)_1px,transparent_1px)] bg-[size:20px_20px]" />
                  <Icon className="w-16 h-16 text-primary/40 group-hover:text-primary/60 transition-colors relative z-10" />
                </div>
                
                <div className="p-6 space-y-4">
                  <h3 className="text-xl font-semibold group-hover:text-primary transition-colors">
                    {project.title}
                  </h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    {project.highlight}
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {project.tags.map((tag: string, tagIndex: number) => (
                      <span
                        key={tagIndex}
                        className="text-xs px-2 py-1 rounded-md bg-primary/10 text-primary font-mono"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}

// Timeline Section
function TimelineSection({ lang }: { lang: Lang }) {
  const { timeline } = portfolioData[lang]
  const strings = t[lang].journey

  return (
    <section id="career" className="px-4 sm:px-6 lg:px-8 py-24">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-16">
          <p className="text-primary font-mono text-sm tracking-wider uppercase mb-4">{strings.subtitle}</p>
          <h2 className="text-3xl sm:text-4xl font-bold text-balance">{strings.title}</h2>
        </div>

        <div className="relative">
          <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-px bg-border md:-translate-x-px" />

          <div className="space-y-12">
            {timeline.map((item: any, index: number) => (
              <div
                key={index}
                className={`relative flex flex-col md:flex-row gap-8 md:gap-16 ${
                  index % 2 === 0 ? "md:flex-row-reverse" : ""
                }`}
              >
                <div className="absolute left-4 md:left-1/2 w-3 h-3 rounded-full bg-primary md:-translate-x-1.5 ring-4 ring-background" />
                
                <div className={`flex-1 ml-12 md:ml-0 ${index % 2 === 0 ? "md:text-right" : ""}`}>
                  <div className={`glass rounded-2xl p-6 inline-block ${index % 2 === 0 ? "md:ml-auto" : ""}`}>
                    <span className="text-primary font-mono text-sm">{item.year}</span>
                    <h3 className={`text-xl font-semibold mt-2 flex items-center gap-2 ${index % 2 === 0 ? "md:justify-end" : ""}`}>
                      {item.title}
                      {item.current && (
                        <span className="text-xs px-2 py-0.5 rounded-full bg-primary/20 text-primary">
                          {strings.current}
                        </span>
                      )}
                    </h3>
                    <p className="text-muted-foreground mt-2 text-sm leading-relaxed max-w-sm">
                      {item.description}
                    </p>
                  </div>
                </div>
                <div className="hidden md:block flex-1" />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

// Contact Section
function ContactSection({ lang }: { lang: Lang }) {
  const strings = t[lang].contact

  return (
    <section id="contact" className="px-4 sm:px-6 lg:px-8 py-24 bg-secondary/20">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-12">
          <p className="text-primary font-mono text-sm tracking-wider uppercase mb-4">{strings.subtitle}</p>
          <h2 className="text-3xl sm:text-4xl font-bold text-balance">{strings.title}</h2>
          <p className="text-muted-foreground mt-4 max-w-2xl mx-auto">
            {strings.desc}
          </p>
        </div>

        <div className="flex justify-center">
          <a href="mailto:wibawabangkit31@gmail.com">
            <Button size="lg" className="group h-14 px-8 text-lg rounded-full shadow-lg hover:shadow-primary/25 transition-all">
              <Mail className="mr-3 h-5 w-5" />
              {strings.btn}
              <ArrowRight className="ml-3 h-5 w-5 transition-transform group-hover:translate-x-1" />
            </Button>
          </a>
        </div>
      </div>
    </section>
  )
}

// Footer
function Footer({ lang }: { lang: Lang }) {
  const strings = t[lang]

  return (
    <footer className="px-4 sm:px-6 lg:px-8 py-12 border-t border-border">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-2">
            <span className="text-xl font-bold text-primary">W</span>
            <span className="text-muted-foreground text-sm">© 2024 Wibawa. {strings.footer}</span>
          </div>
          
          <div className="flex items-center gap-4">
            <a
              href="https://linkedin.com/in/wibawabangkit"
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 rounded-lg hover:bg-secondary transition-colors group"
              aria-label="LinkedIn"
            >
              <Linkedin className="w-5 h-5 text-muted-foreground group-hover:text-primary transition-colors" />
            </a>
            <a
              href="https://github.com/wibawabangkit"
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 rounded-lg hover:bg-secondary transition-colors group"
              aria-label="GitHub"
            >
              <Github className="w-5 h-5 text-muted-foreground group-hover:text-primary transition-colors" />
            </a>
            <a
              href="mailto:wibawabangkit31@gmail.com"
              className="p-2 rounded-lg hover:bg-secondary transition-colors group"
              aria-label="Email"
            >
              <Mail className="w-5 h-5 text-muted-foreground group-hover:text-primary transition-colors" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  )
}

// ATS-Friendly Printable CV
function PrintableCV({ lang }: { lang: Lang }) {
  const data = portfolioData[lang]
  
  return (
    <div className="hidden print:block text-black bg-white font-sans max-w-4xl mx-auto">
      <style>{`
        @page { size: A4 portrait; margin: 1.5cm 2cm; }
        @media print {
          body { -webkit-print-color-adjust: exact; print-color-adjust: exact; }
        }
      `}</style>
      
      <h1 className="text-3xl font-bold mb-1">{data.personalInfo.name}</h1>
      <p className="text-lg mb-4 border-b border-black pb-2">{data.personalInfo.role}</p>
      
      <div className="text-sm mb-6 flex flex-wrap gap-x-6 gap-y-2">
        <span>Email: wibawabangkit31@gmail.com</span>
        <span>LinkedIn: linkedin.com/in/wibawabangkit</span>
        <span>GitHub: github.com/wibawabangkit</span>
      </div>

      <h2 className="text-lg font-bold border-b border-black mb-2 uppercase break-after-avoid">Professional Summary</h2>
      <p className="text-sm mb-6 leading-relaxed">{data.personalInfo.bio}</p>

      <h2 className="text-lg font-bold border-b border-black mb-2 uppercase break-after-avoid">Experience & Education</h2>
      <div className="space-y-4 mb-6">
        {data.timeline.map((item: any, i: number) => {
          const splitWord = lang === 'id' ? ' di ' : ' at '
          const parts = item.title.split(splitWord)
          const role = parts[0] || item.title
          const company = parts[1] || ''

          return (
            <div key={i} className="break-inside-avoid">
              <div className="flex justify-between font-bold text-sm">
                <span>{company || role}</span>
                <span>{item.year}</span>
              </div>
              {company && <div className="italic text-sm mb-1">{role}</div>}
              <p className="text-sm leading-relaxed">{item.description}</p>
            </div>
          )
        })}
      </div>

      <h2 className="text-lg font-bold border-b border-black mb-2 uppercase break-after-avoid">Projects</h2>
      <div className="space-y-3 mb-6">
        {data.projects.map((proj: any, i: number) => (
          <div key={i} className="break-inside-avoid">
            <span className="font-bold text-sm">{proj.title}</span> <span className="text-sm">- {proj.highlight}</span>
            <div className="text-xs italic text-gray-700 mt-0.5">Tech: {proj.tags.join(', ')}</div>
          </div>
        ))}
      </div>

      <h2 className="text-lg font-bold border-b border-black mb-2 uppercase break-after-avoid">Skills</h2>
      <div className="mb-6 break-inside-avoid">
        {data.techStack.map((stack: any, i: number) => (
          <div key={i} className="text-sm mb-1 break-inside-avoid">
            <span className="font-bold">{stack.title}:</span> {stack.skills.join(', ')}
          </div>
        ))}
      </div>
    </div>
  )
}

// Main Page Component
export default function Portfolio() {
  const [lang, setLang] = useState<Lang>('id')

  return (
    <>
      <PrintableCV lang={lang} />
      <main className="min-h-screen print:hidden">
        <Navigation lang={lang} setLang={setLang} />
        <HeroSection lang={lang} />
        <TechStackSection lang={lang} />
        <CaseStudiesSection lang={lang} />
        <TimelineSection lang={lang} />
        <ContactSection lang={lang} />
        <Footer lang={lang} />
      </main>
    </>
  )
}
