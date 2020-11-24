import { action, observable } from "mobx";
import { autobind } from "core-decorators";
import ProgressApi from "assets/api/ProgressApi";
@autobind
class ProgressStore {
  @observable modal = false;
  @observable myProgressLoading = false;
  @observable progressLoading = false;
  @observable modalLoading = false;

  @action
  showMoreProgress = () => {
    this.modal = !this.modal;
  };

  @action
  tryMyProgress = async () => {
    try {
      const response = await ProgressApi.getMyProgress();
      if (response.status === 200) {
        this.myProgressLoading = true;
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
  tryProgress = async () => {
    try {
      const response = await ProgressApi.getProgress();
      if (response.status === 200) {
        this.progressLoading = true;
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
