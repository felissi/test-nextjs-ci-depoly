import {
    Sheet,
    SheetClose,
    SheetContent,
    SheetDescription,
    SheetFooter,
    SheetHeader,
    SheetTitle,
    SheetTrigger,
} from "@/components/ui/sheet"
import { useState } from 'react'
export default function Drawer2() {
    const [open, setOpen] = useState(false)
    return (
        <Sheet>
            <SheetTrigger asChild>
                <button className="btn btn-ghost btn-square swap swap-rotate" onClick={() => setOpen(open => !open)}>
                    {/* <label className="btn btn-ghost btn-square swap swap-rotate"> */}
                    {/* this hidden checkbox controls the state */}
                    <input type="checkbox" checked={open} aria-hidden key={`${open}`} />
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
                    {/* </label> */}
                </button>
            </SheetTrigger>
            <SheetContent>
                <SheetHeader>
                    <SheetTitle>Edit profile</SheetTitle>
                    <SheetDescription>
                        qweqwe
                    </SheetDescription>
                </SheetHeader>
                <div className="grid gap-4 py-4">
                    <div className="grid grid-cols-4 items-center gap-4">
                        <label htmlFor="name" className="text-right">
                            Name
                        </label>
                        <input id="name" value="Pedro Duarte" className="col-span-3" />
                    </div>
                    <div className="grid grid-cols-4 items-center gap-4">
                        <label htmlFor="username" className="text-right">
                            Username
                        </label>
                        <input id="username" value="@peduarte" className="col-span-3" />
                    </div>
                </div>
                <SheetFooter>
                    <SheetClose asChild>
                        <button type="submit">Save changes</button>
                    </SheetClose>
                </SheetFooter>
            </SheetContent>
        </Sheet>
    )
}