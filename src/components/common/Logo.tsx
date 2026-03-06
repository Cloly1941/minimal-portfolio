// ** Next
import Image from "next/image";
import Link from "next/link";

const Logo = () => {
    return (
        <Link href='/' className="flex items-center gap-2 md:gap-3 lg:gap-[15px]">
            <Image src="/Logo.svg" alt="Nguyen Trong But Portfolio Logo" width={49} height={49} className="size-[27px] md:size-[38px] lg:size-[49px]" />
            <h1 className="font-title font-bold text-xl md:text-2xl lg:text-4xl">nguyentrongbut</h1>
        </Link>
    )
}

export default Logo;