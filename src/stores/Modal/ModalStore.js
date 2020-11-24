import {autobind} from "core-decorators";
import {action, observable} from "mobx";

@autobind
class ModalStore {
    @observable show = false;

    @action
    handleShow() {
        this.show = !this.show;
    }
}

export default ModalStore;