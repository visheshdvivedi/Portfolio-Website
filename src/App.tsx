import Navbar from "./parts/Navbar";
import HeroSection from "./parts/HeroSection";
import TileBackground from "./parts/background";
import AboutSection from "./parts/AboutSection";
import SkillsSection from "./parts/SkillsSection";

function App() {
    return (
        <TileBackground>
            <div className="flex flex-col justify-start items-center mt-5 gap-60">
                <Navbar />
                <HeroSection />
                <AboutSection />
                <SkillsSection />
            </div>
        </TileBackground>
    )
}

export default App;