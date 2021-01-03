import { create } from "apisauce"


const apiClient = create({
    baseURL: 'http://dev.rapptrlabs.com/Tests/scripts',
    headers: {'Content-type': 'multipart/form-data'},
})

export default apiClient

//This can always change