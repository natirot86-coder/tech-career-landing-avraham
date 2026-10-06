export default function LocationMap() {
  return (
    <section className="py-24 bg-white border-t border-gray-100">
      <div className="max-w-6xl mx-auto px-6">
        <div className="max-w-2xl mx-auto text-center mb-12">
          <span className="text-corp-primary text-sm font-semibold">איפה אנחנו</span>
          <h2 className="text-3xl md:text-4xl font-bold text-corp-secondary tracking-tight mt-2">בואו לבקר במרכז שלנו</h2>
          <p className="text-gray-500 text-lg mt-2">
            הקמפוס של טק-קריירה נמצא בלב לוד — קל להגיע בתחבורה ציבורית וברכב.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 rounded-xl border border-gray-200 overflow-hidden max-w-4xl mx-auto">
          <div className="p-8 flex flex-col justify-center gap-4">
            <span className="text-corp-primary text-sm font-semibold flex items-center gap-2">📍 המרכז שלנו</span>
            <h3 className="text-2xl font-bold text-corp-secondary tracking-tight">טק-קריירה</h3>
            <div className="text-gray-500 text-lg">הבעל שם טוב 6, לוד</div>
            <div className="flex gap-3 flex-wrap mt-1">
              <a
                href="https://waze.com/ul?q=%D7%94%D7%91%D7%A2%D7%9C%20%D7%A9%D7%9D%20%D7%98%D7%95%D7%91%206%2C%20%D7%9C%D7%95%D7%93&navigate=yes"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-lg bg-[#33CCFF] text-white font-semibold text-sm px-5 py-2.5 hover:opacity-90 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-corp-primary focus-visible:ring-offset-2 transition-opacity"
              >
                🧭 ניווט ב-Waze
              </a>
              <a
                href="https://www.google.com/maps/search/?api=1&query=%D7%94%D7%91%D7%A2%D7%9C%20%D7%A9%D7%9D%20%D7%98%D7%95%D7%91%206%2C%20%D7%9C%D7%95%D7%93"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-lg bg-corp-secondary text-white font-semibold text-sm px-5 py-2.5 hover:opacity-90 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-corp-primary focus-visible:ring-offset-2 transition-opacity"
              >
                🗺️ Google Maps
              </a>
            </div>
          </div>
          <div className="relative min-h-[280px]">
            <iframe
              src="https://www.google.com/maps?q=%D7%94%D7%91%D7%A2%D7%9C%20%D7%A9%D7%9D%20%D7%98%D7%95%D7%91%206%2C%20%D7%9C%D7%95%D7%93&output=embed"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="מפת מיקום"
              className="absolute inset-0 w-full h-full border-0"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
