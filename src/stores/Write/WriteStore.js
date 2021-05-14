import { action, observable } from "mobx";
import { autobind } from "core-decorators";
import CreateApi from "assets/api/CreateApi";
@autobind
class WriteStore {
  @observable modal = false;

  @action
  showWriteModal = () => {
    this.modal = !this.modal;
  };

  @action
  tryCreateProject = async (
    title,
    content,
    closing_date,
    personnel,
    hashtag,
    profile
  ) => {
    try {
      const response = await CreateApi.create(
        title,
        content,
        closing_date,
        personnel,
        hashtag,
        profile,
        hashtag
      );

      if (response.status === 200) {
        this.modal = true;
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
export default WriteStore;
