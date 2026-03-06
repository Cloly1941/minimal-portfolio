// ** Next
import { MetadataRoute } from "next"

// ** Mock data
import { mockDataDetail } from "@/mock-data"

export default function sitemap(): MetadataRoute.Sitemap {
    const baseUrl = process.env.NEXT_PUBLIC_YOUR_WEBSITE || "http://localhost:3000"

    const routeDetail = "project"

    const detailUrl = mockDataDetail.map((detail) => ({
        url: `${baseUrl}/${routeDetail}/${detail.slug}`,
        lastModified: new Date(),
        changeFrequency: "weekly" as const,
        priority: 0.9,
    }))

    return [
        {
            url: baseUrl,
            lastModified: new Date(),
            changeFrequency: "daily",
            priority: 1,
        },
        ...detailUrl,
    ]
}