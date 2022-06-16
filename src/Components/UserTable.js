import React from 'react'
import { Button } from '@material-ui/core'
import DeleteIcon from '@material-ui/icons/Delete';

function UserTable(props) {


    return (
        <table>
           
           {props.users.map(user => 
              
                <tr>
                    <td>{user.name}</td>
                    <td>{user.username}</td>
                    <td>
                      <Button 
                type = "submit"
                variant="contained" 
                color = "primary" 
                onClick = {()=>props.editRow(user)}>
                    Edit</Button>    
                </td>
                <td><Button 
                    type = "submit"
                    variant="contained" 
                    color = "primary" 
                    onClick = {()=>props.deleteUser(user.id)} 
                    style = {{marginLeft:'10px'}}
                    startIcon = {<DeleteIcon/>}></Button></td>
                </tr>
       
            )}
        
        </table>
    )
}

export default UserTable
