import axios from "axios";
import { SERVER_RED, SERVER_BLUE } from "../../config/config.json";
class CreateApi {
  async create(title, content, closing_date, personnel, hashtag) {
    try {
      const url = `${SERVER_RED}/project`;

      const body = {
        title,
        content,
        closing_date,
        personnel,
        hashtag,
      };

      let config = {};

      if (localStorage.getItem("accessToken")) {
        config = {
          headers: {
            Authorization: `Bearer ${localStorage.getItem("accessToken")}`,
          },
        };
      }

      const { data } = await axios.post(url, body, config);

      return data;
    } catch (error) {
      throw new Error(`${error}`);
    }
  }
}
export default new CreateApi();
