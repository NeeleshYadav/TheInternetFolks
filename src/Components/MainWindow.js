import React from 'react'
import Navigation from './Navigation'
import Banner from './Banner'
import Shorten from './Shorten'
import Information from './Information'
import Boost from './Boost'
import Footer from './Footer'

function MainWindow() {
    return (
        <div>
            <Navigation/>
            <Banner/>
            <Shorten/>
            <Information/>
            <Boost/>
            <Footer/>
        </div>
    )
}

export default MainWindow
