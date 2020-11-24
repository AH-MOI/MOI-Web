import { action, observable } from "mobx";
import { autobind } from "core-decorators";
@autobind
class ProgressStore {
  @observable modal = false;

  @action
  showMoreProgress = () => {
    this.modal = !this.modal;
    console.log(this.modal);
  };
}
export default ProgressStore;
