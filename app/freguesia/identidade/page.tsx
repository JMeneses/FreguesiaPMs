import Image from 'next/image'
import { Download } from 'lucide-react'

export default function IdentityPage() {
    return (
        <div className="min-h-screen bg-white py-12">
            <div className="container mx-auto px-4 max-w-4xl">
                <h1 className="text-4xl font-bold text-gray-900 mb-8 pb-4 border-b">Identidade da Freguesia</h1>

                <section className="mb-12">
                    <h2 className="text-2xl font-bold text-gray-800 mb-6">História</h2>
                    <div className="prose prose-lg text-gray-600">
                        <p className="mb-4">
                            O nome e a história de Porto de Mós (Portus de Molis), nasceu há mais de 2.000 anos ao tempo em que o rio Lena era navegável e as jangadas romanas aqui embarcavam as pedras de mós,
                            talhadas na Pedreira do Figueiredo e, mais tarde, o ferro das minas de Alqueidão da Serra. Mas os segredos do passado de Porto de Mós remontam ao tempo em que o mar cobria estas terras e se iniciaram os enrugamentos terrestres do Jurássico.
                        </p>
                        <p className="mb-4">
                            As ossadas de dinossauros e a tartaruga petrificada são alguns dos tesouros que este concelho guarda há mais de 150 milhões de anos e que agora expõe no seu notável Museu Municipal,
                            onde se descreve toda a pré-história desta região, nos machados e nas pontas de pedra lascada do Paleolítico, nas pedras polidas do Neolítico, nas cerâmicas e objectos de cobre do Calcolítico, ou nos pesos de tear, nas pedras de espremer o mel, nas moedas e nas lanças de ferro do Império Romano.
                        </p>
                        <p>
                            Subindo na História, pela bela calçada romana de Alqueidão da Serra e percorrendo as encostas de calcário, de moinhos e de aldeias de pedra das serras dos Candeeiros, de Santo António e de Aire, separadas por bucólicas depressões e majestosos anfiteatros naturais, descobre-se, desde o Alto dos Moinhos Velhos, o panorama frutícola do Vale do Lena e da vila de Porto de Mós abraçada ao morro dolomítico do castelo, conquistado por D. Afonso Henriques aos mouros em 1148 e que teve no lendário D. Fuas Roupinho o seu primeiro alcaide.
                            A planta quadrangular do castelo define quatro torreões aos quais D. Afonso - Conde de Ourém deu em 1450 as feições palacianas que o tornaram num dos mais belos castelos de Portugal.
                        </p>
                    </div>
                </section>

                <section className="mb-12">
                    <h2 className="text-2xl font-bold text-gray-800 mb-6">Localização</h2>
                    <div className="prose prose-lg text-gray-600">
                        <p className="mb-4">
                            A Freguesia de Porto de Mós - São João Batista e São Pedro é uma freguesia portuguesa do concelho de Porto de Mós, com 28,19 km² de área e 6.001 habitantes (censos 2021) e densidade populacional de 212,9 hab/km²,
                            tendo sido constituída em 2013, no âmbito de uma reforma administrativa nacional, pela agregação das antigas freguesias de São João Batista e São Pedro e tem a sede em Porto de Mós, encontrando-se inserida na sub-região Pinhal Litoral (NUT III), da Região Centro,
                            é limitada pelas freguesias de Alqueidão da Serra, Alcaria e Alvados, Calvaria de Cima, Juncal, Pedreiras e Serro Ventoso (Concelho de Porto de Mós), com as freguesias da Batalha e Reguengo do Fetal (Concelho da Batalha).
                        </p>
                        <p className="mb-4">
                            Constituem a Freguesia de Porto de Mós os lugares de Anaia, Azenhas, Bairro de S. Miguel, Bom Sucesso, Carrasqueira, Casais de Baixo, Casal Oleiro, Castanheiro, Corredoura,
                            Eiras da Lagoa, Esparrela, Figueiredo, Fonte do Oleiro, Fonte dos Marcos, Livramento, Mendigos, Porto de Mós, Pragais, Pragosa, Ribeira de Baixo, Ribeira de Cima, Rio Alcaide, Tojal de Baixo, Tojal de Cima, Tourões e Valbom.
                        </p>
                        <p>
                            Em pleno Maciço Calcário Estremenho, a Freguesia de Porto de Mós situa-se junto de um dos principais eixos viários do país (IC2), e entre as suas duas cidades mais proeminentes (Lisboa e Porto).
                        </p>
                    </div>
                </section>

                <section>
                    <h2 className="text-2xl font-bold text-gray-800 mb-6">Brasão e Simbologia</h2>
                    <div className="flex flex-col md:flex-row items-center gap-12 bg-gray-50 p-8 rounded-xl">
                        <div className="w-64 h-64 bg-gray-200 rounded-lg shadow-inner flex items-center justify-center text-gray-400">
                            <Image
                                src="/uploads/brasao_junta_de_porto_de_mos.png"
                                alt="Brasão da Junta de Freguesia de Porto de Mós"
                                width={150}
                                height={150}
                                className="object-contain"
                            />
                        </div>

                        <div className="flex-1">
                            <h3 className="text-xl font-semibold mb-4 text-gray-900">Descrição Heráldica</h3>
                            <ul className="list-disc list-inside space-y-2 text-gray-600 mb-6">
                                <li><strong>Escudo:</strong> verde com duas chaves, uma de ouro e outra de prata, passadas em aspa com os palhetões para cima e atadas de prata, entre duas mós de ouro; em chefe, cordeiro pascal de prata nimbado de ouro, segurando na dextra lábaro crucífero de prata com cruz firmada de vermelho e haste de ouro.</li>
                                <li><strong>Coroa Mural:</strong> de ouro de prata de quatro torres (por ser Freguesia Sede Concelhia).</li>
                                <li><strong>Listel:</strong> de prata com a legenda em letras negras maiúsculas: PORTO DE MÓS – SÃO JOÃO BAPTISTA E SÃO PEDRO.</li>
                            </ul>

                            <h4 className="font-bold text-sm uppercase text-gray-500 mb-3">Downloads</h4>
                            <div className="flex flex-wrap gap-4">
                                <a
                                    href="/uploads/brasao_junta_de_porto_de_mos.png"
                                    download="brasao_junta_porto_de_mos.png"
                                    className="flex items-center gap-2 bg-white border border-gray-300 px-4 py-2 rounded-md hover:bg-gray-50 hover:border-primary transition-colors text-sm font-medium"
                                    aria-label="Descarregar Brasão em formato PNG"
                                >
                                    <Download size={16} /> Brasão (PNG)
                                </a>

                                <a
                                    href="/uploads/brazao_vetor_JAN_2017.svg"
                                    download="brasao_junta_porto_de_mos.svg"
                                    className="flex items-center gap-2 bg-white border border-gray-300 px-4 py-2 rounded-md hover:bg-gray-50 hover:border-primary transition-colors text-sm font-medium"
                                    aria-label="Descarregar Brasão em formato Vetorial"
                                >
                                    <Download size={16} /> Brasão (Vectorial)
                                </a>
                            </div>
                        </div>
                    </div>
                </section>
            </div>
        </div>
    )
}
