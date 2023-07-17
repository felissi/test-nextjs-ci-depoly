import type { AppProps } from 'next/app'
import RootLayout from '@/components/layout/layout'
import '@/styles/globals.css'
import Font from '@/components/Font'
export default function App({ Component, pageProps }: AppProps) {
    return (
        <>
            <Font />
            <RootLayout>
                <Component {...pageProps} />
            </RootLayout>
        </>
    )
}