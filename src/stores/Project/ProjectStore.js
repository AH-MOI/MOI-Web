import { autobind } from "core-decorators";
import { action, observable } from "mobx";
import Project from "../../assets/api/Project";

@autobind
class ProjectStore {
  @observable projects = [];

  @action
  async handleGetProjects() {
    try {
      const response = await Project.GetProjects();
      this.projects = response;

      return new Promise((resolve, _reject) => {
        resolve(response);
      });
    } catch (error) {
      return new Promise((_resolve, reject) => {
        reject(error);
      });
    }
  }
}

export default ProjectStore;
