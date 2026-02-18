import { LogOut } from 'lucide-react'
import { useRouter } from 'next/navigation'
import { toast } from 'sonner'
import { Button } from './ui/button'
import { SheetTrigger } from './ui/sheet'
import { SidebarTrigger } from './ui/sidebar'

const Navbar = () => {
    const route = useRouter()

    const logout = () => {
        localStorage.removeItem("token")
        toast.success("Logout success")
        route.push("/auth/login")

    }

    return (
        <nav className='flex w-full items-center justify-between py-2'>
            <SidebarTrigger />
            <Button variant={"destructive"} onClick={logout} > <LogOut /> </Button>
        </nav>
    )
}

export default Navbar