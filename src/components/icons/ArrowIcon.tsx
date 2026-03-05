// ** Lib
import {cn} from "@/lib/utils";

type  TArrowIcon = {
    className?: string
}
const ArrowIcon = ({className}: TArrowIcon) => (
    <svg
        viewBox="0 0 27 28"
        fill="none"
        className={cn('size-[22.38px] text-inherit', className)}
        xmlns="http://www.w3.org/2000/svg"
    >
        <path
            d="M9.79439 22.3765L6.29105 4.52106L22.3765 13.3344L14.453 15.633L9.79439 22.3765Z"
            fill="currentColor"
            stroke="#0F0F0F"
            strokeWidth="1.11882"
        />
    </svg>
)

export default ArrowIcon