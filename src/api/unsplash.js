import axios from "axios";

export default axios.create({
    headers: {
        Authorization: "Client-ID Rj8NV3DLiBaH1kzcPpBQx4HEWrwWxnWg5Cm9pXhG26Y",
    },
    baseURL: "https://api.unsplash.com/search/photos",
});
