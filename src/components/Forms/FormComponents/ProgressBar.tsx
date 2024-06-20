type ProgressBarProps = {
  progress: number;
}

const ProgressBar: React.FC<ProgressBarProps> = ({ progress }) => {
  return (
    <div className="w-full bg-gray-200 rounded-full h-2.5" data-testid="progress-bar">
      <div className="bg-blue-600 h-2.5 rounded-full" style={{ width: `${progress}%` }}></div>
    </div>
  );
};

export default ProgressBar;
