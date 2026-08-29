import React from "react";
import { MoveRight } from "lucide-react";
import RightCardConetnt from "./RightCardConetnt";

const RightCard = (props) => {
  return (
    <div className="h-full w-70 shrink-0 bg-amber-200 rounded-4xl overflow-hidden relative">

      <img
        className="h-full w-full object-cover"
        src={props.img}
        alt=""
      />
      <RightCardConetnt id={props.id} tag={props.tag}/>

    </div>
  );
};

export default RightCard;
