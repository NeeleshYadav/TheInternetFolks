import React from 'react'
import {MainDiv, ImageArea, TextArea, Heading} from '../StyledComponents/BannerStyle'
import {Button} from '../StyledComponents/NavigationStyle'
import BannerImage from '../SVGStyles/illustration-working.svg'
function Banner() {

function handleClick() {
    alert("Get started clicked")
}

    return (
        <div>
            <MainDiv>
                <TextArea> 
                    <Heading>More than just shorter links</Heading>
                    <h3>Build your brand's recognition and get detailed insights on how your links are performing.</h3>
                    <Button onClick={handleClick}>Get Started</Button>
                </TextArea>
                <ImageArea>
                  <img src={BannerImage} alt="Unable to Load File" height="400px" width="500px"></img>
                </ImageArea>
            </MainDiv>
        </div>
    )
}

export default Banner
