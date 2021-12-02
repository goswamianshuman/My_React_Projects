import React from 'react' 
import '../../App.css' 
import Cards from '../Cards'
import Centralpart from '../Centralpart'
import Footer from '../Footer'

function Home() {
    return (
        <div>
            <Centralpart /> 
            <Cards /> 
            <Footer />
        </div>
    )
}

export default Home
