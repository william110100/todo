import { FC, memo } from "react";
import Item from "../Item";
import { SectionResponse, ToDo } from "../../../../types";

const Section: FC<SectionResponse> = (props: SectionResponse) => {
  const { data, label } = props;

  return (
    <div className="flex flex-col gap-y-4">
      <div className="bg-[#3c3c3c] flex justify-between p-4 rounded-lg">
        <h1 className="font-semibold text-2xl text-white">{label}</h1>
        <h6 className="font-semibold text-lg text-white">{data.length}</h6>
      </div>
      <div className="flex flex-col">
        {data?.map((value: ToDo, _) => (
          <Item
            description={value.description}
            id={value.id}
            isComplete={value.isComplete}
            key={value.id}
          />
        ))}
      </div>
    </div>
  );
};

export default memo(Section);
