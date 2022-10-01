function resetFields () {
	document.getElementById('registration-form').reset()

	document.getElementById('first-name-valid').style.display = 'none'
	document.getElementById('last-name-valid').style.display = 'none'
	document.getElementById('email-valid').style.display = 'none'
	document.getElementById('password-valid').style.display = 'none'
	document.getElementById('confirm-password-valid').style.display = 'none'
	document.getElementById('tNC-valid').style.display = 'none'
}

function validate() {

	let firstName = document.getElementById('first-name').value
	let lastName = document.getElementById('last-name').value
	let email = document.getElementById('email').value
	let password = document.getElementById('password').value
	let confirmPassword = document.getElementById('confirm-password').value
	let tnC = document.getElementById('t-and-c').checked

    let error = false

	if(firstName.length >= 3) {
		document.getElementById('first-name-valid').style.display = 'block'
		document.getElementById('first-name-invalid').style.display = 'none'
	} else {
		error = true
		document.getElementById('first-name-invalid').style.display = 'block'
		document.getElementById('first-name-valid').style.display = 'none'
	}

	if(lastName.length >= 3) {
		document.getElementById('last-name-valid').style.display = 'block'
		document.getElementById('last-name-invalid').style.display = 'none'
	} else {
		error = true
		document.getElementById('last-name-invalid').style.display = 'block'
		document.getElementById('last-name-valid').style.display = 'none'
	}

	/* Email:
		1. Must include '@'
		2. Must include '.'
		3. At least one character before '@'.
		4. At least two characters after last '.'
	*/
	
	if(	email.includes('@') &&
		email.includes('.') &&
		email.indexOf('@') > 0 &&
		email.substr(email.lastIndexOf('.')+1).length >= 2
		) 
		{
		document.getElementById('email-valid').style.display = 'block'
		document.getElementById('email-invalid').style.display = 'none'
	} else {
		error = true
		document.getElementById('email-invalid').style.display = 'block'
		document.getElementById('email-valid').style.display = 'none'
	}

	/* Password:
		1. At least 8 characters
		2. At least one special character used from [$, #, @]
		3. At least one number used from [0, 1, 2, 3, 4]
	*/

	if( password.length >= 8 &&
		( password.includes('$') ||
		password.includes('#') ||
		password.includes('@') ||
		password.includes('0') ) &&
		( password.includes('1') ||
		password.includes('2') ||
		password.includes('3') ||
		password.includes('4') )
		)
		{
		document.getElementById('password-valid').style.display = 'block'
		document.getElementById('password-invalid').style.display = 'none'
		//error = true
	} else {
		error = true
		document.getElementById('password-invalid').style.display = 'block'
		document.getElementById('password-valid').style.display = 'none'
	}

	
	if(password !== confirmPassword) {
		document.getElementById('confirm-password-invalid').style.display = 'block'
		error = true
	} else {
		document.getElementById('confirm-password-invalid').style.display = 'none'
	}

	

	if(tnC) {
		document.getElementById("tNC-invalid").style.display = "none"
	} else {
		error = true
		document.getElementById("tNC-invalid").style.display = "block"
	}

	// If no error:
	// 1. Show alert with Success message
	// 2. Reset all fields

	if(error ===  false) { // also can be checked this way: !error
		alert('Your details have been saved successfully!')
		resetFields()
	}

}