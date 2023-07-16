import styled from "styled-components"
import { Slide } from "react-slideshow-image"
import "react-slideshow-image/dist/styles.css"
import { SubtitlesSection, TitleSection } from "../../utils/Atoms"
import colors from "../../utils/colors"

const TestimContainer = styled.div`
    display: block;
    padding: 5rem;
`

const TestimDetails = styled.div`
    text-align: center;
    padding: 2rem 5rem;
    line-height: 2rem;
`
const Names = styled.h4`
    color: ${colors.btns};
    font-style: italic;
`

const Testimonials = () => {
    const proprietes = {
        duration: 5000,
        transitionDuration: 500,
        infinite: true,
        indicators: true,
        arrows: true,
    }

    return (
        <TestimContainer>
            <SubtitlesSection>Testimonials</SubtitlesSection>
            <TitleSection>They talk about me !</TitleSection>
            <Slide {...proprietes}>
                <div>
                    <TestimDetails style={{textAlign: 'center'}}>
                        <Names>Rakoto - CEO</Names>
                        <p>Jonathan is a talented and creative UI/UX designer who consistently delivers exceptional work. Their ability to understand user needs and create visually stunning designs is truly impressive. I highly recommend their expertise for any design project.</p>
                    </TestimDetails>
                </div>
                <div>
                    <TestimDetails>
                        <Names>Liva - Business Man</Names>
                        <p>An exceptional UI/UX designer, Jonathan brings immense talent and creativity to every project. Their ability to blend aesthetics with intuitive user experiences is truly remarkable. I highly recommend Jonathan for their exceptional skills and unwavering dedication to delivering top-notch design solutions.</p>
                    </TestimDetails>
                </div>
                <div>
                    <TestimDetails>
                        <Names>Ranto - Manager</Names>
                        <p>Outstanding in every aspect, Jonathan is a truly gifted and imaginative UI/UX designer. Their work speaks volumes of their talent and dedication. I highly endorse Jonathan for their remarkable design skills.</p>
                    </TestimDetails>
                </div>
            </Slide>
        </TestimContainer>
    )
}

export default Testimonials
