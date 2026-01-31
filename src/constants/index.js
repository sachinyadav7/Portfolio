import {
    mobile,
    backend,
    creator,
    web,
} from "../assets";

export const navLinks = [
    {
        id: "about",
        title: "About",
    },
    {
        id: "work",
        title: "Work",
    },
    {
        id: "contact",
        title: "Contact",
    },
];

const services = [
    {
        title: "Backend Engineer",
        icon: backend,
    },
    {
        title: "Security Engineer",
        icon: creator,
    },
    {
        title: "AI/ML Developer",
        icon: mobile,
    },
    {
        title: "Full Stack Developer",
        icon: web,
    },
];

const technologies = [
    {
        name: "Languages",
        skills: [
            { name: "Python", icon: null },
            { name: "Java", icon: null },
            { name: "C", icon: null },
            { name: "JavaScript", icon: null },
            { name: "TypeScript", icon: null },
        ]
    },
    {
        name: "Frontend",
        skills: [
            { name: "HTML 5", icon: null },
            { name: "CSS 3", icon: null },
            { name: "React JS", icon: null },
            { name: "Redux Toolkit", icon: null },
            { name: "Tailwind CSS", icon: null },
        ]
    },
    {
        name: "Backend",
        skills: [
            { name: "Node JS", icon: null },
            { name: "PostgreSQL", icon: null },
            { name: "Flask", icon: null },
            { name: "Gunicorn", icon: null },
        ]
    },
    {
        name: "DevOps & Tools",
        skills: [
            { name: "Docker", icon: null },
            { name: "Git", icon: null },
            { name: "Linux", icon: null },
        ]
    },
];

const experiences = [
    {
        title: "Technical Intern",
        company_name: "Edunet Foundation",
        icon: null,
        iconBg: "#E6DEDD",
        date: "Apr 2025 - Present",
        points: [
            "Developed secure backend workflows for Face Recognition Attendance System.",
            "Optimized performance for computer vision integration.",
            "focused on AI and Computer Vision technologies.",
        ],
    },
    {
        title: "Cybersecurity Virtual Intern",
        company_name: "Palo Alto Networks",
        icon: null,
        iconBg: "#383E56",
        date: "10 Weeks",
        points: [
            "Studied secure application design, threat modeling, and enterprise network defense strategies.",
            "Worked on vulnerability analysis and system reliability best practices.",
            "Gained enterprise security practices experience.",
        ],
    },
];

const education = [
    {
        degree: "B.Tech – Computer Science Engineering (Cyber Security)",
        institution: "Shri Ramdeobaba College of Engineering and Management, Nagpur",
        year: "2023 – Present",
        grade: "CGPA: 8.34",
        points: [
            "MHT-CET: 90 Percentile",
            "JEE Main: 70 Percentile"
        ]
    }
];

const certifications = [
    "DevOps, DataOps, MLOps – Duke University",
    "Cybersecurity Virtual Internship – Palo Alto Networks",
    "AI: Transformative Learning – Microsoft & SAP TechSaksham",
];

const projects = [
    {
        name: "TrustGuardian",
        description:
            "Decentralized Trust Score System. Built security platform to evaluate credibility of online profiles using behavioral signals and ML-based risk scoring. Designed secure REST APIs, fraud detection logic, and browser extension to flag suspicious accounts in real time.",
        tags: [
            {
                name: "react",
                color: "blue-text-gradient",
            },
            {
                name: "spring-boot",
                color: "green-text-gradient",
            },
            {
                name: "ml",
                color: "pink-text-gradient",
            },
        ],
        image: null,
        source_code_link: "https://github.com/sachinyadav7",
    },
    {
        name: "MediVault",
        description:
            "Encrypted Records Management Platform. Implemented AES-256 encryption, RBAC authorization, MFA login, bcrypt hashing, and audit logs. Designed secure architecture focusing on data integrity, access control, and HIPAA-aligned practices.",
        tags: [
            {
                name: "flask",
                color: "blue-text-gradient",
            },
            {
                name: "postgresql",
                color: "green-text-gradient",
            },
            {
                name: "docker",
                color: "pink-text-gradient",
            },
        ],
        image: null,
        source_code_link: "https://github.com/sachinyadav7",
    },
    {
        name: "Face Recog. Attendance",
        description:
            "Real-time biometric authentication pipeline with secure identity verification and database integration. Reduced manual attendance errors by 95% and improved system reliability.",
        tags: [
            {
                name: "python",
                color: "blue-text-gradient",
            },
            {
                name: "opencv",
                color: "green-text-gradient",
            },
            {
                name: "flask",
                color: "pink-text-gradient",
            },
        ],
        image: null,
        source_code_link: "https://github.com/sachinyadav7",
    },
    {
        name: "AI Threat Analysis",
        description:
            "AI Web Intelligence system. Built crawler and NLP pipelines to analyze web content and detect suspicious or malicious patterns. Exposed analytics dashboards for monitoring trends and risk indicators.",
        tags: [
            {
                name: "python",
                color: "blue-text-gradient",
            },
            {
                name: "nlp",
                color: "green-text-gradient",
            },
            {
                name: "flask",
                color: "pink-text-gradient",
            },
        ],
        image: null,
        source_code_link: "https://github.com/sachinyadav7",
    },
];

export { services, technologies, experiences, education, certifications, projects }; // Export services even if empty to avoid break
