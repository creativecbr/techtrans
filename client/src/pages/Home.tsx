import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { translations, type Language } from "@/lib/translations";
import { ArrowRight, Box, Globe, ShieldCheck, Truck, Wifi, Menu, X } from "lucide-react";
import { Drawer, DrawerContent, DrawerTrigger, DrawerClose } from "@/components/ui/drawer";
import { useEffect, useState } from "react";

export default function Home() {
  const [scrolled, setScrolled] = useState(false);
  const [lang, setLang] = useState<Language>("pl");
  const t = translations[lang];

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const toggleLang = () => {
    setLang((prev) => (prev === "pl" ? "en" : "pl"));
  };

  return (
    <div className="min-h-screen bg-background text-foreground font-sans selection:bg-primary selection:text-primary-foreground overflow-x-hidden">
      {/* Navigation */}
      <nav
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 border-b ${
          scrolled
            ? "bg-background/80 backdrop-blur-md border-border py-4"
            : "bg-transparent border-transparent py-6"
        }`}
      >
        <div className="container flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="h-8 w-8 bg-primary flex items-center justify-center skew-x-[-10deg]">
              <span className="text-primary-foreground font-bold font-display skew-x-[10deg]">TT</span>
            </div>
            <span className="text-2xl font-bold font-display tracking-wider uppercase">
              Techstep <span className="text-primary">Transport</span>
            </span>
          </div>
          <div className="hidden md:flex items-center gap-8 font-medium font-display tracking-wide text-sm uppercase">
            <a href="#services" className="hover:text-primary transition-colors">{t.nav.services}</a>
            <a href="#technology" className="hover:text-primary transition-colors">{t.nav.technology}</a>
            <a href="#about" className="hover:text-primary transition-colors">{t.nav.about}</a>
            <Button 
              variant="ghost" 
              onClick={toggleLang}
              className="font-bold hover:bg-primary/10 hover:text-primary"
            >
              {lang === "pl" ? "EN" : "PL"}
            </Button>
            <Button variant="outline" className="border-primary text-primary hover:bg-primary hover:text-primary-foreground rounded-none skew-x-[-10deg]">
              <span className="skew-x-[10deg]">{t.nav.clientZone}</span>
            </Button>
          </div>
          {/* Mobile actions: language toggle + menu */}
          <div className="flex md:hidden items-center gap-2">
            <Button
              variant="ghost"
              onClick={toggleLang}
              className="font-bold hover:bg-primary/10 hover:text-primary"
            >
              {lang === "pl" ? "EN" : "PL"}
            </Button>
            <Drawer direction="right">
              <DrawerTrigger asChild>
                <Button variant="outline" size="icon" aria-label="Open menu">
                  <Menu className="w-5 h-5" />
                </Button>
              </DrawerTrigger>
              <DrawerContent className="p-0 w-full sm:max-w-sm">
                <div className="border-b p-4 flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <div className="h-6 w-6 bg-primary flex items-center justify-center skew-x-[-10deg]">
                      <span className="text-primary-foreground font-bold font-display skew-x-[10deg] text-xs">TT</span>
                    </div>
                    <span className="text-lg font-bold font-display tracking-wider uppercase">
                      Techstep <span className="text-primary">Transport</span>
                    </span>
                  </div>
                  <DrawerClose asChild>
                    <Button variant="ghost" size="icon" aria-label="Close menu">
                      <X className="w-5 h-5" />
                    </Button>
                  </DrawerClose>
                </div>
                <div className="p-4 space-y-3">
                  <a href="#services" className="block px-3 py-2 rounded-sm text-sm font-display uppercase hover:bg-accent hover:text-accent-foreground">
                    {t.nav.services}
                  </a>
                  <a href="#technology" className="block px-3 py-2 rounded-sm text-sm font-display uppercase hover:bg-accent hover:text-accent-foreground">
                    {t.nav.technology}
                  </a>
                  <a href="#about" className="block px-3 py-2 rounded-sm text-sm font-display uppercase hover:bg-accent hover:text-accent-foreground">
                    {t.nav.about}
                  </a>
                  <div className="pt-2 flex gap-2">
                    <Button 
                      variant="outline" 
                      className="border-primary text-primary hover:bg-primary hover:text-primary-foreground rounded-none skew-x-[-10deg] w-full"
                    >
                      <span className="skew-x-[10deg]">{t.nav.clientZone}</span>
                    </Button>
                    <Button 
                      variant="ghost" 
                      onClick={toggleLang} 
                      className="font-bold hover:bg-primary/10 hover:text-primary"
                    >
                      {lang === "pl" ? "EN" : "PL"}
                    </Button>
                  </div>
                </div>
              </DrawerContent>
            </Drawer>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        {/* Background Image with Overlay */}
        <div className="absolute inset-0 z-0">
          <img
            src={`${import.meta.env.BASE_URL}images/hero-bg.jpg`}
            alt="Modern Warehouse"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-background/95 via-background/70 to-transparent" />
          <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20 mix-blend-overlay" />
          
          {/* Tech Overlay Grid */}
          <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:40px_40px] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)]" />
        </div>

        <div className="container relative z-10 grid md:grid-cols-2 gap-12 items-center pt-20">
          <div className="space-y-8 animate-in slide-in-from-left-10 duration-700 fade-in">
            <div className="inline-flex items-center gap-2 px-3 py-1 border border-primary/30 bg-primary/10 text-primary text-xs font-bold uppercase tracking-widest font-display">
              <span className="w-2 h-2 bg-primary rounded-full animate-pulse" />
              {t.hero.badge}
            </div>
            <h1 className="text-5xl md:text-7xl font-bold font-display leading-tight uppercase">
              {t.hero.titleLine1} <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-secondary">
                {t.hero.titleLine2}
              </span>
            </h1>
            <p className="text-lg md:text-xl text-muted-foreground max-w-lg font-light leading-relaxed">
              {t.hero.description}
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button size="lg" className="bg-primary hover:bg-primary/90 text-primary-foreground rounded-none h-14 px-8 text-lg font-display uppercase tracking-wider skew-x-[-10deg] group">
                <span className="skew-x-[10deg] flex items-center gap-2">
                  {t.hero.ctaPrimary} <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </span>
              </Button>
              <Button size="lg" variant="outline" className="border-white/20 hover:bg-white/5 text-foreground rounded-none h-14 px-8 text-lg font-display uppercase tracking-wider skew-x-[-10deg]">
                <span className="skew-x-[10deg]">{t.hero.ctaSecondary}</span>
              </Button>
            </div>
          </div>

          {/* Abstract Data Viz / Dashboard Element */}
          <div className="hidden md:block relative animate-in slide-in-from-right-10 duration-1000 fade-in delay-200">
            <div className="relative z-10 bg-card/10 backdrop-blur-md border border-white/10 p-6 rounded-none skew-x-[-5deg]">
              <div className="skew-x-[5deg] space-y-6">
                <div className="flex justify-between items-center border-b border-white/10 pb-4">
                  <div className="space-y-1">
                    <div className="text-xs text-muted-foreground uppercase tracking-widest">{t.hero.stats.status}</div>
                    <div className="text-2xl font-display font-bold text-primary">{t.hero.stats.online}</div>
                  </div>
                  <Wifi className="w-8 h-8 text-primary animate-pulse" />
                </div>
                <div className="grid grid-cols-2 gap-4">
                  <div className="bg-background/40 p-4 border-l-2 border-secondary">
                    <div className="text-xs text-muted-foreground">{t.hero.stats.activeOrders}</div>
                    <div className="text-3xl font-display font-bold">1,248</div>
                  </div>
                  <div className="bg-background/40 p-4 border-l-2 border-primary">
                    <div className="text-xs text-muted-foreground">{t.hero.stats.efficiency}</div>
                    <div className="text-3xl font-display font-bold">99.8%</div>
                  </div>
                </div>
                <div className="space-y-2">
                  <div className="flex justify-between text-xs font-mono">
                    <span>{t.hero.stats.systemIntegrity}</span>
                    <span className="text-primary">100%</span>
                  </div>
                  <div className="h-1 w-full bg-white/10 overflow-hidden">
                    <div className="h-full bg-primary w-full animate-[shimmer_2s_infinite]" />
                  </div>
                </div>
              </div>
            </div>
            {/* Decorative elements */}
            <div className="absolute -top-10 -right-10 w-64 h-64 bg-primary/20 rounded-full blur-[100px]" />
            <div className="absolute -bottom-10 -left-10 w-64 h-64 bg-secondary/20 rounded-full blur-[100px]" />
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-24 bg-background relative">
        <div className="container">
          <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
            <div>
              <h2 className="text-4xl md:text-5xl font-bold font-display uppercase mb-4">
                {t.services.title} <span className="text-primary">{t.services.titleHighlight}</span>
              </h2>
              <div className="h-1 w-24 bg-secondary" />
            </div>
            <p className="text-muted-foreground max-w-md text-right md:text-left">
              {t.services.description}
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {t.services.items.map((service, index) => {
              const icons = [Box, Truck, Globe];
              const Icon = icons[index];
              return (
                <Card key={index} className="bg-card/50 border-white/5 hover:border-primary/50 transition-all duration-300 group rounded-none overflow-hidden">
                  <CardHeader>
                    <div className="w-12 h-12 bg-primary/10 flex items-center justify-center mb-4 group-hover:bg-primary group-hover:text-primary-foreground transition-colors duration-300 skew-x-[-10deg]">
                      <Icon className="w-6 h-6 skew-x-[10deg]" />
                    </div>
                    <CardTitle className="font-display text-xl uppercase tracking-wide">{service.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground mb-6 leading-relaxed">
                      {service.desc}
                    </p>
                    <Separator className="bg-white/10 mb-4" />
                    <div className="flex items-center justify-between font-mono text-xs text-primary">
                      <span>{service.stat}</span>
                      <ArrowRight className="w-4 h-4 -translate-x-2 opacity-0 group-hover:translate-x-0 group-hover:opacity-100 transition-all" />
                    </div>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* Technology / "Hidden MDM" Section */}
      <section id="technology" className="py-24 bg-card border-y border-white/5 relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-5" />
        <div className="container relative z-10">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <div className="order-2 md:order-1 relative">
              <div className="relative z-10 bg-background border border-white/10 p-1">
                <div className="bg-background/50 p-8 border border-white/5 relative overflow-hidden group">
                  <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-primary to-transparent opacity-50" />
                  
                  <div className="grid grid-cols-2 gap-4 mb-8">
                    {[1, 2, 3, 4].map((i) => (
                      <div key={i} className="bg-white/5 h-24 rounded-sm animate-pulse" style={{ animationDelay: `${i * 200}ms` }} />
                    ))}
                  </div>
                  
                  <div className="space-y-4 font-mono text-sm text-green-500/80">
                    <div className="flex justify-between">
                      <span>&gt; {t.technology.systemCheck}</span>
                      <span>{t.technology.ok}</span>
                    </div>
                    <div className="flex justify-between">
                      <span>&gt; {t.technology.deviceSync}</span>
                      <span>{t.technology.complete}</span>
                    </div>
                    <div className="flex justify-between">
                      <span>&gt; {t.technology.securityProtocol}</span>
                      <span>{t.technology.active}</span>
                    </div>
                  </div>
                </div>
              </div>
              {/* Background decorative grid */}
              <div className="absolute -inset-4 border border-primary/20 z-0 translate-x-4 translate-y-4" />
            </div>

            <div className="order-1 md:order-2 space-y-6">
              <div className="inline-flex items-center gap-2 text-secondary font-bold uppercase tracking-widest text-sm">
                <ShieldCheck className="w-4 h-4" />
                {t.technology.badge}
              </div>
              <h2 className="text-4xl md:text-5xl font-bold font-display uppercase leading-tight">
                {t.technology.titleLine1} <br />
                <span className="text-primary">{t.technology.titleLine2}</span>
              </h2>
              <p className="text-muted-foreground text-lg leading-relaxed">
                {t.technology.description}
              </p>
              <ul className="space-y-4 mt-4">
                {t.technology.features.map((item, i) => (
                  <li key={i} className="flex items-center gap-3 text-foreground/80">
                    <div className="w-1.5 h-1.5 bg-primary" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-32 relative overflow-hidden">
        <div className="absolute inset-0 bg-primary/10" />
        <div className="absolute inset-0 bg-[linear-gradient(45deg,transparent_25%,rgba(68,68,68,.2)_50%,transparent_75%,transparent_100%)] bg-[length:20px_20px]" />
        
        <div className="container relative z-10 text-center space-y-8">
          <h2 className="text-4xl md:text-6xl font-bold font-display uppercase max-w-4xl mx-auto leading-tight">
            {t.cta.titleLine1} <br />
            {t.cta.titleLine2}
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            {t.cta.description}
          </p>
          <div className="flex justify-center pt-8">
            <Button size="lg" className="bg-secondary hover:bg-secondary/90 text-secondary-foreground rounded-none h-16 px-12 text-xl font-display uppercase tracking-wider skew-x-[-10deg] shadow-[0_0_40px_-10px_rgba(255,100,0,0.5)] hover:shadow-[0_0_60px_-10px_rgba(255,100,0,0.7)] transition-all">
              <span className="skew-x-[10deg]">{t.cta.button}</span>
            </Button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-background border-t border-white/10 py-16 text-sm">
        <div className="container grid md:grid-cols-4 gap-12">
          <div className="space-y-4">
            <div className="flex items-center gap-2">
              <div className="h-6 w-6 bg-primary flex items-center justify-center skew-x-[-10deg]">
                <span className="text-primary-foreground font-bold font-display skew-x-[10deg] text-xs">TT</span>
              </div>
              <span className="text-xl font-bold font-display tracking-wider uppercase">
                Techstep <span className="text-primary">Transport</span>
              </span>
            </div>
            <p className="text-muted-foreground">
              {t.footer.tagline}
            </p>
          </div>
          
          <div>
            <h3 className="font-bold font-display uppercase mb-4 text-foreground">{t.footer.company}</h3>
            <ul className="space-y-2 text-muted-foreground">
              <li><a href="#" className="hover:text-primary transition-colors">{t.footer.items.about}</a></li>
              <li><a href="#" className="hover:text-primary transition-colors">{t.footer.items.careers}</a></li>
              <li><a href="#" className="hover:text-primary transition-colors">{t.footer.items.news}</a></li>
            </ul>
          </div>

          <div>
            <h3 className="font-bold font-display uppercase mb-4 text-foreground">{t.footer.services}</h3>
            <ul className="space-y-2 text-muted-foreground">
              <li><a href="#" className="hover:text-primary transition-colors">{t.footer.items.storage}</a></li>
              <li><a href="#" className="hover:text-primary transition-colors">{t.footer.items.logistics}</a></li>
              <li><a href="#" className="hover:text-primary transition-colors">{t.footer.items.consulting}</a></li>
            </ul>
          </div>

          <div>
            <h3 className="font-bold font-display uppercase mb-4 text-foreground">{t.footer.contact}</h3>
            <ul className="space-y-2 text-muted-foreground">
              <li>ul. Magazynowa 4B</li>
              <li>00-999 Warszawa</li>
              <li>kontakt@techtrans.pl</li>
              <li>+48 22 123 45 67</li>
            </ul>
          </div>
        </div>
        <div className="container mt-16 pt-8 border-t border-white/5 text-center text-muted-foreground/50 text-xs">
          {t.footer.rights}
        </div>
      </footer>
    </div>
  );
}
