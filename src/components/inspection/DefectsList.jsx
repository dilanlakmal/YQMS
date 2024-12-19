/*

import { useState } from 'react';
import DefectCounter from './DefectCounter';
import { defectsList } from '../../constants/defects';

function DefectsList({ view, language, defects, onDefectUpdate }) {
  const defectItems = defectsList[language];
  const [activeCell, setActiveCell] = useState(null);

  if (view === 'grid') {
    return (
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {defectItems.map((defect, index) => (
          <div
            key={index}
            className="relative p-4 border rounded-lg bg-white shadow-sm cursor-pointer select-none"
            onClick={() => {
              if (activeCell !== index) {
                onDefectUpdate(index, (defects[index] || 0) + 1);
              }
            }}
            onMouseEnter={() => setActiveCell(index)}
            onMouseLeave={() => setActiveCell(null)}
          >
            <div className="mb-2 text-sm">{defect}</div>
            <div className="text-2xl font-bold text-blue-600">
              {defects[index] || 0}
            </div>
            {activeCell === index && (
              <div className="absolute top-2 right-2 flex space-x-1">
                <button
                  onClick={(e) => {
                    e.stopPropagation();
                    onDefectUpdate(index, Math.max(0, (defects[index] || 0) - 1));
                  }}
                  className="w-6 h-6 flex items-center justify-center bg-gray-200 rounded hover:bg-gray-300"
                >
                  -
                </button>
                <button
                  onClick={(e) => {
                    e.stopPropagation();
                    onDefectUpdate(index, (defects[index] || 0) + 1);
                  }}
                  className="w-6 h-6 flex items-center justify-center bg-gray-200 rounded hover:bg-gray-300"
                >
                  +
                </button>
              </div>
            )}
          </div>
        ))}
      </div>
    );
  }

  return (
    <div className="space-y-2">
      {defectItems.map((defect, index) => (
        <div key={index} className="flex justify-between items-center p-4 bg-white rounded-lg shadow-sm">
          <span className="text-sm">{defect}</span>
          <DefectCounter
            count={defects[index] || 0}
            onIncrement={() => onDefectUpdate(index, (defects[index] || 0) + 1)}
            onDecrement={() => onDefectUpdate(index, Math.max(0, (defects[index] || 0) - 1))}
          />
        </div>
      ))}
    </div>
  );
}

export default DefectsList;
*/

/*
import { useState } from "react";
import DefectCounter from "./DefectCounter";
import { defectsList } from "../../constants/defects";

function DefectsList({ view, language, defects, onDefectUpdate }) {
  const defectItems = defectsList[language];
  const [activeCell, setActiveCell] = useState(null);

  if (view === "grid") {
    return (
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {defectItems.map((defect, index) => (
          <div
            key={index}
            className="relative p-4 border rounded-lg bg-white shadow-sm cursor-pointer select-none"
            onClick={() => onDefectUpdate(index, (defects[index] || 0) + 1)}
            onMouseEnter={() => setActiveCell(index)}
            onMouseLeave={() => setActiveCell(null)}
          >
            <div className="notification-circle">{defects[index] || 0}</div>
            <div className="mb-2 text-sm mt-auto">{defect}</div>
            {activeCell === index && (
              <div className="absolute bottom-2 left-1/2 transform -translate-x-1/2 flex space-x-2">
                <button
                  onClick={(e) => {
                    e.stopPropagation();
                    onDefectUpdate(
                      index,
                      Math.max(0, (defects[index] || 0) - 1)
                    );
                  }}
                  className="w-8 h-8 flex items-center justify-center bg-gray-200 rounded-full hover:bg-gray-300"
                >
                  -
                </button>
                <button
                  onClick={(e) => {
                    e.stopPropagation();
                    onDefectUpdate(index, (defects[index] || 0) + 1);
                  }}
                  className="w-8 h-8 flex items-center justify-center bg-gray-200 rounded-full hover:bg-gray-300"
                >
                  +
                </button>
              </div>
            )}
          </div>
        ))}
      </div>
    );
  }

  return (
    <div className="space-y-2">
      {defectItems.map((defect, index) => (
        <div
          key={index}
          className="flex justify-between items-center p-4 bg-white rounded-lg shadow-sm"
        >
          <span className="text-sm">{defect}</span>
          <DefectCounter
            count={defects[index] || 0}
            onIncrement={() => onDefectUpdate(index, (defects[index] || 0) + 1)}
            onDecrement={() =>
              onDefectUpdate(index, Math.max(0, (defects[index] || 0) - 1))
            }
          />
        </div>
      ))}
    </div>
  );
}

export default DefectsList;
*/

