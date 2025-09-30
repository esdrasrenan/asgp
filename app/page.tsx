import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Checkbox } from "@/components/ui/checkbox";
import Image from "next/image";
import { Globe, Mail, MapPin, Phone, Smartphone } from "lucide-react";

export default function Home() {
  const currentYear = new Date().getFullYear();

  return (
    <div className="min-h-dvh bg-background text-foreground">
      {/* Hero with background image + overlay */}
      <section
        className="relative min-h-screen"
        aria-label="Hero"
      >
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage:
              "url(/Referencia/imgi_21_custom-img-001.jpg)",
          }}
        />
        <div className="absolute inset-0 bg-black/40" />

        <div className="relative z-10">
          {/* Top bar */}
          <header className="mx-auto max-w-[1600px] flex items-center justify-between px-4 md:px-8 pt-3 md:pt-4 pb-5 md:pb-6 text-white">
            <a href="#" aria-label="ASGF" className="inline-flex shrink-0 max-w-full">
              <span className="block w-[5rem] sm:w-[7rem] md:w-[9rem]">
                <Image
                  src="/Referencia/ASGF_03.png"
                  alt="Logotipo ASGF"
                  width={1200}
                  height={400}
                  sizes="(min-width: 1280px) 9rem, (min-width: 768px) 7rem, 5rem"
                  className="h-auto w-full"
                  priority
                />
              </span>
            </a>
            <nav className="hidden md:flex items-center gap-8 pr-0 md:pr-0 text-base md:text-lg font-semibold tracking-tight text-white/85">
              {[
                ["Home", "#"],
                ["Serviços", "#servicos"],
                ["Empresa", "#empresa"],
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
            <div className="grid md:grid-cols-2 items-end gap-6 md:gap-12 min-h-[70svh] md:min-h-[75svh] pb-12 md:pb-16">
              {/* Left title */}
              <div>
                <h1 className="text-white text-[10.5vw] md:text-[5.2vw] leading-[0.98] font-medium tracking-[-0.03em]">
                  <span>BPO Financeiro</span>
                  <br />
                  <span>sem burocracia</span>
                </h1>
              </div>

              {/* Right description + CTA aligned to the right edge */}
              <div className="justify-self-end w-full max-w-[820px] text-left text-white pr-0">
                <div className="mb-8 space-y-1.5 md:space-y-2">
                  <p className="text-[22px] md:text-[26px] lg:text-[28px] leading-[1.15] font-medium text-white">
                    Cuidamos da burocracia para você focar no que realmente importa{" "}
                    <span style={{ color: "var(--primary)" }}>— o crescimento do seu negócio.</span>
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
                Descubra a ASGF
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
              A ASGF ajuda sua empresa a navegar a complexidade financeira com processos
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
              src="/Referencia/imgi_22_custom-img-002.jpg"
              alt="Equipe ASGF apoiando empresas com BPO financeiro"
              width={1200}
              height={900}
              className="h-full w-full object-cover"
              priority
            />
            {/* Overlay em degradê: mais escuro embaixo, suave no topo */}
            <div className="absolute inset-0 pointer-events-none bg-gradient-to-t from-black/60 via-black/30 to-transparent" />
            {/* Badge sobre a imagem */}
            <div className="absolute inset-x-6 md:inset-x-8 bottom-6 md:bottom-8">
              <p className="text-white text-2xl md:text-3xl font-medium leading-tight md:leading-snug">
                Somos profissionais movidos por{"\u00a0"}
                <span className="inline-flex items-center rounded-full bg-[var(--primary)] px-4 py-2 text-white text-2xl md:text-3xl font-semibold md:ml-2">
                  grandes ideias
                </span>
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

      {/* Seção: Depoimento/Impacto */}
      <section className="bg-background">
        <div className="mx-auto max-w-[1600px] px-4 md:px-8 py-20 md:py-28">
          <div className="grid md:grid-cols-2 gap-10 md:gap-16 items-center rounded-2xl overflow-hidden border bg-[var(--primary)]">
            {/* Bloco de texto à esquerda */}
            <div className="p-8 md:p-14">
              <Image
                src="/Referencia/imgi_10_testimonials-logo-001.png"
                alt="Logo do cliente"
                width={160}
                height={40}
                className="h-7 md:h-8 w-auto object-contain opacity-95"
              />
              <h3 className="mt-8 text-2xl md:text-3xl lg:text-4xl leading-[1.15] font-medium tracking-tight text-white max-w-[24ch]">
                A ASGF transformou nossa estratégia financeira, trazendo crescimento e
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
                  src="/Referencia/imgi_11_custom-img-050.png"
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
              src="/Referencia/imgi_28_custom-img-051.jpg"
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
                    <Textarea 
                      id="mensagem" 
                      name="mensagem" 
                      placeholder="Mensagem" 
                      rows={4} 
                      maxLength={500}
                      className="resize-none"
                    />
                    <p className="mt-1 text-xs text-foreground/60">Máximo 500 caracteres</p>
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


      {/* Footer */}
      <footer className="bg-[#f3f7fb] text-foreground">
        <div className="border-b border-border/60">
          <div className="mx-auto max-w-[1600px] px-4 md:px-8 py-16 md:py-20">
            <div className="grid gap-8 md:grid-cols-[minmax(0,1.05fr)_minmax(0,0.95fr)] items-center">
              <div className="space-y-5">
                <span className="text-xs md:text-sm font-medium tracking-[0.08em] uppercase text-[var(--primary)]">Pronto para avançar?</span>
                <h2 className="text-3xl md:text-4xl lg:text-5xl font-semibold tracking-tight text-foreground max-w-[28ch]">
                  Simplifique sua rotina financeira com a ASGF
                </h2>
                <p className="text-foreground/80 max-w-[60ch]">
                  Estruturamos o seu BPO financeiro do planejamento ao acompanhamento diário para que você tome decisões com confiança e foco em crescimento.
                </p>
                <div className="h-2" aria-hidden />
              </div>
              <div className="relative h-[260px] sm:h-[320px] md:h-[360px] lg:h-[420px] overflow-hidden rounded-3xl border border-border/60 bg-white">
                <Image
                  src="/Referencia/imgi_27_custom-img-007.jpg"
                  alt="Especialistas financeiros analisando relatórios"
                  fill
                  sizes="(min-width: 1024px) 32rem, (min-width: 768px) 50vw, 100vw"
                  className="object-cover"
                />
                <div className="absolute inset-0 pointer-events-none bg-gradient-to-tr from-black/25 via-black/10 to-transparent" />
              </div>
            </div>
          </div>
        </div>

        <div className="mx-auto max-w-[1600px] px-4 md:px-8 py-12 md:py-16">
          <div className="grid gap-12 lg:grid-cols-[minmax(0,1.2fr)_minmax(0,1.1fr)_minmax(0,0.9fr)]">
            <div className="space-y-6 max-w-[600px]">
              <a href="#" aria-label="ASGF" className="inline-flex max-w-full">
                <span className="block w-[5rem] md:w-[7rem]">
                  <Image
                    src="/Referencia/ASGF_01.png"
                    alt="Logotipo ASGF"
                    width={1200}
                    height={400}
                    sizes="(min-width: 768px) 7rem, 5rem"
                    className="h-auto w-full"
                  />
                </span>
              </a>
              <div className="text-sm text-foreground/75 max-w-[52ch] space-y-4">
                <p>
                  Especialistas em terceirização financeira (BPO), unimos tecnologia, precisão e cuidado humano para apoiar empresas em cada fase do crescimento.
                </p>
              </div>
            </div>
            <div className="grid sm:grid-cols-2 gap-x-10 gap-y-6 lg:self-start">
              {[
                {
                  icon: Mail,
                  label: "E-mail",
                  value: (
                    <a href="mailto:alexandre.adm@asgf.com.br" className="hover:text-foreground">
                      alexandre.adm@asgf.com.br
                    </a>
                  ),
                },
                {
                  icon: Phone,
                  label: "Telefone",
                  value: (
                    <a href="tel:+551141735366" className="hover:text-foreground">
                      (11) 4173-5366
                    </a>
                  ),
                },
                {
                  icon: Smartphone,
                  label: "Celular",
                  value: (
                    <a href="tel:+5511959611178" className="hover:text-foreground">
                      (11) 95961-1178
                    </a>
                  ),
                },
                {
                  icon: MapPin,
                  label: "Endereço",
                  value: (
                    <span>
                      Alameda Terracota, 185 - Sala 1213
                      <br />
                      Cerâmica - São Caetano do Sul/SP - CEP 09531-190
                    </span>
                  ),
                },
                {
                  icon: Globe,
                  label: "Site",
                  value: (
                    <a href="https://asgf.com.br" className="hover:text-foreground" target="_blank" rel="noreferrer">
                      asgf.com.br
                    </a>
                  ),
                },
              ].map(({ icon: Icon, label, value }) => (
                <div key={label} className="flex items-start gap-3 text-sm text-foreground/80">
                  <span className="inline-flex h-9 w-9 items-center justify-center rounded-full bg-[var(--primary)]/12 text-[var(--primary)]">
                    <Icon className="h-4 w-4" aria-hidden />
                  </span>
                  <div>
                    <span className="font-semibold text-foreground">{label}</span>
                    <div className="mt-0.5">{value}</div>
                  </div>
                </div>
              ))}
            </div>
            <div className="space-y-5 lg:self-start lg:pt-10">
              <h4 className="text-base font-semibold text-foreground">Fale com a ASGF</h4>
              <p className="text-sm text-foreground/70 max-w-[50ch]">
                Entre em contato para entender como nosso time especializado pode simplificar sua rotina financeira e apoiar o crescimento do seu negócio.
              </p>
              <div className="space-y-3 text-sm text-foreground/70">
                <Button asChild className="h-11 px-6 rounded-full bg-[var(--primary)] text-white hover:bg-[var(--primary)]/90">
                  <a href="#contato">Fale conosco</a>
                </Button>
              </div>
            </div>
          </div>

          <div className="mt-12 pt-8 border-t border-border/60 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between text-xs sm:text-sm text-foreground/60">
            <p>© {currentYear} ASGF. Todos os direitos reservados.</p>
            <div className="flex flex-wrap gap-x-6 gap-y-2">
              <a href="/politica-de-privacidade" className="hover:text-foreground">
                Política de privacidade
              </a>
              <a href="/termos-de-uso" className="hover:text-foreground">
                Termos de uso
              </a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}

