import React from "react";
import { useState } from "react";

const App = () => {
  const [title, setTitle] = useState("");
  const [details, setDetails] = useState("");

  const [task, setTask] = useState([]);

  const submitHandler = (e) => {
    e.preventDefault();

    const copytask = [...task];
    copytask.push({ title, details });
    console.log(copytask);
    setTask(copytask);
    setTitle("");
    setDetails("");
  };

  const deleteNote = (idx) => {
    const copyTask = [...task];
    copyTask.splice(idx, 1);
    setTask(copyTask);
  };

  return (
    <div className=" h-screen lg:flex w-full bg-black text-white">
      <form
        onSubmit={(e) => {
          submitHandler(e);
        }}
        className="flex lg:w-1/2 items-start p-10 "
      >
        <div className="flex items-start gap-4 flex-col w-full  ">
          <input
            type="text"
            value={title}
            onChange={(e) => {
              setTitle(e.target.value);
            }}
            placeholder="Enter Heading"
            className="border-2 outline-none w-full rounded px-5 py-5"
          ></input>
          <textarea
            value={details}
            onChange={(e) => {
              setDetails(e.target.value);
            }}
            placeholder="Write Details here"
            className="  border-2 px-5 flex h-32 py-2  flex-row w-full rounded "
          />
          <button className="bg-white active:scale-95 w-full text-black rounded text-2xl py-3 ">
            Add Note
          </button>
        </div>
      </form>
      <div className=" lg:w-1/2 lg:border-l-2 h-full gap   p-8">
        <h1 className="text-3xl font-medium">Your Notes</h1>
        <div className="flex  flex-wrap mt-7 gap-3 overflow-auto">
          {task.map((elem, idx) => {
            return (
              <div
                key={idx}
                className=" py-7 flex justify-between  items-startrelative  h-52 w-40 p-4  flex-col gap-2 text-black bg-white  rounded-2xl bg-cover bg-[url('data:image/jpeg;base64,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')] "
              >
                <div>
                  <h3 className="font-bold  leading-tight ">
                    {elem.title}
                  </h3>
                  <p className="font-medium text-xs py-3 text-gray-600">{elem.details}</p>
                </div>
                <button
                  onClick={() => {
                    deleteNote(idx);
                  }}
                  className="bg-red-600 active:scale-95 font-medium text-white rounded"
                >
                  Delete
                </button>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default App;
