import { useState } from "react";

import Work1 from "../../assets/work-1.png";
import Work2 from "../../assets/work-2.png";
import Work3 from "../../assets/work-3.png";

import LaunchRoundedIcon from '@mui/icons-material/LaunchRounded';

import './port.styles.scss'
import BasicButtons from "../buttons/buttons.component";

const Portfolio = () => {
    const [display, setDisplay] = useState(3);

    const work = [
        {
            id: 1,
            img: Work1,
            name: "getLinked",
            desc: "This project was created during a hackathon challenge and is powered by React.js and Tailwind CSS",
            link: "https://hackathon-sepia.vercel.app/"
        },
        {
            id: 2,
            img: Work2,
            name: "Rocfela",
            desc: "A technology company offering app and software design services, powered by Next.js and Tailwind CSS",
            link: "https://rocfela.vercel.app/"
        },
        {
            id: 3,
            img: Work3,
            name: "Laundreo",
            desc: "A convenient laundry service app built with React and styled using Tailwind CSS",
            link: "https://www.laundreo.com/"
        },
        {
            id: 4,
            img: Work1,
            name: "Synergyy",
            desc: "Synergyy: Where young talent discovers job opportunities, fosters work connections, and turns big dreams into reality. Crafted with React and styled using Tailwind CSS",
            link: "https://www.synergyy.io/"
        },
        {
            id: 5,
            img: Work2,
            name: "Trxbe",
            desc: "A fashion E-commerce app built with React and SASS",
            link: "https://www.trxbeluxury.com/"
        },
        {
            id: 6,
            img: Work3,
            name: "Bumble Social app",
            desc: "A social media app built with React and SASS",
            link: "https://lucky-tarsier-74c679.netlify.app/"
        },
        {
            id: 7,
            img: Work1,
            name: "Capstone",
            desc: "An E-commerce app built with React, Redux, Hooks and Firebase",
            link: "https://eloquent-frangipane-8c0ad3.netlify.app/"
        },
        {
            id: 8,
            img: Work2,
            name: "Empire properties",
            desc: "Real Housing website designed and coded by me using HTML, SASS and JavaScript",
            link: "https://symphonious-raindrop-11a4c9.netlify.app/"
        },
        {
            id: 9,
            img: Work3,
            name: "CinemaEdge",
            desc: "A Netflix Clone built with React, SASS and Firebase",
            link: "https://cinema-edge.vercel.app"
        },
        {
            id: 10,
            img: Work1,
            name: "Royaute",
            desc: "An auto rental website built with React and SASS",
            link: "https://www.rautorentals.com/"
        },
        {
            id: 11,
            img: Work2,
            name: "Fudlist",
            desc: "A Food app landing page website designed and coded by me using HTML, SASS and React",
            link: "https://deluxe-snickerdoodle-ccb584.netlify.app/"
        },
        {
            id: 12,
            img: Work3,
            name: "MANdiz Honey",
            desc: "Upscale Honey E-commerce website designed and coded by me using HTML, SASS and JavaScript",
            link:"https://ornate-lollipop-f291fd.netlify.app"
        }
    ]

    const handleDisplay = () => {
        setDisplay(work.length);
    }
    
    return (
        <div className="port" id="work">
            <h2 className="port__head bio__head">Explore my work</h2>
            <div className="container port__container">
                {work.slice(0, display).map((item) => {
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
            {display === 7 ? ('') : (
                <div className="port__btn">
                    <BasicButtons text='View More' variant='outlined' functions={handleDisplay} />
                </div>
            )}
        </div>
    )
}

export default Portfolio;