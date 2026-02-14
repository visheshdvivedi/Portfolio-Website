import React from "react";

type TileBackgroundProps = {
    children: React.ReactNode
}

const COLORS = [
  "#22d3ee", // cyan
  "#2dd4bf", // teal
  "#a78bfa", // violet
  "#f472b6", // pink
  "#fb7185", // rose
  "#facc15", // yellow
  "#4ade80", // green
];

const TileBackground = ({ children }: TileBackgroundProps) => {

    const PAD_WIDTH = 100;
    const PAD_HEIGHT = 100;
    const [pads, setPads] = React.useState<number[]>([]);

    React.useEffect(() => {
        const createPads = () => {
            const cols = Math.floor(window.innerWidth / PAD_WIDTH);
            const rows = Math.floor(window.innerHeight / PAD_HEIGHT);
            const total = rows * cols;

            console.log(rows, cols, total);
            setPads(new Array(total).fill(0));
        }

        createPads();
        window.addEventListener("resize", createPads);
        return () => window.removeEventListener("resize", createPads);
    }, []);

    React.useEffect(() => {
        const interval = setInterval(() => {
            const random = Math.floor(Math.random() * pads.length);
            const el = document.getElementById(`pad-${random}`);
            if (!el) return;

            const i = Math.floor(Math.random() * pads.length);
            const pad = document.getElementById(`pad-${i}`);
            if (!pad) return;

            const color = COLORS[Math.floor(Math.random() * COLORS.length)];

            pad.style.backgroundColor = color + "b3";
            pad.style.opacity = "0.5";
            pad.style.boxShadow = `0 0 22px ${color}`;

            setTimeout(() => {
                pad.style.backgroundColor = "";
                pad.style.boxShadow = "";
            }, 600);

        }, 600);
        
        const secondInterval = setInterval(() => {
            const random = Math.floor(Math.random() * pads.length);
            const el = document.getElementById(`pad-${random}`);
            if (!el) return;

            const i = Math.floor(Math.random() * pads.length);
            const pad = document.getElementById(`pad-${i}`);
            if (!pad) return;

            const color = COLORS[Math.floor(Math.random() * COLORS.length)];

            pad.style.backgroundColor = color + "b3";
            pad.style.opacity = "0.5";
            pad.style.boxShadow = `0 0 22px ${color}`;

            setTimeout(() => {
                pad.style.backgroundColor = "";
                pad.style.boxShadow = "";
            }, 600);

        }, 400);

        return () => {
            clearInterval(interval);
            clearInterval(secondInterval);
        }
    }, [pads]);

    return (
        <>
            <div 
                className="fixed inset-0 -z-10 grid" 
                style={{
                    gridTemplateColumns: `repeat(${Math.floor(window.innerWidth / PAD_WIDTH)}, ${PAD_WIDTH}px)`,
                    gridAutoRows: `${PAD_HEIGHT}px`,
                }}
            >
            {pads.map((_, i) => (
                <div
                key={i}
                id={`pad-${i}`}
                className="duration-300 bg-background hover:bg-primary/90 hover:shadow-[0_0_30px_#22d3ee] hover:opacity-75 hover:scale-105"
                />
            ))}
            </div>
            <div>
                {children}
            </div>
        </>
  );
};

export default TileBackground;
