import React, {useState, useEffect} from 'react';

const EditUserForm = (props) => {

    
    const [user, setUser] = useState(props.user);

    useEffect(
        () => {
            setUser(props.user)
        },
        [ props ]
      )

    const handleChange = e => {
        const {name, value} = e.target;
        setUser({...user, [name]: value});
        }

    const handleSubmit = e => {
        e.preventDefault();
        props.updateUser(user.id,user)
    }
    return (
        <>
        <h1>Edit User</h1>
          <form>
            <label>Name</label>
            <input className="u-full-width" type="text" value={user.name} name="name" onChange={handleChange} />
            <label>Username</label>
            <input className="u-full-width" type="text" value={user.username} name="username" onChange={handleChange} />
            <button onClick={() => props.setEditing(false)} >cancel</button>
            <button className="button-primary" type="submit" onClick={handleSubmit} >Edit user</button>
        </form>
        </>
      
    )
}

export default EditUserForm;