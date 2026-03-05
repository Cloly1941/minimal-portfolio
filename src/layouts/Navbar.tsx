type TListNav = {
    name: string
}

const listNav: TListNav[] = [
    {
        name: 'Portfolio',
    },
    {
        name: 'Resume'
    }
]

const Navbar = () => {
    return (
        <nav className='flex gap-[23px] md:gap-7 lg:gap-8'>
            {listNav.map((item: TListNav) => (
                <div key={item.name} className='text-base md:text-lg lg:text-2xl cursor-pointer relative group'>
                    {item.name}
                    <div
                        className='bg-[#FFC9F0] w-0 absolute bottom-1 left-0 h-1/4 -z-10
                        transition-all duration-300 group-hover:w-full
                        '
                    />
                </div>
            ))}
        </nav>
    )
}

export default Navbar