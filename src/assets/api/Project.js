import { SERVER } from "../../config/config.json";
import axios from "axios";

class Project {
  async GetProjects() {
    try {
      const url = `${SERVER}/project`;
      const { data } = await axios.get(url);

      return data;
    } catch (error) {
      throw new Error(`${error}`);
    }
  }
}

export default new Project();
