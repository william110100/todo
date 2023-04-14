import { Add } from "iconsax-react";
import { FC, FormEvent, memo, useContext, useState } from "react";
import { nanoid } from "nanoid";
import { AppContext } from "../../../../contexts";

const Input: FC = () => {
  const { toDos, setToDos } = useContext(AppContext);
  const [newToDo, setNewToDo] = useState<string>("");

  const onAdd = () => {
    if (newToDo.trim() !== "") {
      setToDos([
        ...toDos,
        { description: newToDo, id: nanoid(), isComplete: false },
      ]);
      setNewToDo("");
    }
  };

  return (
    <div className="flex flex-col gap-y-8 items-center justify-center">
      <h1 className="text-4xl font-semibold text-white">To Do List</h1>
      <form
        className="flex gap-x-4"
        onSubmit={(e: FormEvent<HTMLFormElement>) => e.preventDefault()}
      >
        <input
          className="bg-[#292f36] px-4 rounded-lg text-white"
          onChange={(e) => setNewToDo(e.target.value)}
          placeholder="Add a ToDo"
          type="text"
          value={newToDo}
        />
        <button
          className="bg-[#37d67a] rounded-lg"
          onClick={onAdd}
          type="submit"
        >
          <Add color="#ffffff" size="48" variant="Linear" />
        </button>
      </form>
    </div>
  );
};

export default memo(Input);
