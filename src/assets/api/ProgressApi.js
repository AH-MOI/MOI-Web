import axios from "axios";
import { SERVER_RED, SERVER_BLUE } from "../../config/config.json";
class ProgressApi {
  async getMyProgress() {
    try {
      const url = `${SERVER_BLUE}/info/project`;

      let config = {};

      if (localStorage.getItem("accessToken")) {
        config = {
          headers: {
            Authorization: `${localStorage.getItem("accessToken")}`,
          },
        };
      }

      const data = await axios.get(url, config);

      return data;
    } catch (error) {
      throw new Error(`${error}`);
    }
  }
  async getProgress() {
    try {
      const url = `${SERVER_BLUE}/info/participation/project`;

      let config = {};

      if (localStorage.getItem("accessToken")) {
        config = {
          headers: {
            Authorization: `${localStorage.getItem("accessToken")}`,
          },
        };
      }

      const data = await axios.get(url, config);

      return data;
    } catch (error) {
      throw new Error(`${error}`);
    }
  }

  async getInfoProgress() {
    try {
      const url = `${SERVER_BLUE}/info/participation/project`;

      let config = {};

      if (localStorage.getItem("accessToken")) {
        config = {
          headers: {
            Authorization: `${localStorage.getItem("accessToken")}`,
          },
        };
      }

      const data = await axios.get(url, config);

      return data;
    } catch (error) {
      throw new Error(`${error}`);
    }
  }
}
export default new ProgressApi();
