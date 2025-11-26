import { ArrowUp, Rocket } from "lucide-react"

export const Footer = () => {
    return (
        <footer className="py-12 px-10 bg-card relative border-t border-border mt-12 pt-8 
                flex flex-wrap justify-between items-center">
            <p className="text-sm text-muted-foreground">
                © {new Date().getFullYear()} Eslam Gomaa.  All rights reserved
            </p>
            <a href="#hero" className="pt-2 rounded-full bg-primary/10 hover:bg-primary/20 text-primary transition-colors">
                <Rocket size={30} className="rotate-[-45deg]" />
            </a>
        </footer>
    )
}