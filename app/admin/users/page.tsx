import { redirect } from 'next/navigation'
import { auth } from '@/lib/auth'
import { getUsers } from '@/app/actions/users'
import UsersClient from '@/components/admin/UsersClient'

export const dynamic = 'force-dynamic'

export default async function UsersPage() {
    const session = await auth()
    if (!session) redirect('/admin/login')

    const users = await getUsers()

    return <UsersClient users={users} />
}
