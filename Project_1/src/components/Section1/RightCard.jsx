
import RightCardContent from "./RightCardContent";

const RightCard = (props) => {
  return (
    <div className="h-full w-100 relative ml-8 overflow-hidden shrink-0 bg-gray-200  rounded-3xl ">
      <img
        className="h-full object-cover"
        src={props.img}
      />
      <RightCardContent idx={props.idx} bio={props.bio} tag={props.tag} color={props.color} />  
    
    </div>
  );
};

export default RightCard;
