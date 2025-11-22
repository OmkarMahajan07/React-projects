import Arrow from "./Arrow";
import Herotext from "./Herotext";

const LeftText = () => {
  return (
    <div className="h-full flex flex-col justify-between w-1/3">
      <div className="p-4">
        <Herotext />
      </div>
      <Arrow />
    </div>
  );
};

export default LeftText;
