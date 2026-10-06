import ScrollProgress from '@/components/exposure/ScrollProgress';
import UrgencyBar from '@/components/exposure/UrgencyBar';
import Navbar from '@/components/exposure/Navbar';
import Hero from '@/components/exposure/Hero';
import ProgramModel from '@/components/exposure/ProgramModel';
import BotRole from '@/components/exposure/BotRole';
import StatsCounter from '@/components/exposure/StatsCounter';
import Countdown from '@/components/exposure/Countdown';
import TestimonialCallout from '@/components/exposure/TestimonialCallout';
import Barriers from '@/components/exposure/Barriers';
import QuickQuiz from '@/components/exposure/QuickQuiz';
import CtaBanner from '@/components/exposure/CtaBanner';
import AcademicTrack from '@/components/exposure/AcademicTrack';
import Proof from '@/components/exposure/Proof';
import Testimonials from '@/components/exposure/Testimonials';
import FAQ from '@/components/exposure/FAQ';
import LeadForm from '@/components/exposure/LeadForm';
import Footer from '@/components/exposure/Footer';
import WhatsAppButton from '@/components/WhatsAppButton';
import StickyMobileCta from '@/components/exposure/StickyMobileCta';
import ProofToast from '@/components/exposure/ProofToast';

export const metadata = {
  title: 'תוכנית InTech — ערוץ חשיפה והכוונה ללימודים | טק-קריירה',
  description:
    'תוכנית InTech: מיזם לאומי משותף עם משרד העבודה ליוצאי אתיופיה בגילי 18-44. 5 מפגשי חשיפה להייטק, ליווי אישי ומסלול מלגות מלא ללימודים אקדמיים. בחינם וללא התחייבות.',
};

export default function ExposurePage() {
  return (
    <>
      <ScrollProgress />
      <UrgencyBar />
      <Navbar />
      <main>
        <Hero />
        <ProgramModel />
        <BotRole />
        <StatsCounter />
        <Countdown />
        <TestimonialCallout />
        <Barriers />
        <QuickQuiz />

        <CtaBanner
          variant="cream"
          headline="הצעד הראשון לא צריך להיות גדול — רק אמיתי."
          sub="שריינו מקום במפגש הפתיחה, וגלו מקרוב אם הייטק בשבילכם."
          buttonText="שריינו לי מקום"
        />

        <AcademicTrack />
        <Proof />
        <Testimonials />
        <FAQ />

        <CtaBanner
          variant="plum"
          headline="הם עברו את InTech — והיום הם בהייטק."
          sub="עכשיו תורכם. המקומות במפגש הפתיחה הקרוב מוגבלים."
          buttonText="אני רוצה להצטרף"
        />

        <LeadForm />
      </main>
      <Footer />
      <WhatsAppButton />
      <StickyMobileCta />
      <ProofToast />
    </>
  );
}
