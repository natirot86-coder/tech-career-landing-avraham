import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import PainPoints from '@/components/PainPoints';
import CtaBanner from '@/components/CtaBanner';
import WhyTech from '@/components/WhyTech';
import About from '@/components/About';
import StatsCounter from '@/components/StatsCounter';
import Courses from '@/components/Courses';
import Testimonials from '@/components/Testimonials';
import LeadForm from '@/components/LeadForm';
import Footer from '@/components/Footer';
import WhatsAppButton from '@/components/WhatsAppButton';

export default function HomePage() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />

        <PainPoints />

        {/* CTA 1 — after pain points, before solution */}
        <CtaBanner
          variant="light"
          headline="יש לכם את הפוטנציאל. חסרה לכם רק ההכשרה הנכונה."
          sub="דברו איתנו — שיחת ייעוץ ראשונית בחינם ובלי התחייבות."
          buttonText="קבעו שיחת ייעוץ עכשיו"
        />

        <WhyTech />
        <About />
        <StatsCounter />

        {/* CTA 2 — after stats, punch on the numbers */}
        <CtaBanner
          variant="orange"
          headline="88% מהבוגרים שלנו עובדים בהייטק. הגיע הזמן שגם אתם תהיו בצד הנכון."
          sub="הקורס הבא נפתח בקרוב — אל תפספסו."
          buttonText="שמרו לי מקום"
        />

        <Courses />
        <Testimonials />

        {/* CTA 3 — after social proof, push to action */}
        <CtaBanner
          variant="navy"
          headline="מה שהם עשו — גם אתם יכולים."
          sub="הצטרפו לאלפי הבוגרים שכבר עשו את הצעד ושינו את חייהם."
          buttonText="אני רוצה להצטרף"
        />

        <LeadForm />
      </main>
      <Footer />
      <WhatsAppButton />
    </>
  );
}
