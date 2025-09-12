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
          <header className="mx-auto max-w-[1600px] flex items-center justify-between px-4 md:px-8 py-6 text-white">
            <div className="text-2xl md:text-3xl font-semibold tracking-tight">asgp</div>
            <nav className="hidden md:flex items-center gap-8 pr-0 md:pr-0 text-base md:text-lg font-semibold tracking-tight text-white/85">
              {[
                ["Home", "#"],
                ["Serviços", "#servicos"],
                ["Empresa", "#empresa"],
                ["Equipe", "#equipe"],
                ["Contato", "#contato"],
              ].map(([label, href]) => (
                <a key={label} href={href} className="hover:text-white">
                  {label}
                </a>
              ))}
            </nav>
          </header>

          {/* Two-column layout: left title, right description + CTA */}
          <div className="mx-auto max-w-[1600px] px-4 md:px-8">
            <div className="grid md:grid-cols-2 items-end gap-6 md:gap-12 min-h-[80svh] pb-0">
              {/* Left title */}
              <div>
                <h1 className="text-white text-[7.2vw] md:text-[5.6vw] leading-[0.98] font-medium tracking-[-0.03em]">
                  <span>BPO Financeiro</span>
                  <br />
                  <span>sem burocracia</span>
                </h1>
              </div>

              {/* Right description + CTA aligned to the right edge */}
              <div className="justify-self-end w-full max-w-[820px] text-left text-white pr-0">
                <div className="mb-8 space-y-1.5 md:space-y-2">
                  <p className="text-[22px] md:text-[26px] lg:text-[28px] leading-[1.15] font-medium text-white">
                    Cuidamos da burocracia para você focar no que realmente importa
                    <span style={{ color: "var(--primary)" }}> — o crescimento do seu negócio.</span>
                  </p>
                </div>
                <Button
                  asChild
                  className="h-12 md:h-14 px-8 md:px-10 text-base md:text-lg rounded-full bg-primary text-primary-foreground hover:bg-primary/90"
                >
                  <a href="#contato">Fale conosco</a>
                </Button>
              </div>
            </div>
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
