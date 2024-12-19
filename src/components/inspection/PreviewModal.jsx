import React from "react";

function PreviewModal({ defects, defectItems, onClose }) {
  // Calculate total defects and defect rate
  const totalDefects = defects.reduce((sum, count) => sum + (count || 0), 0);
  const checkedQty = 100; // Example static value for checked quantity
  const defectRate = checkedQty
    ? ((totalDefects / checkedQty) * 100).toFixed(2)
    : 0;

  return (
    <div className="modal-overlay">
      <div className="modal-content">
        <h2 className="modal-title">Defect Preview</h2>
        <ul className="modal-list">
          {defectItems.map((defect, index) =>
            defects[index] > 0 ? (
              <li key={index} className="modal-list-item">
                <span>{defect}</span>
                <span>{defects[index]}</span>
              </li>
            ) : null
          )}
        </ul>
        <div className="modal-summary">
          <p>
            <strong>Total Defects:</strong> {totalDefects}
          </p>
          <p>
            <strong>Checked Quantity:</strong> {checkedQty}
          </p>
          <p>
            <strong>Defect Rate:</strong> {defectRate}%
          </p>
        </div>
        <button className="modal-close-button" onClick={onClose}>
          Close
        </button>
      </div>
    </div>
  );
}

export default PreviewModal;