/* latest
import { useState } from "react";
import DefectCounter from "./DefectCounter";
import { defectsList } from "../../constants/defects";

function DefectsList({ view, language, defects, onDefectUpdate }) {
  const defectItems = defectsList[language];
  const [activeCell, setActiveCell] = useState(null);

  if (view === "grid") {
    return (
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {defectItems.map((defect, index) => (
          <div
            key={index}
            className="relative p-4 border rounded-lg bg-white shadow-sm cursor-pointer select-none"
            onClick={() => onDefectUpdate(index, (defects[index] || 0) + 1)}
            onMouseEnter={() => setActiveCell(index)}
            onMouseLeave={() => setActiveCell(null)}
          >
            <div className="notification-circle">{defects[index] || 0}</div>
            <div className="mb-2 text-sm mt-auto">{defect}</div>
            {activeCell === index && (
              <div className="absolute bottom-2 left-1/2 transform -translate-x-1/2 flex space-x-2">
                <button
                  onClick={(e) => {
                    e.stopPropagation();
                    onDefectUpdate(
                      index,
                      Math.max(0, (defects[index] || 0) - 1)
                    );
                  }}
                  className="w-8 h-8 flex items-center justify-center bg-gray-200 rounded-full hover:bg-gray-300"
                >
                  -
                </button>
                <button
                  onClick={(e) => {
                    e.stopPropagation();
                    onDefectUpdate(index, (defects[index] || 0) + 1);
                  }}
                  className="w-8 h-8 flex items-center justify-center bg-gray-200 rounded-full hover:bg-gray-300"
                >
                  +
                </button>
              </div>
            )}
          </div>
        ))}
      </div>
    );
  }

  return (
    <div className="space-y-2">
      {defectItems.map((defect, index) => (
        <div
          key={index}
          className="flex justify-between items-center p-4 bg-white rounded-lg shadow-sm"
        >
          <span className="text-sm">{defect}</span>
          <DefectCounter
            count={defects[index] || 0}
            onIncrement={() => onDefectUpdate(index, (defects[index] || 0) + 1)}
            onDecrement={() =>
              onDefectUpdate(index, Math.max(0, (defects[index] || 0) - 1))
            }
            onInputChange={(value) => onDefectUpdate(index, value)}
          />
        </div>
      ))}
    </div>
  );
}

export default DefectsList;

*/

import { useState } from "react";
import DefectCounter from "./DefectCounter";
import { defectsList } from "../../constants/defects";
import PreviewModal from "../inspection/PreviewModal";

function DefectsList({ view, language, defects, onDefectUpdate }) {
  const defectItems = defectsList[language];
  const [activeCell, setActiveCell] = useState(null);
  const [isPreviewOpen, setIsPreviewOpen] = useState(false);

  return (
    <div>
      {/* Preview Button */}
      <div className="flex justify-end mb-4">
        <button
          onClick={() => setIsPreviewOpen(true)}
          className="flex items-center bg-blue-500 text-white px-4 py-2 rounded shadow hover:bg-blue-600"
        >
          <span className="material-icons mr-2">visibility</span> Preview
        </button>
      </div>

      {/* Grid View */}
      {view === "grid" ? (
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {defectItems.map((defect, index) => (
            <div
              key={index}
              className="relative p-4 border rounded-lg bg-white shadow-sm cursor-pointer select-none"
              onClick={() => onDefectUpdate(index, (defects[index] || 0) + 1)}
              onMouseEnter={() => setActiveCell(index)}
              onMouseLeave={() => setActiveCell(null)}
            >
              <div className="notification-circle">{defects[index] || 0}</div>
              <div className="mb-2 text-sm mt-auto">{defect}</div>
              {activeCell === index && (
                <div className="absolute bottom-2 left-1/2 transform -translate-x-1/2 flex space-x-2">
                  <button
                    onClick={(e) => {
                      e.stopPropagation();
                      onDefectUpdate(
                        index,
                        Math.max(0, (defects[index] || 0) - 1)
                      );
                    }}
                    className="w-8 h-8 flex items-center justify-center bg-gray-200 rounded-full hover:bg-gray-300"
                  >
                    -
                  </button>
                  <button
                    onClick={(e) => {
                      e.stopPropagation();
                      onDefectUpdate(index, (defects[index] || 0) + 1);
                    }}
                    className="w-8 h-8 flex items-center justify-center bg-gray-200 rounded-full hover:bg-gray-300"
                  >
                    +
                  </button>
                </div>
              )}
            </div>
          ))}
        </div>
      ) : (
        /* List View */
        <div className="space-y-2">
          {defectItems.map((defect, index) => (
            <div
              key={index}
              className="flex justify-between items-center p-4 bg-white rounded-lg shadow-sm"
            >
              <span className="text-sm">{defect}</span>
              <DefectCounter
                count={defects[index] || 0}
                onIncrement={() =>
                  onDefectUpdate(index, (defects[index] || 0) + 1)
                }
                onDecrement={() =>
                  onDefectUpdate(index, Math.max(0, (defects[index] || 0) - 1))
                }
                onInputChange={(value) => onDefectUpdate(index, value)}
              />
            </div>
          ))}
        </div>
      )}

      {/* Preview Modal */}
      {isPreviewOpen && (
        <PreviewModal
          defects={defects}
          defectItems={defectItems}
          onClose={() => setIsPreviewOpen(false)}
        />
      )}
    </div>
  );
}

export default DefectsList;
