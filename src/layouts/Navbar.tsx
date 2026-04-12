// ** Next
import Link from "next/link";

type TListNav = {
    name: string
    link: string
}

const listNav: TListNav[] = [
    {
        name: 'Resume',
        link: 'https://drive.google.com/file/d/15JzuiSdHC8rGzsxjGQyaKwwRpWGuNMpg/view?usp=drive_link'
    }
]

const Navbar = () => {
    return (
        <nav className='flex gap-[23px] md:gap-7 lg:gap-8'>
            {listNav.map((item: TListNav) => (
                <Link href={item.link} key={item.name} className='text-base md:text-lg lg:text-2xl cursor-pointer relative group' target='_blank'>
                    {item.name}
                    <div
                        className='bg-[#FFC9F0] w-0 absolute bottom-1 left-0 h-1/4 -z-10
                        transition-all duration-300 group-hover:w-full
                        '
                    />
                </Link>
            ))}
        </nav>
    )
}

export default Navbar