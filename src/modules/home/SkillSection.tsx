// ** Next
import Image, {StaticImageData} from "next/image";

// ** Images
import arrowIcon from "@/public/arrow.svg"
import pencil from "@/public/pencil.png"
import eye from "@/public/eye.png"
import blink from "@/public/blink.png"

type TSkillCard = {
    title: string
    bg: string
    border: string
    rotate: string
    titlePosition: string
    titleBg?: string
    icon: StaticImageData
    iconRotate?: string
    skills: string[]
}

const skillList: TSkillCard[] = [
    {
        title: 'Core',
        bg: 'bg-[#FFE68C]',
        border: 'border-[#EECD56]',
        rotate: '-rotate-4',
        titlePosition: 'top-[18%] -right-8',
        titleBg: 'bg-[#9DDCFF]',
        icon: pencil,
        skills: ['HTML & CSS', 'JavaScript', 'TypeScript']
    },
    {
        title: 'Tech Stack',
        bg: 'bg-[#9DDCFF]',
        border: 'border-[#5AB5E8]',
        rotate: 'rotate-4',
        titlePosition: '-top-5 right-6',
        icon: eye,
        iconRotate: 'rotate-8',
        skills: ['Express', 'Next.js & React', 'NestJS']
    },
    {
        title: 'Library',
        bg: 'bg-[#FFC9F0]',
        border: 'border-[#F384D4]',
        rotate: '-rotate-4',
        titlePosition: 'top-[18%] -left-4 lg:left-auto lg:-right-8',
        titleBg: 'bg-[#FFE68C]',
        icon: blink,
        skills: ['TailwindCSS', 'Antd & MUI', 'Shadcn UI']
    }
]

const SkillSection = () => {
    return (
        <section className='mt-[75px] md:mt-22 lg:mt-[110px]'>
            <h2 className='text-title arrow-icon-mb'>My skills?</h2>
            <Image src={arrowIcon} alt='Arrow Icon | Nguyen Trong But'
                   priority
                   width={77.54} height={45.12}
                   className='-rotate-90 arrow-icon-size'/>
            <div
                className='mt-4 md:mt-6 lg:mt-10 grid grid-cols-1 lg:grid-cols-3 gap-x-8 gap-y-9 sm:gap-y-12 md:gap-y-15 lg:gap-y-16'>
                {skillList.map((card) => (
                    <div
                        key={card.title}
                        className={`h-[328px] md:h-[450px] lg:h-[460px] border-5 rounded-md relative flex justify-center items-center
                                    ${card.bg} ${card.border} ${card.rotate}
                                    `}
                    >
                        <h3
                            className={`text-title absolute rotate-3
                                        ${card.titlePosition}
                                        ${card.titleBg ?? ''}`}
                        >
                            {card.title}
                        </h3>

                        <div className='flex flex-col'>
                            <Image
                                src={card.icon}
                                alt={`${card.title} Icon | Nguyen Trong But`}
                                loading='lazy'
                                width={49}
                                height={55}
                                placeholder='blur'
                                className={`w-[34px] md:w-[42px] lg:w-[49px]
                                          ${card.iconRotate ?? ''}`}
                            />

                            <ul className='font-medium text-2xl md:text-3xl lg:text-4xl mt-4 md:mt-6 lg:mt-8 flex flex-col gap-y-2'>
                                {card.skills.map((skill) => (
                                    <li key={skill}>{skill}</li>
                                ))}
                            </ul>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    )
}

export default SkillSection;