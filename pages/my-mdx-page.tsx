import HelloWorld from "@/components/hello.mdx";

export default function Page({ children }: {
    children: React.ReactNode
}) {
    return (
        <>
            <div>My MDX pages</div>
            <HelloWorld />
        </>)
}
