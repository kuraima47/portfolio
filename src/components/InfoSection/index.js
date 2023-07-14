import React from 'react';
import { InfoContainer, InfoWrapper, InfoRow, Column1, Column2,TextWrapper, TopLine, Heading, Subtitle, BtnWrap, ImgWrap, Img} from './InfoElements';
import {Button, ButtonHref} from '../ButtonElement';

const InfoSection = ({lightbg, id, imgStart, topLine, lightText, headline, darkText, description,buttonLabel, img, alt, primary, dark, dark2, primarybtn, direction, buttondirection }) => {
  return (
    <>
        <InfoContainer lightBg={lightbg} id={id}>
            <InfoWrapper>
                <InfoRow imgStart={imgStart}>
                    <Column1>
                        <TextWrapper>
                            <TopLine>{topLine}</TopLine>
                            <Heading lightText={lightText}>{headline}</Heading>
                            <Subtitle darkText={darkText}>{description}</Subtitle>
                            <BtnWrap>
                                {buttondirection ? <Button to={direction}
                                smooth={true}
                                duration={500}
                                spy={true}
                                exact ="true"
                                offset={-80}
                                primary={primary ? 1 : 0}
                                primarybtn={primarybtn ? 1 : 0}
                                dark={dark ? 1 : 0}
                                dark2={dark2 ? 1 : 0}
                                >{buttonLabel}</Button> : <ButtonHref href={direction}
                                primary={primary ? 1 : 0}
                                primarybtn={primarybtn ? 1 : 0}
                                dark={dark ? 1 : 0}
                                dark2={dark2 ? 1 : 0}
                                >{buttonLabel}</ButtonHref>}
                                
                            </BtnWrap>
                        </TextWrapper>
                    </Column1>
                    <Column2>
                        <ImgWrap>
                            <Img src={img} alt={alt}/>
                        </ImgWrap>
                    </Column2>
                </InfoRow>
            </InfoWrapper>
        </InfoContainer>
    </>
  )
}

export default InfoSection