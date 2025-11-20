import AnimatedAsset from "../components/helper-components/animated-asset";
import VideoPlayer from "../components/helper-components/video-player";
import ResultCard from "./components/result-card";


export default function ResultSection() {
    return (
        <div className="w-full bg-light flex flex-col pt-10 pb-20 items-center">
            <div className="flex flex-col items-center lg:flex-row gap-8 lg:w-[75%] w-[95%] rounded-3xl  py-10  border border-fuchsia-300/50 shadow-lg shadow-fuchsia-300 ">
                {/* <AnimatedAsset
                    svgSrc="/Images/blur-background.png"
                    animation="slide-horizontal"
                    className="absolute top-1/2 left-1/2 
             -translate-x-1/2 -translate-y-1/2 
              w-[200px] h-[200px]"
                /> */}
                <div className="flex flex-col gap-8 items-start px-10">
                    <h1 className="text-7xl bg-gradient-to-b p-5 from-fuchsia-900 via-[#f081f3] to-[#a3a9ce] bg-clip-text text-transparent font-extrabold">Numbers are telling our story</h1>
                </div>

                <div className="w-full h-full">
                    <ResultCard />
                </div>
            </div>
        </div>


    )
}