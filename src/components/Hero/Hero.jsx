import styled from "styled-components"
import heroImg from "../../assets/heroImg.png"
import colors from "../../utils/colors"
import { BsArrowUpRightCircle } from "react-icons/bs"

const HeroContainer = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 3rem;
    padding-bottom: 0;
    background-color: ${colors.backgroundblue};

    @media screen and (max-width: 875px) {
        padding: 1rem;
        padding-bottom: 3rem;
        flex-direction: column;
        gap: 2rem;
    }
`

const LeftHero = styled.div`
    background: ${colors.orangeGradient};
    border-radius: 20rem 10rem 20rem 10rem;
    width: 45%;
    display: flex;
    justify-content: center;
`
const Image = styled.img`
    width: 25rem;
`

const RightHero = styled.div`
    display: flex;
    flex-direction: column;
    gap: 3rem;
    padding: 0 3rem;
    color: ${colors.primary};
`
const HeroTitle = styled.h1`
    font-size: 3.5rem;

    @media screen and (max-width: 875px) {
        text-align: center;
        font-size: 2rem;
    }
`

const HeroIntro = styled.p`
    @media screen and (max-width: 875px) {
        text-align: center;
    }
`

const BtnContainer = styled.div`
    display: flex;
    justify-content: flex-start;
    align-items: center;
    flex-direction: row;
    gap: 1.2rem;

    @media screen and (max-width: 875px) {
        justify-content: center;
    }
`

const StartedBtn = styled.button`
    width: max-content;
    background-color: ${colors.btns};
    padding: 1rem;
    display: block;
    border-radius: 1.3rem;
    color: ${colors.primary};
    font-size: 1rem;
    font-weight: 700;
    border: none;
    outline: none;
    cursor: pointer;
    transition: opacity 0.2s ease-in-out;

    &:hover {
        opacity: 0.8;
    }
`

const TalkBtn = styled.a`
    width: max-content;
    border: 2px solid ${colors.btns};
    background-color: transparent;
    padding: 0.65rem;
    color: ${colors.primary};
    display: flex;
    align-items: center;
    gap: 1rem;
    font-weight: bold;
    font-size: 1rem;
    transition: background-color 0.2s;
    border-radius: 1.3rem;
    cursor: pointer;

    &:hover {
        background-color: ${colors.transparentBox};
    }
`
const Name = styled.span`
    color: transparent;
    font-family: Arial, Helvetica, sans-serif;
    -webkit-text-stroke-width: 1px;
    -webkit-text-stroke-color: white;
`

const Hero = () => {

    return (
        <HeroContainer id="home">
            {/* Left hero */}
            <LeftHero>
                <Image src={heroImg} alt="hero-img" />
            </LeftHero>

            {/* Right hero */}
            <RightHero>
                <HeroTitle>
                    Hello,
                    <br /> I'm <Name>JONATHAN</Name> An UI UX Designer
                </HeroTitle>
                <HeroIntro>
                    Creativity is my muse, and design is my passion. Welcome to
                    my artistic universe where ideas come to life and transform
                    into unique visual experiences.
                </HeroIntro>
                <BtnContainer>
                    <StartedBtn>Get Started</StartedBtn>
                    <TalkBtn href='#contact'>
                        Let's Talk{" "}
                        <BsArrowUpRightCircle size={25} color="#ffb120" />
                    </TalkBtn>
                </BtnContainer>
            </RightHero>
        </HeroContainer>
    )
}

export default Hero
