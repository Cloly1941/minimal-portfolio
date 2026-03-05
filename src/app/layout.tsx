// ** React
import {ReactNode} from "react";

// ** Next
import type {Metadata} from "next";

// ** Next font
import {Handlee, Inter} from "next/font/google";

// ** Styles
import "./globals.css";

// ** Layouts
import Header from "@/layouts/Header";
import Footer from "@/layouts/Footer";

// ** Component
import ToastCustom from "@/components/common/ToastCustom";

// Primary font
const inter = Inter({
    subsets: ['latin'],
    weight: ['400'],
    variable: '--font-primary',
    display: 'swap',
});

// Title font
const handlee = Handlee({
    subsets: ['latin'],
    weight: ['400'],
    variable: '--font-title',
    display: 'swap',
});

export const metadata: Metadata = {
    metadataBase: new URL(process.env.NEXT_PUBLIC_YOUR_WEBSITE || 'https://localhost:3000'),
    title: 'Nguyen Trong But | Frontend Developer | React & Next.js',
    description:
        "Nguyen Trong But is a Frontend Developer specializing in React, Next.js, and TypeScript. Explore his portfolio and featured projects.",
    generator: 'Next.js',
    applicationName: 'Portfolio nguyentrongbut',
    referrer: 'origin-when-cross-origin',
    keywords: [
        "Nguyễn Trọng Bút",
        "Nguyen Trong But",
        "Frontend Developer Vietnam",
        "React Developer",
        "Next.js Developer",
    ],
    authors: [{name: 'Nguyễn Trọng Bút'}],
    creator: 'Nguyễn Trọng Bút',
    publisher: 'Nguyễn Trọng Bút',
    formatDetection: {
        email: false,
        address: false,
        telephone: false,
    },
    openGraph: {
        type: "website",
        url: new URL(process.env.NEXT_PUBLIC_YOUR_WEBSITE || 'https://localhost:3000'),
        siteName: 'Nguyen Trong But Portfolio',
        title: 'Nguyen Trong But | Frontend Developer | React & Next.js',
        description:
            'Nguyen Trong But is a Frontend Developer specializing in React, Next.js, and TypeScript. Explore his portfolio and featured projects.',
        images: [
            {
                url: '/logo-all.png',
                width: 400,
                height: 200,
            },
        ],
    },
    verification: {
        google: process.env.NEXT_PUBLIC_VERIFICATION_GOOGLE,
    },
};

export default function RootLayout({
                                       children,
                                   }: Readonly<{
    children: ReactNode;
}>) {
    return (
        <html lang="en" suppressHydrationWarning>
        <body className={`${inter.variable} ${handlee.variable} bg-dot-pattern`}>
        <Header/>
        <main className='pt-[77px] pb-[162px] container border-layout min-h-screen'>
            {children}
            <ToastCustom />
        </main>
        <Footer/>
        </body>
        </html>
    );
}
