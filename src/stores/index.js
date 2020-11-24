import ModalStore from "./Modal/ModalStore";
import ProgressStore from "./Progress";
import ProjectStore from "./Project/ProjectStore";
import WriteStore from "./Write";

const stores = {
  ModalStore: new ModalStore(),
  ProjectStore: new ProjectStore(),
  ProgressStore: new ProgressStore(),
  WriteStore: new WriteStore(),
};

export default stores;
