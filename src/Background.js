import styled from "styled-components"
import { device } from "./components/styles/Media"
import { motion } from "framer-motion"

const Container = styled(motion.div)`
    padding: 2rem 5rem;
    color: ${({ theme }) => theme.font.primaryText};
    font-size: 1rem;
    max-width: 75rem;

    @media ${device.laptop} {
        padding: 3rem 4rem;
    }
    @media ${device.tablet} {
        padding: 2rem;
        margin-top: 1.5rem;
    }
    @media ${device.mobileL} {
        padding: 2rem 1rem;
    }

    .heading {
        margin-bottom: 1rem;
    }

    .background {
        display: flex;
        margin-bottom: 5rem;

        @media ${device.tablet} {
            flex-direction: column;
            max-width: 40rem;
        }
    }
    .background__heading {
        font-size: 1rem;
        margin-right: 2.5rem;
        text-transform: uppercase;
        font-weight: 700;
        color: ${({ theme }) => theme.logo.color};
        letter-spacing: 1px;
        flex-basis: 20%;
    }

    .background__paragraph {
        text-align: justify;
    }

    .background__paragraph :not(p:last-child) {
        margin-bottom: 1.5rem;
    }

    .skills {
        display: flex;
        margin-bottom: 5rem;

        @media ${device.tablet} {
            flex-direction: column;
        }

        &__heading {
            font-size: 1rem;
            margin-right: 2.5rem;
            text-transform: uppercase;
            font-weight: 700;
            color: ${({ theme }) => theme.logo.color};
            letter-spacing: 1px;
            flex-basis: 20%;
        }

        &__activity {
            display: grid;
            width: 100%;
            grid-template-columns: repeat(3, 1fr);
            grid-gap: 1.5rem;

            @media ${device.tablet} {
                grid-template-columns: repeat(2, 1fr);
            }
            @media ${device.mobileL} {
                grid-template-columns: repeat(1, 1fr);
            }
        }

        &__header {
            font-size: 1rem;
            text-transform: uppercase;
            font-weight: 600;
            margin-bottom: 0.5rem;
        }
    }
    .experience {
        display: flex;

        @media ${device.tablet} {
            flex-direction: column;
        }
        &__header {
            font-size: 1rem;
            margin-right: 2.5rem;
            text-transform: uppercase;
            font-weight: 700;
            color: ${({ theme }) => theme.logo.color};
            letter-spacing: 1px;
            flex-basis: 20%;
        }

        &__activity {
            width: 100%;
        }

        .job {
            margin-bottom: 1.5rem;
        }

        .job__duration {
            display: flex;
            @media ${device.mobileL} {
                flex-direction: column;
            }
        }
        .job__work {
            font-size: 0.85rem;
            margin-bottom: 0.2rem;
            font-weight: 600;
            margin-right: auto;
        }
    }
`

const Home = () => {
    return (
        <Container
            initial={{ y: 40, opacity: 0 }}
            whileInView={{
                y: 0,
                opacity: 1,
                transition: { delay: 0.3, duration: 0.4, ease: "easeIn" },
            }}
            viewport={{ once: true }}
        >
            <div className="background">
                <div className="background__heading heading">Background</div>
                <div className="background__paragraph">
                    <p>
                        As a software engineer, I have a strong technical
                        background that I have developed through my education
                        and work experience. I hold a degree in computer
                        science, with coursework in key areas such as
                        algorithms, data structures, programming languages, and
                        software design.
                    </p>
                    <p>
                        In my current position at HiC Mikrolab, I have had the
                        opportunity to work on a variety of projects, including
                        web applications, mobile apps, and back-end systems. I
                        have expertise in technologies such as Javascript, Typescript, and
                        React, and I am familiar with agile development
                        methodologies. I enjoy working in a team environment and
                        thrive on the challenge of delivering high-quality
                        software on time.
                    </p>
                    <p>
                        One of my key strengths is my problem-solving ability. I
                        have a knack for troubleshooting and debugging complex
                        systems, and I am always looking for ways to improve
                        processes and make them more efficient. In addition to
                        my technical skills, I am passionate about staying
                        up-to-date with the latest technologies and industry
                        trends. Overall, my background in software engineering
                        has prepared me to excel in this field and make a
                        valuable contribution to any organization.
                    </p>
                </div>
            </div>
            <div className="skills">
                <div className="skills__heading heading">Skills</div>
                <div className="skills__activity">
                    <ul className="skills__languages">
                        <li className="skills__header">Languages</li>
                        <li className="language__list">JavaScript (ES6)</li>
                        <li className="language__list">Typescript</li>
                        <li className="language__list">Ruby</li>
                        <li className="language__list">HTML</li>
                        <li className="language__list">CSS/SCSS</li>
                    </ul>
                    <ul className="skills__frameworks">
                        <li className="skills__header heading">
                            Frameworks / library
                        </li>
                        <li className="framework__list">React/Redux Toolkit</li>
                        <li className="framework__list">Next.JS</li>
                        <li className="framework__list">Ruby on Rails</li>
                        <li className="framework__list">Express.js</li>
                        <li className="framework__list">Material UI</li>
                        <li className="framework__list">Tailwind CSS</li>
                    </ul>
                    <ul className="skills__tools">
                        <li className="skills__header">Tools</li>
                        <li className="tools__list">Git</li>
                        <li className="tools__list">Bash</li>
                        <li className="tools__list">Node</li>
                        <li className="tools__list">Firebase</li>
                    </ul>
                </div>
            </div>
            <div className="experience">
                <div className="experience__header heading">Experience</div>
                <div className="experience__activity">
                    <div className="job">
                        <div className="job__duration">
                            <span className="job__work">Andela</span>
                            <span className="job__year">
                                Dec 2022 - Present
                            </span>
                        </div>
                        <div className="job__title">Software Engineer</div>
                    </div>
                    <div className="job">
                        <div className="job__duration">
                            <span className="job__work">HiC Mikrolab</span>
                            <span className="job__year">
                                June 2021 - Present
                            </span>
                        </div>
                        <div className="job__title">Software Engineer</div>
                    </div>
                    <div className="job">
                        <div className="job__duration">
                            <span className="job__work">
                                Afrisplash Remotely
                            </span>
                            <span className="job__year">
                                Aug. 2022 - Present
                            </span>
                        </div>
                        <div className="job__title">
                            Front-end Engineer - Open Source
                        </div>
                    </div>
                    <div className="job">
                        <div className="job__duration">
                            <span className="job__work">
                                PricewaterhouseCoopers Nigeria (PwC)
                            </span>
                            <span className="job__year">
                                Mar 2019 - Feb. 2020
                            </span>
                        </div>
                        <div className="job__title">Advisory Intern</div>
                    </div>
                    <div className="job">
                        <div className="job__duration">
                            <span className="job__work">Yemtech</span>
                            <span className="job__year">
                                Jan. 2018 - March 2020
                            </span>
                        </div>
                        <div className="job__title">Web Designer</div>
                    </div>
                </div>
            </div>
        </Container>
    )
}

export default Home
