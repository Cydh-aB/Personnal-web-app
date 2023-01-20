import CardWork from "../components/hero/CardWork"
import hrnetSmall from "../assets/screen-project/hrnetSmall.png"
import argentBankSmall from "../assets/screen-project/argentBankSmall.png"
import sportSeeSmall from "../assets/screen-project/sportSeeSmall.png"
import billedAppSmall from "../assets/screen-project/billedAppSmall.png"
import kasaSmall from "../assets/screen-project/kasaSmall.png"
import fisheyeSmall from "../assets/screen-project/fisheyeSmall.png"

export default function WorkPage() {
    return(
        <main className="text-gray-200 flex justify-center mb-20 2xl:mr-28 gap-16 flex-wrap mt-16 xl:mt-36 pt-3">
            <CardWork 
                title="Wealth Health"
                description="JQuery transition to React."
                origin="Openclassrooms Project"
                url="https://github.com/Cydh-aB/P14-HRnet"
                img={hrnetSmall}
            />

            <CardWork 
                title="Argent Bank"
                description="API usage for user bank account."
                origin="Openclassrooms Project"
                img={argentBankSmall}
                url="https://github.com/Cydh-aB/P13-Argent-Bank-Front-End"
            />

            <CardWork 
                title="Sport See"
                description="Analytics dahsboard development."
                origin="Openclassrooms Project"
                img={sportSeeSmall}
                url="https://github.com/Cydh-aB/P12-SportSee"
            />

            <CardWork 
                title="Billed App"
                description="Test and debug a SaaS RH project."
                origin="Openclassrooms Project"
                img={billedAppSmall}
                url="https://github.com/Cydh-aB/Billed-app-FR-Front"
            />

            <CardWork 
                title="Kasa"
                description="Web application development with REACT and REACT Router."
                origin="Openclassrooms Project"
                img={kasaSmall}
                url="https://github.com/Cydh-aB/P11-Appli-Web-React-et-React-Router"
            />

            <CardWork 
                title="Fisheye"
                description="Website with focus on accessibility for a platform of photographers."
                origin="Openclassrooms Project"
                img={fisheyeSmall}
                url="https://github.com/Cydh-aB/BeralAnthony_06_28012022"
            />
        </main>
    )
}