import { Tooltip } from "react-tooltip";
import { SiTypescript, SiPython, SiJavascript, SiCplusplus, SiNodedotjs, SiPostgresql, SiRedis, SiDocker, SiKubernetes, SiHtml5, SiCss3, SiReact, SiNextdotjs, SiTailwindcss, SiAmazonwebservices, SiGit, SiGithub, SiLinux, SiVercel } from "react-icons/si";

const SkillsAndTools = () => {

    const data = [
        {
            title: "Languages",
            content: [
                { icon: <SiTypescript className="size-7" />, name: "TypeScript", description: "Strongly type JavaScript for scalable applications" },
                { icon: <SiPython className="size-7" />, name: "Python", description: "Versatile language for backend and data science" },
                { icon: <SiJavascript className="size-7" />, name: "JavaScript", description: "Common language for all major frontend frameworks" },
                { icon: <SiCplusplus className="size-7" />, name: "C++", description: "Upgraded version of C following OOP paradigm" }
            ]
        },
        {
            title: "Backend",
            content: [
                { icon: <SiNodedotjs className="size-7" />, name: "Node.js", description: "Javascript runtime for server side applications" },
                { icon: <SiPostgresql className="size-7" />, name: "Postgresql", description: "Powerful open-source relational database" },
                { icon: <SiRedis className="size-7" />, name: "Redis", description: "In memory data store for caching and queues" },
                { icon: <SiDocker className="size-7" />, name: "Docker", description: "Containerization for consistent deployments" },
                { icon: <SiKubernetes className="size-7" />, name: "Kubernetes", description: "Container orchestration at scale" }
            ]
        },
        {
            title: "Frontend",
            content: [
                { icon: <SiReact className="size-7" />, name: "React", description: "Component based UI library for creating fact, interactive web apps" },
                { icon: <SiNextdotjs className="size-7" />, name: "Next.js", description: "React framework for SSR, SSG, routing and production grade web apps" },
                { icon: <SiHtml5 className="size-7" />, name: "HTML5", description: "Sematic markup for accessible and SEO-friendly web pages" },
                { icon: <SiCss3 className="size-7" />, name: "CSS3", description: "Styling language for responsive layouts and modern UI design" },
                { icon: <SiTailwindcss className="size-7" />, name: "Tailwind CSS", description: "Utility-first CSS framework for rapid, consistent UI development" }
            ]
        },
        {
            title: "Cloud & Tools",
            content: [
                { icon: <SiAmazonwebservices className="size-7" />, name: "Amazon AWS", description: "Cloud platform for scalable compute, storage and backend services" },
                { icon: <SiGit className="size-7" />, name: "Git", description: "Version control system for tracking and collaboration" },
                { icon: <SiGithub className="size-7" />, name: "Github", description: "Code hosting, pull requests and CI workflows" },
                { icon: <SiLinux className="size-7" />, name: "Linux", description: "Unix-based OS commonlu used in servers and development environments" },
                { icon: <SiVercel className="size-7" />, name: "Vercel", description: "Frontend deployment platform optimized for Next.js" }
            ]
        }
    ]

    return (
        <div id="skills" className="flex flex-col justify-center items-center w-[80%] h-[80%] font-mono gap-5 mt-10">
            <span className="text-primary text-sm">// Skills & Tools</span>
            <h2 className="text-3xl font-semibold text-white text-center">
                Technologies{" "}
                <span className="text-gradient-primary">I Work With</span>
            </h2>
            <p className="text-muted-foreground text-center">
                A comprehensive toolkit built over years of solving real-world problems
            </p>
            <div className="">
                {data.map(entry => (
                    <div className="flex flex-col gap-5">
                        <h2 className="text-primary">{entry.title}</h2>
                        <div className="flex flex-row justify-start items-center gap-5">
                            {entry.content.map(card => (
                                <>
                                    <div title={card.name} className="flex flex-col bg-secondary justify-center items-center gap-3 p-2 size-36 rounded-lg hover:outline hover:outline-primary hover:-translate-y-3 transition-all" data-tooltip-id={card.name} data-tooltip-content={card.description} >
                                        <div className="text-primary">
                                            {card.icon}
                                        </div>
                                        <span className="text-white text-sm">{card.name}</span>
                                    </div>
                                    <Tooltip id={card.name} />
                                </>
                            ))}
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default SkillsAndTools;
