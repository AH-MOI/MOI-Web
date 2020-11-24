import axios from 'axios';
import {SERVER} from "../../config/config.json";

class MyProjectAPI {
    async GetDevInfo(accessToken) {
        try {
            const config = {
                headers: {
                    Authorization: accessToken,
                }
            }
            const url = `${SERVER}/info/all-student`;
            const {data} = await axios.get(url);

            //const {data} = await axios.get(url, config);
            return data;
        } catch (error) {
            console.log(error)
        }
    }
}
 
export default new MyProjectAPI();