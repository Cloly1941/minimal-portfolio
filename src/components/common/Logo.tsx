import Image from "next/image";

const Logo = () => {
    return (
        <div className="flex items-center gap-2 md:gap-3 lg:gap-[15px]">
            <Image src="/Logo.svg" alt="Nguyen Trong But Portfolio Logo" width={49} height={49} className="size-[27px] md:size-[38px] lg:size-[49px]" />
            <h1 className="font-title font-bold text-xl md:text-2xl lg:text-4xl">nguyentrongbut</h1>
        </div>
    )
}

export default Logo;