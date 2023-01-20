export default function Form(){
    return(
        <>
            <form
                action="https://formie.io/form/2dd42032-ad84-4c84-920b-7bf9ec6109ad"
                method="POST"
            >
                <input name="contact" type="text" />
                <input name="email" type="email" />
                <input name="_redirect" type="hidden" value="https://yoursite/success" />

                <button>Submit</button>
            </form>
        </>
    )
}