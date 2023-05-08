const validation = (userData) => { 
    const errors = {};

    if (!/^([a-zA-Z0-9._%-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,})$/.test(userData.Email)) {
        errors.Email = 'Invalid mail';
    }
    if (!userData.Email) errors.Email = "This field cannot be empty";
    if (userData.Email.length > 35) errors.Email = "The email cannot exceed 35 characters.";
    if (!/^(?=.*\d).+$/.test(userData.password)) errors.password = "The password must contain at least one number";
    if (userData.password.length < 6 || userData.password.length > 10) errors.password = "It must contain between 6 and 10 characters";
    
    return errors;
}
export default validation;
