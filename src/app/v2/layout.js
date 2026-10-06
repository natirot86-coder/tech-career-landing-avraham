import { Rubik } from 'next/font/google';

const rubik = Rubik({
  subsets: ['hebrew', 'latin'],
  weight: ['300', '400', '500', '600', '700', '800'],
  display: 'swap',
});

export default function V2Layout({ children }) {
  return <div className={`${rubik.className} font-light`}>{children}</div>;
}
