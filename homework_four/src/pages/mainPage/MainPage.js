import React, {useEffect, useState} from 'react';

const MainPage = ({data}) => {
    const [user, setUser] = useState({
        name: "",
        surname: ""
    })

    console.log(user)

    useEffect(() => {
        setUser(data)
    }, [data]);

    return (
        <div>
            <p>Добро пожаловать {user.name} {user.surname}, мы тебя ждали</p>
        </div>
    );
};

export default MainPage;