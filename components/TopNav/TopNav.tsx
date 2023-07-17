import Link from "next/link";
import Drawer from '@/components/Drawer'
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
                    <label className="btn btn-ghost btn-square swap swap-rotate">

                        {/* this hidden checkbox controls the state */}
                        <input type="checkbox" onClick={() => setDrawerOn(drawerOn => !drawerOn)} />

                        {/* hamburger icon */}
                        <svg className="swap-off fill-current" width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <mask id="mask0_35_5" style={{ maskType: 'alpha' }} maskUnits="userSpaceOnUse" x="0" y="0" width="32" height="32">
                                <rect width="32" height="32" />
                            </mask>
                            <g mask="url(#mask0_35_5)">
                                <path d="M4.80005 23.2V20.8H8.33169V23.2H4.80005ZM4.80005 17.2V14.8H21.1317V17.2H4.80005ZM4.80005 11.2V8.80005H27.2V11.2H4.80005Z" />
                            </g>
                        </svg>

                        {/* close icon */}
                        <svg className="swap-on fill-current" xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 512 512"><polygon points="400 145.49 366.51 112 256 222.51 145.49 112 112 145.49 222.51 256 112 366.51 145.49 400 256 289.49 366.51 400 400 366.51 289.49 256 400 145.49" /></svg>

                    </label>
                </div>
            </div>
        </header>
        <Drawer open={drawerOn} />
    </>
    )
}