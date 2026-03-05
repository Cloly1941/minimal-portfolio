'use client'

// ** React
import {FormEvent, useRef, useState} from "react";

// ** React hot toast
import toast from "react-hot-toast";

// ** Email js
import emailjs from "@emailjs/browser"

// ** Component
import Button from "@/components/common/Button";

type TField = {
    id: string
    name: string
    label: string
    placeholder: string
    type?: string
    color: string
    isTextarea?: boolean
}

const fields: TField[] = [
    {
        id: "name",
        name: "name",
        label: "Name",
        placeholder: "Nguyen Trong But",
        type: "text",
        color: "#FFC9F0",
    },
    {
        id: "email",
        name: "email",
        label: "Email",
        placeholder: "cloly1941@gmail.com",
        type: "email",
        color: "#FFE68C",
    },
    {
        id: "message",
        name: "message",
        label: "Message",
        placeholder: "I want to connect with you ...",
        color: "#9DDCFF",
        isTextarea: true,
    },
]

const ContactForm = () => {

    const form = useRef<HTMLFormElement>(null)
    const [loading, setLoading] = useState(false)

    const sendEmail = (e: FormEvent) => {
        e.preventDefault()

        if (!form.current) return

        setLoading(true)

        emailjs
            .sendForm(
                process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID!,
                process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID!,
                form.current!,
                process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY!
            )
            .then(
                () => {
                    toast.success("Message sent successfully!")
                },
                (error) => {
                    toast.error(error)
                }
            ).finally(() => {
            setLoading(false)
        })
    }

    return (
        <form ref={form} onSubmit={sendEmail} className="flex flex-col items-start md:items-end">
            <div className="flex flex-col gap-y-[30px] md:gap-y-10 lg:gap-y-[60px] w-full">

                {fields.map((field) => (
                    <div key={field.id} className="input-wrapper">
                        <label
                            htmlFor={field.id}
                            style={{backgroundColor: field.color}}
                        >
                            {field.label}
                        </label>

                        {field.isTextarea ? (
                            <textarea
                                id={field.id}
                                name={field.name}
                                placeholder={field.placeholder}
                                required
                                className="input-field h-8 lg:h-11"
                            />
                        ) : (
                            <input
                                id={field.id}
                                type={field.type}
                                name={field.name}
                                placeholder={field.placeholder}
                                required
                                className="input-field"
                            />
                        )}
                    </div>
                ))}

            </div>

            <Button
                type="submit"
                className="rotate-1 mt-[30px] lg:mt-[56px]"
                isLoading={loading}
            >
                Send Here
            </Button>
        </form>
    )
}

export default ContactForm