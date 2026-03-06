const techColorMap: Record<string, string> = {
    "Next.js": "bg-black text-white",
    "React.js": "bg-sky-500 text-white",
    "Tailwind CSS": "bg-cyan-500 text-white",
    "TypeScript": "bg-blue-600 text-white",
    "Shadcn ui": "bg-neutral-800 text-white",
    "Swiper": "bg-indigo-500 text-white",
    "clsx": "bg-gray-600 text-white",
    "Lucide Icon": "bg-orange-500 text-white",
    "EmailJs": "bg-emerald-500 text-white",
    "react hot toast": "bg-pink-500 text-white",
    "React Hook Form": "bg-rose-500 text-white",
    "Zod": "bg-purple-500 text-white",
    "Giscus": "bg-gray-900 text-white",
    "React Helmet": "bg-green-600 text-white",
    "React Router Dom": "bg-red-500 text-white",
    "Tanstack Query": "bg-yellow-500 text-black",
    "React Turnstile": "bg-blue-500 text-white"
}

export const getTechColor = (tech: string) => {
    return techColorMap[tech] || "bg-gray-200 text-black"
}