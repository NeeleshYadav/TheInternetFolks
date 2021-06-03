import React from "react";
import {
  BoostDiv,
  BoostSVGImg,
  BoostTitle,
  GetLinkButton,
} from "../StyledComponents/BoostStyle";
import BoostSVG from "../SVGStyles/bg-boost-desktop.svg";

function Boost() {
  return (
    <BoostDiv>
      <BoostSVGImg src={BoostSVG}></BoostSVGImg>
      <BoostTitle>Boost your links today</BoostTitle>
      <GetLinkButton>Get Started</GetLinkButton>
    </BoostDiv>
  );
}

export default Boost;
