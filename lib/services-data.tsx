import { GraduationCap, Leaf, Building2, Heart, HelpCircle, Truck, Trees, FileText } from 'lucide-react'

export interface ServiceDocument {
    label: string;
    url: string;
}

export interface Service {
    id: number;
    slug: string;
    title: string;
    icon: any;
    description: string;
    details: string;
    longDescription: string;
    images: string[];
    documents: ServiceDocument[];
}

export const services: Service[] = [
    {
        id: 1,
        slug: 'educacao',
        title: 'Educação',
        icon: GraduationCap,
        description: 'Apoio escolar, bolsas de estudo e atividades extracurriculares.',
        details: 'Disponibilizamos diversos programas de apoio ao estudo para crianças e jovens residentes na freguesia.',
        longDescription: `
            <p class="mb-4">Acreditamos que a educação é o pilar fundamental para o desenvolvimento da nossa comunidade. Por isso, a Junta de Freguesia investe em diversos programas de apoio aos estudantes e às suas famílias.</p>
            <p class="mb-4">Os nossos serviços incluem:</p>
            <ul class="list-disc pl-5 mb-4 space-y-2">
                <li>Bolsas de mérito para os melhores alunos do ensino secundário e superior.</li>
                <li>Apoio na aquisição de material escolar para famílias carenciadas.</li>
                <li>Atividades de tempos livres (ATL) durante as férias escolares.</li>
                <li>Parcerias com centros de explicações locais.</li>
            </ul>
            <p>Estamos em constante articulação com o Agrupamento de Escolas para identificar necessidades e promover o sucesso escolar de todos os jovens da freguesia.</p>
        `,
        images: [
            "https://images.unsplash.com/photo-1523050854058-8df90110c9f1?q=80&w=1000",
            "https://images.unsplash.com/photo-1509062522246-3755977927d7?q=80&w=1000"
        ],
        documents: [
            { label: "Regulamento de Bolsas de Estudo", url: "#" },
            { label: "Ficha de Inscrição ATL", url: "#" }
        ]
    },
    {
        id: 2,
        slug: 'ambiente',
        title: 'Ambiente',
        icon: Leaf,
        description: 'Limpeza urbana, espaços verdes e recolha de resíduos.',
        details: 'Manutenção diária dos espaços públicos e gestão de resíduos para uma freguesia mais limpa.',
        longDescription: `
            <p class="mb-4">A preservação do ambiente e a limpeza dos espaços públicos são prioridades para a nossa Junta de Freguesia. Trabalhamos diariamente para garantir que as nossas ruas, praças e jardins se mantêm limpos e cuidados.</p>
            <p class="mb-4">As nossas iniciativas incluem:</p>
            <ul class="list-disc pl-5 mb-4 space-y-2">
                <li>Recolha seletiva de resíduos e monstros (mediante agendamento).</li>
                <li>Manutenção e limpeza das vias públicas.</li>
                <li>Campanhas de sensibilização ambiental nas escolas.</li>
                <li>Implementação de ilhas ecológicas em pontos estratégicos.</li>
            </ul>
        `,
        images: [
            "https://images.unsplash.com/photo-1532996122724-e3c354a0b15b?q=80&w=1000",
        ],
        documents: [
            { label: "Calendário de Recolha de Lixo", url: "#" },
            { label: "Guia de Boas Práticas Ambientais", url: "#" }
        ]
    },
    {
        id: 3,
        slug: 'urbanismo',
        title: 'Urbanismo',
        icon: Building2,
        description: 'Licenciamentos, obras particulares e reabilitação urbana.',
        details: 'Serviços de apoio ao licenciamento e fiscalização de obras particulares.',
        longDescription: `
            <p class="mb-4">O serviço de Urbanismo tem como missão ordenar o território e garantir o cumprimento das normas de construção, promovendo um desenvolvimento harmonioso da freguesia.</p>
            <p class="mb-4">Disponibilizamos:</p>
            <ul class="list-disc pl-5 mb-4 space-y-2">
                <li>Emissão de atestados e certidões para fins diversos.</li>
                <li>Licenciamento de canídeos e gatídeos.</li>
                <li>Apoio técnico a obras particulares de pequena dimensão.</li>
                <li>Fiscalização de ocupação da via pública.</li>
            </ul>
        `,
        images: [
            "https://images.unsplash.com/photo-1486325212027-8081e485255e?q=80&w=1000"
        ],
        documents: [
            { label: "Requerimento Geral", url: "#" },
            { label: "Pedido de Licenciamento de Obra", url: "#" }
        ]
    },
    {
        id: 4,
        slug: 'acao-social',
        title: 'Ação Social',
        icon: Heart,
        description: 'Apoio a idosos, famílias carenciadas e intervenção comunitária.',
        details: 'Gabinete de apoio social para atendimento e acompanhamento de situações de vulnerabilidade.',
        longDescription: `
            <p class="mb-4">A solidariedade é um valor central na nossa freguesia. O Gabinete de Ação Social existe para apoiar os cidadãos em situação de vulnerabilidade, garantindo que ninguém fica para trás.</p>
            <p class="mb-4">Áreas de atuação:</p>
            <ul class="list-disc pl-5 mb-4 space-y-2">
                <li>Atendimento e acompanhamento social.</li>
                <li>Banco de recursos (roupa, alimentos, mobiliário).</li>
                <li>Apoio à população sénior (teleassistência, combate ao isolamento).</li>
                <li>Encaminhamento para outras entidades competentes.</li>
            </ul>
        `,
        images: [
            "https://images.unsplash.com/photo-1593113598332-cd288d649433?q=80&w=1000"
        ],
        documents: [
            { label: "Formulário de Apoio Social", url: "#" }
        ]
    },
    {
        id: 5,
        slug: 'espacos-verdes',
        title: 'Espaços Verdes',
        icon: Trees,
        description: 'Manutenção de parques e jardins.',
        details: 'Cuidado permanente com os pulmões verdes da nossa freguesia.',
        longDescription: `
            <p class="mb-4">Os espaços verdes são essenciais para a qualidade de vida. Mantemos e qualificamos os nossos parques e jardins para que sejam locais de lazer e convívio para todas as idades.</p>
            <ul class="list-disc pl-5 mb-4 space-y-2">
                <li>Poda e tratamento de árvores.</li>
                <li>Manutenção de jardins e canteiros.</li>
                <li>Instalação e reparação de mobiliário urbano em áreas verdes.</li>
            </ul>
        `,
        images: [
            "https://images.unsplash.com/photo-1496347646636-ea47f7d6b37b?q=80&w=1000"
        ],
        documents: []
    },
    {
        id: 6,
        slug: 'transporte-solidario',
        title: 'Transporte Solidário',
        icon: Truck,
        description: 'Transporte para consultas e tratamentos médicos.',
        details: 'Serviço gratuito de transporte para idosos com mobilidade reduzida.',
        longDescription: `
            <p class="mb-4">Para combater o isolamento e garantir o acesso à saúde, a Junta de Freguesia disponibiliza um serviço de transporte solidário destinado, prioritariamente, à população sénior ou com mobilidade reduzida.</p>
            <p class="mb-4">O serviço assegura o transporte para:</p>
            <ul class="list-disc pl-5 mb-4 space-y-2">
                <li>Consultas médicas e exames.</li>
                <li>Tratamentos de fisioterapia.</li>
                <li>Serviços públicos essenciais (Finanças, Segurança Social, etc.).</li>
            </ul>
            <p>O agendamento deve ser efetuado com 48 horas de antecedência na secretaria da Junta.</p>
        `,
        images: [
            "https://images.unsplash.com/photo-1519494303498-842220498db6?q=80&w=1000"
        ],
        documents: [
            { label: "Ficha de Inscrição Transporte", url: "#" },
            { label: "Regulamento de Utilização", url: "#" }
        ]
    }
]
