import ProgressStore from "./Progress";
import WriteStore from "./Write";

const stores = {
  ProgressStore: new ProgressStore(),
  WriteStore: new WriteStore(),
};

export default stores;
