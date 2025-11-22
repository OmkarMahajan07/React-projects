import { MoveRight } from "lucide-react";

const RightCardContent = (props) => {
  return (
    <div>
      <div className="absolute top-0 left-0 h-full w-full flex flex-col justify-between ">
        <h2 className=" h-15 w-15 rounded-full ml-8 mt-5 flex justify-center items-center  bg-gray-50 text-3xl font-bold ">
          {props.idx + 1}
        </h2>
        <div>
          <p className="font-medium leading-relaxed text-2xl ml-3 mb-8 text-white">
            {props.bio}
          </p>
          <div className=" p-8 mb-10 flex justify-between ">
            <button
              style={{ backgroundColor: props.color }}
              className="h-14 w-40 text-2xl text-white font-semibold rounded-3xl"
            >
              {props.tag}
            </button>
            <button
              style={{ backgroundColor: props.color }}
              className="h-13 w-13 flex justify-center items-center rounded-full text-white font-bold bg-blue-600"
            >
              <MoveRight />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RightCardContent;
