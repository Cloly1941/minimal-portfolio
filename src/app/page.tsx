// ** Modules
import CtaAreaSection from "@/modules/home/CtaAreaSection";
import SkillSection from "@/modules/home/SkillSection";
import FeaturedProjectSection from "@/modules/home/FeaturedProjectSection";
import ContactSection from "@/modules/home/ContactSection";
// import WorkExperienceSection from "@/modules/home/WorkExperienceSection";

export default function Home() {
    return (
        <>
            {/* Cta area */}
            <CtaAreaSection/>

            {/* Skill */}
            <SkillSection/>

            {/*  Featured Project  */}
            <FeaturedProjectSection/>

            {/*  Work Experience  */}
            {/*<WorkExperienceSection/>*/}

            {/*  Contact  */}
            <ContactSection/>
        </>
    );
}
