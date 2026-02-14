import React from "react";
import {
    SiApacheairflow,
    SiDatabricks,
  SiDjango,
  SiDocker,
  SiJavascript,
  SiKubernetes,
  SiOpenai,
  SiPython,
  SiReact,
} from "react-icons/si";
import { TbBrandAzure } from "react-icons/tb";
import ExperienceTimeline from "../components/ui/experience/ExperienceTimeline";

const Experience = () => {
  const experience = [
    {
        startDate: new Date(2025, 3, 3),
        endDate: new Date(),
        title: "Software Engineer | Full Stack",
        company: "Boston Consulting Group (BCG)",
        description: [
            "Designed and developed an AI-powered interview platform from scratch, enabling fully automated candidate interviews and real-time interviewer assistance through intelligent question recommendations that ensure comprehensive topic coverage.",
            "Collaborated with retail clients in Thailand and London to build and deploy a price optimization and promotion success prediction platform powered by a proprietary forecasting and optimization engine, improving data-driven pricing and promotional decision-making."
        ],
        technologies: [
            { icon: <SiPython key={1} size={25} title="Python" /> },
            { icon: <SiJavascript key={2} size={25} title="JavaScript" /> },
            { icon: <SiReact key={3} size={25} title="React" /> },
            { icon: <SiDjango key={4} size={25} title="Django" /> },
            { icon: <TbBrandAzure key={5} size={25} title="Microsoft Azure" /> },
            { icon: <SiOpenai key={6} size={25} title="OpenAI" /> },
            { icon: <SiDocker key={7} size={25} title="Docker" /> },
            { icon: <SiKubernetes key={8} size={25} title="Kubernetes" /> },
            { icon: <SiDatabricks key={9}  size={25} title="Databricks" /> },
            { icon: <SiApacheairflow key={10} size={25} title="Apache Airflow" /> }
        ]
    },
    {
      startDate: new Date(2022, 10, 22),
      endDate: new Date(2025, 2, 28),
      title: "Senior Software Engineer",
      company: "HCL Technologies Ltd.",
      description: [
        "Mentor junior software engineer interns in full stack web development",
        "Developed bug generation and search tool using LLM (AzureOpenAI) and Machine Learning (Azure Cognitive Service) to allow senantic bug search capability and reduce duplicate work for client by 25%.",
        "Developed customer review categorization tool using LLM (AzureOpenAI) to categorize customer game reviews based on user sentiment (+ve or -ve) and accessibility impact and reduce customer manual review time by 45%",
        "Developed automated reporting tool using docxtpl library to reduce internal security team's report creation time by 50%.",
      ],
      technologies: [
        { icon: <SiPython key={1} size={25} title="Python" /> },
        { icon: <SiJavascript key={2} size={25} title="JavaScript" /> },
        { icon: <SiReact key={3} size={25} title="React" /> },
        { icon: <SiDjango key={4} size={25} title="Django" /> },
        { icon: <TbBrandAzure key={5} size={25} title="Microsoft Azure" /> },
        { icon: <SiOpenai key={6} size={25} title="OpenAI" /> },
      ],
    },
    {
      startDate: new Date(2020, 5, 24),
      endDate: new Date(2022, 10, 21),
      title: "Software Engineer",
      company: "HCL Technologies Ltd.",
      description: [
        "Developed and maintained APIs using Django and FastAPI, focusing on improving sql query time and improve scalability and performance",
        "Developed and maintained user interfaces in ReactJS, focusing on improving user engagement and decrease bounce rates",
        "Developed a Chrome Extension to streamline the bug logging process for external client by 35% through direct data capture and screenshot capabilities",
      ],
      technologies: [
        { icon: <SiPython key={1} size={25} title="Python" /> },
        { icon: <SiJavascript key={2} size={25} title="JavaScript" /> },
        { icon: <SiReact key={3} size={25} title="React" /> },
        { icon: <SiDjango key={4} size={25} title="Django" /> },
        { icon: <TbBrandAzure key={5} size={25} title="Microsoft Azure" /> },
      ],
    },
    {
      startDate: new Date(2019, 5, 24),
      endDate: new Date(2020, 5, 23),
      title: "Trainee Intern",
      company: "HCL Technologies Ltd.",
      description: [
        "Underwent training in basics of computing, operating systems, computer organization, programming",
        "Learned C# and Bash shell scripting",
      ],
      technologies: [
        { icon: <SiPython size={25} title="Python" /> },
        { icon: <SiJavascript size={25} title="JavaScript" /> },
        { icon: <SiReact size={25} title="React" /> },
        { icon: <SiDjango size={25} title="Django" /> },
      ],
    }
  ];

  return (
    <div className="flex flex-col justify-center items-center w-[80%] h-[80%] font-mono gap-8 my-10">
      <span className="text-primary text-sm">// Experience</span>
      <h2 className="text-3xl font-semibold text-white text-center">
        Professional&nbsp;
        <span className="text-gradient-primary">Journey</span>
      </h2>
      <p className="text-muted-foreground text-center">
        A timeline of my career growth and the impact I've made
      </p>
      <ExperienceTimeline experience={experience} />
    </div>
  );
};

export default Experience;
