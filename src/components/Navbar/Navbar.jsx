import styled from "styled-components"
import colors from "../../utils/colors"
import { HiOutlineMenuAlt3 } from "react-icons/hi"
import { AiOutlineClose } from "react-icons/ai"
import { useState } from "react"
import { LogoBrand } from "../../utils/Atoms"

const NavContainer = styled.nav`
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 1rem 3rem;
    background: ${colors.backgroundblue};
    @media screen and (max-width: 768px) {
       padding: 1rem;
    }
`

const LinksGroup = styled.ul`
    display: flex;
    justify-content: center;
    gap: 2.5rem;

    @media screen and (max-width: 768px) {
        display: none;
    }
    ${(props) =>
        props.$isOnSmallScreen &&
        `@media screen and (max-width: 768px) {
        background-color: ${colors.semiTransparentBox};
        display: flex;
        flex-direction: column;
        position: fixed;
        right: 0.5rem;
        top: 4rem;
        padding: 1.3rem 2rem;
        border-radius: 7px;
        animation: scaleIn 0.3s;
        z-index: 99;
        }`}
`
const Link = styled.a`
    color: ${colors.primary};
    transition: color 0.2s ease-in-out;

    &:hover {
        color: ${colors.btns};
        font-weight: bold;
    }
`

const DownloadButton = styled.button`
    background-color: ${colors.btns};
    padding: 1rem;
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

    @media screen and (max-width: 768px) {
        display: none;
    }
`

const MenuIcon = styled.div`
    cursor: pointer;
    display: none;

    @media screen and (max-width: 768px) {
        display: block;
        position: fixed;
        top: 1rem;
        right: 1rem;
        background-color: ${colors.semiTransparentBox};
        padding: 5px;
        padding-bottom: 0;
        border-radius: 3px;
        z-index: 99;
    }
`
const StyledIcon = styled(({ icon , ...props }) => {
    const Icon = icon;
    return <Icon {...props} />
})`
    color: ${colors.primary};
    transition: color 0.3s;

    &:hover {
        color: ${colors.btns};
    }
`

const Tick = styled.span`
    font-size: 2rem;
    color: ${colors.btns};
    animation: clignote 1.5s infinite;
`

const Navbar = () => {
    const [openMenu, setOpenMenu] = useState(false)

    let smallScreenWidth = window.innerWidth<=768

    return (
        <NavContainer>
            <div>
                <LogoBrand>Jonathan <Tick>_</Tick></LogoBrand>
            </div>
            <LinksGroup>
                <li>
                    <Link href="#home">Home</Link>
                </li>
                <li>
                    <Link href="#services">Services</Link>
                </li>
                <li>
                    <Link href="#about">About</Link>
                </li>
                <li>
                    <Link href="#portfolio">Portfolio</Link>
                </li>
                <li>
                    <Link href="#contact">Contact</Link>
                </li>
            </LinksGroup>
            <div>
                <DownloadButton>Download CV</DownloadButton>
            </div>
            <MenuIcon onClick={() => setOpenMenu(!openMenu)}>
                {openMenu ? (
                    <StyledIcon icon={AiOutlineClose} size={25} />
                ) : (
                    <StyledIcon icon={HiOutlineMenuAlt3} size={25} />
                )}
            </MenuIcon>
            {(openMenu && smallScreenWidth) && (
                <>
                    <LinksGroup $isOnSmallScreen>
                        <li onClick={() => setOpenMenu(false)}>
                            <Link $isOnSmallScreen href="#home">Home</Link>
                        </li>
                        <li onClick={() => setOpenMenu(false)}>
                            <Link $isOnSmallScreen href="#services">Services</Link>
                        </li>
                        <li onClick={() => setOpenMenu(false)}>
                            <Link $isOnSmallScreen href="#about">About</Link>
                        </li>
                        <li onClick={() => setOpenMenu(false)}>
                            <Link $isOnSmallScreen href="#portfolio">Portfolio</Link>
                        </li>
                        <li onClick={() => setOpenMenu(false)}>
                            <Link $isOnSmallScreen href="#contact">Contact</Link>
                        </li>
                    </LinksGroup>
                    <div>
                        <DownloadButton>Download CV</DownloadButton>
                    </div>
                </>
            )}
        </NavContainer>
    )
}

export default Navbar
