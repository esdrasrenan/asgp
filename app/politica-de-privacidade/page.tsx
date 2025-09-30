import type { Metadata } from "next";

const LAST_UPDATED = "30 de setembro de 2025";

export const metadata: Metadata = {
  title: "Política de Privacidade | ASGF",
  description: "Entenda como a ASGF trata e protege os seus dados pessoais.",
};

export default function PoliticaDePrivacidade() {
  return (
    <main className="mx-auto max-w-3xl px-4 py-16 md:py-20 space-y-8 text-foreground">
      <header className="space-y-2">
        <p className="text-sm font-medium tracking-[0.1em] uppercase text-[var(--primary)]">
          Política de Privacidade
        </p>
        <h1 className="text-3xl md:text-4xl font-semibold tracking-tight">
          ASGF Gestão Financeira
        </h1>
        <p className="text-sm text-foreground/70">Última atualização: {LAST_UPDATED}</p>
      </header>

      <section className="space-y-4 text-sm md:text-base leading-relaxed">
        <p>
          ASGF Gestão Financeira Ltda., pessoa jurídica de direito privado, com sede na Alameda
          Terracota, 185, Sala 1213, Cerâmica, São Caetano do Sul/SP, CEP 09531-190, inscrita no CNPJ
          sob o nº 59.957.415/0001-09 (“nós”), leva sua privacidade a sério e zela pela segurança e
          proteção dos dados de todos os seus clientes, fornecedores e usuários (“você”) do site
          <strong> asgf.com.br</strong> e das demais plataformas digitais operadas por nós.
        </p>
        <p>
          Esta Política de Privacidade explica como utilizamos e divulgamos informações coletadas
          durante suas visitas ao nosso site e em comunicações que trocamos com você (“comunicações”).
        </p>
        <p>
          Ao acessar o site, enviar comunicações ou fornecer qualquer tipo de dado pessoal, você
          declara estar ciente e de acordo com esta Política, que descreve as finalidades e formas de
          tratamento dos dados pessoais que você disponibilizar.
        </p>
        <p>
          Caso tenha dúvidas, entre em contato pelo e-mail
          <a href="mailto:alexandre.adm@asgf.com.br" className="ml-1 underline">
            alexandre.adm@asgf.com.br
          </a>
          .
        </p>
        <p>
          Esta Política não se aplica a aplicativos, produtos, serviços, sites ou recursos de mídia
          social de terceiros que possam ser oferecidos ou acessados através do nosso site. Recomendamos
          revisar as políticas de privacidade de cada serviço antes de fornecer seus dados pessoais.
        </p>
      </section>

      <section className="space-y-3 text-sm md:text-base leading-relaxed">
        <h2 className="text-xl font-semibold tracking-tight">Definições</h2>
        <ul className="space-y-2 list-disc pl-6">
          <li>
            <strong>Dados pessoais</strong>: informações que identifiquem ou possam identificar uma
            pessoa natural, como nome, CPF, endereço IP, entre outros.
          </li>
          <li>
            <strong>Dados pessoais sensíveis</strong>: informações sobre origem racial ou étnica,
            convicção religiosa, opinião política, filiação a sindicato ou organização de caráter
            religioso, filosófico ou político, dado referente à saúde ou à vida sexual, dado genético
            ou biométrico.
          </li>
          <li>
            <strong>Tratamento</strong>: qualquer operação realizada com dados pessoais, como coleta,
            classificação, armazenamento, uso, compartilhamento ou eliminação.
          </li>
          <li>
            <strong>Leis de proteção de dados</strong>: legislação aplicável ao tratamento de dados
            pessoais, incluindo a Lei nº 13.709/18 (LGPD).
          </li>
        </ul>
      </section>

      <section className="space-y-3 text-sm md:text-base leading-relaxed">
        <h2 className="text-xl font-semibold tracking-tight">Uso de dados pessoais</h2>
        <p>Utilizamos dados pessoais para:</p>
        <ul className="space-y-2 list-disc pl-6">
          <li>viabilizar o envio de informações e serviços solicitados;</li>
          <li>confirmar ou corrigir dados cadastrais;</li>
          <li>enviar comunicações comerciais e institucionais de seu interesse;</li>
          <li>personalizar sua experiência de navegação;</li>
          <li>entrar em contato utilizando os canais informados por você.</li>
        </ul>
        <p>
          Também podemos tratar dados para cumprir obrigações legais, responder a autoridades
          competentes, proteger nossos direitos, prevenir fraudes e garantir a continuidade das nossas
          operações.
        </p>
      </section>

      <section className="space-y-3 text-sm md:text-base leading-relaxed">
        <h2 className="text-xl font-semibold tracking-tight">Não fornecimento de dados</h2>
        <p>
          Você não é obrigado a fornecer os dados solicitados, porém algumas funcionalidades do site
          podem ficar indisponíveis caso opte por não compartilhá-los.
        </p>
      </section>

      <section className="space-y-3 text-sm md:text-base leading-relaxed">
        <h2 className="text-xl font-semibold tracking-tight">Dados coletados</h2>
        <p>
          A navegação pública pode ser realizada sem cadastro, mas determinadas funcionalidades podem
          exigir o envio de dados pessoais para identificação, contato ou envio de propostas.
        </p>
      </section>

      <section className="space-y-3 text-sm md:text-base leading-relaxed">
        <h2 className="text-xl font-semibold tracking-tight">Compartilhamento com terceiros</h2>
        <p>Podemos compartilhar dados pessoais:</p>
        <ul className="space-y-2 list-disc pl-6">
          <li>com empresas parceiras que auxiliem na prestação dos nossos serviços;</li>
          <li>com provedores que gerenciam aspectos operacionais do site em nosso nome; e</li>
          <li>com terceiros em casos de reorganizações societárias, fusões ou operações semelhantes.</li>
        </ul>
        <p>Dados podem ser transferidos internacionalmente sempre em conformidade com a LGPD.</p>
      </section>

      <section className="space-y-3 text-sm md:text-base leading-relaxed">
        <h2 className="text-xl font-semibold tracking-tight">Uso de cookies</h2>
        <p>
          Utilizamos cookies e tecnologias semelhantes para aprimorar sua experiência, proteger o site
          e analisar tráfego. Você pode configurar o navegador para rejeitar cookies, mas isso poderá
          limitar funcionalidades.
        </p>
      </section>

      <section className="space-y-3 text-sm md:text-base leading-relaxed">
        <h2 className="text-xl font-semibold tracking-tight">Direitos do titular</h2>
        <p>
          Você pode solicitar confirmação ou acesso aos dados pessoais tratados, correções,
          anonimização, portabilidade, informações sobre compartilhamentos, revogação de consentimento
          e demais direitos previstos na LGPD. Podemos solicitar comprovação de identidade para garantir
          a segurança do processo.
        </p>
      </section>

      <section className="space-y-3 text-sm md:text-base leading-relaxed">
        <h2 className="text-xl font-semibold tracking-tight">Segurança</h2>
        <p>
          Empregamos medidas técnicas e organizacionais adequadas para proteger dados pessoais. Caso
          identifique qualquer incidente, comunique-nos imediatamente pelo e-mail
          <a href="mailto:alexandre.adm@asgf.com.br" className="ml-1 underline">
            alexandre.adm@asgf.com.br
          </a>
          .
        </p>
      </section>

      <section className="space-y-3 text-sm md:text-base leading-relaxed">
        <h2 className="text-xl font-semibold tracking-tight">Atualizações</h2>
        <p>
          Podemos atualizar esta Política a qualquer momento. Publicaremos a nova versão neste site
          com a data modificada. O uso contínuo do site após alterações significa concordância com os
          novos termos. Caso não concorde, interrompa a navegação imediatamente.
        </p>
      </section>

      <section className="space-y-3 text-sm md:text-base leading-relaxed">
        <h2 className="text-xl font-semibold tracking-tight">Responsável pelo tratamento</h2>
        <p>
          Para exercer seus direitos ou esclarecer dúvidas sobre privacidade, entre em contato com o
          nosso encarregado pelo e-mail
          <a href="mailto:alexandre.adm@asgf.com.br" className="ml-1 underline">
            alexandre.adm@asgf.com.br
          </a>
          .
        </p>
      </section>
    </main>
  );
}
