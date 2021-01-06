import client from './client'

const userApi="/user-login.php"

const postUser = (values) => {
    const formData = new FormData()
    formData.append("email",values.email)
    formData.append("password",values.password)
    return client.post(userApi,formData)
}

export default postUser