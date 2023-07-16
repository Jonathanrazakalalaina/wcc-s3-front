import landingPageImg from '../assets/landing-page.png'
import appDesignImg from '../assets/app-design.png'
import saasProductImg from '../assets/saas-product.png'
import dashboard from '../assets/dashboard.png'
import mobileImg from '../assets/undraw_mobile_images_rc-0-q.svg'
import sliderImg from '../assets/undraw_slider_re_ch7w.svg'

const projectsElements = [
    {
        type: 'landingPage',
        img: landingPageImg,
        title: "Ilustration creator",
        details: "Landing page",
    },
    {
        type: 'appDesign',
        img: appDesignImg,
        title: "Location assistant",
        details: "App design",
    },
    {
        type: 'saasProduct',
        img: saasProductImg,
        title: "Management",
        details: "SaaS product",
    },
    {
        type: 'dashboard',
        img: dashboard,
        title: "Projects manager",
        details: "Dashboard",
    },
    {
        type: 'saasProduct',
        img: mobileImg,
        title: "Interactive expo-app",
        details: "SaaS product",
    },
    {
        type: 'appDesign',
        img: sliderImg,
        title: "Design platform",
        details: "App design",
    },
]

export default projectsElements;