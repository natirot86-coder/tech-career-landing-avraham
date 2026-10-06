import { Rubik } from 'next/font/google';
import './helpdesk.css';

const rubik = Rubik({
  subsets: ['hebrew', 'latin'],
  weight: ['400', '500', '700', '800', '900'],
  display: 'swap',
});

export const metadata = {
  title: 'קורס Help Desk ותמיכה טכנית | טק-קריירה',
  description: 'הכשרה מעשית לתפקידי Help Desk ו-IT Support, בלי ניסיון קודם, עם ליווי עד ההשמה.',
};

export default function HelpDeskLayout({ children }) {
  return <div className={rubik.className}>{children}</div>;
}
