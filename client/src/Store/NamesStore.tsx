import { observable, action, makeObservable, configure } from "mobx";
import { getNameInfo } from "../api/requests";
import { actualNameObjectType } from "../types/types";

configure({
  useProxies: "always",
});
export class NamesStore {
  @observable.ref actualName: actualNameObjectType = {
    name: "",
    gender: "",
    country: "",
  };
  @observable namesHistory: actualNameObjectType[] = [];

  constructor() {
    makeObservable(this);
  }

  @action
  setActualName = async (name: string) => {
    const data = await getNameInfo(name);
    if(!data.name){
      return ;
    }
    this.actualName = data;
    this.addName(data);
  };
  @action
  addName = (nameObject: actualNameObjectType) => {
    const ifExist = this.namesHistory.some((el) => el.name === nameObject.name);
    if (!ifExist) this.namesHistory.push(nameObject);
  };
}
