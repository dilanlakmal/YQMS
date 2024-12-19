/*
function DefectCounter({ count, onIncrement, onDecrement }) {
  return (
    <div className="flex items-center space-x-2">
      <button
        onClick={onDecrement}
        className="w-8 h-8 flex items-center justify-center bg-gray-200 rounded hover:bg-gray-300"
        disabled={count === 0}
      >
        -
      </button>
      <input
        type="number"
        value={count}
        readOnly
        className="w-12 text-center border rounded"
      />
      <button
        onClick={onIncrement}
        className="w-8 h-8 flex items-center justify-center bg-gray-200 rounded hover:bg-gray-300"
      >
        +
      </button>
    </div>
  );
}

export default DefectCounter;
*/

/*
function DefectCounter({ count, onIncrement, onDecrement }) {
  return (
    <div className="flex items-center space-x-2">
      <button
        onClick={onDecrement}
        className="w-8 h-8 flex items-center justify-center bg-gray-200 rounded-full hover:bg-gray-300"
        disabled={count === 0}
      >
        -
      </button>
      <input
        type="number"
        value={count}
        readOnly
        className="w-12 text-center border rounded"
      />
      <button
        onClick={onIncrement}
        className="w-8 h-8 flex items-center justify-center bg-gray-200 rounded-full hover:bg-gray-300"
      >
        +
      </button>
    </div>
  );
}

export default DefectCounter; */

import { useEffect, useState } from "react";

function DefectCounter({ count, onIncrement, onDecrement, onInputChange }) {
  const [inputValue, setInputValue] = useState(count);

  // Sync local state with prop whenever the `count` prop changes
  useEffect(() => {
    setInputValue(count);
  }, [count]);

  const handleInputChange = (e) => {
    const value = e.target.value;
    if (/^\d*$/.test(value)) {
      // Allow only numeric values
      setInputValue(value);
      onInputChange(Number(value || 0));
    }
  };

  const handleBlur = () => {
    if (inputValue === "") {
      setInputValue(count); // Reset to current count if input is cleared
    }
  };

  return (
    <div className="flex items-center space-x-2">
      <button
        onClick={onDecrement}
        className="w-8 h-8 flex items-center justify-center bg-gray-200 rounded hover:bg-gray-300"
        disabled={count === 0}
      >
        -
      </button>
      <input
        type="text"
        value={inputValue}
        onChange={handleInputChange}
        onBlur={handleBlur}
        className="w-12 text-center border rounded"
      />
      <button
        onClick={onIncrement}
        className="w-8 h-8 flex items-center justify-center bg-gray-200 rounded hover:bg-gray-300"
      >
        +
      </button>
    </div>
  );
}

export default DefectCounter;
