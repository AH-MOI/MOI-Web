import {autobind} from 'core-decorators';
import {action, observable} from 'mobx';
import MyProjectAPI from "../../assets/api/MyProjectApi";

@autobind
class MyProjectStore {
    @observable devInfo = {};

    @action
    async handleGetDevInfo() {
        try {
            const response = await MyProjectAPI.GetDevInfo();

            this.devInfo = response;

            return new Promise((resolve, reject) => {
                resolve(response);
            })
        } catch (error) {
            return new Promise((resolve, reject) => {
                reject(error);
            })
        }
    }
}

export default MyProjectStore;