import { GraduationCap, Baby, Dumbbell, Drama, Paintbrush, Headset, Skull, Castle, type LucideIcon } from 'lucide-react'

export interface ServiceDocument {
    label: string;
    url: string;
}

export interface Service {
    id: number;
    slug: string;
    title: string;
    icon: LucideIcon;
    description: string;
    details: string;
    longDescription: string;
    images: string[];
    documents: ServiceDocument[];
}

export const services: Service[] = [
    {
        id: 1,
        slug: 'apoio-a-educacao',
        title: 'Educação',
        icon: GraduationCap,
        description: 'Apoio escolar, bolsas de estudo e atividades extracurriculares.',
        details: 'Disponibilizamos diversos programas de apoio ao estudo para crianças e jovens residentes na freguesia.',
        longDescription: `
            <p class="mb-4">Acreditamos que a educação é o pilar fundamental para o desenvolvimento da nossa comunidade. Por isso, a Junta de Freguesia investe em diversos programas de apoio aos estudantes e às suas famílias.</p>
            <p class="mb-4">Os nossos apoios incluem:</p>
            <ul class="list-disc pl-5 mb-4 space-y-2">
                <li>Aulas de Inglês (AECs).</li>
                <li>Iniciação ao Judo</li>
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
        slug: 'manutencao',
        title: 'Limpeza e Manutenção',
        icon: Paintbrush,
        description: 'Mantemos uma equipa de limpeza e manutenção que trabalha diariamente para garantir espaços públicos limpos e cuidados.',
        details: 'Limpeza urbana, manutenção de vias secundárias e escoamento de águas pluviais.',
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
        slug: 'secretaria',
        title: 'Atendimento ao Cidadão',
        icon: Headset,
        description: 'Criámos um serviço de proximidade para o atendimento e apoio dos fregueses.',
        details: 'Emissão de certidões e atestados, apoio social.',
        longDescription: `
            <p class="mb-4">A Junta de Freguesia disponibiliza um serviço de Atendimento ao Cidadão dedicado a apoiar a população nas mais diversas necessidades do dia a dia. Neste espaço, os fregueses podem obter informações, tratar de documentação, solicitar serviços, apresentar pedidos ou esclarecer dúvidas relacionadas com as competências da Junta de Freguesia.</p>
            <p class="mb-4">O atendimento é realizado de forma próxima, acessível e eficiente, procurando garantir um serviço de qualidade e uma resposta adequada às necessidades da comunidade. A Junta mantém-se disponível para apoiar todos os cidadãos, promovendo uma relação de confiança, transparência e proximidade com a população.</p>
        `,
        images: [
            "/uploads/capa_atendimento.png"
        ],
        documents: []
    },
    {
        id: 4,
        slug: 'apoio-as-tradicoes',
        title: 'Apoio às Tradições',
        icon: Drama,
        description: 'Apoio às associações culturais e recreativas da freguesia.',
        details: 'Financiamento, apoio logístico e cedência de espaços para eventos culturais.',
        longDescription: `
            <p class="mb-4">A comunidade é um valor central na nossa freguesia, sendo entendida como a base de toda a dinâmica social, cultural e associativa do território.</p>
            <p class="mb-4">Todos os anos, a Junta de Freguesia procura reforçar esse compromisso através do apoio contínuo às associações locais, colaborando com as mesmas no desenvolvimento dos seus planos de atividades. Este apoio estende-se à organização de eventos, iniciativas culturais, desportivas e recreativas, bem como a outras ações que promovam a participação ativa da população e o fortalecimento dos laços comunitários. Desta forma, contribui-se para uma freguesia mais coesa, participativa e dinâmica.</p>
        `,
        images: [
            "/uploads/capa_tradicoes.png"
        ],
        documents: []
    },
    {
        id: 5,
        slug: 'cemiterios',
        title: 'Cemitérios',
        icon: Skull,
        description: 'Gestão dos cemitérios da freguesia.',
        details: 'Cuidado permanente com os cemitérios da nossa freguesia.',
        longDescription: `
            <p class="mb-4">A Junta de Freguesia de Porto de Mós é responsável pela gestão, organização e manutenção do Cemitério da Fonte do Oleiro, garantindo o cumprimento das normas legais e o bom funcionamento do espaço. Compete-lhe autorizar e registar inumações, exumações, trasladações e depósitos de cinzas, emitir concessões de sepulturas, jazigos e columbários, assegurar a limpeza e conservação das áreas comuns e fiscalizar obras e construções funerárias. A Junta pode ainda aplicar sanções em caso de incumprimento do regulamento e intervir em situações de abandono ou falta de manutenção das concessões.</p>
            <p class="mb-4">O cemitério destina-se principalmente a residentes e naturais das localidades de Fonte dos Marcos, Carrasqueira, Fonte do Oleiro, Mendigos e Ribeira de Baixo. Funciona diariamente, entre as 08h30 e as 20h00 no período de verão e entre as 08h30 e as 17h30 no inverno. Todos os pedidos relacionados com serviços funerários devem ser tratados junto da Secretaria da Junta de Freguesia, estando sujeitos às taxas definidas na tabela em vigor.</p>
        `,
        images: [
            "/uploads/capa_cemiterio.png"
        ],
        documents: [
            {label: "Regulamento do Cemitério da Fonte do Oleiro", url: "/uploads/regulamento_cemiterio_fonte_do_oleiro.pdf"}
        ]
    },
    {
        id: 6,
        slug: 'obras-publicas-e-patrimonio',
        title: 'Obras Públicas e Património',
        icon: Castle,
        description: 'Obras públicas, recuperação e manutenção do património da freguesia.',
        details: 'Edificados, parques, fontes, cruzeiros, passeios, etc.',
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
    },
    {
        id: 7,
        slug: 'ginastica-senior',
        title: 'Ginástica Sénior',
        icon: Dumbbell,
        description: 'Estímulo de práticas de envelhecimento ativo e saudável.',
        details: 'Programa de ginástica gratuito para séniores da freguesia (+ de 65 anos).',
        longDescription: `
            <p class="mb-4">A Ginástica Sénior é uma atividade física adaptada às necessidades e capacidades dos séniores, com o objetivo de promover a saúde, o bem-estar e a socialização. A frequência nas aulas é gratuita para todos os residentes da freguesia com mais de 65 anos.</p>
            <p class="mb-4">As aulas são lecionadas pela professora Maria João Santana, nas seguintes instalações (ver calendário de aulas), e promovem:</p>
            <ul class="list-disc pl-5 mb-4 space-y-2">
                <li>Melhoria da mobilidade e equilíbrio.</li>
                <li>Reforço muscular.</li>
                <li>Convívio e bem-estar emocional.</li>
            </ul>
            <p>As inscrições são realizadas com a professora no dia das aulas.</p>
        `,
        images: [
            "/uploads/capa_ginastica_senior.png"
        ],
        documents: [
            { label: "Ficha de Inscrição na Ginástica Sénior", url: "/uploads/ficha_inscricao_ginastica_senior.pdf" },
            { label: "Calendário de Aulas", url: "/uploads/calendario_de_aulas_ginastica_senior.pdf" }
        ]
    },
    {
        id: 8,
        slug: 'apoio-a-natalidade',
        title: 'Apoio à Natalidade',
        icon: Baby,
        description: 'Apoio às famílias com crianças recém-nascidas.',
        details: 'Vouchers para compras em lojas locais de 150€ para cada nascido na freguesia.',
        longDescription: `
            <p class="mb-4">Para ter direiro a este apoio basta comprovar que a criança nasceu na freguesia e que os pais residem na freguesia.</p>
            <p class="mb-4">O valor dos vouchers, após aprovação do executivo, são entregues na secretaria da Junta de Freguesia contra apresentação das respetivas faturas dessas despesas.</p>
        `,
        images: [
            "/uploads/capa_natalidade.png"
        ],
        documents: [
            { label: "Regulamento do Apoio à Natalidade", url: "/uploads/regulamento_apoio_natalidade_2026.pdf" },
            { label: "Formulário de Candidatura", url: "/uploads/formulario_apoio_natalidade_2026.pdf" }
        ]
    },
]
