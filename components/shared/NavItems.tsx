"use client"
import { headerLinks } from "@/constants"
import Link from "next/link"
import { usePathname } from "next/navigation"

const NavItems = () => {
    
    const pathname = usePathname()

    return (
        <ul className="md:flex-between md:flex-row flex flex-col items-start gap-5">
            {
                headerLinks.map((link) => {

                    const isActive = link.route === pathname

                    return(
                        <li key={link.route} className={`${
                            isActive && 'text-primary-500'
                        } flex-center p-medium-16 whitespace-nowrap`} >
                        <Link href={link.route}>{link.label}</Link>
                    </li>
                    )
                })
            }
        </ul>
    )
}

export default NavItems