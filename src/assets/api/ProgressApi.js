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

  async getInfoProgress(id) {
    try {
      const url = `${SERVER_BLUE}/info/project/participation/${id}`;

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

  async applyStuddent(appliedStudentId, projectId) {
    try {
      const url = `${SERVER_BLUE}/participation/project`;

      const body = {
        appliedStudentId,
        projectId,
      };

      let config = {};
      if (localStorage.getItem("accessToken")) {
        config = {
          headers: {
            Authorization: `${localStorage.getItem("accessToken")}`,
          },
        };
      }

      const data = await axios.patch(url, body, config);

      return data;
    } catch (error) {
      throw new Error(`${error}`);
    }
  }
}
export default new ProgressApi();
