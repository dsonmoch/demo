
import VideoPlayer from "../components/helper-components/video-player"
import CardLight from "./components/card-light"
import VideoData from "@/public/Videos/homepage/service.json"


export default function ServicesBanner() {

    return (
        <div className="flex flex-col bg-light justify-between items-center gap-20 items-center width-full py-20">
            <div className="backdrop-blur-md bg-white/20 shadow-xl shadow-fuchsia-100 lg:w-[75%] w-[95%] h-auto py-10 px-10  rounded-2xl ">
                <div className="flex flex-col gap-10 pb-10 items-center w-full">
                    <div className="w-full flex flex-col items-center">
                        <div className="w-20 h-9">
                            <VideoPlayer videoUrl={VideoData} />
                        </div>
                        <h1 className="md:text-7xl text-7xl bg-gradient-to-b from-fuchsia-900 to-[#f081f3] bg-clip-text text-transparent font-bold text-dark">What we provide?</h1>
                    </div>


                    <hr className="border w-full border-dark/10" />
                </div>

                <CardLight />
            </div>

        </div>
    )
}