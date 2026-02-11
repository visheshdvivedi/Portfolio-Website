import React from "react";
import { FaCode, FaFireAlt, FaGithub } from "react-icons/fa";
import { FiGithub } from "react-icons/fi";
import { LuTrophy } from "react-icons/lu";
import CalendarHeatmap from 'react-calendar-heatmap';
import { Tooltip } from "react-tooltip";
import { GITHUB_USERNAME, LEETCODE_USERNAME } from "../metadata";
import axios from "axios";

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

    const currentDate = new Date();
    const startDate = new Date(currentDate.getFullYear() - 1, currentDate.getMonth(), currentDate.getDate(), 0, 0, 0)
    
    const [githubActivity, setGithubActivity] = React.useState([{
        date: new Date(), count: 0
    }]);

    const retrieveGithubActivity = async () => {
        try {
            const response = await axios.get(`https://github-contributions-api.jogruber.de/v4/${GITHUB_USERNAME}`);
            if (response.status != 200) {
                console.error(`Failed to retrieve github activity: ${response.data}`);
            }
            const data = response.data;
            setGithubActivity(data['contributions']);
        } catch (error) {
            console.error(`Failed to retrieve github activity: ${error}`);
        }
    }

    const retrieveLeetcodeSubmissions = async () => {
        try {
            const response = await axios.get("https://leetcode.com/graphql", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                data: JSON.stringify({
                    query: `
                        query getUserProfile($username: String!) {
                        matchedUser(username: $username) {
                            submitStats {
                            acSubmissionNum {
                                difficulty
                                count
                                submissions
                            }
                            }
                        }
                        }
                    `,
                    variables: { LEETCODE_USERNAME }
                })
            });
            if (response.status != 200) {
                console.error(`Failed to retrieve leetcode submissions ${response.data}`);
            }
            const data = response.data;
            console.log(data);
        } catch (error) {
            console.error(`Failed to retrieve leetcode submissions ${error}`);
        }
    }

    React.useEffect(() => {
        retrieveGithubActivity();
        retrieveLeetcodeSubmissions();
    }, []);

    return (
        <div className="flex flex-col justify-center items-center w-[80%] h-[80%] font-mono gap-8 my-10">
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
                startDate={startDate}
                endDate={currentDate}
                values={githubActivity}
                classForValue={(value) => {
                    if (!value) return "heatmap-0";
                    const count = value.count;
                    if (count <= 10) return `heatmap-${count}`;
                    return 'heatmap-10';
                }}
                showMonthLabels={false}
                tooltipDataAttrs={value => {
                    if (!value) return {}
                    return { 'data-tooltip-id': `github-${value.date}`, 'data-tooltip-content': `${value.date} (${value.count})` }
                }}
            />
            {githubActivity.map(value => (
                <Tooltip id={`github-${value.date}`} />
            ))}
            <h3 className="w-full flex flex-row justify-start items-center gap-1 mt-10">
                <FiGithub className="text-primary size-6" />&nbsp;
                <span className="text-white">Leetcode Submissions</span>
            </h3>
            <CalendarHeatmap 
                startDate={startDate}
                endDate={currentDate}
                values={githubActivity}
                classForValue={(value) => {
                    if (!value) return "heatmap-0";
                    const count = value.count;
                    if (count <= 10) return `heatmap-${count}`;
                    return 'heatmap-10';
                }}
                showMonthLabels={false}
                tooltipDataAttrs={value => {
                    if (!value) return {}
                    return { 'data-tooltip-id': `github-${value.date}`, 'data-tooltip-content': `${value.date} (${value.count})` }
                }}
            />
            {githubActivity.map(value => (
                <Tooltip id={`github-${value.date}`} />
            ))}
        </div>
    );
};

export default Activity;
