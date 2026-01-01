import { Badge } from "../components/ui/badge";
import { Button } from "../components/ui/button";
import { Github, MailIcon, LinkedinIcon, ArrowDown } from "lucide-react";
import { links } from "../metadata";

const HeroSection = () => {
    return (
        <>
            <div className="flex flex-col justify-center items-center text-center max-w-2xl font-space-grotesk">
                <Badge variant="secondary" className="text-muted-foreground" >
                    <span className="relative flex size-2 me-2">  
                        <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-primary opacity-75"></span>  
                        <span className="relative inline-flex size-2 rounded-full bg-primary"></span>
                    </span>
                    Available for opportunities
                </Badge>
                <h1 className="text-6xl font-bold text-secondary-foreground mt-12 mb-3">
                    Hi, I'm <span className="text-gradient-primary">Vishesh Dvivedi</span>
                </h1>
                <h2 className="text-4xl text-muted-foreground mt-3">
                    Full Stack Developer
                </h2>
                <p className="text-xl text-muted-foreground mt-12">
                    Design <span className="font-bold text-slate-400">scalable</span> architecture. 
                    Write <span className="font-bold text-slate-400">maintainable</span> code. 
                    Build <span className="font-bold text-slate-400">reliable</span> systems. 
                    Deliver <span className="font-bold text-slate-400">secure</span> solutions.
                </p>
                <div className="mt-12 flex flex-row justify-center items-center gap-5">
                    <Button variant="default" size="xl">
                        View My Work
                    </Button>
                    <Button variant="secondary" size="xl" className="border border-primary hover:border-2">
                        Contact Me
                    </Button>
                </div>
                <div className="mt-12 flex flex-row justify-center items-center gap-12 text-white *:hover:text-slate-300 *:hover:transition-colors">
                    <a href={links.github} target="_blank">
                        <Github />
                    </a>
                    <a href={links.linkedin} target="_blank">
                        <LinkedinIcon />
                    </a>
                    <a href={`mailto:${links.mail}`}>
                        <MailIcon />
                    </a>
                </div>
            </div>
            <div className="absolute bottom-12 size-6 animate-bounce text-muted-foreground mt-60">
                <ArrowDown />
            </div>
        </>
    )
};

export default HeroSection;
