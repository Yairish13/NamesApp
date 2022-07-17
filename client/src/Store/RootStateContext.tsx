import React from "react";
import { NamesStore } from "./NamesStore";

type RootStateContextValue = {
  namesStore: NamesStore;
};

const RootStateContext = React.createContext<RootStateContextValue>(
  {} as RootStateContextValue
);

const namesStore = new NamesStore();

export const RootStateProvider: React.FC<React.PropsWithChildren<{}>> = ({
  children,
}) => {
  return <RootStateContext.Provider value={{namesStore}}>{children}</RootStateContext.Provider>;
};


export const useRootStore =() =>React.useContext(RootStateContext)