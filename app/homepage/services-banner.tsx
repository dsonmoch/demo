
import CardLight from "./components/card-light"


export default function ServicesBanner() {

    return (
        <div className="flex flex-col bg-light justify-between items-center gap-20 items-center width-full xl:mt-30 mt-10 px-10 xl:px-20 xl:pt-5 py-15">
            <div className="flex flex-col gap-3 items-center w-full">
                <h1 className="md:text-5xl text-4xl bg-gradient-to-b from-fuchsia-900 to-[#f081f3] bg-clip-text text-transparent font-bold text-dark">What we provide?</h1>
                <h2 className="text-xl text-dark text-justify">Comprehensive social media solutions tailored to<i className="text-primary font-extrabold"> Grow Your Brand</i></h2>
            </div>

            <CardLight />
        </div>
    )
}