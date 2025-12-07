import React from "react";

const Card = (props) => {
  return (
    <div>
      <div className="h-50 w-50 flex flex-wrap overflow-hidden object-cover rounded-xl ">
        <img src={props.elem.download_url}></img>
      </div>
      <h2 className="px-2 font-medium">{props.elem.author}</h2>
    </div>
  );
};

export default Card;
