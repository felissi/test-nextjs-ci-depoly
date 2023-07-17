
export default function HeroApple() {
    return (
        <div className="min-h-screen flex items-center content-center">
            <div className=" grid grid-cols-4 md:grid-cols-8 lg:grid-cols-12 px-5 w-full  gap-x-5 items-center content-center ">

                <div className="col-start-2 col-end-6 row-start-2 w-[270px] h-[270px] theme-light:shadow-[0px_0px_250px_4px_#2B496E,inset_0_0_090px_1px_#334155]  theme-dark:shadow-[0px_0px_250px_4px_#2B496E] rounded-full " ></div>
                <h1 className="col-start-5 col-end-8 row-start-2 text-[72px]">Welcome, friend</h1>
                <section className="col-start-9 col-end-12 row-start-2">
                    <h2 className="text-[24px]">About Me</h2>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ipsum dolor sit amet consectetur adipiscing elit ut aliquam. Est placerat in egestas erat imperdiet sed. Aliquam ultrices sagittis orci a scelerisque purus semper. Porttitor lacus luctus accumsan tortor.</p>
                </section>
            </div>
        </div>
    )
}