'use client'

import { useState } from 'react'
import { Button } from '@/components/ui/Button'
import { UserPlus, Pencil, Trash2 } from 'lucide-react'
import UserForm from '@/components/admin/UserForm'
import { deleteUser } from '@/app/actions/users'

interface User {
    id: string
    email: string
    name: string | null
}

interface UsersClientProps {
    users: User[]
}

export default function UsersClient({ users }: UsersClientProps) {
    const [showForm, setShowForm] = useState(false)
    const [editingUser, setEditingUser] = useState<User | null>(null)

    const handleEdit = (user: User) => {
        setEditingUser(user)
        setShowForm(true)
    }

    const handleCloseForm = () => {
        setShowForm(false)
        setEditingUser(null)
    }

    const handleDelete = async (id: string, email: string) => {
        if (confirm(`Tem a certeza que deseja eliminar o utilizador ${email}?`)) {
            try {
                await deleteUser(id)
                window.location.reload()
            } catch (err) {
                alert('Erro ao eliminar utilizador')
            }
        }
    }

    return (
        <>
            <div className="flex justify-between items-center mb-6">
                <h1 className="text-2xl font-bold text-gray-900">Utilizadores</h1>
                <Button onClick={() => setShowForm(true)} className="flex items-center gap-2">
                    <UserPlus size={18} />
                    Novo Utilizador
                </Button>
            </div>

            <div className="bg-white rounded-lg shadow overflow-hidden">
                {users.length === 0 ? (
                    <div className="text-center py-12 text-gray-500">
                        Nenhum utilizador encontrado. Crie o primeiro utilizador.
                    </div>
                ) : (
                    <table className="w-full">
                        <thead className="bg-gray-50 border-b">
                            <tr>
                                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                                    Nome
                                </th>
                                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                                    Email
                                </th>
                                <th className="px-6 py-3 text-right text-xs font-medium text-gray-500 uppercase tracking-wider">
                                    Ações
                                </th>
                            </tr>
                        </thead>
                        <tbody className="divide-y divide-gray-200">
                            {users.map((user) => (
                                <tr key={user.id} className="hover:bg-gray-50">
                                    <td className="px-6 py-4 whitespace-nowrap">
                                        <div className="text-sm font-medium text-gray-900">
                                            {user.name || '-'}
                                        </div>
                                    </td>
                                    <td className="px-6 py-4 whitespace-nowrap">
                                        <div className="text-sm text-gray-700">{user.email}</div>
                                    </td>
                                    <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                                        <button
                                            onClick={() => handleEdit(user)}
                                            className="text-primary hover:text-primary/80 mr-4"
                                            aria-label={`Editar ${user.email}`}
                                        >
                                            <Pencil size={18} />
                                        </button>
                                        <button
                                            onClick={() => handleDelete(user.id, user.email)}
                                            className="text-red-600 hover:text-red-800"
                                            aria-label={`Eliminar ${user.email}`}
                                        >
                                            <Trash2 size={18} />
                                        </button>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                )}
            </div>

            {showForm && (
                <UserForm
                    user={editingUser || undefined}
                    onClose={handleCloseForm}
                />
            )}
        </>
    )
}
