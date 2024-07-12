import React from 'react';
import Description from "../../components/description/Description";
import classes from "./AboutPage.module.css";

const AboutPage = () => {

    const dataAboutPage = {
        title: "Title 2",
        description: "description 2"
    }

    return (
        <div className={classes.desc}>
            <h1>About Page Data</h1>
            <Description info={dataAboutPage}/>
        </div>
    );
};

export default AboutPage;