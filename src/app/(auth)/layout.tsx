import { Button } from "@/components/ui/button";
import Image from "next/image";

export default function AuthLayout({ children }: { children: React.ReactNode }) {
    return (
        <main className="bg-neutral-100 min-h-screen">
            <section className="mx-auto max-w-screen-2xl p-4">
                <nav className="flex justify-between items-center">
                    <Image
                        width={56}
                        height={56}
                        alt="Jira Logo"
                        src="/svg/jira.svg"
                    />
                    <Button variant="secondary">Sign Up</Button>
                </nav>
                <article className="flex flex-col items-center justify-center pt-4 mt:pt-14">
                    {children}
                </article>
            </section>
        </main>
    )
}