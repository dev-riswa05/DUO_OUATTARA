import React, { useState, useEffect } from 'react';
import { 
  Users, 
  Code2, 
  Server, 
  ExternalLink, 
  Mail, 
  Phone, 
  ChevronRight, 
  Github, 
  Linkedin,
  ShieldCheck,
  Zap,
  Layout,
  Globe,
  Download,
  Terminal,
  Cpu,
  ArrowRight
} from 'lucide-react';

const App = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    
    // Charge Tailwind CSS via CDN pour garantir les styles
    if (!document.querySelector('script[src*="tailwindcss"]')) {
      const script = document.createElement('script');
      script.src = "https://cdn.tailwindcss.com";
      script.async = true;
      document.head.appendChild(script);
    }

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const partners = [
    {
      name: "Salif Mohamed Ouattara",
      role: "Développeur Fullstack | Administrateur Systèmes",
      school: "AGITEL FORMATION (Génie Logiciel)",
      tags: ["React", "Next.js", "Django", "SQL"],
      color: "from-cyan-400 to-blue-500",
      accent: "cyan",
      description: "Expert en Génie Logiciel, fusionnant développement moderne et architecture infrastructurelle. Dédié à la création de solutions robustes et évolutives.",
      linkedin: "https://www.linkedin.com/in/salifouattara",
      cv: "SALIFMOHAMED_OUATTARA_CV.pdf",
      phones: ["+225 0102834123"]
    },
    {
      name: "Abdoul Waris Ouattara",
      role: "Développeur Web Junior | Réseaux & Systèmes",
      school: "Pigier CI / Simplon (Génie Logiciel)",
      tags: ["React", "Node.js", "Tailwind", "Python"],
      color: "from-purple-500 to-indigo-600",
      accent: "purple",
      description: "Spécialiste du Web moderne et de la maintenance IT. Passionné par l'optimisation des performances et l'expérience utilisateur intuitive.",
      linkedin: "https://www.linkedin.com/in/warisouattara",
      cv: "CV OUATTARA ABDOUL WARIS GEORGES.pdf",
      phones: ["+225 0172251230", "+225 0574921958"]
    }
  ];

  const services = [
    {
      title: "Architecture Web",
      icon: <Layout className="text-cyan-400" size={28} />,
      desc: "Conception d'écosystèmes numériques haute performance avec React et Next.js."
    },
    {
      title: "Infrastructure & Cloud",
      icon: <Server className="text-purple-400" size={28} />,
      desc: "Pilotage de serveurs, sécurité réseau et administration de parcs informatiques complexes."
    },
    {
      title: "Solutions Logiciel",
      icon: <ShieldCheck className="text-emerald-400" size={28} />,
      desc: "Ingénierie logicielle sur mesure, maintenance critique et optimisation de systèmes."
    }
  ];

  return (
    <div className="min-h-screen bg-[#050505] text-slate-200 selection:bg-cyan-500/30 font-sans antialiased overflow-x-hidden">
      
      {/* Background Ornaments - Plus subtils et larges */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none -z-10">
        <div className="absolute top-[-20%] left-[-10%] w-[70%] h-[70%] bg-cyan-500/5 rounded-full blur-[160px]" />
        <div className="absolute bottom-[-20%] right-[-10%] w-[70%] h-[70%] bg-purple-600/5 rounded-full blur-[160px]" />
      </div>

      {/* Navigation - Ultra Minimaliste */}
      <nav className={`fixed top-0 w-full z-50 transition-all duration-700 ${scrolled ? 'bg-black/40 backdrop-blur-2xl border-b border-white/5 py-5' : 'py-10'}`}>
        <div className="max-w-7xl mx-auto px-8 flex justify-between items-center">
          <div className="flex items-center gap-4 group cursor-pointer">
            <div className="relative overflow-hidden w-11 h-11 bg-white rounded-2xl flex items-center justify-center transition-all duration-500 group-hover:shadow-[0_0_30px_rgba(255,255,255,0.2)]">
               <span className="text-black font-black text-xl italic z-10">O²</span>
               <div className="absolute inset-0 bg-gradient-to-tr from-cyan-400 to-purple-500 opacity-0 group-hover:opacity-100 transition-opacity" />
            </div>
            <div className="flex flex-col">
              <span className="text-sm font-black tracking-[0.3em] uppercase leading-none">Ouattara</span>
              <span className="text-[10px] text-cyan-400 font-bold tracking-widest uppercase">Consulting</span>
            </div>
          </div>
          
          <div className="hidden md:flex items-center gap-12 text-[10px] font-black uppercase tracking-[0.4em] text-slate-500">
            <a href="#services" className="hover:text-white transition-all hover:tracking-[0.6em]">Services</a>
            <a href="#team" className="hover:text-white transition-all hover:tracking-[0.6em]">Équipe</a>
            <a href="#contact" className="px-7 py-3 bg-white text-black rounded-full hover:bg-cyan-400 transition-all hover:scale-105 active:scale-95">Contact</a>
          </div>
        </div>
      </nav>

      <main className="max-w-7xl mx-auto px-8">
        
        {/* Hero Section - Plus "Aéré" */}
        <section className="pt-48 md:pt-64 pb-40 lg:pb-60">
          <div className="max-w-4xl relative">
            <div className="flex items-center gap-4 mb-10 translate-y-[-20px] animate-[fadeIn_1s_ease_forwards]">
              <span className="h-[1px] w-12 bg-cyan-400"></span>
              <span className="text-[10px] font-black uppercase tracking-[0.5em] text-cyan-400">Excellence & Innovation</span>
            </div>
            <h1 className="text-6xl md:text-9xl font-black leading-[0.85] tracking-tighter uppercase italic mb-12">
              Bâtir le <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-white via-white to-white/30">Futur en</span> <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600">Duo.</span>
            </h1>
            <p className="text-xl md:text-2xl text-slate-400 max-w-2xl font-light leading-relaxed mb-12 border-l-2 border-white/10 pl-8">
              L'alliance stratégique de deux experts pour vos projets les plus ambitieux. Développement web d'avant-garde et infrastructures systèmes de pointe.
            </p>

          </div>
        </section>

        {/* Services Section - Style Card Premium */}
        <section id="services" className="mb-60 scroll-mt-32">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-1">
            {services.map((s, i) => (
              <div key={i} className="group relative p-12 bg-white/[0.01] border border-white/5 hover:bg-white/[0.03] transition-all duration-700 overflow-hidden">
                <div className="absolute top-0 left-0 w-1 h-0 bg-cyan-400 transition-all duration-700 group-hover:h-full" />
                <div className="mb-10 opacity-60 group-hover:opacity-100 group-hover:scale-110 transition-all duration-500">
                  {s.icon}
                </div>
                <h3 className="text-2xl font-black uppercase mb-6 tracking-tight group-hover:text-white transition-colors">{s.title}</h3>
                <p className="text-slate-500 text-lg leading-relaxed font-light group-hover:text-slate-300 transition-colors">{s.desc}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Team Section - Focus sur les visages/identités */}
        <section id="team" className="mb-60 scroll-mt-32">
          <div className="mb-24 flex flex-col items-center text-center">
            <h2 className="text-[10px] font-black tracking-[0.8em] text-white/40 uppercase mb-4">The Masterminds</h2>
            <p className="text-4xl md:text-5xl font-black italic uppercase tracking-tighter text-white">Les experts derrière la vision</p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-px bg-white/10 border border-white/10 rounded-[3rem] overflow-hidden shadow-2xl">
            {partners.map((p, i) => (
              <div key={i} className="relative group bg-[#080808] p-12 md:p-20 transition-all duration-700 hover:bg-black">
                {/* Overlay Gradient au survol */}
                <div className={`absolute inset-0 bg-gradient-to-br ${p.color} opacity-0 group-hover:opacity-[0.03] transition-opacity duration-700`} />
                
                <div className="relative z-10 flex flex-col h-full">
                  <div className="flex flex-col md:flex-row justify-between items-start gap-10 mb-16">
                    <div className="w-24 h-24 rounded-full bg-gradient-to-tr from-white/10 to-transparent border border-white/10 flex items-center justify-center font-black text-3xl italic text-white group-hover:scale-110 group-hover:border-cyan-400 transition-all duration-500">
                      {p.name.split(' ').map(n => n[0]).join('')}
                    </div>
                    <div className="flex flex-wrap gap-2 justify-start md:justify-end max-w-xs">
                      {p.tags.map(tag => (
                        <span key={tag} className="px-4 py-1.5 bg-white/5 border border-white/5 rounded-full text-[8px] font-black uppercase tracking-widest text-slate-400">{tag}</span>
                      ))}
                    </div>
                  </div>
                  
                  <h3 className="text-4xl md:text-6xl font-black text-white mb-4 tracking-tighter uppercase italic">{p.name}</h3>
                  <p className="text-xs font-black uppercase tracking-[0.3em] mb-10 text-cyan-400">
                    {p.role}
                  </p>
                  
                  <p className="text-slate-400 text-xl font-light leading-relaxed mb-12">
                    {p.description}
                  </p>
                  
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-auto">
                    <a href={p.linkedin} target="_blank" rel="noreferrer" className="flex items-center justify-center gap-3 py-5 bg-white/5 hover:bg-white text-slate-400 hover:text-black rounded-2xl transition-all border border-white/10">
                      <Linkedin size={20} />
                      <span className="text-[10px] font-black uppercase tracking-widest">LinkedIn</span>
                    </a>
                    <a href={p.cv} download className="flex items-center justify-center gap-3 py-5 bg-cyan-400 text-black rounded-2xl font-black text-[10px] uppercase tracking-widest hover:bg-white transition-all shadow-lg shadow-cyan-400/10">
                      <Download size={18} /> Télécharger CV
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Contact Section - Futuriste & Clair */}
        <section id="contact" className="pb-40">
           <div className="relative p-12 md:p-32 rounded-[4rem] bg-white text-black overflow-hidden group transition-all duration-700">
              <div className="absolute top-0 right-0 w-full h-full bg-gradient-to-br from-cyan-400 via-blue-500 to-purple-600 opacity-0 group-hover:opacity-100 transition-all duration-1000 transform scale-110" />
              
              <div className="relative z-10 flex flex-col items-center text-center max-w-4xl mx-auto">
                <h2 className="text-5xl md:text-8xl font-black italic uppercase tracking-tighter leading-none mb-10 group-hover:text-white transition-colors duration-500">
                  Prêt à <br /> <span className="opacity-40 group-hover:opacity-100">collaborer ?</span>
                </h2>
                <p className="text-xl md:text-2xl font-medium mb-16 text-black/60 group-hover:text-white/80 transition-colors">
                  Une idée ? Un projet ? Ou simplement envie de discuter technique ? Notre bureau à Abidjan vous est ouvert.
                </p>
                
                <div className="flex flex-col md:flex-row gap-6 w-full">
                  <a href="mailto:ouattarasalif2005@gmail.com" className="flex-1 py-8 bg-black text-white rounded-[2rem] font-black uppercase text-xs tracking-[0.3em] hover:scale-105 transition-all flex items-center justify-center gap-4">
                    <Mail size={24} /> Nous écrire
                  </a>
                  <div className="flex-1 grid grid-cols-2 gap-4">
                    {partners.map((p, i) => (
                       <div key={i} className="p-6 bg-black/5 rounded-[2rem] border border-black/5 flex flex-col justify-center items-center">
                          <span className="text-[9px] font-black uppercase tracking-widest mb-2 opacity-40 group-hover:text-white transition-colors">{p.name.split(' ')[0]}</span>
                          <span className="text-[11px] font-black tracking-wider group-hover:text-white transition-colors">{p.phones[0]}</span>
                       </div>
                    ))}
                  </div>
                </div>
              </div>
           </div>
        </section>

      </main>

      {/* Footer Minimaliste */}
      <footer className="py-20 border-t border-white/5 bg-black/20 backdrop-blur-xl">
        <div className="max-w-7xl mx-auto px-8 flex flex-col md:flex-row justify-between items-center gap-10">
          <div className="flex items-center gap-4">
            <div className="w-10 h-10 bg-white/5 border border-white/10 rounded-xl flex items-center justify-center font-black text-white">O²</div>
            <p className="text-[10px] font-black uppercase tracking-[0.4em] text-slate-500 leading-relaxed">
              Ouattara Brothers <br /> 
              Ingénierie de Précision
            </p>
          </div>
          
          <div className="flex gap-16">
            <div className="flex flex-col gap-4">
               <span className="text-[9px] font-black uppercase tracking-widest text-cyan-400">Social</span>
               <div className="flex gap-6">
                  <Linkedin size={18} className="text-slate-500 hover:text-white cursor-pointer transition-colors" />
                  <Github size={18} className="text-slate-500 hover:text-white cursor-pointer transition-colors" />
               </div>
            </div>
            <div className="flex flex-col gap-4">
               <span className="text-[9px] font-black uppercase tracking-widest text-slate-500">Localisation</span>
               <span className="text-[10px] font-black uppercase tracking-widest">Abidjan, Côte d'Ivoire</span>
            </div>
          </div>
        </div>
      </footer>

      <style dangerouslySetInnerHTML={{ __html: `
        @keyframes fadeIn {
          from { opacity: 0; transform: translateY(-20px); }
          to { opacity: 1; transform: translateY(0); }
        }
      `}} />
    </div>
  );
};

export default App;