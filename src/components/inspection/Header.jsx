import React from 'react';

function Header({ inspectionData }) {
  return (
    <div className="overflow-x-auto bg-white p-4 rounded-lg shadow mb-4">
      <div className="flex space-x-4 text-sm">
        <div>Date: {inspectionData.date.toLocaleDateString()}</div>
        <div>Factory: {inspectionData.factory}</div>
        <div>Line: {inspectionData.lineNo}</div>
        <div>Style: {inspectionData.styleCode}{inspectionData.styleDigit}</div>
        <div>Customer: {inspectionData.customer}</div>
      </div>
    </div>
  );
}

export default Header;