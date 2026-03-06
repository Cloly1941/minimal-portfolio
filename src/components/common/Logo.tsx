// ** Next
import Image from "next/image";
import Link from "next/link";

// ** Image
import logo from "@/public/Logo.svg";

type TLogo = {
    priority?: boolean
    lazy?: boolean
}

const Logo = ({priority = false, lazy = false}: TLogo) => {
    return (
        <Link href='/' className="flex items-center gap-2 md:gap-3 lg:gap-[15px]">
            <Image src={logo} alt="Nguyen Trong But Portfolio Logo"
                   width={49} height={49}
                   priority={priority}
                   loading={lazy ? 'lazy' : 'eager'}
                   className="h-[27px] md:h-[38px] lg:h-[49px]"
            />
            <h1 className="font-title font-bold text-xl md:text-2xl lg:text-4xl">nguyentrongbut</h1>
        </Link>
    )
}

export default Logo;