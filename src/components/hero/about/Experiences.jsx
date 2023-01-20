import '../../../../src/App.css'
import { AiFillGithub } from 'react-icons/ai'
import { IconContext } from "react-icons";

export default function Experiences(){
    return(
        <>
            <section className="border-t pt-10 flex flex-col gap-4 [&_h2]:border [&_h2]:border-gray-500 [&_h2]:border-opacity-30  [&_h2]:rounded [&_h2]:bg-gray-900  [&_article]:flex [&_article]:justify-evenly [&_div]:w-80 [&_div]:[&_h2]:h-20 [&_h2]:p-3 [&_div]:text-center [&_h2]:text-xl [&_h2]:text-blue-500 [&_h3]:text-blue-500">
                <article>
                    <div>
                        <h2>Openclassrooms projects - Javascript React</h2> 
                    </div>
                    <div>
                        <h3>Openclassrooms | August 2021 - today</h3>
                        <p>All formation projects cleared with validation, in the context of a professional environment, you can see all my work here :</p>
                        <IconContext.Provider value={{ size: "3em", title:"Github Icon"}}>
                            <div className='relative left-[40%] w-[50px]'>
                                <a className='relative top-[6px] left-[11px] w-[50px] rounded-full' href="https://github.com/Cydh-aB" target="_blank"><AiFillGithub  /></a>
                            </div>
                        </IconContext.Provider>
                    </div>
                </article>
                <article>
                    <div>
                        <h2>Cook</h2>
                    </div>
                    <div>
                        <h3>Le Petit Comptoir (Lunéville) | September 2019 - June 2020</h3>
                        <p>Number-two cook in a traditionnal French restaurant. I was in charge of 3 apprentice during that time</p>
                    </div>
                </article>
                <article>
                    <div>
                        <h2>Apprentice Cook</h2>
                    </div>
                    <div>
                        <h3>Le Petit Comptoir (Lunéville) | September 2018 - September 2019</h3>
                    </div>
                </article>
            </section>
            <div className="pt-10 text-center">
                <p>Before that i worked in differents places, majority has a seller - delivery man for some hypermarket.</p>
            </div>
        </>
    )
}