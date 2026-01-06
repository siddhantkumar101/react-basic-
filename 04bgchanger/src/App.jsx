import { useState } from "react";

function App() {
  const [bgColor, setBgColor] = useState("white");

  return (
    <div
      className="h-screen w-full transition-colors duration-300"
      style={{ backgroundColor: bgColor }}
    >
      <ol className="fixed bottom-6 left-1/2 -translate-x-1/2
                     flex gap-3 bg-white/90 backdrop-blur
                     px-4 py-3 rounded-full shadow-lg">

        <li>
          <button
            onClick={() => setBgColor("red")}
            className="px-4 py-2 rounded-full bg-red-500 text-white">
            Red
          </button>
        </li>

        <li>
          <button
            onClick={() => setBgColor("blue")}
            className="px-4 py-2 rounded-full bg-blue-500 text-white">
            Blue
          </button>
        </li>

        <li>
          <button
            onClick={() => setBgColor("green")}
            className="px-4 py-2 rounded-full bg-green-500 text-white">
            Green
          </button>
        </li>

        <li>
          <button
            onClick={() => setBgColor("black")}
            className="px-4 py-2 rounded-full bg-black text-white">
            Dark
          </button>
        </li>

      </ol>
    </div>
  );
}

export default App;

