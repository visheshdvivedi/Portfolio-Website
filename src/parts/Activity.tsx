import React from "react";
import { FaCode, FaFireAlt, FaGithub } from "react-icons/fa";
import { FiGithub } from "react-icons/fi";
import { LuTrophy } from "react-icons/lu";
import CalendarHeatmap from 'react-calendar-heatmap';

const Activity = () => {
    
    const stats = [
        {
            "title": "42",
            "content": "Day Streak",
            "icon": <FaFireAlt className="size-8" />
        },
        {
            "title": "2847",
            "content": "Total Commits",
            "icon": <FiGithub className="size-8" />
        },
        {
            "title": "523",
            "content": "Problems Solved",
            "icon": <FaCode className="size-8" />
        },
        {
            "title": "Top 5%",
            "content": "LeetCode Rank",
            "icon": <LuTrophy className="size-8" />
        }
    ]

    return (
        <div className="flex flex-col justify-center items-center w-[80%] h-[80%] font-mono gap-8 mt-10">
            <span className="text-primary text-sm">// Programming Activity</span>
            <h2 className="text-3xl font-semibold text-white text-center">
                Consistent&nbsp;
                <span className="text-gradient-primary">Growth</span>
            </h2>
            <p className="text-muted-foreground text-center">
                Tracking my coding journey through commits and problem solving
            </p>
            <div className="flex flex-row justify-between items-end gap-36 mt-5">
                {stats.map(stat => (
                    <div key={stat.title} className="flex flex-col justify-center items-center gap-3">
                        <span className="text-primary">
                            {stat.icon}
                        </span>
                        <span className="text-white text-3xl font-semibold">{stat.title}</span>
                        <span className="text-muted-foreground">{stat.content}</span>
                    </div>
                ))}
            </div>
            <h3 className="w-full flex flex-row justify-start items-center gap-1 mt-10">
                <FiGithub className="text-primary size-6" />&nbsp;
                <span className="text-white">Github Contributions</span>
            </h3>
            <CalendarHeatmap 
                startDate={new Date('2025-01-01')}
                endDate={new Date('2026-01-01')}
                values={[
                    {date: '2025-01-01', count: 12},
                    {date: '2025-01-02', count: 14},
                    {date: '2025-01-03', count: 0},
                    {date: '2025-01-04', count: 4}
                ]}
            />
        </div>
    );
};

export default Activity;
