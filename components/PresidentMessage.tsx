import Image from 'next/image'
import Link from 'next/link'

export default function PresidentMessage() {
    return (
        <section className="py-16 bg-white border-t border-gray-100">
            <div className="container mx-auto px-4">
                <div className="flex flex-col md:flex-row items-center gap-12">
                    {/* Image Column */}
                    <div className="md:w-1/3 flex justify-center md:justify-end">
                        <div className="relative w-86 h-86 md:w-96 md:h-96 rounded-full overflow-hidden border-4 border-gray-50 shadow-xl">
                            <Image
                                src="/uploads/manuel_barroso_presidente_executivo.jpg"
                                alt="Presidente da Junta"
                                fill
                                className="object-cover"
                            />
                        </div>
                    </div>

                    {/* Text Column */}
                    <div className="md:w-2/3 text-center md:text-left">
                        <h2 className="text-3xl font-bold text-gray-900 mb-2">Mensagem do Presidente</h2>
                        <div className="h-1 w-20 bg-primary mx-auto md:mx-0 mb-6"></div>

                        <h3 className="text-xl font-semibold text-gray-800 mb-4">Caros fregueses,</h3>

                        <p className="text-lg text-gray-600 mb-6 leading-relaxed">
                            Como Presidente da Junta de Freguesia de Porto de Mós e em nome de todo o Executivo, gostaria de cumprimentar todos os que visitam este website.
                            Este site é só um dos muitos passos que eu e a minha equipa procuraremos dar no sentido da aproximação às pessoas, às suas necessidades e às aspirações que têm para a nossa freguesia.
                        </p>

                        <p className="text-lg text-gray-600 mb-6 leading-relaxed">
                            Queremos criar uma junta próxima, acessível, transparente, com uma melhor comunicação e maior capacidade de ouvir o que têm para nos dizer.
                            Porque a construção de um projeto não se pode resumir á visão de alguns, e só fará sentido com a participação e envolvimento de todos
                        </p>

                        <p className="text-lg text-gray-600 mb-6 leading-relaxed">
                            Pretende ainda este site ser um meio privilegiado da mostra de tradições e costumes da nossa freguesia, bem como das atividades que ao longo destes quatro anos iremos construir e realizar.
                            Permitam-me uma palavra de saudade e carinho para todos os nossos emigrantes, esta página também foi feita a pensar neles, para que todos se sintam mais próximos da sua terra e das suas gentes.
                        </p>

                        <p className="text-lg text-gray-600 mb-6 leading-relaxed">
                            Sinto-me especialmente feliz e as minhas palavras são de profundo agradecimento a cada um de vós, pelo apoio e voto de confiança, pelo carinho e amizade que me dispensam diariamente, e pelas palavras de estímulo que tantos de vocês me fazem chegar.
                            Nesta tarefa coletiva, sou apenas um entre muitos. Estarei atento e darei sempre o meu melhor para cumprir a nossa missão. Sim, a nossa missão, porque eu quero envolver as pessoas neste projeto de serviço público e de entrega a causas.
                            Acredito no valor do trabalho e acredito que, unidos, somos mais fortes! Pelo que serei um líder decisor e agregador de vontades.

                            A vida ensinou-me que, para alcançarmos o sucesso, temos que trabalhar arduamente, temos de ser determinados, pacientes e persistentes. Os mais fortes são os que são capazes de aprender com os outros. Estou aqui para aprender e trabalhar com todos vós!
                        </p>

                        <p className="text-gray-600 mb-8 leading-relaxed">
                            Um bem-haja a todos!
                        </p>

                        <div className="flex flex-col md:flex-row items-center gap-4">
                            <div>
                                <p className="font-bold text-gray-900 text-lg">Manuel Barroso</p>
                                <p className="text-primary font-medium">Presidente do Executivo</p>
                            </div>
                            <div className="hidden md:block w-px h-12 bg-gray-300 mx-4"></div>
                            <Link href="/freguesia/executivo" className="text-gray-500 hover:text-primary transition-colors underline">
                                Conheça todo o Executivo
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}
