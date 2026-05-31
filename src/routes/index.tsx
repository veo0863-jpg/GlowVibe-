import { createFileRoute, useNavigate } from "@tanstack/react-router";
import { useState } from "react";
import { toast } from "sonner";
import heroImage from "@/assets/glowvibe-hero.jpg";
import faceCreamImg from "@/assets/product-face-cream.jpg";
import bodyCreamImg from "@/assets/product-body-cream.jpg";
import orangeGelImg from "@/assets/product-orange-gel.jpg";
import {
  Sparkles, Check, Star, ShoppingBag, MessageCircle, Phone,
  Truck, Wallet, ShieldCheck, Headphones, Award, Gift,
  ChevronDown
} from "lucide-react";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "GlowVibe নাইট ক্রিম কম্বো প্যাকেজ — উজ্জ্বল ও গ্লোয়িং ত্বক" },
      { name: "description", content: "GlowVibe নাইট ক্রিম কম্বো প্যাকেজে পান উজ্জ্বল, ফর্সা ও গ্লোয়িং ত্বক। ফ্রি ডেলিভারি, ক্যাশ অন ডেলিভারি। ৳1500 মাত্র।" },
      { property: "og:title", content: "GlowVibe নাইট ক্রিম কম্বো প্যাকেজ" },
      { property: "og:description", content: "ফেস, বডি, হাত-পা এর সম্পূর্ণ সমাধান। ৳1500 মাত্র।" },
      { property: "og:type", content: "product" },
    ],
    links: [
      { rel: "preconnect", href: "https://fonts.googleapis.com" },
      { rel: "preconnect", href: "https://fonts.gstatic.com", crossOrigin: "" },
      { rel: "stylesheet", href: "https://fonts.googleapis.com/css2?family=Hind+Siliguri:wght@400;500;600;700&family=Playfair+Display:wght@600;700&display=swap" },
      { rel: "canonical", href: "/" },
    ],
  }),
  component: Landing,
});

const PHONE = "01304968877";
const WA_LINK = `https://wa.me/8801304968877?text=${encodeURIComponent("আমি GlowVibe প্রোডাক্ট অর্ডার করতে চাই।")}`;

type Product = {
  id: string;
  name: string;
  tagline: string;
  price: number;
  image: string;
  badge?: string;
  highlight?: boolean;
  benefits: string[];
};

const PRODUCTS: Product[] = [
  {
    id: "combo",
    name: "GlowVibe কম্বো প্যাকেজ",
    tagline: "ফেস + বডি + হাত-পা সম্পূর্ণ সমাধান",
    price: 1500,
    image: heroImage,
    badge: "Best Seller",
    highlight: true,
    benefits: [
      "নাইট ক্রিম + বডি ক্রিম + অরেঞ্জ জেল — একসাথে",
      "ফেস, বডি, হাত-পা — পুরো শরীরের যত্ন",
      "একসাথে কিনলে সবচেয়ে বেশি সাশ্রয়",
      "সম্পূর্ণ ফ্রি ডেলিভারি",
    ],
  },
  {
    id: "face",
    name: "GlowVibe ফেস নাইট ক্রিম",
    tagline: "রাতের যত্নে সকালে হবে উজ্জ্বল ফর্সা",
    price: 550,
    image: faceCreamImg,
    benefits: [
      "রাতে ত্বক মেরামত করে",
      "দাগছোপ ও ব্রণ কমায়",
      "গভীরভাবে পুষ্টি দেয়",
      "সকালে ত্বক হবে ফ্রেশ ও উজ্জ্বল",
    ],
  },
  {
    id: "body",
    name: "GlowVibe বডি ক্রিম",
    tagline: "মুখ ও শরীর হবে উজ্জ্বল ফর্সা",
    price: 800,
    image: bodyCreamImg,
    benefits: [
      "ত্বক হবে উজ্জ্বল ও মসৃণ",
      "গভীরভাবে ময়েশ্চারাইজ করে",
      "ত্বককে করে সুরক্ষিত ও স্বাস্থ্যকর",
      "নিয়মিত ব্যবহারে দাগছোপ কমায়",
    ],
  },
  {
    id: "orange",
    name: "Orange Brightening Gel",
    tagline: "ফেস ও বডি স্ক্রাব — ব্রাইটেনিং জেল",
    price: 440,
    image: orangeGelImg,
    benefits: [
      "মুখ ও শরীরের ডার্ক স্পট দূর করে",
      "ত্বককে করে উজ্জ্বল, কোমল ও মসৃণ",
      "ডিপ ক্লিন ও এক্সফোলিয়েট করে",
      "নিয়মিত ব্যবহারে ব্রণ ও র‍্যাশ কমায়",
    ],
  },
];

