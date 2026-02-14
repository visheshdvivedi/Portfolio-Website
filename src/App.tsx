import Navbar from "./parts/Navbar";
import HeroSection from "./parts/HeroSection";
import TileBackground from "./parts/background";
import AboutSection from "./parts/AboutSection";
import SkillsAndTools from "./parts/Skills";
import FeaturedProjects from "./parts/Projects";
import Activity from "./parts/Activity";
import Experience from "./parts/Experience";

function App() {
    return (
        <TileBackground>
            <div className="flex flex-col justify-start items-center mt-5 gap-36">
                <Navbar />
                <HeroSection />
                <AboutSection />
                <SkillsAndTools />
                <FeaturedProjects />
                <Activity />
                <Experience />
            </div>
        </TileBackground>
    )
}

export default App;