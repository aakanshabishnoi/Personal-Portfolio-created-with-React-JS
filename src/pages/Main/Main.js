import React from 'react'
import {Navbar, About,Education, Footer, Landing , Contacts, Skills, Experience} from '../../components'

function Main(){
    return(
        <div>
            <Navbar/>
            <Landing/>
            <About/>
            <Education/>
            <Skills/>
            <Experience/>
            <Contacts/>
            <Footer/>
        </div>
    )
}
export default Main