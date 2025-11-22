import React from 'react'
import RightCard from './RightCard'

const RightText = (props) => {
  return (
    <div id='right' className=" h-full flex flex-nowrap  overflow-x-auto gap-15 p-8  w-2/3 ">
      {
        props.user.map(function (elem,idx) {
          return <RightCard idx={idx}  img={elem.img} bio={elem.bio} tag={elem.tag} color={elem.color} />
        })
      }
    </div>
  );
}

export default RightText
