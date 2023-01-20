import Iframe from 'react-iframe'

export default function Form(){
    return(
        <div className='[&_h2]:text-blue-500 mt-16 xl:mt-36 [&_h2]:text-center'>
            <h2 className='text-3xl mb-7'>Feel free to contact  me anytime you want.</h2>
            <p className='text-xl text-gray-300 text-center'>I will respond to your request as fast as i can !</p>
            <div className="mt-10 [&_input]:h-12 [&_input]:pl-5 flex-col lg:flex-row flex lg:justify-around border-t p-10 pt-12">
                <form name="contact" method="POST" netlify netlify-honeypot="bot-field" className=" flex flex-col [&_input]:bg-gray-900 [&_textarea]:bg-gray-900 [&_textarea]:text-gray-200 [&_input]:text-gray-200">
                    <input type="hidden" name="form-name" value="contact" />
                    <div className="flex justify-between [&_input]:w-[49%]">
                        <input className="focus:placeholder-transparent" type="text" name="name" placeholder="Name"/>
                        <input className="focus:placeholder-transparent" type="email" name="email" placeholder="Email"/>
                    </div>
                    <div>
                        <input className="focus:placeholder-transparent w-full mt-4" type="text" name="subject" placeholder="Subject"/>
                    </div>
                    <div>
                        <textarea className="focus:placeholder-transparent w-full mt-4 min-h-[150px] pl-5 pt-2 h-[176px]" name="message" placeholder="Message"></textarea>
                    </div>
                    <div className='flex justify-center mt-4'>
                        <button type="submit" className='bg-gray-900 w-28 h-12 text-xl text-gray-200'>Send</button>
                    </div>
                </form>
                <div className=' xl:ml-20 mt-6 lg:mt-0'>
                    <Iframe 
                        url='https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d96414.64768833129!2d3.015137647676506!3d50.57906665725371!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47c2d4619fe76ba9%3A0xf59d5471198f7082!2s308%20Rue%20du%20General%20de%20Gaulle%2C%2059139%20Wattignies!5e0!3m2!1sfr!2sfr!4v1673535030772!5m2!1sfr!2sfr'
                        width='100%'
                        height='300px'
                        id=""
                        className=''
                        display='block'
                        position='relative'
                    />
                </div>
            </div>
        </div>
    )
}