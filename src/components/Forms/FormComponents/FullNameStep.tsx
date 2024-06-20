import { useState } from 'react';
import ProgressBar from './ProgressBar';

type FullNameStepProps = {
  fullName: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  onNext: () => void;
  progress: number;
}

const FullNameStep: React.FC<FullNameStepProps> = ({ fullName, onChange, onNext, progress }) => {
  const [error, setError] = useState('');

  const handleNext = () => {
    if (!fullName.trim()) {
      setError('Please enter your full name.');
    } else {
      setError('');
      onNext();
    }
  };

  return (
    <div className="flex flex-col items-center justify-center">
      <div className="bg-white shadow-xl rounded-lg p-6 w-full max-w-xl">
        <div className="mb-4">
          <h5 className="text-xl font-bold">Please provide your name</h5>
        </div>
        <div className="mb-6">
          <label
            htmlFor="full-name"
            className="block mb-2 text-sm font-medium"
          >
            Full name
          </label>
          <input
            type="text"
            id="full-name"
            name="fullName"
            placeholder="e.g. John Stone"
            value={fullName}
            onChange={onChange}
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
          />
          {error && <p className="text-red-500 text-sm mt-2">{error}</p>}
        </div>
        <div className="flex justify-between mt-4 mb-4">
          {/* Empty div to maintain layout */}
          <div></div>
          <button onClick={handleNext} className="bg-gray-500 hover:bg-gray-700 text-white font-bold py-2 px-4 rounded">Next</button>
        </div>
        <ProgressBar progress={progress} />
      </div>
    </div>
  );
}

export default FullNameStep;
