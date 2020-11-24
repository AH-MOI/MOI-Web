import ModalStore from "./Modal/ModalStore";
import ProgressStore from "./Progress";
import WriteStore from "./Write";

const stores = {
  ModalStore: new ModalStore(),
  ProgressStore: new ProgressStore(),
  WriteStore: new WriteStore(),
};

export default stores;
