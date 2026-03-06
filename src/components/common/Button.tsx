// ** React
import {ButtonHTMLAttributes, ReactNode} from "react";

// ** Lib
import {cn} from "@/lib/utils";

type TButton = ButtonHTMLAttributes<HTMLButtonElement> & {
    children: ReactNode
    variant?: "primary" | "mixed"
    className?: string
    isLoading?: boolean
}

const Button = ({children, variant = 'primary', className, isLoading = false, disabled, ...props}: TButton) => {

    const baseStyle =
        "flex items-center justify-center gap-4 cursor-pointer transition-all shadow-primary disabled:opacity-60 disabled:cursor-not-allowed"

    const variants = {
        primary:
            "px-5 py-2.5 lg:px-8 lg:py-4.5 text-white bg-[#0C0C0C] text-base md:text-lg lg:text-xl font-semibold rounded-sm hover:scale-105",

        mixed:
            "px-[13.7px] py-[6.59px] lg:px-4.5 lg:py-[9px] rounded-r-full rounded-bl-full rounded-tl-none text-[13.17px] lg:text-lg font-medium text-white bg-[#F072CD] border-[2.24px] border-[#DB4A90]",
    }

    return (
        <button className={cn(baseStyle, variants[variant], className)} {...props} disabled={isLoading || disabled}>
            {isLoading && (
                <span className="size-4 border-2 border-white border-t-transparent rounded-full animate-spin"/>
            )}
            {children}
        </button>
    )
}

export default Button