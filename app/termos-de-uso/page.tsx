import type { Metadata } from "next";

const LAST_UPDATED = "30 de setembro de 2025";

export const metadata: Metadata = {
  title: "Termos de Uso | ASGF",
  description: "Conheça as condições para utilização do site e serviços da ASGF.",
};

export default function TermosDeUso() {
  return (
    <main className="mx-auto max-w-3xl px-4 py-16 md:py-20 space-y-8 text-foreground">
      <header className="space-y-2">
        <p className="text-sm font-medium tracking-[0.1em] uppercase text-[var(--primary)]">
          Termos de Uso
        </p>
        <h1 className="text-3xl md:text-4xl font-semibold tracking-tight">
          ASGF Gestão Financeira
        </h1>
        <p className="text-sm text-foreground/70">Última atualização: {LAST_UPDATED}</p>
      </header>

      <section className="space-y-4 text-sm md:text-base leading-relaxed">
        <p>
          Este documento descreve as regras de uso do site <strong>asgf.com.br</strong> e de quaisquer
          outras plataformas operadas pela ASGF Gestão Financeira Ltda. (“nós”). Ao navegar neste
          website, consideramos que você está de acordo com os Termos de Uso descritos abaixo. Caso
          não concorde com as condições, pedimos que interrompa imediatamente o uso do site.
        </p>
        <p>
          Em caso de alterações significativas, publicaremos um novo texto com data revisada. O uso do
          site após mudanças significa que você aceitou os Termos revisados. Se não concordar, encerre
          o acesso.
        </p>
      </section>

      <section className="space-y-3 text-sm md:text-base leading-relaxed">
        <h2 className="text-xl font-semibold tracking-tight">1. Usuário</h2>
        <p>
          A utilização deste website atribui automaticamente a condição de usuário e implica a plena
          aceitação de todas as diretrizes e condições aqui estabelecidas.
        </p>
      </section>

      <section className="space-y-3 text-sm md:text-base leading-relaxed">
        <h2 className="text-xl font-semibold tracking-tight">
          2. Adesão em conjunto com a Política de Privacidade
        </h2>
        <p>
          O uso deste website implica adesão aos presentes Termos de Uso e à versão mais atualizada da
          Política de Privacidade da ASGF.
        </p>
      </section>

      <section className="space-y-3 text-sm md:text-base leading-relaxed">
        <h2 className="text-xl font-semibold tracking-tight">3. Condições de acesso</h2>
        <p>
          O acesso ao site possui caráter gratuito e não exige inscrição prévia. Algumas
          funcionalidades poderão demandar cadastro com login e senha. É responsabilidade do usuário
          fornecer informações corretas e não compartilhar suas credenciais com terceiros.
        </p>
        <p>
          Partes deste site permitem publicar comentários. Não são permitidos conteúdos ilícitos,
          ofensivos, discriminatórios ou que infrinjam direitos de terceiros. Ao publicar quaisquer
          conteúdos, você concede licença não exclusiva e irrevogável para uso pela ASGF em seus
          canais digitais.
        </p>
      </section>

      <section className="space-y-3 text-sm md:text-base leading-relaxed">
        <h2 className="text-xl font-semibold tracking-tight">4. Cookies</h2>
        <p>
          O site pode coletar informações por meio de cookies. Eles permitem saber o tipo de navegador
          utilizado, páginas visitadas e preferências de idioma, entre outros dados. Você pode ajustar o
          navegador para bloquear cookies, mas isso pode limitar o funcionamento do site.
        </p>
      </section>

      <section className="space-y-3 text-sm md:text-base leading-relaxed">
        <h2 className="text-xl font-semibold tracking-tight">5. Propriedade intelectual</h2>
        <p>
          Todos os elementos do site da ASGF, incluindo textos, imagens e marcas, são de nossa
          propriedade intelectual ou de nossos licenciantes. O uso do site não concede licença para o
          uso desses direitos sem autorização prévia.
        </p>
      </section>

      <section className="space-y-3 text-sm md:text-base leading-relaxed">
        <h2 className="text-xl font-semibold tracking-tight">6. Links para sites de terceiros</h2>
        <p>
          O site pode conter links para páginas de parceiros e fornecedores. Cada site possui sua
          própria política de privacidade e termos de uso, pelos quais não nos responsabilizamos. Ao
          acessar esses links, recomendamos que você leia as políticas correspondentes antes de fornecer
          dados pessoais.
        </p>
      </section>

      <section className="space-y-3 text-sm md:text-base leading-relaxed">
        <h2 className="text-xl font-semibold tracking-tight">7. Prazos e alterações</h2>
        <p>
          Este website opera por prazo indeterminado. Podemos modificá-lo, suspendê-lo ou encerrá-lo a
          qualquer momento, sem aviso prévio.
        </p>
      </section>

      <section className="space-y-3 text-sm md:text-base leading-relaxed">
        <h2 className="text-xl font-semibold tracking-tight">8. Dados pessoais</h2>
        <p>
          Durante o uso do site, alguns dados pessoais poderão ser coletados e tratados. As regras
          aplicáveis estão descritas em nossa Política de Privacidade.
        </p>
      </section>

      <section className="space-y-3 text-sm md:text-base leading-relaxed">
        <h2 className="text-xl font-semibold tracking-tight">9. Contato</h2>
        <p>
          Em caso de dúvidas sobre estes Termos, entre em contato pelo e-mail
          <a href="mailto:alexandre.adm@asgf.com.br" className="ml-1 underline">
            alexandre.adm@asgf.com.br
          </a>
          .
        </p>
      </section>
    </main>
  );
}
