export default function Mark({ children, color = '#0066FF' }) {
  return (
    <span className="relative inline-block">
      {children}
      <svg
        viewBox="0 0 200 20"
        preserveAspectRatio="none"
        aria-hidden="true"
        className="absolute right-0 -bottom-1 -z-10 h-[0.4em] w-full"
      >
        <path d="M2,14 C50,4 150,4 198,14" fill="none" stroke={color} strokeWidth="7" strokeLinecap="round" />
      </svg>
    </span>
  );
}
