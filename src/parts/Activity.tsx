import React from "react";
import { FaCode, FaFireAlt, FaGithub } from "react-icons/fa";
import { FiGithub } from "react-icons/fi";
import { LuTrophy } from "react-icons/lu";
import CalendarHeatmap from 'react-calendar-heatmap';
import { Tooltip } from "react-tooltip";
import { GITHUB_USERNAME, LEETCODE_USERNAME } from "../metadata";
import axios from "axios";
import { SiLeetcode } from "react-icons/si";
import { TbBrandLeetcode } from "react-icons/tb";

type LeetcodeAPIData = {
    activeYears: number[],
    streak: number,
    totalActiveDays: number,
    submissionCalendar: string
}

const Activity = () => {
    
    const statCards = [
        {
            "content": "Leetcode Day Streak",
            "icon": <FaFireAlt className="size-8" />
        },
        {
            "content": "Problems Solved",
            "icon": <FaCode className="size-8" />
        },
        {
            "content": "LeetCode Rank",
            "icon": <LuTrophy className="size-8" />
        }
    ]

    const currentDate = new Date();
    const startDate = new Date(currentDate.getFullYear() - 1, currentDate.getMonth(), currentDate.getDate(), 0, 0, 0)
    
    const [githubActivity, setGithubActivity] = React.useState([{
        date: new Date(), count: 0
    }]);
    const [leetcodeActivity, setLeetcodeActivity] = React.useState([
        { date: new Date(), count: 0 }
    ])
    const [stats, setStats] = React.useState({
        leetcodeStreak: 0,
        totalCommits: 0,
        problemSolved: 0,
        leetcodeRank: 0
    })

    const formatLeetcodeCalendarData = (apiData: LeetcodeAPIData) => {
        const data = JSON.parse(apiData.submissionCalendar);
        let formattedData = [];
        for (const [unixTime, count] of Object.entries(data)) {
            let unixTimeNumber = parseInt(unixTime);
            formattedData.push({
                date: new Date(unixTimeNumber * 1000),
                count: count
            })
        }
        return formattedData;
    }

    const retrieveGithubActivity = async () => {
        try {
            const response = await axios.get(`https://github-contributions-api.jogruber.de/v4/${GITHUB_USERNAME}`);
            if (response.status != 200) {
                console.error(`Failed to retrieve github activity: ${response.data}`);
                return;
            }
            const data = response.data;
            setStats(stat => {
                return { ...stat, totalCommits: getTotalCount(data['contributions']) }
            })
            setGithubActivity(data['contributions']);
        } catch (error) {
            console.error(`Failed to retrieve github activity: ${error}`);
        }
    }

    const retrieveLeetcodeSubmissions = async (calendarYear: number) => {
        try {
            const response = await axios.get(`https://alfa-leetcode-api.onrender.com/${LEETCODE_USERNAME}/calendar?year=${calendarYear}`);
            if (response.status != 200) {
                console.error(`Failed to retrieve leetcode submissions ${response.data}`);
                return;
            }
            const data = response.data;
            const formattedData = formatLeetcodeCalendarData(data);
            setStats(stat => {
                return { ...stat, problemSolved: getTotalCount(formattedData) }
            })
            setLeetcodeActivity(activity => [...activity, ...formattedData])
        } catch (error) {
            console.error(`Failed to retrieve leetcode submissions ${error}`);
        }
    }

    // const retrieveLeetcodeProfile = async () => {
    //     try {
    //         const response = await axios.get(`https://alfa-leetcode-api.onrender.com/${LEETCODE_USERNAME}/profile`);
    //         if (response.status != 200) {
    //             console.error(`Failed to retrieve leetcode profile ${response.data}`);
    //             return;
    //         }
    //         const data = response.data;
    //         console.log(data);
    //         setStats(stat => {
    //             return  { ...stat, leetcodeRank: data['ranking'], problemSolved: data['totalSolved'] }
    //         })
    //     } catch (error) {
    //         console.error(`Failed to retrieve leetcode profile ${error}`);
    //     }
    // }

    const getTotalCount = (data: any) => {
        if (!data || data.length < 5) return 0;
        let count = 0;
        console.log(data);
        for (let activity of data) {
            count += activity.count;
        }
        return count;
    }

    // const getRetrievedStatByContent = (content: string) => {
    //     if (content === "Leetcode Day Streak") return stats.leetcodeStreak;
    //     else if (content === "Total Commits") return stats.totalCommits;
    //     else if (content === "Problems Solved") return stats.problemSolved;
    //     else if (content === "Leetcode Rank") return stats.leetcodeRank;
    // }

    React.useEffect(() => {
        retrieveGithubActivity();
        const currentYear = new Date().getFullYear();
        retrieveLeetcodeSubmissions(currentYear);
        retrieveLeetcodeSubmissions(currentYear - 1);
    }, []);

    return (
        <div id="activity" className="flex flex-col justify-center items-center w-[80%] h-[80%] font-mono gap-8 my-10">
            <span className="text-primary text-sm">// Programming Activity</span>
            <h2 className="text-3xl font-semibold text-white text-center">
                Consistent&nbsp;
                <span className="text-gradient-primary">Growth</span>
            </h2>
            <p className="text-muted-foreground text-center">
                Tracking my coding journey through commits and problem solving
            </p>
            {/* <div className="flex flex-row justify-between items-end gap-36 mt-5">
                {statCards.map(stat => (
                    <div key={stat.content} className="flex flex-col justify-center items-center gap-3">
                        <span className="text-primary">
                            {stat.icon}
                        </span>
                        <span className="text-white text-3xl font-semibold">{getRetrievedStatByContent(stat.content)}</span>
                        <span className="text-muted-foreground">{stat.content}</span>
                    </div>
                ))}
            </div> */}
            <div className="w-full flex flex-row gap-5">
                <div className="flex-1 flex flex-col gap-3">
                    <div className="flex flex-row justify-between items-end">
                        <h3 className="w-full flex flex-row justify-start items-center gap-1 mt-10">
                            <FiGithub className="text-primary size-6" />&nbsp;
                            <span className="text-white">Github Contributions</span>
                        </h3>
                        <span className="text-primary font-bold text-xl">{stats.totalCommits}</span>
                    </div>
                    <CalendarHeatmap 
                        startDate={startDate}
                        endDate={currentDate}
                        values={githubActivity}
                        classForValue={(value) => {
                            if (!value) return "heatmap-0";
                            const count = value.count;
                            if (count <= 5) return `heatmap-${count}`;
                            return 'heatmap-5';
                        }}
                        showMonthLabels={false}
                        tooltipDataAttrs={value => {
                            if (!value || !value.date) return {}
                            const dateString = new Date(value.date).toDateString();
                            return { 'data-tooltip-id': `github-${value.date}`, 'data-tooltip-content': `${dateString} (${value.count})` }
                        }}
                    />
                </div>
                <div className="flex-1 flex flex-col gap-3">
                    <div className="flex flex-row justify-between items-end">
                        <h3 className="w-full flex flex-row justify-start items-center gap-1 mt-10">
                            <FiGithub className="text-primary size-6" />&nbsp;
                            <span className="text-white">Leetcode Submissions</span>
                        </h3>
                        <span className="text-primary font-bold text-xl">{stats.problemSolved}</span>
                    </div>
                    <CalendarHeatmap 
                        startDate={startDate}
                        endDate={currentDate}
                        values={leetcodeActivity}
                        classForValue={(value) => {
                            if (!value) return "heatmap-0";
                            const count = value.count;
                            if (count <= 5) return `heatmap-${count}`;
                            return 'heatmap-5';
                        }}
                        showMonthLabels={false}
                        tooltipDataAttrs={value => {
                            if (!value || !value.date) return {}
                            const dateTimeString = value.date.toDateString();
                            return { 'data-tooltip-id': `leetcode-${value.date}`, 'data-tooltip-content': `${dateTimeString} (${value.count})` }
                        }}
                    />
                </div>
            </div>
            {githubActivity.map(value => (
                <Tooltip id={`github-${value.date}`} />
            ))}
            {leetcodeActivity.map(value => (
                <Tooltip id={`leetcode-${value.date}`} />
            ))}
        </div>
    );
};

export default Activity;
