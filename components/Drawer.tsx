export default function Drawer(
    { open }
        : { open: boolean }
) {
    return (
        <div className="pointer-events-none z-60 fixed  drawer drawer-end h-screen rounded overflow-hidden">
            <input id="my-drawer-4" type="checkbox" className="drawer-toggle" checked={open} />
            {/* <div className=" flex flex-col items-center justify-center drawer-content">
                <label htmlFor="my-drawer-4" className="pointer-events-auto btn btn-primary drawer-button">Open drawer</label>
            </div> */}
            <div className="drawer-side h-full absolute">
                <label htmlFor="my-drawer-4" className="drawer-overlay"></label>
                <div className="py-2 px-4 h-screen">
                    <ul className="menu p-4 w-60 md:w-80 h-full bg-base-200 text-base-content">
                        <li><a>Sidebar Item 1</a></li> <li><a>Sidebar Item 2</a></li>
                    </ul>
                </div>
            </div>
        </div>
    )
}