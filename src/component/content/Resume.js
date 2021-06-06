import React from 'react';
import {makeStyles} from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import {GridList, Link} from "@material-ui/core";

const style = makeStyles({
    root: {
        width: '100%',
        paddingLeft: '20%',
        '@media (max-width:900px)': {
            paddingLeft: 'unset',
        },

    },
    searchResultCount: {
        fontWeight: '100',
        fontSize: '14px',
        color: '#70757a',
        lineHeight: '43px',
        fontFamily: 'Google Sans,arial,sans-serif'
    },
    searchResultFirstLink: {
        fontWeight: '100',
        fontSize: '14px',
        color: '#202124',
        fontStyle: 'normal',
        paddingTop: '1px',
        fontFamily: 'Google Sans,arial,sans-serif'
    },
    description: {
        fontWeight: '100',
        fontSize: '14px',
        color: '#4d5156',
        fontStyle: 'normal',
        paddingTop: '1px',
        fontFamily: 'arial,sans-serif',
        lineHeight: '1.7'

    },
    firstLink: {
        cursor: 'pointer',
        fontSize: '20px',
        paddingTop: '1px'
    }


})
const Resume = () => {
    const classes = style()

    return (
        <div className={classes.root}>

            <Typography className={classes.searchResultCount}>
                About 789,000,000 results (1.14 seconds)
            </Typography>

            <Typography className={classes.searchResultFirstLink}>
                https://en.wikipedia.org › wiki › Peyman_abbasi_sardar

            </Typography>

            <Link className={classes.firstLink}>
                Peyman Abbasi - Wikipedia
            </Link>

            <Typography className={classes.description}>

                <strong>Peyman Abbasi </strong>
                Software engineer,
                Java <strong>developer </strong>with 4 years experience.
                Backend,Devops,Android and Frontend developer.
                Familiar with linux,front-end and devops technologies.
                <br/>
                <strong>His focus </strong> right now is on backend and using cool tools and technologies for enterprise
                projects.
            </Typography>
            <br/>

            <Typography style={{lineHeight: "1.8"}}>
                <Link className={classes.firstLink}> WORK EXPERIENCE</Link>
                <br/>
                <hr/>
                <br/>
                <strong>Role</strong>: Software Engineer
                <br/>
                <strong>Company</strong>: digitalmeno Full-time
                <br/>
                <strong>Duration</strong>: Nov 2020 – Present
                <br/>
                <strong>Location</strong>: Tehran, Iran
                <br/>
                I am currently developing a full digital menu site and an online restaurant for the customer.
                I am also working with two companies as a software engineer.
                Part time and remotely.
                <br/>
                <GridList>
                    {/*<img src={""}/>*/}
                </GridList>

                <br/>

                <strong>Role</strong>: Backend developer
                <br/>
                <strong>Company</strong>: tech4uk
                <br/>
                <strong>Duration</strong>: Sep 2020 - Nov 2020
                <br/>
                <strong>Location</strong>: Tehran - Iran
                <br/>

                Almost two months I was working as a back-end developer in the TECH4UK company.
                These were the most important things I did most of the time:
                Develope microservices
                Adding new features to applications
                Review legacy monolith code
                Refactoring monolith to microservice architecture
                financial application
                <br/>
                <a href="http://www.tech4uk.uk/">http://www.tech4uk.uk/</a>
                <br/>
                <a href="https://pazandish.ir/">https://pazandish.ir/</a>


                {/*/////////////////////////////*/}
                <br/>
                <br/>

                <strong>Role</strong>: Backend developer
                <br/>
                <strong>Company</strong>: Adak-tech
                <br/>
                <strong>Duration</strong>: Jan 2019 - Nov 2020
                <br/>
                <strong>Location</strong>: Tehran - Iran
                <br/>
                Almost two years I was working as a full time back-end and android developer in the
                Dadeh-Gostar-Adak company.
                <br/>
                <a href="http://www.adak-tech.ir/">http://www.adak-tech.ir/</a>
                <br/>
                <br/>

                <b>These were the most important things I did most of the time:</b>
                <ul style={{paddingLeft: "5%", fontSize: "14px"}}>
                    <li> Devops</li>
                    <li> Server side development in Tikup game project</li>
                    <li>Working on monolith and microservice applications</li>
                    <li>Working on Tikup game as Android developer</li>
                    <li>Native Android developer</li>

                </ul>

                <br/>

                <b>Applications that I have developed or participated in the development process</b>

                <ul style={{paddingLeft: "5%", fontSize: "14px"}}>
                    <li> Tikup Game</li>
                    <li> VAS mobile apps</li>
                    <li> Talent ( free photo and video sharing app )</li>
                    <li> VOD platform</li>


                </ul>


                {/*///////////////////////////*/}
                <br/>
                <br/>

                <strong>Role</strong>: Android developer
                <br/>
                <strong>Company</strong>: BashCo
                <br/>
                <strong>Duration</strong>: Jan 2018 - Jan 2019
                <br/>
                <strong>Location</strong>: Tehran - Iran
                <br/>
                One years I was working as a full time Android java developer in the
                BashCo company.
                <br/>
                <b>Apbrplications that I have developed or participated in the development process</b>

                <ul style={{paddingLeft: "5%", fontSize: "14px"}}>
                    <li> Development of IOT modules and any modules about smart homes</li>
                    <li> software for connecting this modules to Android phones</li>


                </ul>
                <br/>
                <a href="http://www.bash-co.ir/">http://www.bash-co.ir/</a>
                <br/>
            </Typography>

        </div>
    );
};

export default Resume;