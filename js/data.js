/*
 * Site content. Edit this file to update jobs, skills, or stats —
 * never touch index.html for that. main.js reads this and renders
 * the Experience/Skills sections and hero role rotation at load time.
 */
var SITE_DATA = {
    profile: {
        email: "lmdelgallego@gmail.com",
        linkedin: "https://www.linkedin.com/in/luis-miguel-del-gallego-horta/",
        github: "https://github.com/lmdelgallego",
        cvPath: "files/Luis-Miguel-Del-Gallego-Horta-CV.pdf",
        roles: [
            "Lead Software Engineer",
            "Frontend Architect",
            "18+ years shipping web products",
            "Angular · React · Vue · TypeScript"
        ]
    },

    about: {
        stats: [
            { num: "18+", label: "years in the field" },
            { num: "11", label: "companies" },
            { num: "6", label: "industries shipped in" }
        ]
    },

    // Most recent first. Each becomes one commit card in the Experience timeline.
    experience: [
        {
            branch: "senior-angular-engineer-at-n-ix",
            date: "Aug 2025 — Present",
            title: "Senior Angular Engineer",
            company: "N-iX",
            location: "Bogotá, Colombia",
            current: true,
            bullets: [
                "Build and maintain a desktop application (Angular, Electron, Nx monorepo) that helps users configure and operate multifunction crafting machines for printing, engraving, and stickers.",
                "Partner with designers and backend engineers to ship intuitive, performant user experiences, validating UI/UX designs and technical requirements from a frontend perspective.",
                "Drive code quality through code reviews, sprint planning, and cross-functional refinement sessions, raising performance and maintainability standards.",
                "Apply AI coding tools daily to accelerate code reviews and debug execution issues, improving team process efficiency."
            ],
            tech: ["Angular", "TypeScript", "Storybook", "GitHub Actions", "Electron", "Nx Monorepo"]
        },
        {
            branch: "fullstack-lead-at-licify",
            date: "Oct 2023 — Aug 2025",
            title: "Senior Full-Stack Engineer / Front End Lead",
            company: "Licify",
            location: "Bogotá, Colombia",
            bullets: [
                "Led the migration to a Single-SPA micro-frontend architecture, unlocking modular, independently evolving frontend surfaces and shaping platform-wide decisions for scalability and maintainability.",
                "Designed and built full-stack business modules (Angular, React, NestJS, MongoDB), deploying NestJS services as independent microservices for end-to-end feature ownership.",
                "Modernized legacy code to raise application performance, stability, and developer experience.",
                "Built Firebase-based feature flag systems to control rollouts and reduce release risk.",
                "Mentored engineers and improved CI/CD workflows through code review and automated testing, partnering with product and QA to deliver business-critical features.",
                "Diagnosed a production RAG failure in the negotiation-package generator as a consultant, tracing it to an incomplete retrieval context rather than a model or prompt issue, and identified the ingestion fix that resolved user complaints."
            ],
            tech: ["Docker", "NestJS", "Node.js", "Angular", "React", "Chakra UI", "Stencil", "TypeScript", "GCP", "Firebase"]
        },
        {
            branch: "player-coach-at-playvox",
            date: "Oct 2021 — Jun 2023",
            title: "Player-Coach Senior Software Engineer",
            company: "Playvox",
            location: "Manizales, Colombia",
            bullets: [
                "Built and maintained core product modules (Vue.js) for a large-scale contact-center workforce performance platform.",
                "Shaped the frontend's architectural evolution toward micro-frontends, improving quality, performance, and maintainability through refactoring.",
                "Mentored developers and upheld engineering standards through code review, partnering with product and QA to ship reliable, user-facing features."
            ],
            tech: ["Docker", "Python", "Node.js", "Vue", "TypeScript", "AWS", "CI/CD"]
        },
        {
            branch: "lead-frontend-at-adl",
            date: "Nov 2018 — Oct 2021",
            title: "Lead Front End Engineer",
            company: "ADL Digital Lab",
            location: "Bogotá, Colombia",
            bullets: [
                "Architected and built a digital banking platform from scratch with Angular, designing reusable components and scalable application patterns.",
                "Led the mobile banking experience using Ionic, adapting shared components across web and mobile channels.",
                "Partnered with UX/UI and product teams to translate requirements into digital banking flows and onboarding experiences.",
                "Mentored developers and improved test coverage and release reliability through code review and QA collaboration."
            ],
            tech: ["Node.js", "Angular", "Ionic", "TypeScript", "Jenkins", "AWS"]
        },
        {
            branch: "senior-web-ui-at-globant",
            date: "Jun 2018 — Nov 2018",
            title: "Senior Web UI Developer",
            company: "Globant",
            location: "Medellín, Colombia",
            bullets: [
                "Enhanced UI usability and built reusable Angular components for an internal resource-allocation and time-management platform, optimizing workflows for project staffing and developer-hour allocation.",
                "Partnered with QA to validate features and support reliable releases."
            ],
            tech: ["Angular", "TypeScript", "AWS"]
        },
        {
            branch: "senior-frontend-at-ideaware",
            date: "Sep 2015 — Jun 2018",
            title: "Senior Frontend Developer",
            company: "Ideaware",
            location: "Barranquilla, Colombia",
            bullets: [
                "Defined and architected a 3D capsule-configuration experience (Angular, Three.js) with interactive visualization for realistic design previews.",
                "Improved the product's customization experience by translating business and design requirements into scalable technical solutions."
            ],
            tech: ["Node.js", "Angular", "React", "Three.js", "PHP", "WordPress"]
        }
    ],

    earlierExperience: {
        date: "2006 — 2015",
        items: [
            { role: "Web Developer", company: "Sonovista Publicidad S.A.", location: "Barranquilla", dates: "Jun 2012 – Aug 2015" },
            { role: "Software Engineer", company: "Serfinansa S.A.", location: "Barranquilla", dates: "Mar 2012 – Jul 2012" },
            { role: "Systems Engineer", company: "Sonovista Publicidad S.A.", location: "Barranquilla", dates: "Apr 2011 – Feb 2012" },
            { role: "Web Developer", company: "My Soccer Uniform", location: "Miami, FL", dates: "Nov 2007 – Oct 2011" },
            { role: "Software Engineer", company: "Sonovista Publicidad S.A.", location: "Barranquilla", dates: "Jan 2011 – Apr 2011" },
            { role: "Web Developer", company: "Asesorias IT / Caribe Digital", location: "Barranquilla", dates: "Nov 2010 – Feb 2011" },
            { role: "Web Developer", company: "Studio Grafico / Miami Graphic", location: "Barranquilla", dates: "Jun 2006 – Nov 2007" }
        ],
        stackNote: "Earlier stack: .NET, JSF, PHP, JavaScript, Java, Flash/ActionScript, MySQL, HTML, CSS."
    },

    // "size" controls the bento tile: "lg" (2 cols x 2 rows), "wide" (2 cols),
    // "accent" (highlighted as a differentiator), or omit for a plain 1x1 tile.
    skills: [
        {
            name: "Frontend",
            size: "lg",
            tags: ["Angular", "React", "Vue", "Next.js", "TypeScript", "JavaScript", "HTML", "CSS", "Sass", "Ionic", "Three.js", "Tailwind CSS", "Shadcn/ui", "react-hook-form", "Zod"]
        },
        {
            name: "Backend &amp; Data",
            size: "wide",
            tags: ["Node.js", "NestJS", "Python", "PHP", "Java", ".NET", "JSF", "MySQL", "MongoDB", "PostgreSQL", "Supabase", "better-auth"]
        },
        {
            name: "Architecture &amp; Design Systems",
            tags: ["Micro-frontends", "Single-SPA", "Storybook", "Stencil", "Web Components", "Nx Monorepo"]
        },
        {
            name: "Cloud &amp; Delivery",
            tags: ["AWS", "GCP", "Docker", "Linux", "GitHub Actions", "Jenkins", "Webpack", "Git", "CI/CD"]
        },
        {
            name: "AI &amp; Agentic Coding",
            size: "accent",
            tags: ["OpenAI API", "Anthropic API", "Claude Code", "Codex"]
        },
        {
            name: "Leadership",
            tags: ["Agile delivery", "Team leadership", "Sprint planning", "Code review", "Mentoring", "Continuous improvement"]
        }
    ]
};
