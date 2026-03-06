// ** Next
import Image from "next/image";

// ** Module
import ContactForm from "@/modules/form/ContactForm";

// ** Images
import arrowIcon from "@/public/arrow.svg"

const ContactSection = () => {
    return (
        <section className='mt-section md:ml-10'>
            <div className='flex flex-col lg:flex-row justify-between'>

                {/* Title */}
                <div className='w-full lg:w-[28%] lg:pt-10'>
                    <h2 className='text-title arrow-icon-mb'>Contact here</h2>
                    <Image src={arrowIcon} alt='Arrow Icon | Nguyen Trong But'
                           width={77.54} height={45.12}
                           loading='lazy'
                           className='-rotate-100 lg:-rotate-140 arrow-icon-size lg:ml-auto mr-12'/>
                    <p className='mt-5 lg:mt-12 text-base lg:text-2xl leading-snug'>Have an <b>idea</b>? Let&apos;s <b>build</b> it together.</p>
                </div>
                <div className='w-full lg:w-[54%] mt-[31px] lg:mt-0'>
                    <ContactForm/>
                </div>

            </div>
        </section>
    )
}

export default ContactSection;