// makeStyles() provides a flexible and powerful way to create custom styles for Material UI components that can be easily reused throughout your application.

//React Reveal is an animation framework for React. It's MIT licensed, has a tiny footprint and written specifically for React in ES6. It can be used to create various cool reveal on scroll animations in your application.

import React, { useContext } from "react";
import { makeStyles } from '@material-ui/core/styles'
import Fade from 'react-reveal/Fade';

import { ThemeContext } from '../../contexts/ThemeContext'

import eduImgWhite from '../../assets/svg/education/eduImgWhite.svg'
import './Education.css'

function EducationCard({ id, institution, course, startYear, endYear }) {

    const { theme } = useContext(ThemeContext);

    const useStyles = makeStyles((t) => ({
        educationCard: {
            backgroundColor: theme.primary30,
            "&:hover": {
                backgroundColor: theme.primary50,
            },
        },
    }));

    const classes = useStyles();

    return (
        <Fade bottom>
            <div key={id} className={`education-card ${classes.educationCard}`}>
                <div className="educard-img" style={{backgroundColor:theme.primary}}>
                    <img src={eduImgWhite} alt="" />
                </div>

                <div className="education-details">
                    <h6 style={{color:theme.primary}}>{startYear}-{endYear}</h6>
                    <h4 style={{color:theme.tertiary}}>{course}</h4>
                    <h5 style={{color: theme.tertiary80}}>{institution}</h5>
                </div>
            </div>

        </Fade>
    )
}

export default EducationCard