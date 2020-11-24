import { action, observable } from "mobx";
import { autobind } from "core-decorators";
@autobind
class WriteStore {
  @observable modal = false;

  @action
  showWriteModal = () => {
    this.modal = !this.modal;
    console.log(this.modal);
  };
}
export default WriteStore;
