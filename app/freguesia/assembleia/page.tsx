const assemblyMembers = [
    { name: 'Carlos Ferreira', role: 'Presidente da Mesa', party: 'Partido A' },
    { name: 'Ana Rodrigues', role: '1º Secretário', party: 'Partido A' },
    { name: 'Pedro Martins', role: '2º Secretário', party: 'Partido B' },
    { name: 'Sofia Sousa', role: 'Vogal', party: 'Partido A' },
    { name: 'Miguel Oliveira', role: 'Vogal', party: 'Partido C' },
    { name: 'Joana Lima', role: 'Vogal', party: 'Partido B' },
    { name: 'Rui Pereira', role: 'Vogal', party: 'Partido A' },
    { name: 'Catarina Mendes', role: 'Vogal', party: 'Partido D' },
    { name: 'Tiago Silva', role: 'Vogal', party: 'Partido A' },
]

export default function AssemblyPage() {
    return (
        <div className="min-h-screen bg-white py-12">
            <div className="container mx-auto px-4 max-w-5xl">
                <h1 className="text-4xl font-bold text-gray-900 mb-12 text-center">Assembleia de Freguesia</h1>

                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
                    {assemblyMembers.map((member, idx) => (
                        <div key={idx} className="bg-gray-50 p-6 rounded-lg border border-gray-100 flex flex-col items-center text-center hover:shadow-md transition-shadow">
                            <div className="w-24 h-24 bg-gray-200 rounded-full mb-4 flex items-center justify-center text-gray-400 font-bold text-2xl">
                                {member.name.charAt(0)}
                            </div>
                            <h3 className="text-lg font-bold text-gray-900">{member.name}</h3>
                            <p className="text-primary font-medium mb-2">{member.role}</p>
                            <span className="text-xs font-semibold px-2 py-1 bg-gray-200 rounded-full text-gray-600">
                                {member.party}
                            </span>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}
