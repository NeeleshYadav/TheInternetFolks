import React from "react";
import {
  BrandingLogoDiv,
  BrandRecogDiv,
  Description,
  DescriptionTitle,
  DetailedRecordsDiv,
  FeaturesDiv,
  FullyCustomisableDiv,
  ImageBox,
  InfoDiv,
  Title,
  TitleDescription,
} from "../StyledComponents/InformationStyle";
import BrandRecognitionLogo from "../SVGStyles/icon-brand-recognition.svg";
import DetailedRecordLogo from "../SVGStyles/icon-detailed-records.svg";
import FullyCustomizableLogo from "../SVGStyles/icon-fully-customizable.svg";

function Information() {
  return (
    <div>
      <InfoDiv>
        <Title>Getting Started</Title>
        <Description>
          Track how your links are performing across the web with our advanced
          statistics dashboard.
        </Description>
        <FeaturesDiv>
          <BrandRecogDiv>
            <BrandingLogoDiv>
              <ImageBox src={BrandRecognitionLogo}></ImageBox>
              <DescriptionTitle>Brand Recognition</DescriptionTitle>
              <TitleDescription>
                Boost your brand recognition with each click. Generic Links
                don't mean a thing. Branded links help instil confidence in your
                content.
              </TitleDescription>
            </BrandingLogoDiv>
          </BrandRecogDiv>
          <DetailedRecordsDiv>
            <BrandingLogoDiv>
              <ImageBox src={DetailedRecordLogo}></ImageBox>
              <DescriptionTitle>Detailed Record</DescriptionTitle>
              <TitleDescription>
                Gain Insights into who is clicking your links. Knowing when and
                where people engage with your content helps inform better
                decisions.
              </TitleDescription>
            </BrandingLogoDiv>
          </DetailedRecordsDiv>
          <FullyCustomisableDiv>
            <BrandingLogoDiv>
              <ImageBox src={FullyCustomizableLogo}></ImageBox>
              <DescriptionTitle>Fully Customizable</DescriptionTitle>
              <TitleDescription>
                Improve brand awareness and content discoverability through
                customisable links, supercharging audience engagement.
              </TitleDescription>
            </BrandingLogoDiv>
          </FullyCustomisableDiv>
        </FeaturesDiv>
      </InfoDiv>
    </div>
  );
}

export default Information;
