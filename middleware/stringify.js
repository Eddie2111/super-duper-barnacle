const stringify = (obj) => {
    const file = {
        firstname: obj.firstname.value,
        lastname: obj.lastname.value,
        email: obj.email.value,
        password: obj.password.value,
        serviceName: obj.servicename.value
    }
    return file;
}
export default stringify;