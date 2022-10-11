import React from 'react';

const UserTable = (props) => {
    return (
        <table>
            <thead>
                <tr>
                    <th>ID</th>
                    <th>Name</th>
                    <th>Username</th>
                    <th>Actions</th>
                </tr>
            </thead>
            <tbody>
                { 
                    props.users.map(user => {
                        const {id, name, username} = user;
                        return (
                            <tr key={id}>
                                <td>{id}</td>
                                <td>{name}</td>
                                <td>{username}</td>
                                <td>
                                    <button
                                     onClick={() => props.deleteUser(id)}
                                      >Delete</button>
                                    <button onClick={() => { props.editUser(user) }} >Edit</button>
                                </td>
                            </tr>
                        )
                    })  
                }
            </tbody>
        </table>
    )
}

export default UserTable;