import React from 'react';
import About from "../components/about/About";
import Title from "../components/title/Title";

const MainPage = () => {
    const obj = {
        title: 'Some Title',
        body: 'Some Body'
    }

    return (
        <>
            <Title text={'Hello World!'}/>
            <About info={obj}/>
        </>
    );
};

export default MainPage;