import React, { useState } from 'react'
import TextField from '@material-ui/core/TextField'
import { Button } from '@material-ui/core'

const AddUserForm = props => {
	const initialFormState = { id: null, name: '', username: '' }
	const [ user, setUser ] = useState(initialFormState)

	const handleInputChange = event => {
		const { name, value } = event.target

		setUser({ ...user, [name]: value })
	}

	return (
		<form
			onSubmit={event => {
				event.preventDefault()
				if (!user.name || !user.username) return

				props.addUser(user)
				setUser(initialFormState)
			}}
		>
			<TextField id="filled-basic" type="text" name="name" label="Name" variant="filled"  value={user.name} onChange={handleInputChange}/>
			<br />
			<br />
			<TextField id="filled-basic" label="Username" variant="filled" type="text" name="username" value={user.username} onChange={handleInputChange} />
			<br />
			<br />
			
			<Button type = "submit" variant="contained" color = "primary">ADD</Button>
		</form>
	)
}

export default AddUserForm
