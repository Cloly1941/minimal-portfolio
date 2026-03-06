interface Detail {
    id: number;
    name: string;
    slug: string;
    description: string;
    imageUrl: string;
    version: string;
    techStack: string[];
    linkDemo: string;
    linkGithub: string;
}

export const mockDataDetail: Detail[] = [
    {
        id: 1,
        name: "Portfolio",
        slug: "portfolio",
        description: "Minimal developer portfolio built with Next.js and Tailwind.",
        imageUrl: "/portfolio.png",
        version: "v1.0.0",
        techStack: ["Next.js", "Tailwind CSS", "TypeScript", "clsx", "Lucide Icon", "EmailJs", "react hot toast", "Giscus"],
        linkDemo: "https://nguyentrongbut.io.vn",
        linkGithub: "https://github.com/Cloly1941/minimal-portfolio"
    },
    {
        id: 2,
        name: "Ztruyen Comic",
        slug: "ztruyen-comic",
        description: "ZTruyen Comic is a free online comic reading website with a smooth UI/UX and easy search through Google.",
        imageUrl: "/ztruyen.png",
        version: "v1.0.0",
        techStack: ["Next.js", "Tailwind CSS", "Shadcn ui", "TypeScript", "Swiper", "clsx", "Lucide Icon", "react hot toast", "React Hook Form", "Zod", "Giscus", "React Turnstile"],
        linkDemo: "https://ztruyen.io.vn",
        linkGithub: "https://github.com/Cloly1941/ztruyen-v1.1.0"
    },
    {
        id: 3,
        name: "Dashboard Ztruyen comic",
        slug: "dashboard-ztruyen",
        description: "ZTruyen Comic Admin is a web application built with Next.js and Tailwind CSS, designed to manage the content of the ZTruyen Comic website.",
        imageUrl: "/ztruyen-admin.png",
        version: "v1.0.0",
        techStack: ["React.js", "Tailwind CSS", "Shadcn ui", "TypeScript", "clsx", "Lucide Icon", "React Helmet", "React Router Dom", "react hot toast", "Tanstack Query", "React Hook Form", "Zod"],
        linkDemo: "https://admin.ztruyen.io.vn",
        linkGithub: "https://github.com/Cloly1941/ztruyen-admin"
    },
    {
        id: 4,
        name: "Template free",
        slug: "template-free",
        description: "Template Free is a collection of free templates for various purposes, including websites, presentations, and documents.",
        imageUrl: "/prj.png",
        version: "",
        techStack: ["Next.js", "Tailwind CSS", "Shadcn ui", "TypeScript", "clsx", "Lucide Icon", "react hot toast", "React Hook Form", "Zod", "Giscus"],
        linkDemo: "https://templatefree.io.vn",
        linkGithub: ""
    }
]