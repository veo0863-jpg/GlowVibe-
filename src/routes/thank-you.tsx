import { createFileRoute, Link, useSearch } from "@tanstack/react-router";
import { CheckCircle2, MessageCircle, Home, Sparkles, Package, Truck } from "lucide-react";

type Search = {
  name?: string;
  phone?: string;
  product?: string;
  qty?: number;
  total?: number;
};

export const Route = createFileRoute("/thank-you")({
  head: () => ({
    meta: [
      { title: "ধন্যবাদ — আপনার অর্ডার গ্রহণ করা হয়েছে | GlowVibe BD" },
      { name: "description", content: "আপনার অর্ডার সফলভাবে গ্রহণ করা হয়েছে। আমরা শীঘ্রই কল করে কনফার্ম করবো।" },
      { name: "robots", content: "noindex" },
    ],
  }),
  validateSearch: (s: Record<string, unknown>): Search => ({
    name: typeof s.name === "string" ? s.name : undefined,
    phone: typeof s.phone === "string" ? s.phone : undefined,
    product: typeof s.product === "string" ? s.product : undefined,
    qty: typeof s.qty === "string" ? Number(s.qty) : typeof s.qty === "number" ? s.qty : undefined,
    total: typeof s.total === "string" ? Number(s.total) : typeof s.total === "number" ? s.total : undefined,
  }),
  component: ThankYou,
});

function ThankYou() {
  const { name, phone, product, qty, total } = useSearch({ from: "/thank-you" });
  const orderId = "GV" + Math.floor(100000 + Math.random() * 900000);

  return (
    <div className="min-h-screen bg-gradient-hero flex items-center justify-center px-4 py-12">
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 left-10 w-40 h-40 rounded-full bg-primary-glow blur-3xl opacity-40" />
        <div className="absolute bottom-20 right-10 w-56 h-56 rounded-full bg-accent blur-3xl opacity-40" />
      </div>

      <div className="relative w-full max-w-xl">
        <div className="bg-card rounded-3xl shadow-glow border-2 border-primary/20 overflow-hidden">
          {/* Top success banner */}
          <div className="bg-gradient-primary text-primary-foreground text-center px-6 py-8 relative">
            <div className="absolute inset-0 opacity-20">
              <Sparkles className="absolute top-3 left-6 w-5 h-5 animate-pulse" />
              <Sparkles className="absolute bottom-4 right-8 w-4 h-4 animate-pulse" />
              <Sparkles className="absolute top-6 right-12 w-3 h-3 animate-pulse" />
            </div>
            <div className="w-20 h-20 mx-auto mb-3 rounded-full bg-card flex items-center justify-center shadow-glow">
              <CheckCircle2 className="w-12 h-12 text-success" strokeWidth={2.5} />
            </div>
            <h1 className="text-2xl md:text-3xl font-bold mb-1">✅ ধন্যবাদ{name ? ` ${name}` : " স্যার"}!</h1>
            <p className="text-primary-foreground/90 text-sm md:text-base">
              আপনার অর্ডার সফলভাবে কনফার্ম হয়েছে 💚
            </p>
          </div>

          {/* Order summary */}
          <div className="p-6 md:p-8 space-y-5">
            <div className="bg-secondary/60 rounded-2xl p-4 border border-primary/10">
              <div className="flex items-center justify-between mb-3 pb-3 border-b border-border/50">
                <span className="text-xs font-semibold text-muted-foreground uppercase tracking-wider">অর্ডার আইডি</span>
                <span className="font-mono font-bold text-primary">{orderId}</span>
              </div>
              <div className="space-y-2 text-sm">
                {product && <Row label="প্রোডাক্ট" value={product} />}
                {qty && <Row label="পরিমাণ" value={String(qty)} />}
                {phone && <Row label="ফোন" value={phone} />}
                {total && (
                  <div className="flex justify-between items-center pt-2 mt-2 border-t border-border/50">
                    <span className="font-semibold text-foreground">সর্বমোট</span>
                    <span className="text-xl font-bold text-gradient-primary">৳{total}</span>
                  </div>
                )}
              </div>
            </div>

            {/* Delivery info */}
            <div className="bg-gradient-hero rounded-2xl p-4 border border-primary/20 space-y-2">
              <div className="flex items-start gap-2">
                <Truck className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                <div>
                  <p className="font-bold text-foreground text-sm">🚚 ডেলিভারি সময়: ২–৩ দিন</p>
                  <p className="text-xs text-muted-foreground">(তবে তার আগেও পেয়ে যেতে পারেন ইনশাআল্লাহ)</p>
                </div>
              </div>
              <div className="flex items-start gap-2 pt-2 border-t border-border/50">
                <Package className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                <div>
                  <p className="font-bold text-foreground text-sm">🏠 হোম ডেলিভারি</p>
                  <p className="text-xs text-muted-foreground">ডেলিভারি ম্যান আপনার লোকেশনে পৌঁছে প্রোডাক্ট হাতে দেবেন।</p>
                </div>
              </div>
            </div>

            {/* Important notice */}
            <div className="bg-destructive/10 rounded-2xl p-4 border-2 border-destructive/30">
              <p className="font-bold text-destructive text-sm mb-2">⚠️ গুরুত্বপূর্ণ:</p>
              <p className="text-xs text-foreground leading-relaxed mb-2">
                অর্ডার কনফার্ম করার পর <strong>ক্যানসেল করা যাবে না</strong>। যদি কোনো কারণে ক্যানসেল করতে হয়, তাহলে ডেলিভারি চার্জ প্রদান করতে হবে।
              </p>
              <p className="text-xs text-foreground leading-relaxed">
                🙏 অনুগ্রহ করে ১০০% নিশ্চিত হয়ে বলবেন — <strong>"হ্যাঁ, অর্ডার কনফার্ম করুন"</strong>। আমরা আপনাদের বিশ্বাসের ওপর ভিত্তি করে প্রোডাক্ট পাঠাই 💖
              </p>
            </div>




            {/* CTA buttons */}
            <div className="grid sm:grid-cols-2 gap-3 pt-2">
              <a
                href="https://wa.me/8801304968877"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 px-5 py-3 rounded-xl bg-success text-success-foreground font-bold shadow-soft hover:scale-[1.02] transition-transform"
              >
                <MessageCircle className="w-5 h-5" /> WhatsApp এ যোগাযোগ
              </a>
              <Link
                to="/"
                className="inline-flex items-center justify-center gap-2 px-5 py-3 rounded-xl bg-card border-2 border-primary text-primary font-bold hover:bg-primary hover:text-primary-foreground transition-colors"
              >
                <Home className="w-5 h-5" /> হোমে ফিরে যান
              </Link>
            </div>

            <p className="text-center text-xs text-muted-foreground pt-2">
              সাহায্যের জন্য কল করুন: <a href="tel:01304968877" className="font-bold text-primary">01304968877</a>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

function Row({ label, value }: { label: string; value: string }) {
  return (
    <div className="flex justify-between gap-3">
      <span className="text-muted-foreground">{label}</span>
      <span className="font-semibold text-foreground text-right">{value}</span>
    </div>
  );
}

