import React from 'react'
import {Navbar, About,Education, Footer, Landing , Contacts, Skills, Experience, Achievement, /*Projects*/} from '../../components'

function Main(){
    return(
        <div>
            <Navbar/>
            <Landing/>
            <About/>
            <Education/>
            <Skills/>
            <Experience/>
            {/* <Projects/> */}
            <Achievement/>
            <Contacts/>
            <Footer/>
        </div>
    )
}
export default Main