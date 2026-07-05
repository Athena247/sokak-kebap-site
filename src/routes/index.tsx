import { createFileRoute } from "@tanstack/react-router";
import heroImg from "@/assets/hero-kebab.jpg";
import tavukImg from "@/assets/tavuk-sis.jpg";
import durumImg from "@/assets/durum.jpg";
import corbaImg from "@/assets/corba.jpg";
import logoImg from "@/assets/logo.png";
import { Flame, MapPin, Phone, Clock, Instagram, Utensils } from "lucide-react";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Sokak Kebapçısı — Trabzon'un Sokak Lezzeti" },
      { name: "description", content: "Trabzon'da geleneksel Adana, Urfa, tavuk şiş ve dürüm çeşitleriyle mangalın kalbinden gelen lezzet. Sokak Kebapçısı." },
      { property: "og:title", content: "Sokak Kebapçısı — Trabzon" },
      { property: "og:description", content: "Trabzon'un en özel kebap durağı. Odun ateşinde, elle işlenmiş lezzetler." },
      { property: "og:type", content: "restaurant" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Index,
});

const kebaplar = [
  { name: "Adana Kebap Acılı", desc: "180 gr kebap kıyması, bulgur pilavı, közlenmiş domates, biber, ezme, söğürme salatası", price: "300" },
  { name: "Urfa Kebap", desc: "180 gr kebap kıyması, bulgur pilavı, közlenmiş domates, ezme, söğürme salatası", price: "300" },
  { name: "Tavuk Şiş", desc: "240 gr tavuk göğüs, bulgur pilavı, közlenmiş domates, ezme, söğürme salatası", price: "240" },
  { name: "Tavuk Pirzola", desc: "2 parça tavuk taleks, bulgur pilavı, közlenmiş domates, ezme, salata", price: "240" },
  { name: "Tavuk Kanat", desc: "8 parça tavuk kanat, bulgur pilavı, közlenmiş domates, biber, ezme", price: "260" },
  { name: "Çöp Şiş", desc: "200 gr dana bonfile, bulgur pilavı, közlenmiş domates, biber, ezme", price: "350" },
  { name: "Ciğer Şiş", desc: "200 gr dana ciğer, bulgur pilavı, közlenmiş domates, ezme, salata", price: "300" },
  { name: "Akçaabat Köfte", desc: "200 gr dana köfte, bulgur pilavı, közlenmiş domates, biber, ezme", price: "300" },
  { name: "Sarma Beyti", desc: "180 gr kebap kıyması, bulgur pilavı, yoğurt, sos, tereyağ, kaşar peyniri", price: "—" },
  { name: "Yoğurtlu Kebap", desc: "180 gr kebap kıyması, yoğurt, sos, tereyağ, közlenmiş domates, ezme", price: "—" },
];

const karisik = [
  { name: "Adana — Tavuk Şiş", price: "280" },
  { name: "Adana — Çöp Şiş", price: "300" },
  { name: "Adana — Ciğer Şiş", price: "300" },
  { name: "Adana — Köfte", price: "300" },
  { name: "Tavuk Şiş — Çöp Şiş", price: "280" },
  { name: "Tavuk Şiş — Ciğer Şiş", price: "280" },
  { name: "Tavuk Şiş — Köfte", price: "280" },
  { name: "Çöp Şiş — Ciğer Şiş", price: "300" },
  { name: "Çöp Şiş — Köfte", price: "300" },
  { name: "Karışık Kebap (Şefin Seçimi)", price: "1000" },
];

const durumler = [
  { name: "Adana Dürüm", desc: "110 gr Adana kıyması, marul, domates, sumaklı soğan", price: "150" },
  { name: "Urfa Dürüm", desc: "110 gr Urfa kıyması, marul, domates, sumaklı soğan", price: "150" },
  { name: "Tavuk Şiş Dürüm", desc: "110 gr tavuk şiş, marul, domates, sumaklı soğan", price: "150" },
  { name: "Çöp Şiş Dürüm", desc: "110 gr çöp şiş, marul, domates, sumaklı soğan", price: "170" },
  { name: "Ciğer Şiş Dürüm", desc: "110 gr dana ciğer, marul, domates, sumaklı soğan", price: "160" },
  { name: "Köfte Dürüm", desc: "110 gr köfte, marul, domates, sumaklı soğan", price: "150" },
];

