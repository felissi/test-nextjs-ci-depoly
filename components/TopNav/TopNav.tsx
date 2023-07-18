import Link from "next/link";
import Drawer2 from '@/components/Drawer2'
import { useState } from "react";
import LogoLight from '@/public/F_light.svg'
import LogoDark from '@/public/F_dark.svg'

export default function TopNav() {
    const [drawerOn, setDrawerOn] = useState(false)
    return (<>

        <header className="pt-2 h-24 fixed backdrop-blur-sm w-full z-50 px-4">
            <div className=" w-full z-50">
                <div className="px-4 min-h-16 rounded-2xl  flex  backdrop-blur-sm  dark:border-gray-600 shadow-[inset_0_-1px_0_0_rgba(0,0,0,.1)]  h-20 items-center justify-between md:flex   w-full ">
                    <Link className="theme-light:hidden " href="/">
                        <LogoDark />

                    </Link>
                    <Link className="theme-dark:hidden" href="/">
                        <LogoLight />


                    </Link>

                    <Link href="/contact" className="btn btn-ghost">Contact</Link>

                    <Drawer2 />
                </div>
            </div>
        </header>
    </>
    )
}