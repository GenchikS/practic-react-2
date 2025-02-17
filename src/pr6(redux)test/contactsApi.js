import axios from "axios";


const url = `https://66b1f8e71ca8ad33d4f5f63e.mockapi.io/campers`;

export const contactsApi = async () => {
    const response = axios.get(url)
        .then(response => {return response.data})
        .catch(err=> {return err})
    return response;
}
