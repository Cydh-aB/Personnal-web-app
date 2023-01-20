export default function Diploma(){
    return(
        <div className="flex flex-col [&_h2]:bg-gray-900  [&_h2]:border [&_h2]:border-gray-500 [&_h2]:border-opacity-30 [&_h2]:rounded p-3 [&_h2]:text-xl [&_h2]:mb-4 [&_h2]:text-blue-500 border-t pt-10 [&_section]:flex [&_section]:justify-evenly [&_h2]:h-20 [&_h2]:p-3 [&_section]:w-full [&_div]:text-center [&_div]:w-80 [&_p]:pt-6 items-center gap-4">
            <section>
                <div>
                    <h2 className="">Développeur d'application - Javascript REACT</h2>
                </div>
                <div>
                    <p>Openclassrooms | August 2021 - today </p>
                </div>
            </section>  
            <section>
                <div>
                    <h2>CAP Cuisine</h2>
                </div>
                <div>
                    <p>CFA Henri Bazin (Nancy) | 2017-2019</p>
                </div>
            </section>
            <section>
                <div>
                    <h2>BACCALAUREAT Littéraire - mention Arts Plastiques</h2>
                </div>
                <div>
                    <p>Lycée Giocante de Casabianca, Corsica</p>
                </div>
            </section> 
        </div>
    )
}