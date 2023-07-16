import styled from "styled-components"
import { LogoBrand } from "../../utils/Atoms"
import { AiFillFacebook, AiFillGithub, AiFillGoogleCircle, AiFillLinkedin } from "react-icons/ai"
import colors from "../../utils/colors"

const CreditContainer = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 1rem;
    background-color: ${colors.backgroundblue};
    color: ${colors.primary};
    padding: 2rem 0;
`
const IconsContainer = styled.div`
    display: flex;
    gap: 1rem;
`

const Credit = () => {
    return (
        <CreditContainer>
            <LogoBrand>Jonathan</LogoBrand>
            <IconsContainer>
                <a
                    href="mailto:jonathanbill17@gmail.com"
                    rel="noreferrer"
                    title="Gmail"
                    target="_blank"
                    className="social-icon"
                >
                    <AiFillGoogleCircle size={40} color="#f1f1f1"/>
                </a>
                <a
                    href="https://www.linkedin.com/in/jonathan-razakalalaina-145075240/"
                    rel="noreferrer"
                    title="Linkedin"
                    target="_blank"
                    className="social-icon"
                >
                    <AiFillLinkedin size={40} color="#f1f1f1"/>
                </a>
                <a
                    href="https://web.facebook.com/jonathan.razakalalaina"
                    rel="noreferrer"
                    title="Facebook"
                    target="_blank"
                    className="social-icon"
                >
                    <AiFillFacebook size={40} color="#f1f1f1"/>
                </a>
                <a
                    href="https://github.com/Jonathanrazakalalaina"
                    rel="noreferrer"
                    title="Github"
                    target="_blank"
                    className="social-icon"
                >
                    <AiFillGithub size={40} color="#f1f1f1"/>
                </a>
            </IconsContainer>
            <p>All Right Reserved</p>
        </CreditContainer>
    )
}

export default Credit
