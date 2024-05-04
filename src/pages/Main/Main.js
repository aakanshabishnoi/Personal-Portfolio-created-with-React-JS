import React from 'react'
import {Navbar, About,Education, Footer, Landing} from '../../components'

function Main(){
    return(
        <div>
            <Navbar/>
            <Landing/>
            <About/>
            <Education/>
            <Footer/>
        </div>
    )
}
export default Main