import { useState } from "react";

const Calculator = () => {
  const [prevInput, setPrevInput] = useState("");
  const [currentInput, setCurrentInput] = useState("0");
  const [operator, setOperator] = useState(null);

  const handelInput = (e) => {
    const input = e.target.textContent;
    if (input === "." && currentInput.includes(".")) return;
    setCurrentInput((prev) => (prev === "0" ? input : prev + input));
  };

  const handelOperators = (e) => {
    const op = e.target.textContent;
    if (op === "=") {
      if (!prevInput || !operator) return;

      const num1 = parseFloat(prevInput);
      const num2 = parseFloat(currentInput);

      let result = 0;
      if (operator === "+") result = num1 + num2;
      if (operator === "-") result = num1 - num2;
      if (operator === "*") result = num1 * num2;
      if (operator === "/") result = num1 / num2;

      setCurrentInput(String(result));
      setPrevInput("");
      setOperator(null);
    } else {
      setOperator(op);
      setPrevInput(currentInput);
      setCurrentInput("0");
    }
  };
  const handelAllClear = () => {
    setCurrentInput("0");
    setOperator(null);
    setPrevInput("");
  };

  const handelClear = () => {
    if (currentInput.length === 1) {
      setCurrentInput("0");
    } else {
      setCurrentInput(currentInput.slice(0, -1));
    }
  };
  return (
    <div className="w-sm rounded-3xl bg-white p-6 shadow-2xs">
      <div>
        <div className="w-full rounded-xl border border-gray-300 px-4 py-4 text-right text-4xl text-gray-600 outline-none">
          {currentInput}
        </div>
        <div className="mt-8 grid h-80 grid-cols-4 grid-rows-5 gap-4">
          <button
            onClick={handelInput}
            className="flex cursor-pointer items-center justify-center rounded-lg border border-gray-300 text-4xl text-gray-600"
          >
            9
          </button>
          <button
            onClick={handelInput}
            className="flex cursor-pointer items-center justify-center rounded-lg border border-gray-300 text-4xl text-gray-600"
          >
            8
          </button>
          <button
            onClick={handelInput}
            className="flex cursor-pointer items-center justify-center rounded-lg border border-gray-300 text-4xl text-gray-600"
          >
            7
          </button>
          <button
            onClick={handelAllClear}
            className="flex cursor-pointer items-center justify-center rounded-lg border border-gray-300 text-2xl text-indigo-400"
          >
            AC
          </button>
          <button
            onClick={handelInput}
            className="flex cursor-pointer items-center justify-center rounded-lg border border-gray-300 text-4xl text-gray-600"
          >
            6
          </button>
          <button
            onClick={handelInput}
            className="flex cursor-pointer items-center justify-center rounded-lg border border-gray-300 text-4xl text-gray-600"
          >
            5
          </button>
          <button
            onClick={handelInput}
            className="flex cursor-pointer items-center justify-center rounded-lg border border-gray-300 text-4xl text-gray-600"
          >
            4
          </button>
          <button
            onClick={handelClear}
            className="flex cursor-pointer items-center justify-center rounded-lg border border-gray-300 text-3xl text-indigo-400"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="size-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M12 9.75 14.25 12m0 0 2.25 2.25M14.25 12l2.25-2.25M14.25 12 12 14.25m-2.58 4.92-6.374-6.375a1.125 1.125 0 0 1 0-1.59L9.42 4.83c.21-.211.497-.33.795-.33H19.5a2.25 2.25 0 0 1 2.25 2.25v10.5a2.25 2.25 0 0 1-2.25 2.25h-9.284c-.298 0-.585-.119-.795-.33Z"
              />
            </svg>
          </button>
          <button
            onClick={handelInput}
            className="flex cursor-pointer items-center justify-center rounded-lg border border-gray-300 text-4xl text-gray-600"
          >
            3
          </button>
          <button
            onClick={handelInput}
            className="flex cursor-pointer items-center justify-center rounded-lg border border-gray-300 text-4xl text-gray-600"
          >
            2
          </button>
          <button
            onClick={handelInput}
            className="flex cursor-pointer items-center justify-center rounded-lg border border-gray-300 text-4xl text-gray-600"
          >
            1
          </button>
          <button
            onClick={handelOperators}
            className="flex cursor-pointer items-center justify-center rounded-lg border border-gray-300 text-2xl text-indigo-400"
          >
            /
          </button>
          <button
            onClick={handelInput}
            className="flex cursor-pointer items-center justify-center rounded-lg border border-gray-300 text-4xl text-gray-600"
          >
            .
          </button>
          <button
            onClick={handelInput}
            className="col-span-2 flex cursor-pointer items-center justify-center rounded-lg border border-gray-300 text-4xl text-gray-600"
          >
            0
          </button>
          <button
            onClick={handelOperators}
            className="flex cursor-pointer items-center justify-center rounded-lg border border-gray-300 text-4xl text-indigo-400"
          >
            *
          </button>
          <button
            onClick={handelOperators}
            className="col-span-2 flex cursor-pointer items-center justify-center rounded-lg border border-gray-300 text-4xl text-indigo-400"
          >
            +
          </button>
          <button
            onClick={handelOperators}
            className="flex cursor-pointer items-center justify-center rounded-lg border border-gray-300 text-4xl text-indigo-400"
          >
            =
          </button>
          <button
            onClick={handelOperators}
            className="flex cursor-pointer items-center justify-center rounded-lg border border-gray-300 text-4xl text-indigo-400"
          >
            -
          </button>
        </div>
      </div>
    </div>
  );
};

export default Calculator;
