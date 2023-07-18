import type { AppProps } from 'next/app'
import RootLayout from '@/components/layout/layout'
import '@/styles/globals.css'
import Font from '@/components/Font'
import { useEffect } from 'react'
export default function App({ Component, pageProps }: AppProps) {
    useEffect(() => {
        window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches
            ? document.documentElement.setAttribute('data-theme', 'dark')
            : document.documentElement.setAttribute('data-theme', 'light');
    })
    return (
        <>
            <Font />
            <RootLayout>
                <Component {...pageProps} />
            </RootLayout>
        </>
    )
}