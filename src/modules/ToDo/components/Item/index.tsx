import { Trash } from "iconsax-react";
import { FC, memo, useContext } from "react";
import { ToDo } from "../../../../types";
import { AppContext } from "../../../../contexts";

const Item: FC<ToDo> = (props: ToDo) => {
  const { description, id, isComplete } = props;
  const { toDos, setToDos } = useContext(AppContext);

  const onDelete = () => {
    const updatedToDos = toDos.filter((toDo) => toDo.id !== id);
    setToDos(updatedToDos);
  };

  const onCheck = () => {
    const updatedToDos = toDos.map((toDo) =>
      toDo.id === id ? { ...toDo, isComplete: !isComplete } : toDo,
    );
    setToDos(updatedToDos);
  };

  return (
    <div className="bg-[#292f36] flex shrink-0 justify-between p-4 rounded-lg">
      <div className="flex items-center gap-x-4">
        <input
          checked={isComplete}
          className="h-6 w-6"
          id={id}
          onChange={onCheck}
          type="checkbox"
        />
        <label
          className={`font-semibold text-xl text-white ${
            isComplete ? "line-through" : ""
          }`}
          htmlFor={id}
        >
          {description}
        </label>
      </div>
      <button className="bg-[#eb2626] p-1 rounded-lg" onClick={onDelete}>
        <Trash color="#ffffff" size="32" variant="Linear" />
      </button>
    </div>
  );
};

export default memo(Item);
