import '../../../src/App.css'
import Past from './about/Button'

export default function About() {
    return(
        <main className="xl:w-1/2 m-[2%] mt-16 xl:mt-36 text-gray-200">
            <h1 className='text-xl text-blue-500 text-center mb-[2rem]'>
                Want to know more about me ? There you go !
            </h1>
            <p className='text-justify'>Here you can see some of my most recent professional experiences, and my diplomas. In the past, i wanted to go on the dev route but you know the workflow was massively flooded by others and the perspective of openings was to vague for me at that given times. BUT times have changed, and now it's time for me to embrace my first wish with all i have !</p>
            <Past />
        </main>
        
    )
}