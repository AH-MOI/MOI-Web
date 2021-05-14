import { action, observable } from "mobx";
import { autobind } from "core-decorators";
import ProgressApi from "assets/api/ProgressApi";
@autobind
class ProgressStore {
  @observable modal = false;
  @observable modalLoading = false;

  @observable progress = [];
  @observable myProgress = [];
  @observable getProgress = {};

  @action
  showMoreProgress = () => {
    this.modal = !this.modal;
  };

  @action
  getOutModal = () => {
    if (this.modal === false) {
      this.getProgress = {};
    }
  };

  @action
  tryMyProgress = async () => {
    try {
      const response = await ProgressApi.getMyProgress();

      if (response.status === 200) {
        this.myProgress = response.data.projects;
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
        this.progress = response.data.projects;
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
        this.getProgress = response.data;
        this.modalLoading = true;
      }
      console.log(this.modalLoading);

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
  tryApplyStudent = async (appliedStudentId, projectId) => {
    try {
      const response = await ProgressApi.applyStuddent(
        appliedStudentId,
        projectId
      );

      if (response.status === 200) {
        console.log(response);
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
