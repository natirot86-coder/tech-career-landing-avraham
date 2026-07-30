import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import PainPoints from '@/components/PainPoints';
import WhyTech from '@/components/WhyTech';
import About from '@/components/About';
import StatsCounter from '@/components/StatsCounter';
import Courses from '@/components/Courses';
import Testimonials from '@/components/Testimonials';
import LeadForm from '@/components/LeadForm';
import Footer from '@/components/Footer';

export default function HomePage() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <PainPoints />
        <WhyTech />
        <About />
        <StatsCounter />
        <Courses />
        <Testimonials />
        <LeadForm />
      </main>
      <Footer />
    </>
  );
}
