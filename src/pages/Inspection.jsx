import { useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import Header from '../components/inspection/Header';
import ViewToggle from '../components/inspection/ViewToggle';
import DefectsList from '../components/inspection/DefectsList';
import Summary from '../components/inspection/Summary';

function Inspection() {
  const { state: inspectionData } = useLocation();
  const navigate = useNavigate();
  const [view, setView] = useState('list');
  const [language, setLanguage] = useState('english');
  const [defects, setDefects] = useState({});
  const [checkedQuantity, setCheckedQuantity] = useState(0);

  const handleDefectUpdate = (index, value) => {
    setDefects(prev => ({
      ...prev,
      [index]: value
    }));
  };

  const handleSubmit = () => {
    const totalDefects = Object.values(defects).reduce((sum, count) => sum + count, 0);
    if (totalDefects === 0 || checkedQuantity === 0) {
      alert('Please ensure there are defects recorded and checked quantity is greater than 0');
      return;
    }
    // Here you would typically save the data
    navigate('/details');
  };

  return (
    <div className="min-h-screen bg-gray-50 p-4 pb-20">
      <div className="max-w-7xl mx-auto">
        <Header inspectionData={inspectionData} />
        
        <ViewToggle
          view={view}
          onViewChange={setView}
          onLanguageChange={setLanguage}
        />
        
        <DefectsList
          view={view}
          language={language}
          defects={defects}
          onDefectUpdate={handleDefectUpdate}
        />
        
        <Summary
          defects={defects}
          checkedQuantity={checkedQuantity}
          onCheckedQuantityChange={setCheckedQuantity}
        />

        <div className="fixed bottom-0 left-0 right-0 bg-white shadow-lg p-4">
          <div className="max-w-7xl mx-auto">
            <button
              onClick={handleSubmit}
              className="w-full bg-indigo-600 text-white py-3 px-4 rounded-md hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
            >
              Submit Inspection
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Inspection;