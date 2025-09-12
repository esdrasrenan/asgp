import { Button } from "@/components/ui/button";

export default function Home() {
  return (
    <div className="min-h-dvh bg-background text-foreground">
      {/* Hero with background image + overlay */}
      <section
        className="relative min-h-[100svh]"
        aria-label="Hero"
      >
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage:
              "url(/Referência/imgi_21_custom-img-001.jpg)",
          }}
        />
        <div className="absolute inset-0 bg-black/40" />

        <div className="relative z-10">
          {/* Top bar */}
          <header className="container mx-auto flex items-center justify-between px-6 md:px-12 py-6 text-white">
            <div className="text-2xl md:text-3xl font-semibold tracking-tight">elementra.</div>
            <nav className="hidden md:flex items-center gap-8 pr-24 md:pr-40 text-base md:text-lg font-semibold tracking-tight text-white/85">
              {[
                ["Home", "#"],
                ["About", "#"],
                ["Services", "#"],
                ["Our Team", "#"],
                ["Contact", "#"],
              ].map(([label, href]) => (
                <a key={label} href={href} className="hover:text-white">
                  {label}
                </a>
              ))}
            </nav>
          </header>

          {/* Right aligned block */}
          <div className="container mx-auto px-5 md:px-10">
            <div className="min-h-[60svh] md:min-h-[68svh] flex items-center">
              <div className="ml-auto max-w-[720px] text-left text-white pr-2 md:pr-6 lg:pr-10 xl:pr-16 mt-10 md:mt-12">
                <div className="mb-8 space-y-1.5 md:space-y-2">
                  <p className="text-[22px] md:text-[26px] lg:text-[28px] leading-[1.15] font-medium text-white">
                    Transform your financial strategy with our expert consulting team.
                  </p>
                  <p className="text-[22px] md:text-[26px] lg:text-[28px] leading-[1.15] font-medium text-[#CEF5A4]">
                    We craft solutions tailored to your business.
                  </p>
                </div>
                <Button
                  asChild
                  className="h-12 md:h-14 px-8 md:px-10 text-base md:text-lg rounded-full bg-primary text-primary-foreground hover:bg-primary/90"
                >
                  <a href="#contact">Contact Us</a>
                </Button>
              </div>
            </div>
          </div>

          {/* Big heading near bottom */}
          <div className="container mx-auto px-4 md:px-8 pb-12 md:pb-16">
            <h1 className="text-white text-[10vw] leading-[0.88] md:text-[7.4vw] font-medium tracking-[-0.03em]">
              <span>Transform your.</span>
              <br />
              <span>vision today!</span>
            </h1>
          </div>
        </div>
      </section>

      {/* Placeholder next content so page isn’t empty after hero */}
      <main className="container mx-auto px-5 md:px-10 py-16" id="contact">
        <p className="text-muted-foreground">
          Seções seguintes virão na próxima etapa. Deixe os textos como estão e
          as imagens podem ser placeholders — vamos replicando seção por seção.
        </p>
      </main>
    </div>
  );
}
