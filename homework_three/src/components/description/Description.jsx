import React from 'react';

const Description = ({info}) => {
    return (
        <div>
            <p>{info.title}</p>
            <p>{info.description}</p>
        </div>
    );
};

export default Description;