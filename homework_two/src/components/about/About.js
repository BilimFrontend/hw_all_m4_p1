import React from 'react';

const About = ({info}) => {
    return (
         <div>
             <p>{info.title}</p>
             <p>{info.body}</p>
         </div>
    );
};

export default About;