import { useState } from 'react';
import FullNameStep from './FormComponents/FullNameStep';
import EmailStep from './FormComponents/EmailStep';
import PhoneStep from './FormComponents/PhoneStep';
import SalaryStep from './FormComponents/SalaryStep';
import Summary from './FormComponents/Summary';
import SubmittedMessage from './FormComponents/SubmittedMessage';

function MultiPageForm() {
  const [currentStep, setCurrentStep] = useState(1);
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    phoneNumber: '',
    salary: ''
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const next = () => {
    setCurrentStep(currentStep + 1);
  };

  const prev = () => {
    if (currentStep > 1) {
      setCurrentStep(currentStep - 1);
    }
  };

  const handleSubmit = () => {
    // Handle form submission here (for the purpose of this exercise we increase currentStep by 1 to render component SubmittedMessage)
    setCurrentStep(currentStep + 1);
  };

  const calculateProgress = () => {
    return ((currentStep - 1) / 4) * 100;  // 4 total steps, starting step is 1 to start with 0%
  };

  const renderStep = () => {
    switch (currentStep) {
      case 1:
        return <FullNameStep fullName={formData.fullName} onChange={handleInputChange} onNext={next} progress={calculateProgress()} />;
      case 2:
        return <EmailStep email={formData.email} onChange={handleInputChange} onPrevious={prev} onNext={next} progress={calculateProgress()} />;
      case 3:
        return <PhoneStep phoneNumber={formData.phoneNumber} onChange={handleInputChange} onPrevious={prev} onNext={next} progress={calculateProgress()} />;
      case 4:
        return <SalaryStep salary={formData.salary} onChange={handleInputChange} onPrevious={prev} onNext={next} progress={calculateProgress()} />;
      case 5:
        return <Summary fullName={formData.fullName} email={formData.email} phoneNumber={formData.phoneNumber} salary={formData.salary} onPrevious={prev} onSubmit={handleSubmit} progress={calculateProgress()} />;
      case 6:
        return <SubmittedMessage />;
      default:
        return <div>Form Completed</div>;
    }
  };

  return (
    <div>
      {renderStep()}
    </div>
  );
}

export default MultiPageForm;
