import ProgressBar from './ProgressBar';

type SummaryProps = {
  fullName: string;
  email: string;
  phoneNumber: string;
  salary: string;
  onPrevious: () => void;
  onSubmit: () => void;
  progress: number;
}

const Summary: React.FC<SummaryProps> = ({ fullName, email, phoneNumber, salary, onPrevious, onSubmit, progress }) => {
  return (
    <div className="flex flex-col items-center">
      <div className="bg-white shadow-xl rounded-lg p-6 w-full max-w-xl">
        <div className="mb-4">
          <h5 className="text-xl font-bold">Summary</h5>
        </div>
        <div className="space-y-2 text-gray-700">
          <div>
            <strong>Name:</strong> <span className="text-gray-600">{fullName}</span>
          </div>
          <div>
            <strong>Email:</strong> <span className="text-gray-600">{email}</span>
          </div>
          <div>
            <strong>Phone number:</strong> <span className="text-gray-600">{phoneNumber}</span>
          </div>
          <div>
            <strong>Salary:</strong> <span className="text-gray-600">{salary}</span>
          </div>
        </div>
        <div className="flex justify-between items-center mt-6">
          <button onClick={onPrevious} className="btn bg-gray-500 hover:bg-gray-600 text-white font-bold py-2 px-4 rounded transition-colors duration-200">
            Back
          </button>
          <button onClick={onSubmit} className="btn bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded transition-colors duration-200">
            Submit
          </button>
        </div>
        <div className="mt-4">
          <ProgressBar progress={progress} />
        </div>
      </div>
    </div>
  )
}

export default Summary;
