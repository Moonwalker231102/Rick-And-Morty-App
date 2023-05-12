const validation = (userData) => { 
    const errors = {};

    if (!/^([a-zA-Z0-9._%-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,})$/.test(userData.email)) {
        errors.email = 'Invalid mail';
    }
    if (!userData.email) errors.email = "This field cannot be empty";
    if (userData.email.length > 35) errors.email = "The email cannot exceed 35 characters.";
    if (!/^(?=.*\d).+$/.test(userData.password)) errors.password = "The password must contain at least one number";
    if (userData.password.length < 6 || userData.password.length > 10) errors.password = "It must contain between 6 and 10 characters";
    
    return errors;
}
export default validation;
