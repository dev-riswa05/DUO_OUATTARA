import React, { useState, useEffect } from 'react';
import GridStack from './GridStack';

const Page = () => {
  const [darkMode, setDarkMode] = useState(false);

  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [darkMode]);

  return (
    <div className="relative flex h-auto min-h-screen w-full flex-col bg-background-light dark:bg-background-dark group/design-root overflow-x-hidden">
      <div className="layout-container flex h-full grow flex-col">

        {/* Navigation */}
        <header className="flex items-center justify-between whitespace-nowrap border-b border-solid border-slate-200 dark:border-primary/20 px-6 md:px-20 py-4 sticky top-0 bg-background-light/80 dark:bg-background-dark/80 backdrop-blur-md z-50">

          <div className="flex items-center gap-3 text-primary">
            <h2 className="text-slate-900 dark:text-slate-100 text-xl font-black leading-tight tracking-tight">
              OWS.dev
            </h2>
          </div>

          <div className="hidden md:flex flex-1 justify-end gap-8">
            <div className="flex items-center gap-9">

              <a className="hover:text-primary transition-colors text-sm font-semibold" href="#Accueil">
                Accueil
              </a>

              <a className="hover:text-primary transition-colors text-sm font-semibold text-slate-900 dark:text-slate-100" href="#team">
                Équipe
              </a>

              <a className="hover:text-primary transition-colors text-sm font-semibold text-slate-900 dark:text-slate-100" href="#Projets">
                Projets
              </a>

              <a className="hover:text-primary transition-colors text-sm font-semibold text-slate-900 dark:text-slate-100" href="#stack">
                Stack
              </a>

              <button
                onClick={() => setDarkMode(!darkMode)}
                className="flex items-center justify-center rounded-lg h-10 px-4 border border-primary/30 text-slate-900 dark:text-slate-100 hover:bg-primary/10 transition-all"
                title="Basculer le mode sombre"
              >
                {darkMode ? '☀️' : '🌙'}
              </button>

              <a href="#contact">
                <button className="flex min-w-[120px] cursor-pointer items-center justify-center rounded-lg h-10 px-5 bg-primary text-background-dark text-sm font-bold shadow-lg shadow-primary/20 hover:brightness-110 transition-all">
                  Contactez-nous
                </button>
              </a>

            </div>
          </div>

        </header>

        <main className="flex flex-col flex-1 w-full">

          {/* HERO */}
          <section className="relative w-full py-20 px-6 md:px-20 overflow-hidden" id="Accueil">

            <div className="absolute top-0 right-0 -translate-y-1/2 translate-x-1/4 w-[600px] h-[600px] bg-primary/10 blur-[120px] rounded-full"></div>

            <div className="flex flex-col lg:flex-row items-center gap-12">

              <div className="flex flex-col gap-8 flex-1">

                <div className="flex flex-col gap-4">

                  <span className="text-primary font-bold tracking-widest text-xs uppercase">
                    Solutions Web Premium
                  </span>

                  <h1 className="text-slate-900 dark:text-slate-100 text-5xl md:text-7xl font-black leading-[1.1] tracking-tight">
                    Transformez vos idées en <span className="text-primary">applications performantes</span>
                  </h1>

                  <p className="text-slate-600 dark:text-slate-400 text-lg md:text-xl max-w-xl leading-relaxed">
                    Nous accompagnons les entreprises ambitieuses pour créer des expériences digitales uniques.
                    Du design à la mise en production, nous transformons vos concepts en applications web performantes, intuitives et évolutives.
                  </p>

                </div>

                <div className="flex flex-wrap gap-4">

                  <button className="flex min-w-[180px] items-center justify-center rounded-lg h-14 px-8 bg-primary text-background-dark text-base font-bold shadow-xl shadow-primary/20 hover:-translate-y-1 transition-transform">
                    <a href="#contact" className="text-white dark:text-white font-bold hover:underline">
                      Démarrer un projet
                    </a>
                  </button>

                  <button className="flex min-w-[180px] items-center justify-center rounded-lg h-14 px-8 border-2 border-primary/30 text-slate-900 dark:text-slate-100 text-base font-bold hover:bg-primary/5 transition-all hover-flow_primary">
                    <a href="#Projets" className="text-primary font-bold hover:underline">
                      Voir nos réalisations
                    </a>
                  </button>

                </div>

              </div>

              {/* IMAGE */}
              <div className="flex-1 w-full max-w-2xl">
  <div className="relative rounded-2xl overflow-hidden border border-primary/20 shadow-2xl">

    <img
      src="/images/img1.jpg"
      alt="Développement web"
className="w-full h-[700px] object-cover"     />

    <div className="absolute inset-0 bg-gradient-to-t from-background-dark/60 to-transparent"></div>

    <div className="absolute bottom-6 left-6 right-6 p-4 glass-card rounded-xl">
      <div className="flex items-center gap-4">
        <div className="p-2 bg-primary/20 rounded-lg text-primary"></div>
      </div>
    </div>

  </div>
</div>

            </div>
          </section>
          {/* TEAM */}
          <section className="w-full py-20 px-6 md:px-20 bg-slate-100 dark:bg-slate-800/50" id="team">

  <h2 className="text-slate-900 dark:text-slate-100 text-3xl md:text-4xl font-bold mb-6 text-center">
    L'expertise derrière vos projets
  </h2>

  <p className="text-slate-600 dark:text-slate-400 max-w-3xl mx-auto mb-12 text-lg leading-relaxed text-center">
    Notre équipe rassemble des experts en développement web, design UX/UI et gestion de projet.  
    Chaque membre apporte son savoir-faire pour transformer vos idées en applications performantes et intuitives.
  </p>

  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">

    {/* Card 1 */}
    <div className="flex flex-col items-start p-6 rounded-2xl bg-white dark:bg-slate-900 shadow-lg hover:shadow-2xl hover:-translate-y-2 transition-all duration-300 backdrop-blur-sm">
      <div className="p-4 rounded-full bg-primary/10 mb-4">
        {/* Icône code */}
        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 18l6-6-6-6M8 6l-6 6 6 6" />
        </svg>
      </div>
      <h3 className="text-xl font-bold mb-2 text-primary">Développement Fullstack</h3>
      <p className="text-slate-600 dark:text-slate-400">
        Création d’applications web robustes avec React, Next.js, Laravel, Python.
      </p>
    </div>

    {/* Card 2 */}
    <div className="flex flex-col items-start p-6 rounded-2xl bg-white dark:bg-slate-900 shadow-lg hover:shadow-2xl hover:-translate-y-2 transition-all duration-300 backdrop-blur-sm">
      <div className="p-4 rounded-full bg-primary/10 mb-4">
        {/* Icône design */}
        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
        </svg>
      </div>
      <h3 className="text-xl font-bold mb-2 text-primary">Design UX/UI</h3>
      <p className="text-slate-600 dark:text-slate-400">
        Conception d’interfaces intuitives et attractives, adaptées à tous les écrans.
      </p>
    </div>

    {/* Card 3 */}
    <div className="flex flex-col items-start p-6 rounded-2xl bg-white dark:bg-slate-900 shadow-lg hover:shadow-2xl hover:-translate-y-2 transition-all duration-300 backdrop-blur-sm">
      <div className="p-4 rounded-full bg-primary/10 mb-4">
        {/* Icône gestion */}
        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 17v-6h6v6M5 12v6h14v-6M5 6v6h14V6H5z" />
        </svg>
      </div>
      <h3 className="text-xl font-bold mb-2 text-primary">Gestion de projet agile</h3>
      <p className="text-slate-600 dark:text-slate-400">
        Méthodologies agiles et communication transparente pour garantir des livrables de qualité.
      </p>
    </div>

  </div>

</section>
          {/* PROJETS */}
  <section className="w-full py-20 px-6 md:px-20 bg-white dark:bg-slate-900/50" id="Projets">

  <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">

    <div>

      <h2 className="text-slate-900 dark:text-slate-100 text-3xl md:text-4xl font-bold mb-4">
        Projets Récents
      </h2>

      <p className="text-slate-600 dark:text-slate-400 max-w-xl">
        Découvrez nos projets réalisés en équipe et en collaboration avec nos clients.
      </p>

    </div>

  </div>

  {/* GRID PRINCIPAL */}
  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">

    {/* PROJET 1 */}
    <a
      href="https://librecommelere.com/"
      target="_blank"
      rel="noopener noreferrer"
      className="group rounded-2xl overflow-hidden bg-white dark:bg-slate-900 shadow-lg hover:shadow-2xl hover:-translate-y-2 transition-all duration-300"
    >

      <div className="overflow-hidden">
        <img
          src="/images/pro1.png"
          alt="Libre Comme Lere"
          className="w-full h-[240px] object-cover transition-transform duration-500 group-hover:scale-105"
        />
      </div>

      <div className="p-6">

        <h3 className="text-slate-900 dark:text-white text-xl font-bold mb-2">
          Libre Comme Lere
        </h3>

        <p className="text-slate-600 dark:text-slate-400 text-sm mb-4">
          Plateforme web moderne développée pour présenter et valoriser les contenus culturels et artistiques.
        </p>

        <span className="px-3 py-1 text-xs font-semibold bg-blue-100 text-blue-700 dark:bg-blue-900/40 dark:text-blue-300 rounded-full">
          WordPress
        </span>

      </div>

    </a>


    {/* PROJET 2 */}
    <a
      href="https://avalonsecure.com/"
      target="_blank"
      rel="noopener noreferrer"
      className="group rounded-2xl overflow-hidden bg-white dark:bg-slate-900 shadow-lg hover:shadow-2xl hover:-translate-y-2 transition-all duration-300"
    >

      <div className="overflow-hidden">
        <img
          src="/images/pro2.png"
          alt="Avalon Secure"
          className="w-full h-[240px] object-cover transition-transform duration-500 group-hover:scale-105"
        />
      </div>

      <div className="p-6">

        <h3 className="text-slate-900 dark:text-white text-xl font-bold mb-2">
          Avalon Secure
        </h3>

        <p className="text-slate-600 dark:text-slate-400 text-sm mb-4">
          Site web dédié aux solutions de cybersécurité et à la protection contre les menaces numériques.
        </p>

        <span className="px-3 py-1 text-xs font-semibold bg-blue-100 text-blue-700 dark:bg-blue-900/40 dark:text-blue-300 rounded-full">
          WordPress
        </span>

      </div>

    </a>


    {/* PROJET 3 */}
    <a
      href="https://prepaexams.esgis.bj/"
      target="_blank"
      rel="noopener noreferrer"
      className="group rounded-2xl overflow-hidden bg-white dark:bg-slate-900 shadow-lg hover:shadow-2xl hover:-translate-y-2 transition-all duration-300"
    >

      <div className="overflow-hidden">
        <img
          src="/images/pro3.png"
          alt="PrepaExams ESGIS"
          className="w-full h-[240px] object-cover transition-transform duration-500 group-hover:scale-105"
        />
      </div>

      <div className="p-6">

        <h3 className="text-slate-900 dark:text-white text-xl font-bold mb-2">
          PrepaExams ESGIS
        </h3>

        <p className="text-slate-600 dark:text-slate-400 text-sm mb-4">
          Plateforme permettant aux étudiants de consulter et télécharger des épreuves d'examens.
        </p>

        <span className="px-3 py-1 text-xs font-semibold bg-blue-100 text-blue-700 dark:bg-blue-900/40 dark:text-blue-300 rounded-full">
          WordPress
        </span>

      </div>

    </a>


    {/* PROJET 4 */}
    <a
      href="https://www.dinerotechnologieslimited.com/"
      target="_blank"
      rel="noopener noreferrer"
      className="group rounded-2xl overflow-hidden bg-white dark:bg-slate-900 shadow-lg hover:shadow-2xl hover:-translate-y-2 transition-all duration-300"
    >

      <div className="overflow-hidden">
        <img
          src="/images/pro4.png"
          alt="Dinero Technologies"
          className="w-full h-[240px] object-cover transition-transform duration-500 group-hover:scale-105"
        />
      </div>

      <div className="p-6">

        <h3 className="text-slate-900 dark:text-white text-xl font-bold mb-2">
          Dinero Technologies
        </h3>

        <p className="text-slate-600 dark:text-slate-400 text-sm mb-4">
          Site corporate présentant les solutions technologiques et services digitaux de l'entreprise.
        </p>

        <span className="px-3 py-1 text-xs font-semibold bg-blue-100 text-blue-700 dark:bg-blue-900/40 dark:text-blue-300 rounded-full">
          WordPress
        </span>

      </div>

    </a>

  </div>

</section>

          {/* STACK */}
          <section className="w-full py-20 px-6 md:px-20 bg-slate-50 dark:bg-slate-900/30" id="stack">

            <div className="text-center mb-12">

              <h2 className="text-4xl font-extrabold text-slate-900 dark:text-slate-100 mb-4">
                Notre stack technique
              </h2>

              <p className="text-slate-600 dark:text-slate-400 mx-auto">
                Nous utilisons les technologies les plus fiables et performantes pour garantir la qualité, la rapidité et l’évolutivité de vos applications.
              </p>

            </div>

            <GridStack />

          </section>

          

          
           <section className="w-full py-20 px-6 md:px-20 bg-white dark:bg-slate-900/50" id="contact">
  <div>
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">

      {/* Texte d'accroche */}
      <div>
        <h2 className="text-slate-900 dark:text-slate-100 text-4xl font-bold mb-6">
          Contactez-nous pour <span className="text-primary">votre projet</span>
        </h2>

        <p className="text-slate-600 dark:text-slate-400 text-lg mb-8 leading-relaxed">
          Vous avez une idée d’application ou de site web ?  
          Notre équipe transforme vos concepts en solutions digitales performantes et sur mesure.
        </p>

        <div className="space-y-6">
          <div className="flex items-center justify-center gap-4">
           
            <div>
              <p className="text-xs font-bold text-slate-500 dark:text-slate-400 uppercase">Email</p>
              <p className="font-bold text-slate-900 dark:text-slate-100">outtaraduo@protron.me</p>
            </div>
          </div>

          <div className="flex items-center justify-center gap-4">
            <div>
              <p className="text-xs font-bold text-slate-500 dark:text-slate-400 uppercase">Réponse</p>
              <p className="font-bold text-slate-900 dark:text-slate-100">Sous 24 heures</p>
            </div>
          </div>
        </div>
      </div>

      {/* Formulaire */}
      <div className="glass-card p-8 md:p-10 rounded-2xl border border-primary/70 ">
        <form className="space-y-6">
          <div className="space-y-2">
            <label className="text-sm font-bold text-slate-900 dark:text-slate-100">Nom</label>
            <input
              type="text"
              placeholder="Votre nom"
              className="w-full bg-white dark:bg-slate-800 border border-slate-300 dark:border-slate-600 rounded-lg px-4 py-3 text-slate-900 dark:text-slate-100 placeholder-slate-500 dark:placeholder-slate-400 focus:border-primary focus:ring-1 focus:ring-primary outline-none transition-all"
            />
          </div>

          <div className="space-y-2">
            <label className="text-sm font-bold text-slate-900 dark:text-slate-100">Email</label>
            <input
              type="email"
              placeholder="votre@email.com"
              className="w-full bg-white dark:bg-slate-800 border border-slate-300 dark:border-slate-600 rounded-lg px-4 py-3 text-slate-900 dark:text-slate-100 placeholder-slate-500 dark:placeholder-slate-400 focus:border-primary focus:ring-1 focus:ring-primary outline-none transition-all"
            />
          </div>

          <div className="space-y-2">
            <label className="text-sm font-bold text-slate-900 dark:text-slate-100">Message</label>
            <textarea
              placeholder="Décrivez votre projet ou vos besoins..."
              className="w-full bg-white dark:bg-slate-800 border border-slate-300 dark:border-slate-600 rounded-lg px-4 py-3 text-slate-900 dark:text-slate-100 placeholder-slate-500 dark:placeholder-slate-400 h-32 focus:border-primary focus:ring-1 focus:ring-primary outline-none transition-all"
            ></textarea>
          </div>

          <button className="w-full bg-primary text-white dark:text-slate-100 font-bold py-4 rounded-lg hover:brightness-110 transition-all shadow-lg shadow-primary/20">
            Envoyer le message
          </button>
        </form>
      </div>
    </div>
  </div>
</section>

        </main>

        {/* FOOTER */}
        <footer className="w-full bg-slate-900 dark:bg-slate-950 py-12 px-6 md:px-20 border-t border-primary/10">

          <div className="flex flex-col md:flex-row justify-between items-center gap-8">

            <p className="font-bold text-lg text-white">
              OWS.dev
            </p>

            <p className="text-white dark:text-slate-400 text-sm">
              © 2026 OWS.dev Tous droits réservés.
            </p>

          </div>

        </footer>

      </div>
    </div>
  );
};

export default Page;