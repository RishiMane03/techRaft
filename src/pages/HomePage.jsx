import Navbar from "../components/Navbar"
import HeroText from "../components/HeroText"
import MapImages from "../components/MapImages"
import BoatVideo from "../components/BoatVideo"

function HomePage(){
    return (
        <div className="h-[100vh] overflow-hidden">
            <Navbar/>
            <HeroText/>
            <MapImages/>
            <BoatVideo/>
        </div>
    )
}

export default HomePage