// ** Next
import Image from "next/image";
import Link from "next/link";
import {Metadata} from "next";

// ** Components
import Button from "@/components/common/Button";
import GiscusComments from "@/components/common/GiscusComments";

// ** Icons
import {ExternalLink, Github} from "lucide-react";

// ** Service
import {getDetailBySlug} from "@/services/project";

// ** Util
import {getTechColor} from "@/utils/techColorMap";

type TDetailProject = {
    params: Promise<{ slug: string }>
}

const router = 'project'

export async function generateMetadata({ params }: TDetailProject): Promise<Metadata> {
    const { slug } = await params;
    const detailProject = getDetailBySlug(slug);

    const siteUrl = new URL(process.env.NEXT_PUBLIC_YOUR_WEBSITE || 'https://localhost:3000');

    if (!detailProject) {
        return {
            title: "Nguyen Trong But | Frontend Developer Portfolio",
            description:
                "Explore the portfolio of Nguyen Trong But, a frontend developer specializing in Next.js, React, and modern web technologies.",
        };
    }

    const title = `${detailProject.name} | Nguyen Trong But Portfolio`;
    const description = detailProject.description;

    return {
        metadataBase: siteUrl,

        title,
        description,

        keywords: [
            detailProject.name,
            `${detailProject.name} project`,
            "Next.js project",
            "React project",
            "Frontend developer portfolio",
            "Nguyen Trong But",
        ],

        alternates: {
            canonical: `${siteUrl}/${router}/${slug}`,
        },

        robots: {
            index: true,
            follow: true,
        },

        openGraph: {
            title,
            description,
            url: `${siteUrl}/${router}/${slug}`,
            siteName: "Nguyen Trong But Portfolio",
            images: [
                {
                    url: detailProject.imgUrl,
                    width: 1200,
                    height: 630,
                    alt: detailProject.name,
                },
            ],
            locale: "en_US",
            type: "article",
        },

        twitter: {
            card: "summary_large_image",
            title,
            description,
            images: [detailProject.imgUrl],
        },
    };
}

const DetailProject = async ({params}: TDetailProject) => {

    const {slug} = await params

    const detailProject = getDetailBySlug(slug)

    if (!detailProject) return <div></div>

    return (
        <>
            <div className='grid grid-cols-1 gap-y-10 lg:grid-cols-[7fr_3fr] lg:gap-10 items-start'>
                <section className='border-detail'>
                    {/* Title */}
                    <h1 className='font-title font-bold text-2xl sm:text-3xl lg:text-4xl line-clamp-2'>{detailProject.name}</h1>

                    {/* Image Prj */}
                    <figure className='relative h-[250px] sm:h-[350px] lg:h-[450px] mt-4 rounded-md'>
                        <Image src={detailProject.imageUrl} alt={`${detailProject.name} | 'Nguyen Trong But'`}
                               fill
                               priority
                               placeholder='blur'
                               className='object-cover rounded-md'
                               sizes="(max-width: 640px) 50vw,
                                       (max-width: 1023px) 100vw,
                                       calc(70vw - 28px)"
                        />
                    </figure>

                    <div className='space-y-5 mt-6'>
                        {/* Tech stacks */}
                        <ul className='flex flex-wrap gap-4 font-title font-bold text-sm sm:text-base lg:text-lg'>
                            {detailProject.techStack.map((tech) => (
                                <li
                                    key={tech}
                                    className={`px-2 ${getTechColor(tech)}`}
                                >
                                    {tech}
                                </li>
                            ))}
                        </ul>

                        {/* Desc */}
                        <p className='text-base md:text-lg lg:text-2xl leading-snug'>{detailProject.description}</p>
                    </div>
                </section>
                <section className='border-detail p-6 lg:p-8 lg:sticky lg:top-24'>

                    {/* Version */}
                    <div className='flex justify-between text-base md:text-lg lg:text-2xl leading-snug'>
                        <h3>Version:</h3>
                        <p>{detailProject.version || ''}</p>
                    </div>

                    {/*  Group Btn  */}
                    <Link href={detailProject.linkGithub} className='block mt-8'>
                        <Button className='w-full hover:scale-none'>
                            View Code
                            <Github className='lg:size-7 lg:hidden xl:block'/>
                        </Button>
                    </Link>
                    <Link href={detailProject.linkDemo} className='block mt-4'>
                        <Button className='w-full hover:scale-none bg-white text-black'>
                            Live Preview
                            <ExternalLink className='lg:size-7 lg:hidden xl:block'/>
                        </Button>
                    </Link>
                </section>
            </div>
            <div className='border-detail mt-10'>
                <h2 className='font-title font-bold text-2xl sm:text-3xl lg:text-4xl'>Comments:</h2>
                <div className='mt-4'>
                    <GiscusComments/>
                </div>
            </div>
        </>
    )
}

export default DetailProject