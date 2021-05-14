import { autobind } from "core-decorators";
import { action, observable } from "mobx";
import MyProjectAPI from "../../assets/api/MyProjectApi";
import axios from "axios";

@autobind
class MyProjectStore {
  @observable devInfo = [];

  @action
  async handleGetDevInfo(accessToken) {
    try {
      console.log(axios.defaults.headers.common["Authorization"]);
      const response = await MyProjectAPI.GetDevInfo(accessToken);

      this.devInfo = response.students;

      return new Promise((resolve, reject) => {
        resolve(response);
      });
    } catch (error) {
      return new Promise((resolve, reject) => {
        reject(error);
      });
    }
  }
}

export default MyProjectStore;