function Landing() {
  const [selected, setSelected] = useState<Product>(PRODUCTS[0]);

  const selectAndScroll = (p: Product) => {
    setSelected(p);
    setTimeout(() => {
      document.getElementById("order")?.scrollIntoView({ behavior: "smooth" });
    }, 50);
  };

  return (
    <div className="min-h-screen bg-background">
      <Header />
      <Hero />
      <Products onSelect={selectAndScroll} selectedId={selected.id} />
      <Benefits />
      <HowToUse />
      <Reviews />
      <OrderForm selected={selected} setSelected={setSelected} />
      <Trust />
      <FAQ />
      <Footer />
      <StickyButtons />
    </div>
  );
}

function Header() {
  return (
    <header className="sticky top-0 z-40 backdrop-blur-md bg-background/80 border-b border-border/50">
      <div className="container mx-auto px-4 py-3 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <div className="w-9 h-9 rounded-full bg-gradient-primary flex items-center justify-center shadow-soft">
            <Sparkles className="w-5 h-5 text-primary-foreground" />
          </div>
          <span className="font-display text-xl font-bold text-gradient-primary">GlowVibe BD</span>
        </div>
        <a href={`tel:${PHONE}`} className="flex items-center gap-1.5 text-sm font-semibold text-primary">
          <Phone className="w-4 h-4" /> {PHONE}
        </a>
      </div>
    </header>
  );
}

