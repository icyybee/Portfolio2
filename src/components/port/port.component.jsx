import Work1 from "../../assets/work-1.png";
import Work2 from "../../assets/work-2.png";
import Work3 from "../../assets/work-3.png";

import LaunchRoundedIcon from '@mui/icons-material/LaunchRounded';

import './port.styles.scss'

const Portfolio = () => {
    const work = [
        {
            id: 1,
            img: Work1,
            name: "Empire properties",
            desc: "Real Housing website designed and coded by me using HTML, SASS and JavaScript",
            link: "https://symphonious-raindrop-11a4c9.netlify.app/"
        },
        
        {
            id: 2,
            img: Work2,
            name: "Bumble Social app",
            desc: "A social media app built with React and SASS",
            link: "https://lucky-tarsier-74c679.netlify.app/"
        },
        {
            id: 3,
            img: Work3,
            name: "Capstone",
            desc: "An E-commerce app built with React, Redux, Hooks, GraphQL, Stripe, Firebase in TypeScript ",
            link: "https://eloquent-frangipane-8c0ad3.netlify.app/"
        },
        {
            id: 4,
            img: Work1,
            name: "MANdiz Honey",
            desc: "Upscale Honey E-commerce website designed and coded by me using HTML, SASS and JavaScript",
            link:"https://ornate-lollipop-f291fd.netlify.app"
        },    
        {
            id: 5,
            img: Work2,
            name: "Fudlist",
            desc: "A Food app landing page website designed and coded by me using HTML, SASS and React",
            link: "https://deluxe-snickerdoodle-ccb584.netlify.app/"
        },
        {
            id: 6,
            img: Work3,
            name: "Kanban Board",
            desc: "A note keeping app designed and coded by me using React and SASS",
            link: "https://symphonious-raindrop-11a4c9.netlify.app/"
        },
        {
            id: 7,
            img: Work1,
            name: "Portfolio",
            desc: "Personal portfolio website designed and coded by me using React and SASS",
            link: "https://merry-figolla-7c4cda.netlify.app"
        },
    ]
    
    return (
        <div className="port" id="work">
            <h2 className="port__head bio__head">Explore my work</h2>
            <div className="container port__container">
            {work.map((item) => {
                return (
                    <div className="work" key={item.id}>
                        <img src={item.img} alt="" />
                        <div className="layer">
                            <h3>{item.name}</h3>
                            <p>{item.desc}</p>
                            <a href={item.link}>
                                <LaunchRoundedIcon />
                            </a>
                        </div>
                    </div>
                )
            })}
            </div>
        </div>
    )
}

export default Portfolio;