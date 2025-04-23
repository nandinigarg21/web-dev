import React from "react";
import Random from "./Components/Random";
import Tag from "./Components/Tag";


function App() {
  return (
    <div className="w-full h-full-screen flex flex-col background relative items-center">
      <h1 className=" absolute bg-white rounded-lg w-11/12 text-center mt-[40px]
      px-8 py-2 text-4xl font-bold">
        Random GIF
      </h1>
      <div className="flex flex-col w-full items-center gap-y-10 mt-[120px]">
        <Random/>
        <Tag/>
      </div>

     
    </div>
  );
}

export default App;
