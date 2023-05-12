import { History } from "../History/History"

import './Home.css'

export function Home(){
    return(
        <>
     

        <section className="banner"></section>
        <section className="history">
            <History/>
        </section>
        </>
    )
}