import TopNav from '@/components/TopNav/TopNav'
import Footer from '@/components/Footer/Footer'
// import type { Metadata } from 'next'
// export const metadata: Metadata = {
//     title: 'Create Next App',
//     description: 'Generated by create next app',
// }


export default function RootLayout({
    children,
}: {
    children: React.ReactNode
}) {
    // const = useContext
    return (
        <>
            <TopNav />
            <main className="min-h-screen flex-1">
                {children}
            </main>
            <Footer />

        </>
    )
}
