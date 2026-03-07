function App() {
  return (
    <div className="bg-background-dark text-black font-display min-h-screen">

      {/* Navbar */}
      <nav className="fixed top-0 w-full z-50 px-6 py-4">
        <div className="max-w-7xl mx-auto flex justify-between items-center glass rounded-xl px-6 py-3">
          
          <div className="text-2xl font-bold tracking-tighter">
            <span>
              Dev<span className="text-primary">-Riswa05</span>
            </span>
          </div>

          <div className="hidden md:flex space-x-6 text-sm font-medium text-2xl">
            <a className="hover:text-primary transition-colors" href="#about">
              À Propos
            </a>
            <a className="hover:text-primary transition-colors" href="#skills">
              Skills
            </a>
            <a className="hover:text-primary transition-colors" href="#projects">
              Projets
            </a>
            <a
              className="hover:text-primary transition-colors border-b border-primary/50 pb-1"
              href="#contact"
            >
              Contact
            </a>
          </div>

          <div className="md:hidden">
            <span className="material-icons">menu</span>
          </div>

        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center pt-20 mesh-bg overflow-hidden">
        
        {/* Background Effects */}
        <div className="absolute inset-0 z-0">
          <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-primary/20 rounded-full blur-[100px]" />
          <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-primary/10 rounded-full blur-[120px]" />
        </div>

        <div className="container mx-auto px-6 relative z-10 text-center">
          
          <span className="inline-block  py-1 px-3 rounded-full bg-primary/10 border border-primary/20 text-primary text-5xs font-bold uppercase tracking-widest mb-6">
            Disponible pour de nouveaux défis
          </span>

          <h1 className="text-4xl md:text-9xl font-bold mb-6 tracking-tight leading-tight obsolute pl-4 -py-10">
            Développeur <br /> 
            <span className="text-gradient">Full Stack</span>
          </h1>
           <p className="absolute -bottom-15 text-2xl text-primary/50 z-0 text-center w-full">
           Je conçois des expériences numériques immersives et des <br />
            architectures robustes en alliant créativité visuelle et performance technique.
          </p>
         
          
          
          <div className="flex justify-center gap-6">
         <div  className=" text-white p-6">
          <button className="mt-20 px-6 py-3 bg-primary text-black bg-blue-600 rounded-none hover:bg-primary/80 transition-colors ">
            Voir mes projets
          </button>
          </div >
            <div className=" text-white p-6 ">
            <button className="mt-20 px-6 py-3 bg-primary text-black bg-gray-600 rounded-none hover:bg-primary/80 transition-colors  ">
            Me contacter
          </button>
          </div>
            </div>
          </div>


        
        

      </section>
      <hr />
      <section>
        
          <form action="">
            <div className="flex justify-between gap-6 bg-black">
              <div>
              <img
            src="https://lh3.googleusercontent.com/aida-public/AB6AXuCiFfFMUoi1FcII30r93Voo_wLDZmXdmg8RZdA3hr1OAcqAIUMZQSnyxiC0cc0n5hrtPDlleGzIH6PsyA9VCQAOnAVIaEIMSc0M3Grti0lIHk049tlXWmMMD-S_A1_6FooR5Jdmr7CeusMeWNwb5xbD5zReKdhakZl3EN6M3SMvvP9tW48SQXte6r4so-49_PzNaHiHs8fBu1679jujVm_SaHDsUCNP1oBNnjk1i-8NTayN47FhDR1f_NYPAXTaRTb0yXyYojzmMn5b"
            alt="Portrait of the developer"
            className="w-full h-full object-cover grayscale contrast-125 px-40"/>
             </div>
              
              <div>
                <h2 className="text-white text-2xl font-bold"> <span>À propos </span>
                </h2> <br />
                <div className="text-white text-2xl font-bold">
                <p className="">Je suis un développeur Full Stack passionné par la création d’applications web modernes,<br /> 
                 performantes et intuitives.
                 J’aime transformer des idées en solutions digitales concrètes, <br />
                  en combinant design élégant et code optimisé. </p>
                <p>Curieux et toujours en apprentissage, je cherche constamment à améliorer <br />
                 mes compétences et à relever de nouveaux défis techniques.</p>
                 </div>
              </div>

            </div>

          </form>
        
      </section>
        <div>
          <h2 className="text-black text-2xl font-bold justify-center text-center"> <span>Stack Technique</span> </h2> <br />
          <p className="text-black text-xl">Frontend Development</p>
        </div> <br />
        
        <div className="flex gap-6">
          <img src="" alt="" />
          <img src="" alt="" />
          <img src="" alt="" />
          <img src="" alt="" />
          <img src="" alt="" />
        </div> <br />

        <div>
          <p className="text-black text-xl">Backend Development</p>
        </div> <br />
        <div className="flex gap-6">
           <img src="" alt="" />
          <img src="" alt="" />
          <img src="" alt="" />
          <img src="" alt="" />
          <img src="" alt="" />
        </div>




       <section>
       <div>
          <h2 className="text-black text-2xl font-bold justify-center text-center"> <span>Projets Sélectionnés</span> </h2> <br />
          <p className="text-black text-xl">Une sélection de mes projets récents, combinant interfaces avancées et architectures performantes et évolutives.</p>
        </div> <br />  


        <div className="w-72 h-72 glass rounded-2xl p-6 hover:shadow-[0_0_20px_rgba(13,108,242,0.4)] transition duration-300">
  <h3 className="text-white font-bold mb-3">Projet Premium</h3>
  <p className="text-gray-400 text-sm">
    Interface moderne et architecture scalable.
  </p>
  <a href="#" className="text-primary font-semibold mt-4 inline-block">
    Explorer →
  </a>
</div> 
<div className="w-72 h-72 glass rounded-2xl p-6 hover:shadow-[0_0_20px_rgba(13,108,242,0.4)] transition duration-300">
  <h3 className="text-white font-bold mb-3">Projet Premium</h3>
  <p className="text-gray-400 text-sm">
    Interface moderne et architecture scalable.
  </p>
  <a href="#" className="text-primary font-semibold mt-4 inline-block">
    Explorer →
  </a>
</div>
<div className="w-72 h-72 glass rounded-2xl p-6 hover:shadow-[0_0_20px_rgba(13,108,242,0.4)] transition duration-300">
  <h3 className="text-white font-bold mb-3">Projet Premium</h3>
  <p className="text-gray-400 text-sm">
    Interface moderne et architecture scalable.
  </p>
  <a href="#" className="text-primary font-semibold mt-4 inline-block">
    Explorer →
  </a>
</div>
<div className="w-72 h-72 glass rounded-2xl p-6 hover:shadow-[0_0_20px_rgba(13,108,242,0.4)] transition duration-300">
  <h3 className="text-white font-bold mb-3">Projet Premium</h3>
  <p className="text-gray-400 text-sm">
    Interface moderne et architecture scalable.
  </p>
  <a href="#" className="text-primary font-semibold mt-4 inline-block">
    Explorer →
  </a>
</div>

       </section>

       <section className="py-24 relative overflow-hidden" id="contact">
      
      {/* Background Glow */}
      <div className="absolute inset-0 z-0">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-primary/5 rounded-full blur-[120px]"></div>
      </div>

      <div className="max-w-3xl mx-auto px-6 relative z-10">
        
        {/* Titre */}
        <div className="text-center mb-16">
          <h2 className="text-xs font-bold text-primary tracking-[0.3em] uppercase mb-4">
            Contact
          </h2>
          <h3 className="text-4xl font-bold text-white tracking-tight mb-6">
            Construisons quelque chose d’exceptionnel
          </h3>
          <p className="text-slate-400 font-light leading-relaxed">
            Actuellement disponible pour de nouveaux projets et missions de consulting.
          </p>
        </div>

        {/* Formulaire */}
        <form className="space-y-6">

          <div className="grid md:grid-cols-2 gap-6">
            
            {/* Nom */}
            <div className="space-y-2">
              <label className="text-xs font-bold uppercase tracking-widest text-slate-400 ml-1">
                Nom complet
              </label>
              <input
                type="text"
                placeholder=" ouattara abdoul"
                className="w-full glass border border-white/10 rounded-lg px-5 py-4 text-white focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-all placeholder:text-slate-600"
              />
            </div>

            {/* Email */}
            <div className="space-y-2">
              <label className="text-xs font-bold uppercase tracking-widest text-slate-400 ml-1">
                Adresse e-mail
              </label>
              <input
                type="email"
                placeholder="jean@email.com"
                className="w-full glass border border-white/10 rounded-lg px-5 py-4 text-white focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-all placeholder:text-slate-600"
              />
            </div>

          </div>

          {/* Message */}
          <div className="space-y-2">
            <label className="text-xs font-bold uppercase tracking-widest text-slate-400 ml-1">
              Message du projet
            </label>
            <textarea
              rows="5"
              placeholder="Parlez-moi de votre projet..."
              className="w-full glass border border-white/10 rounded-lg px-5 py-4 text-white focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-all placeholder:text-slate-600 resize-none"
            ></textarea>
          </div>

          {/* Bouton */}
          <button
            type="submit"
            className="w-full py-5 bg-primary text-white font-bold rounded-lg uppercase tracking-[0.2em] text-sm hover:scale-[1.01] active:scale-100 transition-all"
          >
            Envoyer le message
          </button>

        </form>

      </div>
    </section>

    </div>
  );
}

export default App;
