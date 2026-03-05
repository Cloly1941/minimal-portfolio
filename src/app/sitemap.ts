export default async function sitemap() {
    const baseUrl = process.env.NEXT_PUBLIC_YOUR_WEBSITE;

    return [
        {
            url: baseUrl,
            lastModified: new Date(),
            changeFrequency: 'daily',
            priority: 1.0,
        }
    ]
}
