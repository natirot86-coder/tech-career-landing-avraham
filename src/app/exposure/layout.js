import { Assistant, Rubik } from 'next/font/google';

const assistant = Assistant({
  subsets: ['hebrew', 'latin'],
  weight: ['400', '500', '600', '700', '800'],
  display: 'swap',
});

const rubik = Rubik({
  subsets: ['hebrew', 'latin'],
  weight: ['800', '900'],
  variable: '--font-display',
  display: 'swap',
});

export default function ExposureLayout({ children }) {
  return <div className={`${assistant.className} ${rubik.variable} bg-warm-bg`}>{children}</div>;
}
