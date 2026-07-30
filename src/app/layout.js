import './globals.css';

export const metadata = {
  title: 'הקריירה שלך בהייטק מתחילה כאן | טק-קריירה',
  description: 'הכשרות מעשיות ואינטנסיביות שבסופן 88% מהבוגרים משתלבים בתעשיית ההייטק — גם בלי ניסיון קודם.',
  openGraph: {
    title: 'הקריירה שלך בהייטק מתחילה כאן | טק-קריירה',
    description: 'הכשרות מעשיות ואינטנסיביות שבסופן 88% מהבוגרים משתלבים בתעשיית ההייטק.',
    locale: 'he_IL',
    type: 'website',
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="he" dir="rtl">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Heebo:wght@300;400;500;600;700;800;900&display=swap"
          rel="stylesheet"
        />
      </head>
      <body>{children}</body>
    </html>
  );
}
