const objectify = (obj) => {
    const file = {
        firstname       : obj.firstname.value.toString(),
        lastname        : obj.lastname.value.toString(),
        email           : obj.email.value.toString(),
        password        : obj.password.value.toString(),
        serviceName     : obj.serviceName.value.toString()
    }
    return file;
}
export default objectify;