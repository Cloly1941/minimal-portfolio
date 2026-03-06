// ** Components
import Logo from "@/components/common/Logo";

// ** Layout
import Navbar from "@/layouts/Navbar";

const Header = () => {
    return (
        <header className='container pt-12 flex justify-between sm:justify-end items-center sm:gap-[159px] border-layout'>
            <Logo priority={true}/>
            <Navbar/>
        </header>
    )
}

export default Header;