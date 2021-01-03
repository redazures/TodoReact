import { create } from "apisauce"


const apiClient = create({
    baseUrl: "http://dev.rapptrlabs.com/Tests/scripts/user-login.php"
})

export default apiClient

//This can always change