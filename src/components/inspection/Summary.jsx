function Summary({ defects, checkedQuantity, onCheckedQuantityChange }) {
  const totalDefects = Object.values(defects).reduce((sum, count) => sum + count, 0);
  const defectRate = checkedQuantity > 0 ? (totalDefects / checkedQuantity) * 100 : 0;

  return (
    <div className="bg-white p-4 rounded-lg shadow mt-4">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <div>
          <label className="block text-sm font-medium text-gray-700">Total Defects</label>
          <div className="mt-1 text-2xl font-bold">{totalDefects}</div>
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700">Checked Quantity</label>
          <div className="flex items-center space-x-2">
            <button
              onClick={() => onCheckedQuantityChange(Math.max(0, checkedQuantity - 1))}
              className="px-2 py-1 bg-gray-200 rounded"
            >
              -
            </button>
            <input
              type="number"
              value={checkedQuantity}
              onChange={(e) => onCheckedQuantityChange(Math.max(0, parseInt(e.target.value) || 0))}
              className="w-20 text-center border rounded"
            />
            <button
              onClick={() => onCheckedQuantityChange(checkedQuantity + 1)}
              className="px-2 py-1 bg-gray-200 rounded"
            >
              +
            </button>
          </div>
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700">Defect Rate</label>
          <div className="mt-1 text-2xl font-bold">
            {defectRate.toFixed(2)}%
          </div>
        </div>
      </div>
    </div>
  );
}

export default Summary;