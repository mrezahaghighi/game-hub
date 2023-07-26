import axios from "axios";

export default axios.create({
    baseURL:"https://api.rawg.io/api",
    params: {
        key:"c0268a9d609d4dc8afab343b48bb1f6d"
    }
});