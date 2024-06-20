import { useState } from 'react';
import ProgressBar from './ProgressBar';

type PhoneStepProps = {
  phoneNumber: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  onPrevious: () => void;
  onNext: () => void;
  progress: number;
}

const PhoneStep: React.FC<PhoneStepProps> = ({ phoneNumber, onChange, onPrevious, onNext, progress }) => {
  const [error, setError] = useState('');

  const handleNext = () => {
    if (!phoneNumber.trim()) {
      setError('Please enter your phone number.');
    } else {
      setError('');
      onNext();
    }
  };

  return (
    <div className="flex flex-col items-center justify-center">
      <div className="bg-white shadow-xl rounded-lg p-6 w-full max-w-xl">
        <div className="mb-4">
          <h5 className="text-xl font-bold">Please provide your phone number</h5>
        </div>
        <div className="mb-6">
          <label
            htmlFor="phone"
            className="block mb-2 text-sm font-medium"
          >
            Phone number
          </label>
          <input
            type="tel"
            id="phone"
            name="phoneNumber"
            placeholder="e.g. +49 151 123456789"
            value={phoneNumber}
            onChange={onChange}
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
          />
          {error && <p className="text-red-500 text-sm mt-2">{error}</p>}
        </div>
        <div className="flex justify-between mt-4 mb-4">
          <button onClick={onPrevious} className="bg-gray-500 hover:bg-gray-700 text-white font-bold py-2 px-4 rounded">Back</button>
          <button onClick={handleNext} className="bg-gray-500 hover:bg-gray-700 text-white font-bold py-2 px-4 rounded">Next</button>
        </div>
        <ProgressBar progress={progress} />
      </div>
    </div>
  );
};

export default PhoneStep;
