import styled from "styled-components"
import { SubtitlesSection, TitleSection } from "../../utils/Atoms"
import colors from "../../utils/colors"
// import landingPageImg from '../../assets/landing-page.png'
import { BsFillArrowUpRightCircleFill } from "react-icons/bs"
import projectsElements from "../../data/data"
import { useState } from "react"

const ProjectsContainer = styled.div`
    padding: 5rem;
    display: flex;
    flex-direction: column;
    justify-content: center;
    gap: 1.7rem;

    @media screen and (max-width: 785px) {
        padding: 5rem 1.2rem;
    }
`

const ButtonsGroup = styled.div`
    /* margin-top: 1.5rem; */
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 1.2rem;

    @media screen and (max-width: 876px) {
        gap: 0.7rem;
    }
`
const ProjectBtn = styled.button`
    outline: none;
    background-color: transparent;
    border: 2px solid ${colors.backgroundblue};
    font-size: 0.9rem;
    padding: 0.5rem;
    border-radius: 3px;
    font-weight: bold;
    cursor: pointer;
    transition: all 0.2s;

    &:hover {
        background-color: ${colors.backgroundblue};
        color: ${colors.primary};
    }


    @media screen and (max-width:876px) {
        font-size: 0.7rem;
        height: 2.5rem;
        padding: 0 0.5rem;
    }
    ${(props) =>
        props.$isSelected &&
        `
        background: ${colors.backgroundblue};
        color: ${colors.primary};
    `}
`

const ProjectsBlock = styled.div`
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    justify-items: center;
    align-items: center;
    gap: 1rem;

    @media screen and (max-width: 1115px) {
        grid-template-columns: 1fr 1fr;
    }
    @media screen and (max-width: 785px) {
        grid-template-columns: 1fr;
    }
`

const ProjectBox = styled.div`
    display: flex;
    flex-direction: column;
    gap: 1rem;
    width: max-content;
    position: relative;
    /* border: 1px solid black; */
    border-radius: 1rem;
    padding: 0.5rem;
    cursor: pointer;
    transition: all 0.3s;
    animation: scaleIn 1s;

    &:hover {
        box-shadow: 2px 3px 30px ${colors.semiTransparentBox};
    }
`

const ImgContainer = styled.div`
    padding: 1rem;
    border-radius: 1rem;
    background-color: ${colors.primary};
    width: 20rem;
`

const ImgProject = styled.img`
    margin: 0 auto;
    width: 100%;
`
const ProjectTitle = styled.h4`
    font-size: 1.5rem;
`

const DetailsProject = styled.div`
    padding: 1rem;
    line-height: 2rem;
`

const GoIcon = styled.div`
    position: absolute;
    right: 1rem;
    bottom: 1.5rem;
`

const Projects = () => {
    const [switchTab, setSwitchTab] = useState("all")

    return (
        <ProjectsContainer id="portfolio">
            <SubtitlesSection>Portfolio</SubtitlesSection>
            <TitleSection>Digital Product Showcases</TitleSection>
            <ButtonsGroup>
                <ProjectBtn
                    onClick={() => setSwitchTab("all")}
                    $isSelected={switchTab === "all"}
                >
                    All
                </ProjectBtn>
                <ProjectBtn onClick={() => setSwitchTab("landingPage")} $isSelected={switchTab === "landingPage"}>
                    Landing Page
                </ProjectBtn>
                <ProjectBtn onClick={() => setSwitchTab("appDesign")} $isSelected={switchTab === "appDesign"}>
                    App Design
                </ProjectBtn>
                <ProjectBtn onClick={() => setSwitchTab("saasProduct")} $isSelected={switchTab === "saasProduct"}>
                    Saas Product
                </ProjectBtn>
                <ProjectBtn onClick={() => setSwitchTab("dashboard")} $isSelected={switchTab === "dashboard"}>
                    Dashboard
                </ProjectBtn>
            </ButtonsGroup>
            <ProjectsBlock>
                {projectsElements.map(
                    (project, index) =>
                        (project.type === switchTab || switchTab === "all") && (
                            <ProjectBox key={index}>
                                <ImgContainer>
                                    <ImgProject
                                        src={project.img}
                                        alt={project.title}
                                    />
                                </ImgContainer>
                                <DetailsProject>
                                    <ProjectTitle>{project.title}</ProjectTitle>
                                    <p>{project.details}</p>
                                </DetailsProject>
                                <GoIcon>
                                    <BsFillArrowUpRightCircleFill
                                        size={35}
                                        color={colors.backgroundblue}
                                    />
                                </GoIcon>
                            </ProjectBox>
                        )
                )}
            </ProjectsBlock>
        </ProjectsContainer>
    )
}

export default Projects
