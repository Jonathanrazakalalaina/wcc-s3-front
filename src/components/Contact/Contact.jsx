import styled from "styled-components"
import { SubtitlesSection, TitleSection } from "../../utils/Atoms"
import contactImg from "../../assets/undraw_contact_us_re_4qqt.svg"
import colors from "../../utils/colors"

const ContactContainer = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 4rem;
    padding: 5rem;
    background-color: ${colors.primary};
    @media screen and (max-width: 768px) {
        padding: 5rem 1rem;
    }
`

const ImageContainer = styled.div`
    width: 60%;
    background-color: ${colors.backgroundblue};
    border-radius: 50%;

    @media screen and (max-width: 768px) {
        display: none;
    }
`

const ContactImg = styled.img`
    width: 90%;
    margin: 0 auto;
`
const ContactDetails = styled.div`
    display: flex;
    flex-direction: column;
    gap: 1.5rem;
`

const ContactForm = styled.form`
    display: flex;
    flex-direction: column;
    gap: 1.5rem;
`
const Inputs = styled.input`
    display: block;
    border: none;
    border-radius: 10px;
    outline: none;
    padding: 1rem;
    font-weight: bold;
    font-family: "Public Sans", sans-serif;
`
const BtnSubmit = styled.button`
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

const Contact = () => {
    return (
        <ContactContainer id="contact">
            {/* left side */}
            <ImageContainer>
                <ContactImg src={contactImg} alt="" />
            </ImageContainer>
            {/* right side */}
            <ContactDetails>
                <SubtitlesSection style={{ textAlign: "left" }}>
                    Contact me
                </SubtitlesSection>
                <TitleSection style={{ textAlign: "left" }}>
                    Let's talk !
                </TitleSection>
                <ContactForm>
                    <Inputs type="text" placeholder="Name" />
                    <Inputs type="text" placeholder="Telephone" />
                    <Inputs type="text" placeholder="Email" />
                    <Inputs type="text" placeholder="Messages..." />
                    <BtnSubmit>Submit</BtnSubmit>
                </ContactForm>
            </ContactDetails>
        </ContactContainer>
    )
}

export default Contact
