// ** Next
import Image from "next/image";

// ** lib
import {cn} from "@/lib/utils";

// ** Images
import arrowIcon from "@/public/arrow.svg"

type TExperience = {
    id: number;
    title: string;
    company: string;
    description: string;
    date: string;
    bgClass: string;
    borderClass: string;
};

const experiences: TExperience[] = [
    {
        id: 1,
        title: "Design intern",
        company: "Google",
        description: "Worked on design system at Material 3 designs",
        date: "20, April 2021",
        bgClass: "bg-[#FFE68C]",
        borderClass: "border-[#EECD56]",
    },
    {
        id: 2,
        title: "Sr. UI/UX Designer",
        company: "Microsoft",
        description: "Worked on design system at Material 3 designs",
        date: "20, April 2022",
        bgClass: "bg-[#9DDCFF]",
        borderClass: "border-[#5AB5E8]",
    },
    {
        id: 3,
        title: "Software Engineer",
        company: "SASS Startup",
        description: "Worked on design system at Material 3 designs",
        date: "20, April 2023",
        bgClass: "bg-[#FFC9F0]",
        borderClass: "border-[#F384D4]",
    },
];

const WorkExperienceSection = () => {
    return (
        <section className='mt-section'>
            <div className='flex flex-col lg:flex-row justify-between'>

                {/* Title */}
                <div className='w-full lg:w-[26%] lg:pt-10'>
                    <h2 className='text-title arrow-icon-mb'>Work Experience</h2>
                    <Image src={arrowIcon} alt='Arrow Icon | Nguyen Trong But' width={77.54} height={45.12}
                           className='-rotate-100 lg:-rotate-140 arrow-icon-size lg:ml-auto mr-12'/>
                    <p className='mt-5 lg:mt-12 text-base lg:text-2xl leading-snug'>Have been front-end developer since
                        my past 4 years</p>
                </div>

                {/* List Experience */}
                <ul className="w-full lg:w-[66%] lg:py-[65px] mt-[31px] lg:mt-0 flex flex-col gap-6 md:gap-8 lg:gap-[37px] lg:justify-center lg:items-center xl:border-black xl:border-[3px] rounded-md">
                    {experiences.map((item) => (
                        <li key={item.id} className="flex gap-4 md:gap-6 lg:gap-[37px]">
                            <div
                                className={cn(
                                    "font-title font-bold text-2xl md:text-4xl lg:text-5xl",
                                    "flex justify-center items-center",
                                    "w-[55px] h-[50px] md:w-[75px] md:h-[70px] lg:w-[95px] lg:h-[88px]",
                                    "rounded-md border-2",
                                    item.bgClass,
                                    item.borderClass
                                )}
                            >
                                {item.id}
                            </div>

                            <div>
                                <h3 className="text-base md:text-xl lg:text-2xl truncate">
                                    {item.title} at{" "}
                                    <b className="font-bold">{item.company}</b>
                                </h3>

                                <p className="text-xs md:text-base lg:text-lg truncate">
                                    {item.description}
                                </p>

                                <p className="truncate text-[#706F6F] text-[10px] md:text-sm lg:text-base">
                                    {item.date}
                                </p>
                            </div>

                        </li>
                    ))}
                </ul>
            </div>
        </section>
    )
}

export default WorkExperienceSection