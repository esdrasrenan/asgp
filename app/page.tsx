import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Checkbox } from "@/components/ui/checkbox";
import Image from "next/image";

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
          <header className="mx-auto max-w-[1600px] flex items-center justify-between px-4 md:px-8 py-7 md:py-8 mt-1 text-white">
            <a
              href="#"
              aria-label="ASGP"
              className="inline-block shrink-0 h-10 w-36 md:h-12 md:w-48 bg-white [mask-image:url('/asgp_logo.svg')] [mask-size:contain] [mask-repeat:no-repeat] [mask-position:left_center] transform origin-left scale-[2.1] md:scale-[2.7]"
            />
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
                <h1 className="text-white text-[9.2vw] md:text-[5.2vw] leading-[0.98] font-medium tracking-[-0.03em]">
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

      {/* Seção: Cards de serviços/novidades */}
      <section id="servicos" className="bg-background">
        <div className="mx-auto max-w-[1600px] px-4 md:px-8 py-20 md:py-28">
          {/* Título em duas colunas: label à esquerda, heading à direita */}
          <div className="grid md:grid-cols-2 items-end mb-12 md:mb-16">
            <div>
              <span className="text-xs md:text-sm font-medium tracking-[0.08em] uppercase text-[var(--primary)]">
                Descubra a ASGP
              </span>
            </div>
            <div className="md:justify-self-end md:text-right">
              <h2 className="text-3xl md:text-5xl font-medium tracking-tight text-foreground/95 md:text-right leading-[1.05]">
                <span className="block md:inline">Soluções financeiras</span>
                <br className="hidden md:block" />
                <span className="block md:inline">completas para sua empresa</span>
              </h2>
            </div>
          </div>

          {/* Grid de 3 cards */}
          <div className="grid gap-6 md:gap-8 md:grid-cols-3">
            {/* Card 1 */}
            <div className="rounded-xl border bg-[#eef6ff] p-8 md:p-10 min-h-[26rem] md:min-h-[30rem] flex flex-col">
              <p className="text-sm text-foreground/70">Gestão financeira especializada</p>
              <h3 className="mt-16 md:mt-24 text-3xl font-medium tracking-tight text-foreground">
                Gestão financeira
                <br />
                especializada
              </h3>
              <div className="my-6 h-px bg-foreground/15" />
              <p className="text-foreground/70">
                Cuidamos de todas as rotinas financeiras do seu negócio, garantindo
                pagamentos em dia, controle de recebimentos e fluxo de caixa organizado.
              </p>
            </div>

            {/* Card 2 */}
            <div className="rounded-xl border bg-[#d9ecff] p-8 md:p-10 min-h-[26rem] md:min-h-[30rem] flex flex-col">
              <p className="text-sm text-foreground/70">Processos eficientes e seguros</p>
              <h3 className="mt-16 md:mt-24 text-3xl font-medium tracking-tight text-foreground">
                Processos eficientes
                <br />
                e seguros
              </h3>
              <div className="my-6 h-px bg-foreground/15" />
              <p className="text-foreground/70">
                Aplicamos as melhores práticas do mercado com conciliação bancária diária,
                automação de processos e controle rigoroso das informações.
              </p>
            </div>

            {/* Card 3 */}
            <div className="rounded-xl border bg-[#0a0f14] p-8 md:p-10 text-white min-h-[26rem] md:min-h-[30rem] flex flex-col">
              <p className="text-sm text-white/80">Relatórios que impulsionam decisões</p>
              <h3 className="mt-16 md:mt-24 text-3xl font-medium tracking-tight">
                Relatórios que
                <br />
                impulsionam decisões
              </h3>
              <div className="my-6 h-px bg-white/15" />
              <p className="text-white/80">
                Fornecemos relatórios gerenciais e indicadores estratégicos que oferecem
                uma visão clara da saúde financeira da sua empresa.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Seção: Crescimento estratégico (texto + imagem com badge) */}
      <section id="empresa" className="bg-background">
        <div className="mx-auto max-w-[1600px] px-4 md:px-8 py-20 md:py-28 grid md:grid-cols-2 gap-10 md:gap-16 items-center">
          {/* Texto à esquerda */}
          <div>
            <span className="text-xs md:text-sm font-medium tracking-[0.08em] uppercase text-[var(--primary)]">
              Crescimento estratégico
            </span>
            <h2 className="mt-4 text-4xl md:text-6xl leading-[1.05] font-medium tracking-tight text-foreground/95 max-w-[28ch]">
              Impulsione o crescimento com soluções financeiras inovadoras
            </h2>
            <p className="mt-6 text-foreground/70 max-w-[65ch] md:max-w-[72ch]">
              A ASGP ajuda sua empresa a navegar a complexidade financeira com processos
              eficientes, previsibilidade de caixa e informações que viram ação.
            </p>

            <ul className="mt-8 space-y-4">
              {[
                "Estratégias financeiras sob medida para resultados.",
                "Foco em colaboração e excelência no atendimento.",
                "Soluções inovadoras que fortalecem o seu negócio.",
              ].map((item) => (
                <li key={item} className="flex items-start gap-3 text-foreground">
                  <span className="mt-0.5 inline-flex h-5 w-5 items-center justify-center rounded-full bg-[var(--primary)]">
                    <svg viewBox="0 0 16 16" className="h-3.5 w-3.5 text-white" fill="currentColor">
                      <path d="M6.173 12.727L2.1 8.654l1.415-1.415 2.657 2.657 6.313-6.313 1.415 1.414z" />
                    </svg>
                  </span>
                  <span className="text-[15px] md:text-base text-foreground/90 font-medium">{item}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Imagem à direita com badge */}
          <div className="relative rounded-xl overflow-hidden border">
            <Image
              src="/Referência/imgi_22_custom-img-002.jpg"
              alt="Equipe ASGP apoiando empresas com BPO financeiro"
              width={1200}
              height={900}
              className="h-full w-full object-cover"
              priority
            />
            {/* Overlay em degradê: mais escuro embaixo, suave no topo */}
            <div className="absolute inset-0 pointer-events-none bg-gradient-to-t from-black/60 via-black/30 to-transparent" />
            {/* Badge sobre a imagem */}
            <div className="absolute inset-x-6 md:inset-x-8 bottom-6 md:bottom-8">
              <p className="text-white text-2xl md:text-3xl font-medium">
                Somos
                <span className="mx-2 inline-flex items-center rounded-full bg-[var(--primary)] px-4 py-1.5 text-white text-2xl md:text-3xl font-semibold">
                  120+ profissionais
                </span>
                movidos por grandes ideias
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Seção: Pilares com numeração 01/02/03 */}
      <section className="bg-background">
        <div className="mx-auto max-w-[1600px] px-4 md:px-8 py-20 md:py-28">
          <div className="grid md:grid-cols-3 gap-12 md:gap-16">
            {/* Item 01 */}
            <div>
              <div className="text-2xl md:text-3xl font-medium tracking-tight text-foreground/60">01</div>
              <div className="mt-4 h-px w-full bg-foreground/15" />
              <h3 className="mt-6 text-2xl md:text-3xl font-medium tracking-tight text-foreground">Gestão financeira confiável</h3>
              <p className="mt-3 text-foreground/70 max-w-[52ch]">
                Simplificamos sua rotina financeira com lançamentos precisos, conciliação
                diária e relatórios que oferecem uma visão clara da saúde do seu negócio.
              </p>
            </div>

            {/* Item 02 */}
            <div>
              <div className="text-2xl md:text-3xl font-medium tracking-tight text-foreground/60">02</div>
              <div className="mt-4 h-px w-full bg-foreground/15" />
              <h3 className="mt-6 text-2xl md:text-3xl font-medium tracking-tight text-foreground">Processos organizados e seguros</h3>
              <p className="mt-3 text-foreground/70 max-w-[52ch]">
                Garantimos o controle de todas as obrigações financeiras da sua empresa,
                com fluxo de caixa previsível e processos alinhados às melhores práticas do mercado.
              </p>
            </div>

            {/* Item 03 */}
            <div>
              <div className="text-2xl md:text-3xl font-medium tracking-tight text-foreground/60">03</div>
              <div className="mt-4 h-px w-full bg-foreground/15" />
              <h3 className="mt-6 text-2xl md:text-3xl font-medium tracking-tight text-foreground">Planejamento estratégico contínuo</h3>
              <p className="mt-3 text-foreground/70 max-w-[52ch]">
                Transformamos dados financeiros em informações estratégicas para apoiar suas
                decisões e impulsionar o crescimento da sua empresa.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Seção: Clientes (logos) */}
      <section className="bg-background">
        <div className="mx-auto max-w-[1600px] px-4 md:px-8 py-14 md:py-20">
          <div className="grid grid-cols-1 md:grid-cols-6 items-center gap-10 md:gap-14">
            <p className="md:col-span-1 text-xl md:text-2xl font-medium tracking-tight text-foreground/90">
              <span>Alguns dos</span>
              <span className="md:hidden"> </span>
              <br className="hidden md:block" />
              <span>nossos clientes</span>
            </p>

            <div className="md:col-span-5 flex flex-wrap justify-center items-center gap-12 md:gap-16">
              <div className="group w-1/2 sm:w-1/3 lg:w-1/5 flex justify-center">
                <Image
                  src="/Referência/imgi_2_client-001.png"
                  alt="Bellway"
                  width={220}
                  height={64}
                  className="h-10 md:h-14 w-auto object-contain opacity-80 transition duration-200 filter [filter:grayscale(1)_sepia(1)_hue-rotate(190deg)_saturate(2)_brightness(0.95)] group-hover:[filter:none] group-hover:opacity-100"
                />
              </div>
              <div className="group w-1/2 sm:w-1/3 lg:w-1/5 flex justify-center">
                <Image
                  src="/Referência/imgi_3_client-002.png"
                  alt="GitHub"
                  width={180}
                  height={64}
                  className="h-12 md:h-14 w-auto object-contain opacity-80 transition duration-200 filter [filter:grayscale(1)_sepia(1)_hue-rotate(190deg)_saturate(2)_brightness(0.95)] group-hover:[filter:none] group-hover:opacity-100"
                />
              </div>
              <div className="group w-1/2 sm:w-1/3 lg:w-1/5 flex justify-center">
                <Image
                  src="/Referência/imgi_4_client-003.png"
                  alt="Payoneer"
                  width={220}
                  height={64}
                  className="h-10 md:h-14 w-auto object-contain opacity-80 transition duration-200 filter [filter:grayscale(1)_sepia(1)_hue-rotate(190deg)_saturate(2)_brightness(0.95)] group-hover:[filter:none] group-hover:opacity-100"
                />
              </div>
              <div className="group w-1/2 sm:w-1/3 lg:w-1/5 flex justify-center">
                <Image
                  src="/Referência/imgi_5_client-004.png"
                  alt="JLL"
                  width={200}
                  height={64}
                  className="h-10 md:h-14 w-auto object-contain opacity-80 transition duration-200 filter [filter:grayscale(1)_sepia(1)_hue-rotate(190deg)_saturate(2)_brightness(0.95)] group-hover:[filter:none] group-hover:opacity-100"
                />
              </div>
              <div className="group w-1/2 sm:w-1/3 lg:w-1/5 flex justify-center">
                <Image
                  src="/Referência/imgi_6_client-005.png"
                  alt="Logo cliente"
                  width={180}
                  height={64}
                  className="h-12 md:h-14 w-auto object-contain opacity-80 transition duration-200 filter [filter:grayscale(1)_sepia(1)_hue-rotate(190deg)_saturate(2)_brightness(0.95)] group-hover:[filter:none] group-hover:opacity-100"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Seção: Depoimento/Impacto */}
      <section className="bg-background">
        <div className="mx-auto max-w-[1600px] px-4 md:px-8 py-20 md:py-28">
          <div className="grid md:grid-cols-2 gap-10 md:gap-16 items-center rounded-2xl overflow-hidden border bg-[var(--primary)]">
            {/* Bloco de texto à esquerda */}
            <div className="p-8 md:p-14">
              <Image
                src="/Referência/imgi_10_testimonials-logo-001.png"
                alt="Logo do cliente"
                width={160}
                height={40}
                className="h-7 md:h-8 w-auto object-contain opacity-95"
              />
              <h3 className="mt-8 text-2xl md:text-3xl lg:text-4xl leading-[1.15] font-medium tracking-tight text-white max-w-[24ch]">
                A ASGP transformou nossa estratégia financeira, trazendo crescimento e
                ganhos de eficiência significativos. A expertise da equipe é
                incomparável.
              </h3>
              <div className="mt-8 text-white/80">
                <p className="font-semibold">Carlos Menezes</p>
                <p className="text-sm">Diretor Administrativo</p>
              </div>
            </div>

            {/* Imagem à direita */}
            <div className="p-6 md:p-10 lg:p-14">
              <div className="relative h-[280px] md:h-[500px] lg:h-[560px] rounded-xl overflow-hidden p-2 md:p-4">
                <Image
                  src="/Referência/imgi_11_custom-img-050.png"
                  alt="Ilustração percentual colorida"
                  fill
                  sizes="(min-width: 1024px) 38rem, (min-width: 768px) 50vw, 100vw"
                  className="object-contain"
                  priority
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Seção: CTA com formulário sobre imagem de fundo */}
      <section id="contato" className="relative bg-background">
        <div className="relative min-h-[80svh] md:min-h-[90svh]">
          {/* Imagem de fundo */}
          <div className="absolute inset-0">
            <Image
              src="/Referência/imgi_28_custom-img-051.jpg"
              alt="Equipe em reunião ao fundo"
              fill
              sizes="100vw"
              className="object-cover"
              priority
            />
            <div className="absolute inset-0 bg-black/20" />
          </div>

          {/* Conteúdo */}
          <div className="relative z-10 mx-auto max-w-[1600px] px-4 md:px-8 py-16 md:py-24 lg:py-28">
            <div className="grid md:grid-cols-2 gap-6 md:gap-10 lg:gap-16 items-center">
              {/* Espaço vazio à esquerda no desktop para simular layout da referência */}
              <div className="hidden md:block" />

              {/* Card do formulário */}
              <div className="bg-white rounded-2xl shadow-xl p-6 md:p-8 lg:p-10 w-full max-w-[720px] md:justify-self-end">
                <h3 className="text-2xl md:text-3xl font-semibold tracking-tight text-foreground">Tem alguma dúvida?</h3>
                <p className="mt-1 text-foreground/70">Fale com a gente!</p>

                <form className="mt-6 space-y-4">
                  <div>
                    <label className="sr-only" htmlFor="nome">Nome</label>
                    <Input id="nome" name="nome" type="text" placeholder="Nome" />
                  </div>
                  <div>
                    <label className="sr-only" htmlFor="email">Email</label>
                    <Input id="email" name="email" type="email" placeholder="Email" />
                  </div>
                  <div>
                    <label className="sr-only" htmlFor="assunto">Assunto</label>
                    <Input id="assunto" name="assunto" type="text" placeholder="Assunto" />
                  </div>
                  <div>
                    <label className="sr-only" htmlFor="mensagem">Mensagem</label>
                    <Textarea id="mensagem" name="mensagem" placeholder="Mensagem" rows={4} />
                  </div>
                  <div className="flex items-start gap-3 text-sm text-foreground/70">
                    <Checkbox id="consent" className="mt-1" />
                    <label htmlFor="consent" className="leading-6">Autorizo o uso dos meus dados para contato.</label>
                  </div>
                  <div className="pt-2">
                    <Button className="w-full h-12 rounded-lg">Enviar mensagem</Button>
                  </div>
                </form>
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
