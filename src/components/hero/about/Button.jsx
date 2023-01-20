import { useState } from "react"
import Experiences from "./Experiences";
import Diploma from "./Diploma";

export default function Past() {

    const [state, setState] = useState();

    let description;
    if(state == 'school') {
        description = <Diploma/>
    } else {
        description = <Experiences />
    }

    return(
        <>
            <div className="flex gap-10 sm:gap-40 text-xl justify-center [&_a]:relative mt-8 mb-8">
                    <button onClick={() => setState('xp')} className="line"><span className=" hover:border-b hover:border-gray-500">Experiences</span></button>
                    <button onClick={() => setState('school')} className="line2"><span className="hover:border-b hover:border-gray-500">Diplomas</span></button>
            </div>
            {description}
        </>
    )
}