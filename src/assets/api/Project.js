import { SERVER_RED } from "../../config/config.json";
import axios from "axios";

class Project {
  async GetProjects() {
    try {
      const url = `${SERVER_RED}/project`;
      const { data } = await axios.get(url);

      return data;
    } catch (error) {
      throw new Error(`${error}`);
    }
  }
}

export default new Project();
