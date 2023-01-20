import { AiFillGithub } from 'react-icons/ai'
import { IconContext } from "react-icons";


export default function Card(props) {
    return(
        <div className="w-80 border border-gray-500 border-opacity-30 rounded p-3 bg-gray-900">
            <img className='rounded w-[294px] h-[100px]' src={props.img}/>
            <div className='flex justify-between mb-3'>
                <h3 className='text-blue-500 text-2xl pt-2'>{props.title}</h3>
                <span className='border rounded-3xl p-1 mt-2 mb-0'>Public</span>
            </div>
            <p>{props.description}</p>
            <p className='mb-4 text-[14px]'>{props.origin}</p>
            <IconContext.Provider value={{ size: "3em", title:"Github Icon"}}>
            <div className='relative left-[40%] w-[50px]'>
                <span className='rounded-full w-[70px] h-[70px] top-[-10px] absolute bg-[#0d1117]'>
                    <a className='relative top-[6px] left-[11px] w-[50px] rounded-full' href={props.url} target="_blank"><AiFillGithub  /></a> 
               </span>
            </div>
            </IconContext.Provider>
        </div>
    )
}