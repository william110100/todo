import { FC, ReactNode, createContext, useMemo, useState } from "react";
import { ToDo } from "../types";

interface IAppContext {
  toDos: ToDo[];
  setToDos: (toDos: ToDo[]) => void;
}

const AppContext = createContext({} as IAppContext);

const AppProvider: FC<{ children: ReactNode }> = ({ children }) => {
  const [toDos, setToDos] = useState<ToDo[]>([]);

  const value = useMemo(() => ({ toDos, setToDos }), [toDos, setToDos]);

  return <AppContext.Provider value={value}>{children}</AppContext.Provider>;
};

export { AppContext, AppProvider };
