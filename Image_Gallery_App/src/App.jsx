import React, { useEffect, useState } from "react";
import axios from "axios";
import Card from "./components/Card"

const App = () => {
  const [userData, setUserData] = useState([]);

  const [index, setIndex] = useState(1);

  const getData = async () => {
    const response = await axios.get(
      `https://picsum.photos/v2/list?page=${index}&limit=15`
    );
    setUserData(response.data);
  };

  let printUserData =<h2 className="text-gray-600  flex justify-center items-center text-2xl absolute top-1/2 left-1/2 translate-x-1/2 translate-y-1/2 " >Loading...</h2>;

  useEffect(
    function () {
      getData();
    },[index]);
  
  if (userData.length > 0) {
    printUserData = userData.map(function (elem, idx) {
      return (
        <div key={idx}>
          <Card elem={elem} />
        </div>
      );
    });
  }

  return (
    <div className="bg-black h-screen text-white flex flex-col">
      <div className="flex grow overflow-auto p-7 relative">
        <div className="flex flex-wrap gap-5 p-2">{printUserData}</div>
      </div>
      <div className="w-full bg-black border-t border-gray-800">
        <div className=" flex flex-wrap justify-center items-center gap-5 p-4">
          <button
            style={{ opacity: index == 1 ? 0.7 : 1 }}
            className="bg-amber-500 active:scale-95 font-medium  px-4 py-1 rounded"
            onClick={() => {
              if (index > 1) {
                setIndex(index - 1);
                setUserData([]);
              }
            }}
          >
            Prev
          </button>
          <h2>Page {index}</h2>
          <button
            className="bg-amber-500 active:scale-95 font-medium  px-4 py-1 rounded"
            onClick={() => {
              setUserData([]);
              setIndex(index + 1);
            }}
          >
            Next
          </button>
        </div>
      </div>
    </div>
  );
};

export default App;
