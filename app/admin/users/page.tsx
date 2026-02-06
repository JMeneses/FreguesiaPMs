import { getUsers } from '@/app/actions/users'
import UsersClient from '@/components/admin/UsersClient'

export const dynamic = 'force-dynamic'

export default async function UsersPage() {
    const users = await getUsers()

    return <UsersClient users={users} />
}
