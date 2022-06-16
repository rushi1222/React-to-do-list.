import React, { useState, Fragment } from 'react'
import AddUserForm from './Components/AddUserForm'
import EditUserForm from './Components/EditUserForm'
import UserTable from './Components/UserTable'
import './App.css'



function App() {

  const usersData = [
    { id: 1, name: 'BRUCE', username: 'DARKKNIGHT' },
    { id: 2, name: 'TONYSTARK', username: 'IRONMAN' },
    { id: 3, name: 'SAITAMA', username: 'ONE PUNCH MAN' }
                    ]
                    
	const initialFormState = { id: null, name: '', username: '' }

	// Setting state
	const [ users, setUsers ] = useState(usersData)
	const [ currentUser, setCurrentUser ] = useState(initialFormState)
  const [ editing, setEditing ] = useState(false)
  
	const addUser = user => {
		user.id = users.length + 1
		setUsers([ ...users, user ])
	}
  const deleteUser = id => {
    setEditing(false)
    setUsers(users.filter(user => user.id !== id))
  }

  const updateUser = (id, updatedUser) => {
		setEditing(false)

		setUsers(users.map(user => (user.id === id ? updatedUser : user)))
		
	}
  const editRow = (user) =>{
    setEditing(true)
    setCurrentUser({id: user.id, name: user.name, username: user.username})
    console.log("edit")
  }
  
  return (
    <div class = "body">
      <div className='form'>
       {editing ? (
         <div >
           <h2>Edit user</h2>
           <EditUserForm
           editing = {editing}
           setEditing = {setEditing}
           currentUser ={currentUser}
           updateUser= {updateUser} />
         </div>
       ):(
         <div>
            <h2>Add new user</h2>
            <AddUserForm addUser={addUser} />
         </div>
       )}
      </div>
      <div className='table'>
      <h2>View Data</h2>
      <UserTable users = {users} deleteUser = {deleteUser} editRow = {editRow}/>
      </div>
  
    </div>
  )
}

export default App
