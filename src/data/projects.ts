export interface ProjectImage {
  src: string
  label: string
}

export interface Project {
  slug: string
  name: string
  icon?: string
  shortDescription: string
  category: string
  url?: string
  description: string
  tags: string[]
  techs: string[]
  challenge: string
  images: ProjectImage[]
}

export const projects: Project[] = [
  {
    slug: "conectavet",
    name: "ConectaVet",
    icon: "🐾",
    shortDescription: "Plataforma de telemedicina veterinária que conecta tutores a veterinários por teleatendimento.",
    category: "Telemedicina",
    url: "https://conectavetbr.com.br",
    description: `ConectaVet é uma plataforma de telemedicina veterinária que aproxima tutores e profissionais de medicina veterinária por meio de teleatendimento.
Os tutores agendam e realizam consultas online com veterinários, enquanto os profissionais gerenciam sua agenda, atendimentos e histórico dos pacientes em um único ambiente. Os pagamentos são processados de forma integrada e segura diretamente na plataforma.`,
    tags: ["Telemedicina", "Veterinária", "Teleatendimento", "Pagamentos", "Web"],
    techs: ["Nuxt", "Node.js", "PostgreSQL", "Asaas", "Pagar.me"],
    challenge: "Oferecer uma experiência de teleatendimento fluida e confiável, integrando agenda, consultas online e pagamentos em um único fluxo, com a estabilidade e a segurança que um serviço de saúde exige.",
    images: [],
  },
  {
    slug: "rl-consultoria",
    name: "R&L Consultoria Empresarial",
    icon: "⚖️",
    shortDescription: "Site institucional de assessoria jurídica e contábil com foco em recuperação tributária e gestão empresarial.",
    category: "Site Institucional",
    url: "https://www.rlconsultoriaempresarial.com.br",
    description: `A R&L Consultoria Empresarial é parceira estratégica de empresários que precisam de mais do que números: entrega apoio contábil, fiscal e judicial de ponta a ponta.
Com mais de 3 anos de atuação e uma equipe de contadores e advogados especializados, a empresa já recuperou mais de R$ 20 milhões em tributos pagos indevidamente pelos seus clientes.
O site institucional apresenta os serviços da empresa com clareza e autoridade, transmitindo credibilidade e facilitando o contato de novos clientes.`,
    tags: ["Consultoria", "Contabilidade", "Jurídico", "Tributário", "Landing Page"],
    techs: ["HTML", "CSS", "JavaScript"],
    challenge: "Comunicar autoridade e confiança no mercado jurídico-contábil, destacando os diferenciais competitivos (como a recuperação de R$ 20 milhões em tributos) e convertendo visitantes em contatos qualificados.",
    images: [],
  },
  {
    slug: "rsi-convite-2anos",
    name: "RSI Convite 2 Anos",
    icon: "🎉",
    shortDescription: "Convite digital interativo para a convenção de 2 anos de uma imobiliária, com confirmação de presença.",
    category: "Convite Digital",
    url: "https://rsi-convite-2anos.vercel.app",
    description: `Convite digital desenvolvido para a Convenção de 2 Anos da imobiliária RSI.
A página apresenta o evento de forma elegante e permite que os convidados confirmem presença diretamente pela web. As confirmações são coletadas e organizadas automaticamente, sem planilhas manuais nem trabalho de digitação para os organizadores.`,
    tags: ["Convite Digital", "Evento", "Landing Page", "RSVP"],
    techs: ["React", "Google Apps Script"],
    challenge: "Entregar um convite com visual marcante e confirmação de presença confiável, usando o Google Apps Script como backend para registrar os convidados automaticamente em planilha, sem custo de servidor e com publicação rápida.",
    images: [],
  },
]
