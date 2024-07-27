import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Modal from "../../components/modal/Modal";

const UsersPage = () => {
    const URL = 'http://localhost:8000/users';
    const [users, setUsers] = useState([]);
    const [newUser, setNewUser] = useState({
        name: "",
        email: "",
        username: ""
    });
    const [showModal, setShowModal] = useState(false);
    const [modalMessage, setModalMessage] = useState('')
    const getUsers = async () => {
        try {
            const {data} = await axios.get(URL);
            setUsers(data);
        } catch (error) {
            console.error(error);
        }
    };

    useEffect(() => {
        getUsers();
    }, []);

    const inputChange = (event) => {
        const { name, value } = event.target;
        setNewUser(prevData => ({
            ...prevData,
            [name]: value
        }));
    };

    const createNewUser = async (event) => {
        event.preventDefault();
        try {
            await axios.post(URL, newUser);
            setNewUser({
                name: "",
                email: "",
                username: ""
            });
            setShowModal(true)
            setModalMessage("Пользователь создан")
            getUsers();

        } catch (error) {
            console.error(error.message);
        }
    };

    const deleteUser = async (id) => {
        try {
            await axios.delete(`${URL}/${id}`);
            setShowModal(true)
            setModalMessage("Пользователь уадлен")
            getUsers();
        } catch (error) {
            console.error(error.message);
        }
    };

    const closeModal = () => {
        setShowModal(false);
    };

    return (
        <div>
            {showModal && (
                <Modal>
                    <p>{modalMessage}</p>
                    <button onClick={closeModal}>Close</button>
                </Modal>
            )}
            <form onSubmit={createNewUser}>
                <input
                    type="text"
                    name="name"
                    placeholder="Name"
                    value={newUser.name}
                    onChange={inputChange}
                />
                <input
                    type="text"
                    name="email"
                    placeholder="Email"
                    value={newUser.email}
                    onChange={inputChange}
                />
                <input
                    type="text"
                    name="username"
                    placeholder="Username"
                    value={newUser.username}
                    onChange={inputChange}
                />
                <button type="submit">Create</button>
            </form>
            <table>
                <thead>
                <tr>
                    <th>Name</th>
                    <th>Email</th>
                    <th>Username</th>
                    <th>Actions</th>
                </tr>
                </thead>
                {users.length === 0 ? <p>Список пуст</p> :
                    <tbody>
                    {users.map((user) => (
                        <tr key={user.id}>
                            <td>{user.name}</td>
                            <td>{user.email}</td>
                            <td>{user.username}</td>
                            <td>
                                <button onClick={() => deleteUser(user.id)}>Delete</button>
                            </td>
                        </tr>
                    ))}
                    </tbody>
                }
            </table>
        </div>
    );
};

export default UsersPage;