function Hero() {
  return (
    <section className="relative overflow-hidden bg-gradient-hero pt-6 pb-10">
      <div className="absolute inset-0 opacity-40 pointer-events-none">
        <div className="absolute top-10 left-10 w-40 h-40 rounded-full bg-primary-glow blur-3xl" />
        <div className="absolute bottom-10 right-10 w-56 h-56 rounded-full bg-accent blur-3xl" />
      </div>

      <div className="container mx-auto px-4 relative max-w-3xl">
        <div className="text-center space-y-5">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-card shadow-soft border border-primary/20">
            <Sparkles className="w-4 h-4 text-primary" />
            <span className="text-xs font-semibold text-primary">GlowVibe BD — প্রিমিয়াম স্কিন কেয়ার</span>
          </div>

          <h1 className="text-3xl md:text-5xl font-bold leading-tight">
            <span className="text-gradient-primary">GlowVibe নাইট ক্রিম</span>
            <br />
            <span className="text-foreground">কম্বো প্যাকেজে পান উজ্জ্বল, ফর্সা ও গ্লোয়িং ত্বক!</span>
          </h1>

          <p className="text-base md:text-lg text-muted-foreground">
            ফেস, বডি, হাত-পা এর সম্পূর্ণ সমাধান একসাথে
          </p>

          {/* Hero Video */}
          <div className="relative rounded-3xl overflow-hidden shadow-glow border-2 border-primary/20 bg-card">
            <video
              src="/glowvibe-hero.mp4"
              autoPlay
              muted
              loop
              playsInline
              controls
              className="w-full h-auto block"
              poster={heroImage}
            />
          </div>

          {/* Order Button */}
          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <a
              href="#order"
              className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-xl bg-gradient-primary text-primary-foreground font-bold text-lg shadow-glow hover:scale-105 transition-transform animate-pulse"
            >
              <ShoppingBag className="w-5 h-5" /> অর্ডার করুন এখনই
            </a>
            <a
              href={WA_LINK}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 px-6 py-4 rounded-xl bg-success text-success-foreground font-bold shadow-soft hover:scale-105 transition-transform"
            >
              <MessageCircle className="w-5 h-5" /> WhatsApp এ অর্ডার
            </a>
          </div>

          <div className="bg-card rounded-2xl p-4 shadow-soft border border-primary/20 max-w-md mx-auto">
            <div className="grid grid-cols-3 gap-2 text-xs">
              <Perk text="ফ্রি ডেলিভারি" />
              <Perk text="ক্যাশ অন ডেলিভারি" />
              <Perk text="১০০% অরিজিনাল" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function Perk({ text }: { text: string }) {
  return (
    <div className="flex items-center gap-2">
      <span className="w-5 h-5 rounded-full bg-success/15 flex items-center justify-center flex-shrink-0">
        <Check className="w-3 h-3 text-success" strokeWidth={3} />
      </span>
      <span className="text-foreground font-medium">{text}</span>
    </div>
  );
}

function Products({ onSelect, selectedId }: { onSelect: (p: Product) => void; selectedId: string }) {
  return (
    <section id="products" className="py-14 bg-secondary/40">
      <div className="container mx-auto px-4">
        <h2 className="text-2xl md:text-4xl font-bold text-center mb-3">
          আমাদের <span className="text-gradient-primary">প্রোডাক্ট সমূহ</span>
        </h2>
        <p className="text-center text-muted-foreground mb-10">আপনার প্রয়োজন মতো প্যাকেজ বেছে নিন</p>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {PRODUCTS.map((p) => {
            const isSelected = p.id === selectedId;
            return (
              <article
                key={p.id}
                className={`relative bg-card rounded-3xl overflow-hidden shadow-card border-2 transition-all hover:-translate-y-1 hover:shadow-glow ${
                  isSelected ? "border-primary shadow-glow" : "border-border/50"
                }`}
              >
                {p.badge && (
                  <span className="absolute top-3 left-3 z-10 px-3 py-1 rounded-full bg-gradient-gold text-foreground text-xs font-bold shadow-soft">
                    {p.badge}
                  </span>
                )}
                {p.highlight && (
                  <span className="absolute top-3 right-3 z-10 px-2.5 py-1 rounded-full bg-gradient-primary text-primary-foreground text-[10px] font-bold shadow-soft">
                    সেভিংস
                  </span>
                )}
                <div className="aspect-square bg-gradient-hero overflow-hidden">
                  <img
                    src={p.image}
                    alt={p.name}
                    loading="lazy"
                    width={768}
                    height={768}
                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                  />
                </div>
                <div className="p-4 space-y-3">
                  <div>
                    <h3 className="font-bold text-foreground leading-tight">{p.name}</h3>
                    <p className="text-xs text-muted-foreground mt-1">{p.tagline}</p>
                  </div>
                  <ul className="space-y-1.5 bg-secondary/40 rounded-xl p-3 border border-primary/10">
                    {p.benefits.map((b, i) => (
                      <li key={i} className="flex items-start gap-2 text-xs text-foreground">
                        <Check className="w-3.5 h-3.5 text-success mt-0.5 flex-shrink-0" strokeWidth={3} />
                        <span className="leading-snug">{b}</span>
                      </li>
                    ))}
                  </ul>
                  <div className="flex items-baseline gap-1">
                    <span className="text-2xl font-extrabold text-gradient-primary">৳{p.price}</span>
                    <span className="text-xs text-muted-foreground">Only</span>
                  </div>
                  <button
                    onClick={() => onSelect(p)}
                    className={`w-full inline-flex items-center justify-center gap-2 px-4 py-2.5 rounded-xl font-bold text-sm transition-all ${
                      isSelected
                        ? "bg-gradient-primary text-primary-foreground shadow-soft"
                        : "bg-secondary text-foreground hover:bg-gradient-primary hover:text-primary-foreground"
                    }`}
                  >
                    <ShoppingBag className="w-4 h-4" />
                    {isSelected ? "নির্বাচিত — অর্ডার করুন" : "অর্ডার করুন"}
                  </button>
                </div>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}

function Benefits() {
  const items = [
    "মুখ হবে উজ্জ্বল ও গ্লোয়িং",
    "ত্বক হবে নরম ও মসৃণ",
    "হাত-পা দেখাবে আরও ফ্রেশ",
    "ডার্ক স্পট কমাতে সহায়তা করে",
    "নিয়মিত ব্যবহারে স্কিন কেয়ার সহজ",
    "সহজে ব্যবহারযোগ্য",
  ];
  return (
    <section className="py-14">
      <div className="container mx-auto px-4">
        <h2 className="text-2xl md:text-4xl font-bold text-center mb-2">
          কেন <span className="text-gradient-primary">GlowVibe?</span>
        </h2>
        <p className="text-center text-muted-foreground mb-10">আপনার ত্বকের জন্য সেরা সমাধান</p>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 max-w-5xl mx-auto">
          {items.map((t, i) => (
            <div key={i} className="bg-card rounded-2xl p-5 shadow-card border border-primary/10 flex items-start gap-3 hover:border-primary/40 transition-colors">
              <div className="w-9 h-9 rounded-xl bg-gradient-primary flex items-center justify-center flex-shrink-0 shadow-soft">
                <Check className="w-5 h-5 text-primary-foreground" strokeWidth={3} />
              </div>
              <p className="text-base font-semibold text-foreground pt-1">{t}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function HowToUse() {
  const steps = [
    "রাতে মুখ পরিষ্কার করুন",
    "GlowVibe Night Cream অল্প পরিমাণ নিন",
    "মুখ, হাত, গলা বা প্রয়োজনীয় স্থানে ব্যবহার করুন",
    "সারারাত রেখে দিন",
    "নিয়মিত ব্যবহার করুন",
  ];
  return (
    <section className="py-14 bg-gradient-hero">
      <div className="container mx-auto px-4">
        <h2 className="text-2xl md:text-4xl font-bold text-center mb-10">
          <span className="text-gradient-primary">ব্যবহারের নিয়ম</span>
        </h2>
        <div className="max-w-2xl mx-auto space-y-4">
          {steps.map((s, i) => (
            <div key={i} className="flex gap-4 items-center bg-card rounded-2xl p-4 shadow-card border border-border/50">
              <div className="w-12 h-12 rounded-full bg-gradient-primary text-primary-foreground font-bold text-lg flex items-center justify-center flex-shrink-0 shadow-soft">
                {i + 1}
              </div>
              <p className="font-medium text-foreground">{s}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function Reviews() {
  const reviews = [
    { name: "নুসরাত জাহান", text: "আমি ২ সপ্তাহ ব্যবহার করেছি, স্কিন অনেক বেশি স্মুথ মনে হয়েছে।" },
    { name: "তানিয়া আক্তার", text: "প্যাকেজিং সুন্দর, ডেলিভারি দ্রুত, ব্যবহার করতেও ভালো লেগেছে।" },
    { name: "রুমানা পারভীন", text: "নাইট রুটিনে যোগ করেছি, ত্বক অনেক ফ্রেশ লাগে।" },
    { name: "সাবরিনা ইসলাম", text: "অনেকদিন ধরে ব্যবহার করছি, রিপিট অর্ডার করবো।" },
  ];
  return (
    <section className="py-14">
      <div className="container mx-auto px-4">
        <h2 className="text-2xl md:text-4xl font-bold text-center mb-10">
          আমাদের <span className="text-gradient-primary">কাস্টমাররা যা বলছেন</span>
        </h2>
        <div className="grid md:grid-cols-2 gap-5 max-w-4xl mx-auto">
          {reviews.map((r, i) => (
            <div key={i} className="bg-card rounded-2xl p-6 shadow-card border border-border/50">
              <div className="flex gap-0.5 mb-3">
                {Array.from({ length: 5 }).map((_, j) => (
                  <Star key={j} className="w-5 h-5 fill-gold text-gold" />
                ))}
              </div>
              <p className="text-foreground leading-relaxed mb-4">"{r.text}"</p>
              <div className="flex items-center gap-3 pt-3 border-t border-border/50">
                <div className="w-10 h-10 rounded-full bg-gradient-primary flex items-center justify-center text-primary-foreground font-bold">
                  {r.name[0]}
                </div>
                <span className="font-semibold text-foreground">{r.name}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function OrderForm({ selected, setSelected }: { selected: Product; setSelected: (p: Product) => void }) {
  const navigate = useNavigate();
  const [data, setData] = useState({ name: "", phone: "", address: "", qty: 1 });
  const total = selected.price * data.qty;

  const validate = () => {
    if (!data.name.trim() || data.name.trim().length < 2) { toast.error("আপনার নাম দিন"); return false; }
    if (!/^01[0-9]{9}$/.test(data.phone.trim())) { toast.error("সঠিক ফোন নাম্বার দিন (01XXXXXXXXX)"); return false; }
    if (!data.address.trim() || data.address.trim().length < 5) { toast.error("সম্পূর্ণ ঠিকানা দিন"); return false; }
    return true;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) return;
    navigate({
      to: "/thank-you",
      search: {
        name: data.name.trim(),
        phone: data.phone.trim(),
        product: selected.name,
        qty: data.qty,
        total,
      },
    });
  };

  const waOrder = () => {
    if (!validate()) return;
    const msg = `নতুন অর্ডার:\nপ্রোডাক্ট: ${selected.name}\nনাম: ${data.name}\nফোন: ${data.phone}\nঠিকানা: ${data.address}\nপরিমাণ: ${data.qty}\nসর্বমোট: ৳${total}`;
    window.open(`https://wa.me/8801304968877?text=${encodeURIComponent(msg)}`, "_blank");
  };

  return (
    <section id="order" className="py-14 bg-gradient-hero">
      <div className="container mx-auto px-4">
        <h2 className="text-2xl md:text-4xl font-bold text-center mb-2">
          এখনই <span className="text-gradient-primary">অর্ডার করুন</span>
        </h2>
        <p className="text-center text-muted-foreground mb-8">ফর্মটি পূরণ করুন — আমরা কল করে কনফার্ম করবো</p>

        <form onSubmit={handleSubmit} className="max-w-xl mx-auto bg-card rounded-3xl p-6 md:p-8 shadow-glow border-2 border-primary/20 space-y-4">
          {/* Selected product */}
          <div>
            <label className="block text-sm font-semibold mb-1.5 text-foreground">নির্বাচিত প্রোডাক্ট</label>
            <div className="flex items-center gap-3 p-3 rounded-xl bg-secondary/60 border border-primary/20">
              <img src={selected.image} alt={selected.name} className="w-14 h-14 rounded-xl object-cover" />
              <div className="flex-1 min-w-0">
                <p className="font-bold text-foreground text-sm truncate">{selected.name}</p>
                <p className="text-primary font-bold text-sm">৳{selected.price}</p>
              </div>
            </div>
            <div className="mt-2 grid grid-cols-2 gap-2">
              {PRODUCTS.map((p) => (
                <button
                  type="button"
                  key={p.id}
                  onClick={() => setSelected(p)}
                  className={`text-xs px-2 py-1.5 rounded-lg border font-semibold transition-all truncate ${
                    selected.id === p.id
                      ? "bg-gradient-primary text-primary-foreground border-primary"
                      : "bg-card border-border text-foreground hover:border-primary"
                  }`}
                >
                  {p.name.replace("GlowVibe ", "")} — ৳{p.price}
                </button>
              ))}
            </div>
          </div>

          <Field label="আপনার নাম" value={data.name} onChange={(v) => setData({ ...data, name: v })} placeholder="পূর্ণ নাম" />
          <Field label="ফোন নাম্বার" value={data.phone} onChange={(v) => setData({ ...data, phone: v })} placeholder="01XXXXXXXXX" type="tel" />
          <div>
            <label className="block text-sm font-semibold mb-1.5 text-foreground">সম্পূর্ণ ঠিকানা</label>
            <textarea
              value={data.address}
              onChange={(e) => setData({ ...data, address: e.target.value })}
              placeholder="বাসা, রোড, এলাকা, থানা, জেলা"
              rows={3}
              maxLength={500}
              className="w-full px-4 py-3 rounded-xl border border-input bg-background focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition"
            />
          </div>
          <div>
            <label className="block text-sm font-semibold mb-1.5 text-foreground">পরিমাণ</label>
            <div className="flex items-center gap-3">
              <button type="button" onClick={() => setData({ ...data, qty: Math.max(1, data.qty - 1) })} className="w-10 h-10 rounded-xl bg-secondary font-bold text-lg">−</button>
              <span className="text-xl font-bold w-12 text-center">{data.qty}</span>
              <button type="button" onClick={() => setData({ ...data, qty: Math.min(99, data.qty + 1) })} className="w-10 h-10 rounded-xl bg-secondary font-bold text-lg">+</button>
              <span className="ml-auto font-semibold text-primary text-lg">সর্বমোট: ৳{total}</span>
            </div>
          </div>

          <div className="grid sm:grid-cols-2 gap-3 pt-2">
            <button type="submit" className="inline-flex items-center justify-center gap-2 px-5 py-3.5 rounded-xl bg-gradient-primary text-primary-foreground font-bold shadow-glow hover:scale-[1.02] transition-transform">
              <ShoppingBag className="w-5 h-5" /> Confirm Order
            </button>
            <button type="button" onClick={waOrder} className="inline-flex items-center justify-center gap-2 px-5 py-3.5 rounded-xl bg-success text-success-foreground font-bold shadow-soft hover:scale-[1.02] transition-transform">
              <MessageCircle className="w-5 h-5" /> WhatsApp Order
            </button>
          </div>
        </form>
      </div>
    </section>
  );
}

function Field({ label, value, onChange, placeholder, type = "text" }: { label: string; value: string; onChange: (v: string) => void; placeholder: string; type?: string }) {
  return (
    <div>
      <label className="block text-sm font-semibold mb-1.5 text-foreground">{label}</label>
      <input
        type={type}
        value={value}
        onChange={(e) => onChange(e.target.value)}
        placeholder={placeholder}
        maxLength={200}
        className="w-full px-4 py-3 rounded-xl border border-input bg-background focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition"
      />
    </div>
  );
}

function Trust() {
  const items = [
    { icon: ShieldCheck, text: "100% Original Product" },
    { icon: Award, text: "Secure Order System" },
    { icon: Truck, text: "Free Delivery" },
    { icon: Wallet, text: "Cash On Delivery" },
    { icon: Headphones, text: "Customer Support" },
  ];
  return (
    <section className="py-12">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-2 md:grid-cols-5 gap-4 max-w-5xl mx-auto">
          {items.map(({ icon: Icon, text }) => (
            <div key={text} className="text-center p-4 rounded-2xl bg-card shadow-card border border-border/50">
              <div className="w-12 h-12 mx-auto mb-2 rounded-full bg-gradient-gold flex items-center justify-center shadow-soft">
                <Icon className="w-6 h-6 text-foreground" />
              </div>
              <p className="text-xs font-semibold text-foreground">{text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function FAQ() {
  const faqs = [
    { q: "কত দিনে ডেলিভারি পাবো?", a: "সাধারণত ২-৫ দিনের মধ্যে।" },
    { q: "ডেলিভারি চার্জ কত?", a: "সম্পূর্ণ ফ্রি।" },
    { q: "কিভাবে অর্ডার করবো?", a: "ফর্ম পূরণ করুন অথবা WhatsApp এ মেসেজ দিন।" },
  ];
  const [open, setOpen] = useState<number | null>(0);
  return (
    <section className="py-14 bg-secondary/50">
      <div className="container mx-auto px-4">
        <h2 className="text-2xl md:text-4xl font-bold text-center mb-10">
          <span className="text-gradient-primary">প্রশ্ন ও উত্তর</span>
        </h2>
        <div className="max-w-2xl mx-auto space-y-3">
          {faqs.map((f, i) => (
            <div key={i} className="bg-card rounded-2xl shadow-card border border-border/50 overflow-hidden">
              <button type="button" onClick={() => setOpen(open === i ? null : i)} className="w-full px-5 py-4 flex items-center justify-between gap-3 text-left">
                <span className="font-semibold text-foreground">{f.q}</span>
                <ChevronDown className={`w-5 h-5 text-primary transition-transform ${open === i ? "rotate-180" : ""}`} />
              </button>
              {open === i && (
                <div className="px-5 pb-4 text-muted-foreground border-t border-border/50 pt-3">{f.a}</div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer className="bg-foreground text-background py-10 mt-4">
      <div className="container mx-auto px-4 text-center space-y-3">
        <div className="flex items-center justify-center gap-2">
          <Sparkles className="w-6 h-6 text-primary-glow" />
          <span className="font-display text-2xl font-bold">GlowVibe BD</span>
        </div>
        <p className="text-background/80">প্রয়োজনে WhatsApp এ যোগাযোগ করুন</p>
        <a href={`tel:${PHONE}`} className="inline-flex items-center gap-2 text-lg font-bold text-primary-glow">
          <Phone className="w-5 h-5" /> {PHONE}
        </a>
        <div className="flex items-center justify-center gap-2 text-sm text-background/60 pt-4">
          <Gift className="w-4 h-4" /> আজই অর্ডার করুন — স্পেশাল অফার পান!
        </div>
        <p className="text-xs text-background/50 pt-4">© {new Date().getFullYear()} GlowVibe BD. All rights reserved.</p>
      </div>
    </footer>
  );
}

function StickyButtons() {
  return (
    <>
      {/* Desktop + Mobile sticky bottom bar */}
      <div className="fixed bottom-0 left-0 right-0 z-50 bg-gradient-primary border-t border-primary-glow/40 shadow-glow">
        <div className="container mx-auto px-4 py-2.5 md:py-3">
          <a
            href="#order"
            className="flex items-center justify-center gap-2 w-full text-center"
          >
            <div className="flex flex-col items-center">
              <span className="text-primary-foreground font-extrabold text-base md:text-lg leading-tight flex items-center gap-2">
                <ShoppingBag className="w-5 h-5" />
                অর্ডার নাও — এখানে ক্লিক করে অর্ডার করুন
              </span>
              <span className="text-primary-foreground/90 text-[11px] md:text-xs font-semibold mt-0.5">
                ১০০% টাকা রিটার্ন — কাজ না করলে সাথে গ্যারান্টি কার্ড পাবেন
              </span>
            </div>
          </a>
        </div>
      </div>

      {/* WhatsApp floating button */}
      <a
        href={WA_LINK}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="WhatsApp"
        className="fixed bottom-[4.5rem] md:bottom-20 right-4 z-50 w-14 h-14 rounded-full bg-success text-success-foreground shadow-glow flex items-center justify-center hover:scale-110 transition-transform"
      >
        <MessageCircle className="w-7 h-7" />
      </a>

      {/* Bottom padding so content isn't hidden behind sticky bar */}
      <div className="h-20 md:h-24" />
    </>
  );
}
