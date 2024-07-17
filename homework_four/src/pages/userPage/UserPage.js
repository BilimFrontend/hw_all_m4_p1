import React, {useEffect, useState} from 'react';
import MainPage from "../mainPage/MainPage";
import ErrorPage from "../errorPage/ErrorPage";

const UserPage = () => {
    const [user, setUser] = useState({})

    console.log(user)

    useEffect(() => {
        const userName = prompt("Введите имя")
        const userSurname = prompt("Введите фамилию")
        setUser({
            name: userName,
            surname: userSurname
        })
    }, []);


    return (
        <div>
            {user.name === "John" && user.surname === "Johns" ? <MainPage data={user}/> : <ErrorPage data={user}/>}
        </div>
    );
};

export default UserPage;