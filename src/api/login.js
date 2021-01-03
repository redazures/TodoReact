import client from './client'

const userApi="/user-login.php"

const postUser = () => {
    const formData = new FormData
    formData.append("email","user@rapptrlabs.com")
    formData.append("email","user@rapptrlabs.com")

    return client.post(userApi,formData, {headers: {'Content-type': 'multipart/form-data'}})
}

export default postUser