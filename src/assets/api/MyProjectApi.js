import axios from 'axios';
import {SERVER} from "../../config/config.json";

class MyProjectAPI {
    async GetDevInfo() {
        try {
            const url = `${SERVER}/info/student`;
            const {data} = await axios.get(url);

            return data;
        } catch (error) {
            console.log(error)
        }
    }
}
 
export default new MyProjectAPI();