import React from 'react';
import Description from "../../components/description/Description";
import classes from "./MainPage.module.css";

const MainPage = () => {

    const dataMainPage = {
        title: "Title",
        description: "description"
    }

    return (
        <div className={classes.desc}>
            <h1>Main Page Data</h1>
            <Description info={dataMainPage}/>
        </div>
    );
};

export default MainPage;