const corbalar = [
  { name: "Ezogelin", price: "60" },
  { name: "Mercimek", price: "60" },
];

const tatlilar = [
  { name: "Burma Kadayıf", price: "—" },
  { name: "Hamsiköy Sütlacı", price: "80" },
];

const sicak = [
  { name: "Çay", price: "15" }, { name: "Kuşburnu", price: "15" }, { name: "Karadut", price: "15" },
  { name: "Kivi", price: "15" }, { name: "Oralet", price: "15" }, { name: "Nescafe", price: "40" },
  { name: "Türk Kahvesi", price: "60" },
];
const soguk = [
  { name: "Cola", price: "50" }, { name: "Cola Zero", price: "50" }, { name: "Fanta", price: "50" },
  { name: "Karışık Meyvesuyu", price: "50" }, { name: "Şeftali", price: "50" }, { name: "Vişne", price: "50" },
  { name: "Sprite", price: "50" }, { name: "Fuse Tea Şeftali", price: "50" }, { name: "Fuse Tea Limon", price: "50" },
  { name: "Fuse Tea Mango", price: "50" }, { name: "Soda", price: "30" }, { name: "Su", price: "10" },
  { name: "Şalgam", price: "30" },
];

function Index() {
  return (
    <div className="min-h-screen">
      {/* NAV */}
      <nav className="fixed top-0 inset-x-0 z-50 backdrop-blur-md bg-background/70 border-b border-border">
        <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
          <a href="#top" className="flex items-center gap-3">
            <img src={logoImg} alt="Sokak Kebapçısı" className="h-11 w-11 rounded-full object-cover" />
            <div className="leading-tight">
              <div className="font-display text-xl tracking-widest text-gradient-gold">SOKAK</div>
              <div className="text-[10px] tracking-[0.3em] text-muted-foreground -mt-1">KEBAPÇISI</div>
            </div>
          </a>
          <div className="hidden md:flex items-center gap-8 text-sm tracking-wider uppercase">
            <a href="#menu" className="hover:text-primary transition-colors">Menü</a>
            <a href="#hikaye" className="hover:text-primary transition-colors">Hikaye</a>
            <a href="#ziyaret" className="hover:text-primary transition-colors">Ziyaret</a>
          </div>
          <a href="tel:04623101616" className="hidden sm:inline-flex items-center gap-2 text-sm border border-primary/40 text-primary px-4 py-2 rounded-full hover:bg-primary hover:text-primary-foreground transition-colors">
            <Phone className="h-3.5 w-3.5" /> 0462 310 16 16
          </a>
        </div>
      </nav>

      {/* HERO */}
      <section id="top" className="relative min-h-screen flex items-end pt-24 pb-16 overflow-hidden">
        <img src={heroImg} alt="Adana kebap platter" width={1600} height={1200} className="absolute inset-0 w-full h-full object-cover" />
        <div className="absolute inset-0" style={{ background: "var(--gradient-hero)" }} />
        <div className="relative max-w-7xl mx-auto px-6 w-full grid md:grid-cols-12 gap-8 items-end">
          <div className="md:col-span-8">
            <div className="flex items-center gap-3 mb-6">
              <div className="h-px w-12 bg-primary" />
              <span className="text-primary text-xs tracking-[0.35em] uppercase">Trabzon · Est. Sokak</span>
            </div>
            <h1 className="font-display text-6xl sm:text-8xl md:text-9xl leading-[0.9] text-foreground">
              Mangalın <br />
              <span className="text-gradient-gold">Kalbinden</span> <br />
              Sofranıza.
            </h1>
            <p className="mt-6 max-w-xl text-lg text-muted-foreground">
              Odun ateşinde, elle şişlenmiş, gelenekten kopmadan. Trabzon'un sokak lezzetini
              üç nesildir aynı tutkuyla hazırlıyoruz.
            </p>
            <div className="mt-8 flex flex-wrap gap-4">
              <a href="#menu" className="inline-flex items-center gap-2 bg-primary text-primary-foreground px-6 py-3 rounded-full font-semibold tracking-wide hover:shadow-[var(--shadow-glow)] transition-shadow">
                <Utensils className="h-4 w-4" /> Menüyü Gör
              </a>
              <a href="#ziyaret" className="inline-flex items-center gap-2 border border-foreground/20 text-foreground px-6 py-3 rounded-full font-semibold tracking-wide hover:bg-foreground/10 transition-colors">
                <MapPin className="h-4 w-4" /> Bize Yol Tarifi
              </a>
            </div>
          </div>
          <div className="md:col-span-4 space-y-3">
            {[
              { k: "Kebap Çeşidi", v: "20+" },
              { k: "Yıllık Deneyim", v: "15" },
              { k: "Mutlu Misafir", v: "10K+" },
            ].map((s) => (
              <div key={s.k} className="flex items-baseline justify-between border-b border-border/60 pb-3">
                <span className="text-sm uppercase tracking-widest text-muted-foreground">{s.k}</span>
                <span className="font-display text-4xl text-gradient-gold">{s.v}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* MARQUEE STRIP */}
      <div className="border-y border-border bg-secondary/40 py-4 overflow-hidden">
        <div className="flex items-center gap-10 whitespace-nowrap animate-shimmer">
          {["ADANA", "URFA", "TAVUK ŞİŞ", "ÇÖP ŞİŞ", "CİĞER", "AKÇAABAT KÖFTE", "DÜRÜM", "SARMA BEYTİ", "YOĞURTLU"].map((w) => (
            <span key={w} className="font-display text-2xl tracking-[0.3em] text-primary/70 flex items-center gap-10">
              {w} <Flame className="h-4 w-4 text-ember" />
            </span>
          ))}
        </div>
      </div>

      {/* HIKAYE */}
      <section id="hikaye" className="max-w-7xl mx-auto px-6 py-24 grid md:grid-cols-2 gap-16 items-center">
        <div>
          <span className="text-primary text-xs tracking-[0.35em] uppercase">Hikayemiz</span>
          <h2 className="font-display text-5xl md:text-6xl mt-4 leading-tight">
            Bir sokak, <br /> bir mangal, <br /> <span className="text-gradient-gold">sonsuz lezzet.</span>
          </h2>
          <p className="mt-6 text-muted-foreground leading-relaxed">
            Sokak Kebapçısı, Trabzon'un dar sokaklarından doğdu. Ustanın elinde şişe geçen etin
            kokusu, közün üzerinde çıtırdayan sesiyle mahallelinin buluşma noktası oldu.
            Bugün de o ilk günkü heyecanla; en taze etler, gerçek odun kömürü ve el yapımı
            ezmelerle sofranızdayız.
          </p>
          <div className="mt-8 grid grid-cols-2 gap-6">
            <div className="border-l-2 border-primary pl-4">
              <div className="font-display text-2xl">Odun Ateşi</div>
              <p className="text-sm text-muted-foreground mt-1">Gerçek meşe kömürü ile pişirim.</p>
            </div>
            <div className="border-l-2 border-primary pl-4">
              <div className="font-display text-2xl">Günlük Et</div>
              <p className="text-sm text-muted-foreground mt-1">Her sabah kasaptan, her akşam sofrada.</p>
            </div>
          </div>
        </div>
        <div className="relative">
          <img src={tavukImg} alt="Tavuk şiş" width={1024} height={1024} loading="lazy" className="rounded-2xl w-full aspect-square object-cover shadow-[var(--shadow-plate)]" />
          <div className="absolute -bottom-6 -left-6 bg-primary text-primary-foreground p-6 rounded-xl max-w-[220px] shadow-[var(--shadow-glow)]">
            <div className="font-display text-4xl">15+</div>
            <div className="text-sm opacity-90">Yıllık ustalık deneyimi</div>
          </div>
        </div>
      </section>

      {/* MENU */}
      <section id="menu" className="relative py-24 border-t border-border" style={{ background: "linear-gradient(180deg, oklch(0.12 0.01 60), oklch(0.14 0.01 60))" }}>
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <span className="text-primary text-xs tracking-[0.35em] uppercase">Menü</span>
            <h2 className="font-display text-6xl md:text-7xl mt-4">Sofradan <span className="text-gradient-gold">Seçmeler</span></h2>
            <div className="mx-auto mt-6 h-px w-24 bg-primary" />
          </div>

          {/* KEBAPLAR */}
          <MenuBlock title="Kebaplar" image={heroImg} items={kebaplar} />

          {/* KARIŞIK */}
          <MenuBlock title="Karışık Kebap" image={null} items={karisik} compact />

          {/* DÜRÜMLER */}
          <MenuBlock title="Dürümler" image={durumImg} items={durumler} reverse />

          {/* ÇORBA & TATLI */}
          <div className="grid md:grid-cols-2 gap-8 mt-20">
            <div className="bg-card/60 border border-border rounded-2xl p-8">
              <div className="flex items-center gap-4 mb-6">
                <img src={corbaImg} alt="Çorba" width={80} height={80} loading="lazy" className="h-16 w-16 rounded-full object-cover" />
                <h3 className="font-display text-4xl">Çorbalar</h3>
              </div>
              <PriceList items={corbalar} />
            </div>
            <div className="bg-card/60 border border-border rounded-2xl p-8">
              <div className="flex items-center gap-4 mb-6">
                <div className="h-16 w-16 rounded-full bg-primary/20 flex items-center justify-center text-2xl">🍮</div>
                <h3 className="font-display text-4xl">Tatlılar</h3>
              </div>
              <PriceList items={tatlilar} />
            </div>
          </div>

          {/* İÇECEKLER */}
          <div className="grid md:grid-cols-2 gap-8 mt-8">
            <div className="bg-card/60 border border-border rounded-2xl p-8">
              <h3 className="font-display text-4xl mb-6">Sıcak İçecekler</h3>
              <PriceList items={sicak} />
            </div>
            <div className="bg-card/60 border border-border rounded-2xl p-8">
              <h3 className="font-display text-4xl mb-6">Soğuk İçecekler</h3>
              <PriceList items={soguk} />
            </div>
          </div>

          <p className="text-center text-xs text-muted-foreground mt-10 tracking-widest uppercase">
            Fiyatlar Türk Lirası (₺) cinsindendir · Değişiklik hakkımız saklıdır
          </p>
        </div>
      </section>

      {/* ZIYARET */}
      <section id="ziyaret" className="max-w-7xl mx-auto px-6 py-24">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <span className="text-primary text-xs tracking-[0.35em] uppercase">Ziyaret</span>
            <h2 className="font-display text-5xl md:text-6xl mt-4 leading-tight">
              Trabzon'da <br /> <span className="text-gradient-gold">Sizi Bekliyoruz.</span>
            </h2>
            <div className="mt-10 space-y-5">
              <InfoRow icon={<MapPin className="h-5 w-5" />} label="Adres" value="Trabzon, Türkiye" />
              <InfoRow icon={<Phone className="h-5 w-5" />} label="Rezervasyon" value="0462 310 16 16" href="tel:04623101616" />
              <InfoRow icon={<Clock className="h-5 w-5" />} label="Açılış Saatleri" value="Her gün 11:00 — 23:30" />
              <InfoRow icon={<Instagram className="h-5 w-5" />} label="Instagram" value="@sokakkebapcisi" />
            </div>
            <a href="tel:04623101616" className="mt-10 inline-flex items-center gap-2 bg-primary text-primary-foreground px-8 py-4 rounded-full font-semibold tracking-wide hover:shadow-[var(--shadow-glow)] transition-shadow">
              <Phone className="h-4 w-4" /> Masa Ayırt
            </a>
          </div>
          <div className="relative rounded-2xl overflow-hidden aspect-[4/5] shadow-[var(--shadow-plate)]">
            <img src={durumImg} alt="Dürüm" width={1024} height={1024} loading="lazy" className="w-full h-full object-cover" />
            <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-transparent" />
            <div className="absolute bottom-6 left-6 right-6">
              <div className="font-display text-3xl text-gradient-gold">"Sokağın Ruhu, Sofranın Bereketi."</div>
            </div>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="border-t border-border bg-secondary/30">
        <div className="max-w-7xl mx-auto px-6 py-12 flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-3">
            <img src={logoImg} alt="Logo" className="h-10 w-10 rounded-full" />
            <div>
              <div className="font-display tracking-widest text-gradient-gold">SOKAK KEBAPÇISI</div>
              <div className="text-xs text-muted-foreground">© {new Date().getFullYear()} · Trabzon</div>
            </div>
          </div>
          <div className="text-xs text-muted-foreground tracking-widest uppercase">Odun ateşinde pişer · Sevgiyle sunulur</div>
        </div>
      </footer>
    </div>
  );
}

function MenuBlock({ title, image, items, reverse, compact }: {
  title: string; image: string | null;
  items: { name: string; desc?: string; price: string }[];
  reverse?: boolean; compact?: boolean;
}) {
  return (
    <div className={`mt-16 grid ${image ? "md:grid-cols-5" : "md:grid-cols-1"} gap-10 items-start`}>
      {image && !reverse && (
        <div className="md:col-span-2">
          <img src={image} alt={title} width={1024} height={1024} loading="lazy" className="rounded-2xl aspect-square w-full object-cover sticky top-28 shadow-[var(--shadow-plate)]" />
        </div>
      )}
      <div className={image ? "md:col-span-3" : ""}>
        <div className="flex items-center gap-4 mb-8">
          <Flame className="h-6 w-6 text-ember" />
          <h3 className="font-display text-4xl md:text-5xl">{title}</h3>
          <div className="h-px flex-1 bg-border" />
        </div>
        <ul className="space-y-5">
          {items.map((it) => (
            <li key={it.name} className="group">
              <div className="flex items-baseline gap-3">
                <span className="font-display text-xl md:text-2xl tracking-wide text-foreground group-hover:text-primary transition-colors">{it.name}</span>
                <span className="flex-1 divider-dots h-1 opacity-40" />
                <span className="font-display text-2xl text-gradient-gold whitespace-nowrap">{it.price} ₺</span>
              </div>
              {!compact && it.desc && (
                <p className="text-sm text-muted-foreground mt-1 max-w-2xl">{it.desc}</p>
              )}
            </li>
          ))}
        </ul>
      </div>
      {image && reverse && (
        <div className="md:col-span-2 md:order-first">
          <img src={image} alt={title} width={1024} height={1024} loading="lazy" className="rounded-2xl aspect-square w-full object-cover sticky top-28 shadow-[var(--shadow-plate)]" />
        </div>
      )}
    </div>
  );
}

function PriceList({ items }: { items: { name: string; price: string }[] }) {
  return (
    <ul className="space-y-3">
      {items.map((it) => (
        <li key={it.name} className="flex items-baseline gap-3">
          <span className="text-foreground/90">{it.name}</span>
          <span className="flex-1 divider-dots h-1 opacity-30" />
          <span className="font-display text-lg text-primary">{it.price} ₺</span>
        </li>
      ))}
    </ul>
  );
}

function InfoRow({ icon, label, value, href }: { icon: React.ReactNode; label: string; value: string; href?: string }) {
  const content = (
    <div className="flex items-start gap-4 group">
      <div className="h-10 w-10 rounded-full bg-primary/10 border border-primary/30 flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-primary-foreground transition-colors">
        {icon}
      </div>
      <div>
        <div className="text-xs uppercase tracking-[0.25em] text-muted-foreground">{label}</div>
        <div className="font-display text-xl mt-0.5">{value}</div>
      </div>
    </div>
  );
  return href ? <a href={href}>{content}</a> : content;
}
