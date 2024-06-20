import { useState } from 'react';
import ProgressBar from './ProgressBar';

type SalaryStepProps = {
  salary: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  onPrevious: () => void;
  onNext: () => void;
  progress: number;
}

const SalaryStep: React.FC<SalaryStepProps> = ({ salary, onChange, onPrevious, onNext, progress }) => {
  const [error, setError] = useState('');

  const handleNext = () => {
    if (!salary.trim()) {
      setError('Please provide your salary.');
    } else {
      setError('');
      onNext();
    }
  };
  return (
    <div className="flex flex-col items-center justify-center">
      <div className="bg-white shadow-xl rounded-lg p-6 w-full max-w-xl">
        <div className="mb-4">
          <h5 className="text-xl font-bold">Please provide your salary</h5>
        </div>
        <div>
          <div>
            <div className="flex items-center mb-2">
              <input id="0 - 1000" type="radio" value="€0 - 1,000" name="salary" onChange={onChange} checked={salary === '€0 - 1,000'} className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-0" />
              <label htmlFor="0 - 1000" className="ms-2 text-sm font-medium text-gray-900"> €0 - 1,000</label>
            </div>
            <div className="flex items-center mb-2">
              <input id="1000 - 2000" type="radio" value="€1,000 - 2,000" name="salary" onChange={onChange} checked={salary === '€1,000 - 2,000'} className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-0" />
              <label htmlFor="1000 - 2000" className="ms-2 text-sm font-medium text-gray-900"> €1,000 - 2,000</label>
            </div>
            <div className="flex items-center mb-2">
              <input id="2000 - 3000" type="radio" value="€2,000 - 3,000" name="salary" onChange={onChange} checked={salary === '€2,000 - 3,000'} className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-0" />
              <label htmlFor="2000 - 3000" className="ms-2 text-sm font-medium text-gray-900"> €2,000 - 3,000</label>
            </div>
            <div className="flex items-center mb-2">
              <input id="3000 - 4000" type="radio" value="€3,000 - 4,000" name="salary" onChange={onChange} checked={salary === '€3,000 - 4,000'} className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-0" />
              <label htmlFor="3000 - 4000" className="ms-2 text-sm font-medium text-gray-900"> €3,000 - 4,000</label>
            </div>
            <div className="flex items-center mb-2">
              <input id="More than 4000" type="radio" value="More than €4,000" name="salary" onChange={onChange} checked={salary === 'More than €4,000'} className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-0" />
              <label htmlFor="More than 4000" className="ms-2 text-sm font-medium text-gray-900"> More than €4,000</label>
            </div>
            {error && <p className="text-red-500 text-sm mt-2">{error}</p>}
          </div>
          <div className="flex justify-between mt-4 mb-4">
            <button onClick={onPrevious} className="bg-gray-500 hover:bg-gray-700 text-white font-bold py-2 px-4 rounded">Back</button>
            <button onClick={handleNext} className="bg-gray-500 hover:bg-gray-700 text-white font-bold py-2 px-4 rounded">Next</button>
          </div>
          <ProgressBar progress={progress} />
        </div>
      </div>
    </div>
  );
};

export default SalaryStep;
