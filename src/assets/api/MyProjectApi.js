import axios from "axios";
import { SERVER_BLUE } from "../../config/config.json";

class MyProjectAPI {
  async GetDevInfo(accessToken) {
    try {
      const config = {
        headers: {
          Authorization: accessToken,
        },
      };
      const url = `${SERVER_BLUE}/info/all-student`;
      const { data } = await axios.get(url, config);

      return data;
    } catch (error) {
      console.log(error);
    }
  }
}

export default new MyProjectAPI();
