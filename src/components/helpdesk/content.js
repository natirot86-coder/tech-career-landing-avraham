/**
 * Help Desk course — all page copy lives here.
 * All three templates (/helpdesk/aurora, /helpdesk/bento, /helpdesk/terminal) read from
 * this file, so swapping in the real course data means editing only this file.
 *
 * ⚠️ Every number, date and name below is PLACEHOLDER copy — replace with real data.
 */

export const course = {
  name: 'Help Desk & IT Support',
  nameHe: 'קורס תמיכה טכנית Help Desk',
  org: 'טק-קריירה',
  tagline: 'הדלת הכי מהירה לעולם ההייטק',
  headline: 'תוך 4 חודשים — את/ה בצוות ה-IT',
  sub: 'הכשרה מעשית ואינטנסיבית לתפקידי תמיכה טכנית, Help Desk ו-IT Support. בלי ניסיון קודם, עם ליווי עד ההשמה.',
  cta: 'אני רוצה לשמוע פרטים',
  ctaSecondary: 'מה לומדים?',
  startDate: '2026-11-15T09:00:00+02:00', // used by the countdown
  startDateLabel: 'מחזור קרוב נפתח ב-15.11.2026',
  spotsLeft: 12,
  spotsTotal: 30,
  utmSource: 'landing-page-helpdesk',
  utmCampaign: 'קורס Help Desk',
};

export const facts = [
  { value: '4', unit: 'חודשים', label: 'משך ההכשרה' },
  { value: '3', unit: 'מפגשים בשבוע', label: 'פרונטלי + אונליין' },
  { value: '88', unit: '%', label: 'השמה בסיום', count: true },
  { value: '0', unit: '₪', label: 'עלות למשתתפים זכאים', count: true },
];

export const tools = [
  'Windows 11', 'Active Directory', 'Microsoft 365', 'Intune', 'Azure AD / Entra ID',
  'ServiceNow', 'Jira Service Management', 'TCP/IP', 'DNS & DHCP', 'PowerShell',
  'Linux Basics', 'Remote Desktop', 'Cyber Hygiene', 'ITIL 4',
];

export const syllabus = [
  { n: '01', title: 'יסודות המחשב וחומרה', text: 'רכיבי מחשב, התקנות, אבחון תקלות חומרה ועבודה מול ספקים.', weeks: 'שבועות 1–3' },
  { n: '02', title: 'מערכות הפעלה', text: 'Windows 11 לעומק, ניהול משתמשים והרשאות, בסיס Linux.', weeks: 'שבועות 4–6' },
  { n: '03', title: 'רשתות תקשורת', text: 'TCP/IP, DNS, DHCP, Wi-Fi, אבחון ופתרון תקלות רשת.', weeks: 'שבועות 7–9' },
  { n: '04', title: 'סביבת ארגון', text: 'Active Directory, Microsoft 365, Intune וניהול עמדות מרחוק.', weeks: 'שבועות 10–12' },
  { n: '05', title: 'שירות ומערכות טיקטים', text: 'ServiceNow, Jira, תהליכי ITIL, SLA ותקשורת עם משתמשים.', weeks: 'שבועות 13–14' },
  { n: '06', title: 'פרויקט גמר והכנה לעבודה', text: 'סימולציית מוקד אמיתי, קורות חיים, ראיונות מדומים והשמה.', weeks: 'שבועות 15–16' },
];

export const benefits = [
  { icon: 'rocket', title: 'כניסה מהירה להייטק', text: 'תפקיד Help Desk הוא נקודת הכניסה הנפוצה ביותר לחברות טכנולוגיה.' },
  { icon: 'shield', title: 'ליווי עד ההשמה', text: 'רכזת השמה אישית, הכנה לראיונות וחיבור ישיר למעסיקים.' },
  { icon: 'cert', title: 'הסמכה מוכרת', text: 'הכנה למבחני הסמכה בינלאומיים בתחום התמיכה הטכנית.' },
  { icon: 'growth', title: 'מסלול צמיחה', text: 'מ-Help Desk ל-SysAdmin, ענן, סייבר או DevOps.' },
  { icon: 'people', title: 'קהילה תומכת', text: 'מחזור קטן, מנטורים מהתעשייה ורשת בוגרים פעילה.' },
  { icon: 'clock', title: 'לימודים בגמישות', text: 'שילוב מפגשים פרונטליים ואונליין, מתאים גם לעובדים.' },
];

export const careers = [
  { role: 'Help Desk Technician', salary: '9,000–11,000 ₪' },
  { role: 'IT Support Specialist', salary: '11,000–14,000 ₪' },
  { role: 'System Administrator', salary: '15,000–20,000 ₪' },
  { role: 'Cloud / DevOps', salary: '20,000+ ₪' },
];

export const audience = [
  'אוהבים טכנולוגיה ולפתור בעיות',
  'בלי ניסיון קודם בהייטק — זה בסדר',
  'רוצים מקצוע מבוקש עם יציבות',
  'תודעת שירות ויכולת עבודה בצוות',
];

export const testimonials = [
  { name: 'שם הבוגר/ת', role: 'Help Desk @ חברת הייטק', quote: 'אחרי חודשיים בעבודה כבר קיבלתי קידום. הקורס נתן לי בדיוק את הכלים שמשתמשים בהם במוקד.', img: '/images/portrait-madlen.jpg' },
  { name: 'שם הבוגר/ת', role: 'IT Support @ בנק', quote: 'לא היה לי שום רקע טכני. הסימולציה של המוקד בסוף הקורס הכינה אותי לראיון יותר מכל דבר אחר.', img: '/images/portrait-roi.jpg' },
  { name: 'שם הבוגר/ת', role: 'SysAdmin @ סטארטאפ', quote: 'התחלתי ב-Help Desk ותוך שנה עברתי לניהול מערכות. הליווי של הצוות לא נגמר ביום הסיום.', img: '/images/portrait-shawanesh.jpg' },
];

export const faq = [
  { q: 'צריך ניסיון קודם או רקע טכני?', a: 'לא. הקורס בנוי מאפס ומתאים גם למי שמעולם לא עבד/ה בתחום. מה שחשוב זו מוטיבציה וסקרנות.' },
  { q: 'כמה עולה הקורס?', a: 'למשתתפים העומדים בתנאי הזכאות הקורס ללא עלות. נשמח לבדוק את הזכאות שלך בשיחה קצרה.' },
  { q: 'איפה מתקיימים המפגשים?', a: 'שילוב של מפגשים פרונטליים בכיתה ומפגשי אונליין. הפרטים המדויקים יימסרו בשיחת ההיכרות.' },
  { q: 'מה קורה אחרי הקורס?', a: 'צוות ההשמה מלווה אותך מול מעסיקים, כולל הכנה לראיונות, בניית קורות חיים והמלצות.' },
  { q: 'אפשר לשלב עם עבודה?', a: 'כן, מערכת השעות בנויה כך שאפשר לשלב עם עבודה במשרה חלקית.' },
];
