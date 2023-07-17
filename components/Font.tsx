import { Inter } from 'next/font/google'
const inter = Inter({ subsets: ['latin'], variable: '--font-inter', })
export default function Font() {
    return (
        <style global jsx>
            {` 
                html {
                    --font-inter: ${inter.style.fontFamily}
                }
                `}
        </style>
    )
}