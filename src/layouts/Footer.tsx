// ** Next
import Link from "next/link";

// ** Component
import Logo from "@/components/common/Logo";

const socialMediaLinks = [
    {
        name: 'Facebook',
        url: 'https://www.facebook.com/profile.php?id=61573970926163',
    },
    {
        name: 'GitHub',
        url: 'https://github.com/cloly1941',
    },
    {
        name: 'LinkedIn',
        url: 'https://www.linkedin.com/in/nguy%E1%BB%85n-tr%E1%BB%8Dng-b%C3%BAt-4619b0272/',
    }
]

const Footer = () => {
    return (
       <div className='border-t-[3px] border-black'>
           <footer className='container flex flex-col md:flex-row justify-between md:items-center pt-[61px] lg:pt-[92px] border-layout pb-5 lg:pb-[35px]'>
               <Logo/>
               <div className='flex flex-col md:items-center gap-y-[11px] lg:gap-y-[39px] mt-[38px] md:mt-0'>
                   <ul className='flex gap-[22px] lg:gap-[77px]'>
                       {
                           socialMediaLinks.map(social => (
                               <li key={social.url}>
                                   <Link href={social.url} target='_blank' className='bg-black text-white text-base md:text-2xl lg:text-[32px] font-title font-bold'>
                                       {social.name}
                                   </Link>
                               </li>
                           ))
                       }
                   </ul>
                   <span className='text-[15px] lg:text-2xl'>Copyright. Nguyen Trong But © {new Date().getFullYear()}</span>
               </div>
           </footer>
       </div>
    )
}

export default Footer;