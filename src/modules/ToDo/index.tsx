import { FC, memo, useContext } from "react";
import { Input, Section } from "./components";
import { AppContext } from "../../contexts";

const ToDo: FC = () => {
  const { toDos } = useContext(AppContext);
  const incompletedToDo = toDos.filter((toDo) => !toDo.isComplete);
  const completedToDo = toDos.filter((toDo) => toDo.isComplete);

  return (
    <div className="bg-gray-800 flex flex-col gap-y-8 h-screen w-screen p-8">
      <Input />
      <Section data={incompletedToDo} label="Incomplete" />
      <Section data={completedToDo} label="Complete" />
    </div>
  );
};

export default memo(ToDo);
