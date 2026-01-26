'use client'
import { useState } from 'react'
import { signIn } from 'next-auth/react'
import { useRouter } from 'next/navigation'
import { Button } from '@/components/ui/Button'
import { Lock } from 'lucide-react'

export default function LoginPage() {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [error, setError] = useState('')
    const router = useRouter()

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault()
        setError('')

        try {
            const result = await signIn('credentials', {
                redirect: false,
                email,
                password,
            })

            if (result?.error) {
                setError('Credenciais inválidas')
            } else {
                router.push('/admin/dashboard')
                router.refresh()
            }
        } catch (err) {
            setError('Ocorreu um erro ao tentar entrar')
        }
    }

    return (
        <div className="min-h-screen flex items-center justify-center bg-gray-100">
            <div className="bg-white p-8 rounded-lg shadow-md w-full max-w-md">
                <div className="flex justify-center mb-6">
                    <div className="bg-primary/10 p-4 rounded-full">
                        <Lock className="text-primary w-8 h-8" />
                    </div>
                </div>
                <h1 className="text-2xl font-bold text-center mb-6 text-gray-800">Acesso Restrito</h1>

                {error && (
                    <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded mb-4 text-sm text-center">
                        {error}
                    </div>
                )}

                <form onSubmit={handleSubmit} className="space-y-4">
                    <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1">Email</label>
                        <input
                            type="email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-1 focus:ring-primary"
                            required
                        />
                    </div>
                    <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1">Palavra-passe</label>
                        <input
                            type="password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-1 focus:ring-primary"
                            required
                        />
                    </div>
                    <Button type="submit" className="w-full justify-center">Entrar</Button>
                </form>
            </div>
        </div>
    )
}
