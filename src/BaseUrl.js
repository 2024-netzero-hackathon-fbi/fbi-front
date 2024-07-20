import axios from "axios";

const API = axios.create({
    baseURL : "https://lg029tjlp1.execute-api.ap-northeast-2.amazonaws.com/dev/netzero-12-labmda-test"
});

export default API;