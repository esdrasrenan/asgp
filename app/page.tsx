import { Button } from "@/components/ui/button";

export default function Home() {
  return (
    <div className="min-h-dvh bg-background text-foreground">
      <header className="container mx-auto flex items-center justify-between py-6">
        <div className="text-lg font-semibold tracking-tight">asgp</div>
        <nav className="flex items-center gap-4 text-sm text-muted-foreground">
          <a href="#features" className="hover:text-foreground">
            Features
          </a>
          <a href="#cta" className="hover:text-foreground">
            Começar
          </a>
        </nav>
      </header>

      <main className="container mx-auto px-4">
        {/* Hero */}
        <section className="flex flex-col items-center text-center py-20 gap-6">
          <h1 className="text-balance text-4xl md:text-6xl font-semibold tracking-tight">
            Single‑page demo com Next.js 15 + Turbopack
          </h1>
          <p className="text-pretty max-w-2xl text-muted-foreground">
            Estrutura pronta para iniciar seu layout: App Router, Tailwind v4,
            ESLint configurado e shadcn preparado.
          </p>
          <div className="flex flex-wrap items-center gap-3">
            <Button asChild>
              <a href="#cta">Começar agora</a>
            </Button>
            <Button variant="outline" asChild>
              <a href="https://nextjs.org/docs" target="_blank" rel="noreferrer">
                Documentação
              </a>
            </Button>
          </div>
        </section>

        {/* Features */}
        <section id="features" className="grid gap-6 md:grid-cols-3 py-12">
          <Feature title="Turbopack" desc="Dev e build com --turbopack ativados." />
          <Feature title="App Router" desc="RSC, layouts e rotas modernas." />
          <Feature title="shadcn/ui" desc="Componentes prontos para instalar via CLI." />
        </section>

        {/* CTA */}
        <section id="cta" className="rounded-xl border p-8 md:p-10 my-16 text-center">
          <h2 className="text-2xl md:text-3xl font-medium tracking-tight mb-3">
            Pronto para começar o layout?
          </h2>
          <p className="text-muted-foreground mb-6">
            Podemos evoluir este demo em sua identidade visual.
          </p>
          <Button>Fale comigo</Button>
        </section>
      </main>

      <footer className="border-t py-8 text-center text-sm text-muted-foreground">
        <span>Next.js 15 • Tailwind v4 • shadcn</span>
      </footer>
    </div>
  );
}

function Feature({ title, desc }: { title: string; desc: string }) {
  return (
    <div className="rounded-lg border p-6">
      <h3 className="font-medium mb-1">{title}</h3>
      <p className="text-sm text-muted-foreground">{desc}</p>
    </div>
  );
}

