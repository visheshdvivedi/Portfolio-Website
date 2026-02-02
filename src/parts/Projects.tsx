import React from 'react'
import LeetcloneImage from "../assets/projects/Leetclone-image.png";
import { CiGlobe } from "react-icons/ci";
import { SiGithub } from 'react-icons/si';
import { IoIosArrowUp, IoIosArrowForward } from 'react-icons/io';

type Project = {
    name: string,
    image: string,
    shortDescription: string,
    longDescription: string,
    tags: string[],
    websiteLink: string,
    githubLink: string
}

const projects: Project[] = [
    {
        name: "LeetClone",
        image: LeetcloneImage,
        shortDescription: "A LeetCode-inspired platform for practicing DSA",
        longDescription: "A LeetCode-inspired coding platform that allows users to practice data structures and algorithms by solving problems with real-time code execution, structured problem statements, and a clean, distraction-free interface.",
        tags: [
            "Python", "JavaScript", "React", "Django", "PostgreSQL"
        ],
        websiteLink: "https://leetclone.dvivedi.in/",
        githubLink: "https://github.com/visheshdvivedi/LeetClone"
    },
    {
        name: "LeetClone",
        image: LeetcloneImage,
        shortDescription: "A LeetCode-inspired platform for practicing DSA",
        longDescription: "A LeetCode-inspired coding platform that allows users to practice data structures and algorithms by solving problems with real-time code execution, structured problem statements, and a clean, distraction-free interface.",
        tags: [
            "Python", "JavaScript", "React", "Django", "PostgreSQL"
        ],
        websiteLink: "https://leetclone.dvivedi.in/",
        githubLink: "https://github.com/visheshdvivedi/LeetClone"
    }
]

const ProjectCard = ({ project }: { project: Project }) => {

    const [opened, setOpened] = React.useState<boolean>(false);

    const toggleOpened = () => {
        setOpened(!opened);
    }

    return (
        <div className='p-6 bg-secondary rounded-lg max-w-2xl h-full mt-6 hover:outline-1 hover:outline-primary transition-all hover:-translate-y-1'>
            {/* image comes here */}
            <div className="h-64 rounded-lg">
                <img
                    src={project.image}
                    alt="image"
                    className="w-full h-full object-cover object-top border border-gray-500 rounded-lg"
                />
            </div>
            <h2 className='text-start py-5 text-xl text-white font-semibold'>{project.name}</h2>
            <p className="w-full text-start">{opened ? project.longDescription : project.shortDescription}</p>
            <div className='w-full flex flex-row justify-start items-center gap-3 mt-3'>
                {project.tags.map(tag => (
                    <span className='px-2 py-2 text-xs rounded-lg bg-black'>{tag}</span>
                ))}
            </div>
            <div className='w-full flex flex-row justify-between items-center mt-5 text-white'>
                <div className='flex flex-row justify-start items-center gap-5'>
                    <a href={project.websiteLink} className='rounded-lg p-2 hover:bg-primary/50' target="_blank">
                    <CiGlobe />
                    </a>
                    <a href={project.githubLink} className='rounded-lg p-2 hover:bg-primary/50' target="_blank">
                        <SiGithub />
                    </a>
                </div>
                <button onClick={toggleOpened} className='flex flex-row justify-between items-center text-sm transition-all hover:scale-105'>
                    {
                        !opened ? (<>More&nbsp;<IoIosArrowForward /></>) : (<>Less&nbsp;<IoIosArrowUp /></>)
                    }
                </button>
            </div>
        </div>
    )
}


const FeaturedProjects = () => {

    return (
        <div className="flex flex-col justify-center items-center w-[80%] h-[80%] font-mono gap-5 mt-10">
            <span className="text-primary text-sm">// Portfolio</span>
            <h2 className="text-3xl font-semibold text-white text-center">
                Featured{" "}
                <span className="text-gradient-primary">Projects</span>
            </h2>
            <p className="text-muted-foreground text-center">
                A selection of projects that showcase my skills and passion for building
                <div className='my-6 flex flex-col ap-5'>
                    {projects.map(project => <ProjectCard project={project} />)}
                </div>
            </p>
        </div>
    )
}

export default FeaturedProjects