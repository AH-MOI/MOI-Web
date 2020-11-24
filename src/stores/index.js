import ModalStore from "./Modal/ModalStore";
import MyProjectStore from "./MyProject";
import ProgressStore from "./Progress";
import ProjectStore from "./Project/ProjectStore";
import WriteStore from "./Write";

const stores = {
  MyProjectStore: new MyProjectStore(),
  ModalStore: new ModalStore(),
  ProjectStore: new ProjectStore(),
  ProgressStore: new ProgressStore(),
  WriteStore: new WriteStore(),
};

export default stores;
