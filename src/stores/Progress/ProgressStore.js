import { action, observable } from "mobx";
import { autobind } from "core-decorators";
import ProgressApi from "assets/api/ProgressApi";
@autobind
class ProgressStore {
  @observable modal = false;
  @observable modalLoading = false;
  @observable progress = [];
  @observable myProgress = [];

  @action
  showMoreProgress = () => {
    this.modal = !this.modal;
  };

  @action
  tryMyProgress = async () => {
    try {
      const response = await ProgressApi.getMyProgress();

      return new Promise((resolve, reject) => {
        resolve(response);
      });
    } catch (error) {
      return new Promise((resolve, reject) => {
        reject(error);
      });
    }
  };

  @action
  tryProgress = async () => {
    try {
      const response = await ProgressApi.getProgress();
      if (response.status === 200) {
        this.progress = response.data.projects;
        console.log(this.progress);
      }

      return new Promise((resolve, reject) => {
        resolve(response);
      });
    } catch (error) {
      return new Promise((resolve, reject) => {
        reject(error);
      });
    }
  };
  @action
  tryInfoProgress = async (id) => {
    try {
      const response = await ProgressApi.getInfoProgress(id);

      if (response.status === 200) {
        this.modalLoading = true;
        this.myProgress = response.data.projects;
        console.log(this.myProgress);
      }

      return new Promise((resolve, reject) => {
        resolve(response);
      });
    } catch (error) {
      return new Promise((resolve, reject) => {
        reject(error);
      });
    }
  };
}
export default ProgressStore;
