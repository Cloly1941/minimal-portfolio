// ** Next
import Image from "next/image";

// ** Components
import Button from "@/components/common/Button";
import ArrowIcon from "@/components/icons/ArrowIcon";

// ** Lib
import {cn} from "@/lib/utils";
import Link from "next/link";

type TProjectCard = {
    title: string,
    href: string,
    image: string,
    arrowColorClass: string,
    buttonClass: string,
}

const route = '/project'

const featuredProjects: TProjectCard[] = [
    {
        title: "Portfolio",
        href: `${route}/portfolio`,
        image: "/portfolio.png",
        arrowColorClass: "text-[#F072CD]",
        buttonClass: "bg-[#F072CD] border-[#0F0F0F]",
    },
    {
        title: "Ztruyen Comic",
        href: `${route}/ztruyen-comic`,
        image: "/ztruyen.png",
        arrowColorClass: "text-[#5AB5E8]",
        buttonClass: "bg-[#5AB5E8] border-[#1C6AB1]",
    },
    {
        title: "Dashboard Ztruyen comic",
        href: `${route}/dashboard-ztruyen`,
        image: "/dashboard-ztruyen.png",
        arrowColorClass: "text-[#E5C141]",
        buttonClass: "bg-[#E5C141] border-[#BB9C2A]",
    },
    {
        title: "Template free",
        href: `${route}/template-free`,
        image: "/prj.png",
        arrowColorClass: "text-[#7CF072]",
        buttonClass: "bg-[#7CF072] border-[#4ED543]",
    },
];

const FeaturedProjectSection = () => {
    return (
        <section className='mt-section-rotate'>
            <div className='flex flex-col xl:flex-row justify-between'>

                {/* Title */}
                <div className='w-full xl:w-[24%] xl:pt-[130px]'>
                    <h2 className='text-title arrow-icon-mb'>Featured Projects</h2>
                    <Image src='/arrow.svg' alt='Arrow Icon | Nguyen Trong But' width={77.54} height={45.12}
                           className='-rotate-100 xl:-rotate-140 arrow-icon-size xl:ml-auto mr-6'/>
                    <p className='mt-5 xl:mt-12 text-base xl:text-2xl leading-snug'>Have <b>4</b> featured personal projects</p>
                </div>

                {/* List Project */}
                <ul className='w-full xl:w-[75%] grid grid-cols-1 md:grid-cols-2 gap-8 mt-[31px] xl:mt-0'>
                    {featuredProjects.map((project) => (
                        <li
                            key={project.title}
                            className="border-[3px] border-black p-4 xl:p-5 rounded-md"
                        >
                           <Link href={project.href} className='relative h-[318px] block'>
                               <Image
                                   src={project.image}
                                   alt={`${project.title} | Nguyen Trong But`}
                                   fill
                                   loading='lazy'
                                   className="object-cover rounded-md"
                               />
                           </Link>

                            <div className="flex justify-between mt-4 xl:mt-5">
                                <Link href={project.href} className='font-title font-bold text-xl xl:text-[28px] w-[50%] line-clamp-2'>
                                    <h3>
                                        {project.title}
                                    </h3>
                                </Link>

                                <div className="flex items-start">
                                    <ArrowIcon
                                        className={cn("-mr-1", project.arrowColorClass)}
                                    />

                                    <Link href={project.href}>
                                        <Button
                                            variant="mixed"
                                            className={cn("mt-[22px]", project.buttonClass)}
                                        >
                                            View Detail
                                        </Button>
                                    </Link>
                                </div>
                            </div>
                        </li>
                    ))}
                </ul>
            </div>
        </section>
    )
}

export default FeaturedProjectSection;