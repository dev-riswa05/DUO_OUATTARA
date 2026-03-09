import React from "react";

const GridStack = () => {
  const stacks = [
    // Front-end
    { name: "HTML5", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg" },
    { name: "CSS3", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg" },
    { name: "JavaScript", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg" },
    { name: "React", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg" },
    { name: "Next.js", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original.svg" },
    { name: "Tailwind CSS", icon: "https://images.seeklogo.com/logo-png/40/1/tailwind-css-wordmark-logo-png_seeklogo-409466.png", large: true },
    { name: "Bootstrap", icon: "https://th.bing.com/th/id/R.ca5246ac49ffa139a8253653cdbe94cd?rik=eIZRfRO3avsmCQ&pid=ImgRaw&r=0" },

    // Backend
    { name: "PHP", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/php/php-original.svg" },
    { name: "Laravel", icon: "https://tse3.mm.bing.net/th/id/OIP.2edpcNXcl9qRpj9yx34w6QHaCv?rs=1&pid=ImgDetMain&o=7&rm=3", large: true },
    { name: "Python", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg" },
    { name: "Django", icon: "https://image.pngaaa.com/344/1947344-middle.png", large: true },
    { name: "Flask", icon: "https://tse1.mm.bing.net/th/id/OIP.pNv5hoaND-MKiZ5uHJOeOwHaEK?w=750&h=422&rs=1&pid=ImgDetMain&o=7&rm=3", large: true },
    { name: "Express.js", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/express/express-original.svg" },
    { name: "REST API", icon: "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24'%3E%3Ccircle cx='12' cy='12' r='10' fill='%23007ACC'/%3E%3Ctext x='12' y='16' font-size='8' text-anchor='middle' fill='white'%3EREST%3C/text%3E%3C/svg%3E" },
    { name: "Go", icon: "https://inclusioncloud.com/wp-content/uploads/2023/10/go-open-source.png" },

    // Database
    { name: "PostgreSQL", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg" },
    { name: "SQLAlchemy", icon: "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24'%3E%3Crect width='24' height='24' rx='4' fill='%230078D5'/%3E%3Ctext x='12' y='16' font-size='6' text-anchor='middle' fill='white'%3ESQLA%3C/text%3E%3C/svg%3E" },

    // CMS
    { name: "WordPress", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/wordpress/wordpress-original.svg" },
    { name: "Elementor", icon: "https://logowik.com/content/uploads/images/elementor1618.jpg", large: true },
    { name: "WPBakery", icon: "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24'%3E%3Ccircle cx='12' cy='12' r='10' fill='%23FF3366'/%3E%3Ctext x='12' y='16' font-size='5' text-anchor='middle' fill='white'%3EWPB%3C/text%3E%3C/svg%3E" },
  ];

  return (
    <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
      {stacks.map((tech) => (
        <div
          key={tech.name}
          className="flex flex-col items-center justify-center p-6 rounded-xl bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 hover:border-primary hover:shadow-lg hover:shadow-primary/20 transition-all group text-slate-900 dark:text-slate-100"
        >
          <img
            src={tech.icon}
            alt={tech.name}
            className={`mb-3 object-contain ${tech.large ? "w-20 h-20" : "w-12 h-12"}`}
          />
          <span className="font-bold text-center text-sm">{tech.name}</span>
        </div>
      ))}
    </div>
  );
};

export default GridStack;