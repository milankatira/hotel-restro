import React from 'react'
import styled, { css } from 'styled-components/macro';
import { SliderData } from '../data/SliderData'
import { Button } from './Button';
import { IoMdArrowRoundForward } from 'react-icons/io';
import { IoArrowForward, IoArrowBack } from 'react-icons/io5';

const HeroSelection = styled.section`
        height: 100vh;
        max-height: 1100px;
        position: relative;
        overflow: hidden;
`
const SliderButtons = styled.div`
position: absolute;
bottom:50;
right:50;
display: flex;
z-index: 10;
`
const HeroWrapper = styled.div`
       width: 100%;
       height: 100%;
       display: flex;
       justify-content: center;
       align-items: center;
       overflow: hidden;
       position: relative;
`

const HeroSlide = styled.div``
const HeroSlider = styled.div``
const HeroImage = styled.div``
const HeroContent = styled.div``
const Arrow = styled(IoMdArrowRoundForward)``;
const arrowButtons = css`
width: 50px;
height: 50px;
color: #666645;
cursor: pointer;
background-color: #000d1a;
border-radius:50px;
margin-right:1rem;
user-select:none;
transition:0.3s;

&:hover{
background-color: #cd385f;
transform:scale(1.05);
}
`
const PreArrow = styled(IoArrowBack)`
${arrowButtons}
`
const NextArrow = styled(IoArrowForward)`
${arrowButtons}
`;

const Hero = ({ slides }) => {

    return (
        <div>
            <HeroSelection>
                <HeroWrapper>
                    {SliderData.map((slide) => {
                        return (
                            <HeroSlide>
                                <HeroSlider>
                                    <HeroImage src={slide.image} alt={slide.alt}>
                                        <HeroContent>
                                            <h1>{slide.title}</h1>
                                            <p>{slide.price}</p>
                                            <Button to={slide.path} primary='true' css={`max-width:160px;`} >
                                                {slide.label}<NextArrow/>
                                            </Button>
                                        </HeroContent>
                                    </HeroImage>
                                </HeroSlider>
                            </HeroSlide>
                        )

                    })}


                </HeroWrapper>
            </HeroSelection>
        </div>
    )
}

export default Hero
