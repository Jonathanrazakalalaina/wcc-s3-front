import styled from "styled-components"
import { MdDesignServices } from "react-icons/md"
import { TbDeviceImacCode } from "react-icons/tb"
import { HiOutlineLightBulb } from "react-icons/hi"
import { BoxParagraph, SubtitlesSection, TitleSection } from "../../utils/Atoms"
import colors from "../../utils/colors"

const ServicesContainer = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    gap: 1.5rem;
    padding: 5rem;
    @media screen and (max-width: 768px) {
        padding: 5rem 1rem;
    }
`

const BoxServicesContainer = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    gap: 2rem;
    margin-top: 1.5rem;

    @media screen and (max-width: 768px) {
        flex-direction: column;
    }
`

const Box = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 2rem;
    padding: 2rem;
    background-color: ${colors.primary};
    color: ${colors.darkfont};
    border-radius: 1rem;
    max-width: 25rem;
    box-shadow: 2px 3px 30px ${colors.semiTransparentBox};
    transition: background 0.3s;

    &:hover :first-child {
        color: ${colors.primary};
    }
    &:hover :nth-child(3) {
        color: ${colors.primary};
    }
    &:hover {
        box-shadow: 2px 3px 40px ${colors.semiTransparentBox};
        background-color: ${colors.backgroundblue};
        color: ${colors.primary};
    }
`

const StyledMenuBox = styled(({ icon, color, ...props }) => {
    const Icon = icon
    return <Icon color={color} {...props} />
})`
    color: ${colors.backgroundblue};
    transition: color 0.2s;
`

const Services = () => {
    return (
        <ServicesContainer id="services">
            <SubtitlesSection>SERVICES</SubtitlesSection>
            <TitleSection>Expertise Services! Let's check it out</TitleSection>
            <BoxParagraph>
                As a designer, I embody the essence of a perfectionist,
                tirelessly striving for flawless execution and attention to
                every intricate detail, ensuring that every project reaches its
                utmost potential.
            </BoxParagraph>
            <BoxServicesContainer>
                <Box>
                    <StyledMenuBox size={80} icon={MdDesignServices} />
                    <h3>UI UX Design</h3>
                    <BoxParagraph>
                        A designer brings dreams to life through the seamless
                        fusion of aesthetics and functionality.
                    </BoxParagraph>
                </Box>
                <Box>
                    <StyledMenuBox size={80} icon={TbDeviceImacCode} />
                    <h3>Webflow Develop</h3>
                    <BoxParagraph>
                        Webflow unleashes my creativity without the need for
                        complex coding.
                    </BoxParagraph>
                </Box>
                <Box>
                    <StyledMenuBox size={80} icon={HiOutlineLightBulb} />
                    <h3>Product Design</h3>
                    <BoxParagraph>
                        As a user of product design, I appreciate the perfect
                        blend of aesthetics and functionality for increasing experience.
                    </BoxParagraph>
                </Box>
            </BoxServicesContainer>
        </ServicesContainer>
    )
}

export default Services
