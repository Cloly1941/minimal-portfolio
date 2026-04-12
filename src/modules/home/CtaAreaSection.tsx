// ** Next
import Image from "next/image";
import Link from "next/link";

// ** Component
import Button from "@/components/common/Button";

// ** Icon
import {ExternalLink} from "lucide-react";

// ** Images
import avatar from "@/public/avatar.png"
import arrowIcon from "@/public/arrow.svg"

const CtaAreaSection = () => {
    return (
        <section className='flex flex-col lg:flex-row justify-between items-end'>
            <div className='w-full lg:w-[41%]'>
                <div className='flex items-center gap-1 md:gap-3 lg:gap-5 -rotate-[5.18deg]'>
                    <Image src={avatar} alt='Nguyen Trong But Avatar'
                           width={120} height={106}
                           priority
                           className='w-[80px] md:w-[100px] lg:w-[120px]'
                    />
                    <Image src={arrowIcon} alt='Arrow Icon | Nguyen Trong But'
                           width={77.54} height={45.12}
                           priority
                           className='-rotate-12 arrow-icon-size'/>
                    <span className='text-title'>nguyentrongbut</span>
                </div>
                <p className='font-semibold text-[32px] md:text-[40px] lg:text-4xl lg:text-[64px] mt-8 md:mt-[46px] leading-tight'>I&apos;m <b
                    className='relative'>frontend<span
                    className='absolute bottom-1 lg:bottom-2.5 left-0 -z-10 w-full h-1/4 bg-[#FFC9F0]'/></b> web developer
                </p>
            </div>
            <div className='w-full lg:w-[42%] mt-6 md:mt-8 lg:mt-0'>
                <p className='text-base md:text-lg lg:text-2xl leading-[140%] mb-[30px]'>I build responsive and user-friendly web
                    applications using <b>React</b>, <b>Next.js</b>, and modern frontend best practices.</p>
               <Link href='https://drive.google.com/file/d/15JzuiSdHC8rGzsxjGQyaKwwRpWGuNMpg/view?usp=drive_link' target='_blank'>
                   <Button>
                       Resume
                       <ExternalLink className='lg:size-7'/>
                   </Button>
               </Link>
            </div>
        </section>
    )
}

export default CtaAreaSection