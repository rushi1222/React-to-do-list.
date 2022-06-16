import React, {useState} from 'react'
import TextField from '@material-ui/core/TextField'
import { Button } from '@material-ui/core'


function EditUserForm(props) {

    const [user, setUser] = useState(props.currentUser)

    return (
       <form 
       onSubmit = {event =>{
       event.preventDefault()
       
       
       props.updateUser(user.id, user)
       }} >
           <div class = "edit">
           <TextField id="filled-basic" label="Username" variant="filled" type="text" name="name" value={user.name}   onChange = {(e)=>setUser({...user, name : e.target.value})} />
           <br />
           <br />
           <TextField id="filled-basic" label="Username" variant="filled" type="text" name="username" value={user.username}   onChange = {(e)=>setUser({...user, username : e.target.value})}/>
           </div>
           <br/>
           <Button type="submit" variant="contained" color = "primary">Update</Button>
           
      {/* <button onClick={() => props.setEditing(false)} className="button muted-button">
        Cancel
      </button> */}
       </form>
    )
}

export default EditUserForm
