
import './App.css';
import React, { useState } from "react";
import AddUserForm from './form/AddUserForm';
import UserTable from './table/UsetTable';
import EditUserForm from './form/EditUserForm';

function App() {

  const data = [
    {
      id: 1,
      name: 'sander',
      username: 'sanderdebr'
    },
    {
      id: 2,
      name: 'berend',
      username: 'berend123'
    }
  ]
  const initialState = { id: "", name: "", username: "" }

  const [users, setUsers] = useState(data);
  const [editing, setEditing] = useState(false);
  const [user, setUser] = useState()

  console.log(user);

  const addUser = (user) => {
    user.id = users.length + 1;
    setUsers([...users, user]);
  };

  const deleteUser = (id) => {
    setUsers(users.filter((user) => user.id !== id));
    console.log("delete")
  };


  const editUser = user => {
    setEditing(true)
    setUser({
      id: user.id,
      name: user.name,
      username: user.username,
    })
  }


  const updateUser = (id, updateUser) => {
    setEditing(false)
    setUsers(users.map(item => item.id === id ? updateUser : item))
  }


  return (
    <div className="container">
      <h1>CRUD REACT APP</h1>
      <div className="row">
        <div className="five columns">
          {!editing ?
            <AddUserForm addUser={addUser} /> :
            <EditUserForm
              editing={editing}
              user={user}
              setEditing={setEditing}
              updateUser={updateUser}
            />
          }
        </div>
        <div className="seven columns">
          <h2>View users</h2>
          <UserTable users={users} deleteUser={deleteUser} editUser={editUser} />
        </div>
      </div>
    </div>


  );
}

export default App;
