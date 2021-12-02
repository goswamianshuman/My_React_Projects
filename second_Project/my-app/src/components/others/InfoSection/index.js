import React from "react";
import { Button } from "../ButtonElements";

import {
  InfoContainer,
  InforWrapper,
  InfoRow,
  Coloumn1,
  TextWrapper,
  TopLine,
  Heading,
  Subtitle,
  Btnwrap,
  Coloumn2,
  Img,
  ImgWrap,
} from "./InfoElements";

const InfoSection = ({
  lightBg,
  id,
  imgStart,
  topLine,
  lightText,
  headline,
  darkText,
  description,
  buttonLable,
  img,
  alt,
}) => {
  return (
    <>
      <InfoContainer lightBg={lightBg} id={id}>
        <InforWrapper>
          <InfoRow imgStart={imgStart}>
            <Coloumn1>
              <TextWrapper>
                <TopLine>{topLine}</TopLine>
                <Heading lightText={lightText}>{headline}</Heading>
                <Subtitle darkText={darkText}>{description}</Subtitle>
                <Btnwrap>
                  <Button
                    dark="true"
                    primary="true"
                    to="home"
                    smooth={true}
                    duration={500}
                    spy={true}
                    exact="true"
                    offset={-80}
                  >
                    {buttonLable}
                  </Button>
                </Btnwrap>
              </TextWrapper>
            </Coloumn1>
            <Coloumn2>
              <ImgWrap>
                <Img src={img} alt={alt} />
              </ImgWrap>
            </Coloumn2>
          </InfoRow>
        </InforWrapper>
      </InfoContainer>
    </>
  );
};

export default InfoSection;
