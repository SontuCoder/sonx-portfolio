import Link from "next/link";
import Image from "next/image";
import { navigation } from "./Navbar_date";


function Navbar_Links() {
    return <>{
        navigation.map((item) => (
            <li key={item.href}>
                <Link href={item.href}>{item.name}</Link>
            </li>
        ))
    }
    </>
}

function Navba_logo() {
    return (
        <Image
            src="/vercel.svg"
            alt="Subhadip Maity | AI Automation & Full Stack Developer"
            width={40}
            height={40}
            className="border-2 border-white rounded-full bg-"
            priority
        />
    )
}



export default function Navbar() {
    return (
        <header className="sticky top-0 z-50">
            <nav className="mx-auto flex h-16 items-center justify-between">
                {/* Left */}
                <div className="">
                    {/* Logo */}
                    <Navba_logo />

                    <ul className="flex items-center gap-6 font-16">
                        {/* Navigation Links */}
                        <Navbar_Links />
                    </ul>
                </div>

                {/* Right */}
                <div>
                    {/* Search */}
                    {/* Theme Toggle */}
                </div>
            </nav>
        </header>
    );
}
