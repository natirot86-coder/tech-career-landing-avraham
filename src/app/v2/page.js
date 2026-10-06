import UrgencyBar from '@/components/v2/UrgencyBar';
import Navbar from '@/components/v2/Navbar';
import Hero from '@/components/v2/Hero';
import Benefits from '@/components/v2/Benefits';
import PainPoints from '@/components/v2/PainPoints';
import CtaBanner from '@/components/v2/CtaBanner';
import WhyTech from '@/components/v2/WhyTech';
import CoursesTable from '@/components/v2/CoursesTable';
import Proof from '@/components/v2/Proof';
import Testimonials from '@/components/v2/Testimonials';
import StatsCounter from '@/components/v2/StatsCounter';
import FAQ from '@/components/v2/FAQ';
import LeadForm from '@/components/v2/LeadForm';
import LocationMap from '@/components/v2/LocationMap';
import Footer from '@/components/v2/Footer';
import WhatsAppButton from '@/components/WhatsAppButton';
import StickyMobileCta from '@/components/v2/StickyMobileCta';

export const metadata = {
  title: 'המסלול שלך להייטק מתחיל כאן | טק-קריירה',
  description: 'הכשרה טכנולוגית מקצועית, ליווי אישי עד להשמה ומסלול ישיר לקריירה. הקורסים הבאים נפתחים ברחבי הארץ.',
};

export default function HomePageV2() {
  return (
    <>
      <UrgencyBar />
      <Navbar />
      <main>
        <Hero />
        <Benefits />

        <PainPoints />

        <CtaBanner
          variant="light"
          headline="יש לכם את הפוטנציאל. חסרה לכם רק ההכשרה הנכונה."
          sub="דברו איתנו — שיחת ייעוץ ראשונית בחינם ובלי התחייבות."
          buttonText="קבעו שיחת ייעוץ עכשיו"
        />

        <WhyTech />
        <CoursesTable />
        <Proof />
        <Testimonials />
        <StatsCounter />
        <FAQ />

        <CtaBanner
          variant="secondary"
          headline="מה שהם עשו — גם אתם יכולים."
          sub="הצטרפו לאלפי הבוגרים שכבר עשו את הצעד ושינו את חייהם."
          buttonText="אני רוצה להצטרף"
        />

        <LeadForm />
        <LocationMap />
      </main>
      <Footer />
      <WhatsAppButton />
      <StickyMobileCta />
    </>
  );
}
