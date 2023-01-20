import profilePic from "../../assets/profileJS.jpg"
import '../../../src/App.css'
import ArrowRight from "./Bandsvg"

export default function Band(){
    return(
        <div className="flex justify-center sm:justify-evenly">
            <img src={profilePic} alt="Profile Picture" className="rounded-full xl:w-72 z-[-1] sm:h-[250px] sm:w-[250px] w-0 h-0 xl:h-72 sm:block sm:relative sm:top-[7.5rem] sm:left-4 md:top-[9.5rem] xl:absolute profilePic xl:top-[8.5em] xl:left-40 2xl:left-80" />
            <section className="text-white z-[-2] mt-44 vsm:mt-32 sm:mr-2 md:mt-40 w-80 xl:m-36 xl:mr-10 xl:mt-72">
                <div className="[&_div]:flex [&_div]:pl-10 [&_div]:mt-1 xl:mt-40 border p-5 rounded-2xl border-opacity-30 bg-gray-900 border-gray-500">
                    <h1 className="text-center text-blue-500">BERAL Anthony, Web Developper</h1>
                    <div>
                        <ArrowRight text={"HTML"}/>
                    </div>
                    <div>
                        <ArrowRight text={"CSS"}/>
                    </div>  
                    <div>
                        <ArrowRight text={"JavaScript"}/>
                    </div>
                    <div>
                        <ArrowRight text={"REACT"}/>
                    </div>
                    <p className="mt-5">... For the time being ! More is coming.</p>
                </div>
            </section>
        </div>
    )
}