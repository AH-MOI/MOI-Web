import {autobind} from "core-decorators";
import {action, observable} from "mobx";

@autobind
class IdStore {
    @observable id = '';

    @action
    handleIdStore() {
        this.id = id;
    }
}

export default IdStore;