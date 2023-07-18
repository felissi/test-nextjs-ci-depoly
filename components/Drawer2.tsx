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
import Hamburger from '@/public/hamburger.svg'
import Close from '@/public/close.svg'
export default function Drawer2() {
    const [open, setOpen] = useState(false)
    return (
        <>
            <button className="btn btn-ghost btn-square swap swap-rotate" onClick={() => setOpen(open => !open)}>
                {/* <label className="btn btn-ghost btn-square swap swap-rotate"> */}
                {/* this hidden checkbox controls the state */}
                <input type="checkbox" checked={open} aria-hidden readOnly className="hidden" />
                {/* hamburger icon */}
                <Hamburger className="swap-off fill-current" />
                {/* close icon */}
                <Close className="swap-on fill-current" />
                {/* </label> */}
            </button>
            <Sheet open={open} onOpenChange={setOpen}>
                <SheetContent>
                    <SheetHeader>
                        <SheetTitle>Edit profile</SheetTitle>
                        <SheetDescription>
                            qweqwe
                        </SheetDescription>
                    </SheetHeader>
                    <div className="grid gap-4 py-4">
                        <button className="btn ">qwe</button>
                    </div>
                    <SheetFooter>
                        <SheetClose asChild>
                            <button type="submit">Save changes</button>
                        </SheetClose>
                    </SheetFooter>
                </SheetContent>
            </Sheet>
        </>

    )
}