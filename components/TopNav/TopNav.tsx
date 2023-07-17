import Link from "next/link";
import Drawer2 from '@/components/Drawer2'
import { useState } from "react";

export default function TopNav() {
    const [drawerOn, setDrawerOn] = useState(false)
    return (<>

        <header className="pt-2 h-24 fixed backdrop-blur-sm w-full z-50 px-4">
            <div className=" w-full z-50">
                <div className="px-4 min-h-16 rounded-2xl  flex  backdrop-blur-sm  dark:border-gray-600 shadow-[inset_0_-1px_0_0_rgba(0,0,0,.1)]  h-20 items-center justify-between md:flex   w-full ">
                    <Link className="theme-light:hidden " href="/">
                        <svg width="66" height="48" viewBox="0 0 66 48" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <rect width="66" height="48" rx="8" fill="#101012" />
                            <path d="M27.404 19.476L24.524 19.764L23.804 15.444H15.596V23.796H26.072V26.604H15.596V33.156H19.628V36H9.476V33.156H12.32V15.444H9.476V12.6H26.648L27.404 19.476ZM37.6196 24.372V19.908H41.4356V24.372H37.6196ZM37.6196 36V31.536H41.4356V36H37.6196ZM46.6716 11.232H49.7676L57.2916 36H54.1956L46.6716 11.232Z" fill="#D9D9D9" />
                        </svg>

                    </Link>
                    <Link className="theme-dark:hidden" href="/">
                        <svg width="66" height="48" viewBox="0 0 66 48" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <rect width="66" height="48" rx="8" fill="white" />
                            <path d="M27.404 19.476L24.524 19.764L23.804 15.444H15.596V23.796H26.072V26.604H15.596V33.156H19.628V36H9.476V33.156H12.32V15.444H9.476V12.6H26.648L27.404 19.476ZM37.6196 24.372V19.908H41.4356V24.372H37.6196ZM37.6196 36V31.536H41.4356V36H37.6196ZM46.6716 11.232H49.7676L57.2916 36H54.1956L46.6716 11.232Z" fill="#877CC7" />
                        </svg>


                    </Link>

                    <Link href="/contact" className="btn btn-ghost">Contact</Link>
                    <button className="btn btn-square btn-ghost">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" className="inline-block w-5 h-5 stroke-current"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 12h.01M12 12h.01M19 12h.01M6 12a1 1 0 11-2 0 1 1 0 012 0zm7 0a1 1 0 11-2 0 1 1 0 012 0zm7 0a1 1 0 11-2 0 1 1 0 012 0z"></path></svg>
                    </button>

                    <Drawer2 />
                </div>
            </div>
        </header>
    </>
    )
}