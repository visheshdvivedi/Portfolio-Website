import { JOB_START_DATE } from "../metadata";
import { MusicIcon, GamepadIcon } from "lucide-react";

const AboutSection = () => {

    const getExperienceYears = () => {
        const curr = new Date();
        const diffYear = curr.getFullYear() - JOB_START_DATE.getFullYear();
        return diffYear;
    }

    const points = [
        `Software Engineer with ${getExperienceYears()}+ years of experience`,
        "Expertise in developing secure and scalable full stack solutions",
        "Experience with security and retail based products",
        "Azure and AWS Certified"
    ]

    const hobbies = [
        {
            icon: <MusicIcon />,
            name: "Piano",
            content: "5 years playing"
        },
        {
            icon: <GamepadIcon />,
            name: "Badminton",
            content: "Recreational"
        }
    ]

    const stats = [
        {
            "title": `${getExperienceYears()}+`,
            "content": "Years Of Experience"
        },
        {
            "title": "20+",
            "content": "Projects Worked On"
        },
        {
            "title": "200+",
            "content": "Leetcode Problems Solved"
        }
    ]

    return (
        <div id="about" className="flex flex-col justify-center items-center w-[80%] h-[80%] font-mono gap-5 mt-10">
            <span className="text-primary text-sm">// About Me</span>
            <h2 className="text-3xl font-semibold text-white text-center">
                Passionate Developer with a{" "}
                <span className="text-gradient-primary">Problem Solving Edge</span>
            </h2>
            <p className="text-muted-foreground text-center">
                {points.join(". ")}
            </p>
            <div className="flex flex-row justify-center items-center gap-5 mt-5">
                {hobbies.map(hobby => (
                    <div key={hobby.name} className="flex flex-row text-primary gap-2 bg-secondary px-4 py-3 rounded-lg hover:outline hover:outline-primary transition-all">
                        <div className="p-2 rounded-lg bg-blue-950">
                            {hobby.icon}
                        </div>
                        <div className="flex flex-col justify-center items-start">
                            <span className="text-xs text-white">{hobby.name}</span>
                            <span className="text-[10px] text-muted-foreground">{hobby.content}</span>
                        </div>
                    </div>
                ))}
            </div>
            <div className="flex flex-row justify-between items-end gap-10 mt-5">
                {stats.map(stat => (
                    <div key={stat.title} className="flex flex-col justify-center items-center gap-3">
                        <span className="text-primary text-2xl font-semibold">{stat.title}</span>
                        <span className="text-muted-foreground text-sm">{stat.content}</span>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default AboutSection;
