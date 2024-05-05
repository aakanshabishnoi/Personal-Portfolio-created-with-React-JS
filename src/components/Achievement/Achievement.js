import React,{ useContext} from 'react';
import { Link } from 'react-router-dom'
import { makeStyles } from '@material-ui/core/styles';

import { ThemeContext } from '../../contexts/ThemeContext';
import { AchievementData } from '../../data/achievementData'
import { HiArrowRight } from "react-icons/hi";

import './Achievement.css'
import SingleAchievement from './SingleAchievement/SingleAchievement';

function Achievement() {

    const { theme } = useContext(ThemeContext);
    console.log({AchievementData})
    
    const useStyles = makeStyles(() => ({
        viewAllBtn : {
            color: theme.tertiary, 
            backgroundColor: theme.primary,
            transition: 'color 0.2s',
            "&:hover": {
                color: theme.secondary, 
                backgroundColor: theme.primary,
            }
        },
        viewArr : {
            color: theme.tertiary, 
            backgroundColor: theme.secondary70,
            width: '40px',
            height: '40px',
            padding: '0.5rem',
            fontSize: '1.05rem',
            borderRadius: '50%',
            cursor: 'pointer',
            transition: 'background-color 0.2s',
            "&:hover": {
                color: theme.tertiary, 
                backgroundColor: theme.secondary,
            }
        },
    }));

    const classes = useStyles();

    return (
        <>
            {AchievementData.length > 0 && (
                <div className="Achievements" id="Achievements" style={{backgroundColor: theme.secondary}}>
                    <div className="Achievements--header">
                        <h1 style={{color: theme.primary}}>Certifications</h1>
                    </div>
                    <div className="Achievements--body">
                        <div className="Achievements--bodyContainer">
                            {AchievementData.slice(0, 3).map(Achieve => (
                                <SingleAchievement
                                    theme={theme}
                                    key={Achieve.id}
                                    id={Achieve.id}
                                    name={Achieve.AchievementName}
                                    desc={Achieve.AchievementDesc}
                                    tags={Achieve.tags}
                                    code={Achieve.code}
                                    demo={Achieve.demo}
                                    image={Achieve.image}
                                />
                            ))}
                        </div> 

                        {/* {AchievementsData.length > 3 && (
                            // <div className="Achievements--viewAll">
                            //     <Link to="/Achievements">
                            //         <button className={classes.viewAllBtn}>
                            //             View All
                            //             <HiArrowRight className={classes.viewArr} />
                            //         </button>
                            //     </Link>
                            // </div>
                        )} */}
                    </div>
                </div>
            )}

        </>
    )
}

export default Achievement