import styled from 'styled-components'
import { BoxParagraph, SubtitlesSection, TitleSection } from '../../utils/Atoms'
import aboutImg from '../../assets/undraw_designer_re_5v95.svg'
import colors from '../../utils/colors'

const AboutContainer = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    gap: 1.2rem;
    padding: 5rem;
    padding-bottom: 0;
    background-color: ${colors.primary};

    @media screen and (max-width:875px) {
        flex-direction: column;
        padding: 5rem 1.2rem 0 1.2rem;
    }
`

const LeftAbout = styled.div`
    display: flex;
    flex-direction: column;
    gap: 3rem;
`

const RightAbout = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
`

const ImgAbout = styled.img`
    max-width: 30rem;

    @media screen and (max-width:875px) {
        width: 20rem;
        margin-top: 1.5rem;
    }    
`

const About = () => {
  return (
    <AboutContainer id='about'>
      {/* Left side */}
      <LeftAbout>
        <SubtitlesSection style={{textAlign: 'left'}}>About me</SubtitlesSection>
        <TitleSection style={{textAlign: 'left'}}>Designing Solutions, Not just visuals</TitleSection>
        <BoxParagraph style={{textAlign: 'left'}}>Driven by the philosophy of 'Designing Solutions, Not just visuals,' I am a UI/UX designer dedicated to crafting meaningful and impactful experiences. With a deep understanding of user needs, I strive to go beyond surface-level aesthetics and focus on solving complex challenges through intuitive and functional design solutions.</BoxParagraph>
      </LeftAbout>
      {/* Right side */}
      <RightAbout>
        <ImgAbout src={aboutImg} alt="about-img" />
      </RightAbout>
    </AboutContainer>
  )
}

export default About
