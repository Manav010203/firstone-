// export const Backgroundchanger=({

// })=>{
//     return (
//         // <div className="flex justify-between items-center ">
        
//         //     <button className="bg-blue-500 hover:bg-blue-700 text-white absolute bottom-0 font-bold py-2 px-4 rounded">hello</button>
            
//         //     <button className="bg-blue-500 hover:bg-blue-700 text-white absolute bottom-0 font-bold py-2 px-4 rounded">bye</button>
            
//         //     <button className="bg-blue-500 hover:bg-blue-700 text-white absolute bottom-0 font-bold py-2 px-4 rounded">fk</button>
            

//         //     </div>
//         <div
//       className="w-full h-screen bg-white flex justify-center items-end"
//       style={{ backgroundColor: color }}
//     >
//       <div className="shadow-lg p-2 w-fit flex flex-wrap gap-4 rounded-lg mb-5 bg-white">
//         {colors.map((color, i) => (
//           <button
//             key={i}
//             className={`px-3 py-1 ${
//               color === "Black" ? "text-white" : "text-black"
//             } rounded-lg`}
//             style={
//               color === "Default"
//                 ? { backgroundColor: "orange" }
//                 : { backgroundColor: color }
//             }
//             onClick={() =>
//               color === "Default" ? setColor(preferedColor) : setColor(color)
//             }
//           >
//             {color}
//           </button>
//         ))}
//       </div>
//     </div>
        
//     )
// }
import React, { useState } from "react";
const colors = ["Red", "Yellow", "Black", "Purple", "Green", "Blue", "Default"];

const Backgroundchanger = () => {
  const [color, setColor] = useState("");
  const preferedColor = window.matchMedia('(prefers-color-scheme: "Dark" )')
    ? "black"
    : "white";

  return (
    <div
      className="w-full h-screen bg-white flex justify-center items-end"
      style={{ backgroundColor: color }}
    >
      <div className="shadow-lg p-2 w-fit flex flex-wrap gap-4 rounded-lg mb-5 bg-white">
        {colors.map((color, i) => (
          <button
            key={i}
            className={`px-3 py-1 ${
              color === "Black" ? "text-white" : "text-black"
            } rounded-lg`}
            style={
              color === "Default"
                ? { backgroundColor: "orange" }
                : { backgroundColor: color }
            }
            onClick={() =>
              color === "Default" ? setColor(preferedColor) : setColor(color)
            }
          >
            {color}
          </button>
        ))}
      </div>
    </div>
  );
};

export default Backgroundchanger;