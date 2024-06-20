import { describe, it, expect, vi } from 'vitest';
import { render, screen, fireEvent } from '@testing-library/react';
import MultiPageForm from '../components/Forms/MuliPageForm';
import FullNameStep from '../components/Forms/FormComponents/FullNameStep';
import SubmittedMessage from '../components/Forms/FormComponents/SubmittedMessage';

// Please note: The followingn tests only provide selected tests for the components MultiPageForm, FullNameStep and SubmittedMessage
// To test the app exhaustively, tests for all functionality and all components are required
describe('MultiPageForm', () => {
  it('initially displays 0% progress', () => {
    render(<MultiPageForm />);
    const progressBar = screen.getByTestId('progress-bar').firstChild as HTMLElement;
    expect(progressBar.style.width).toBe('0%');
  });
});

describe('FullNameStep', () => {
  it('renders without an error message', () => {
    render(<FullNameStep fullName="" onChange={vi.fn()} onNext={vi.fn()} progress={0} />);
    const errorText = screen.queryByText('Please enter your full name.');
    expect(errorText).not.toBeInTheDocument();
  });

  it('displays an error message when trying to proceed without a name', () => {
    const onChange = vi.fn();
    const onNext = vi.fn();
    render(<FullNameStep fullName="" onChange={onChange} onNext={onNext} progress={0} />);
    const nextButton = screen.getByRole('button', { name: /next/i });
    fireEvent.click(nextButton);
    expect(screen.getByText('Please enter your full name.')).toBeInTheDocument();
    expect(onNext).not.toHaveBeenCalled();
  });

  it('calls onNext when a valid name is provided and next is clicked', () => {
    const onChange = vi.fn();
    const onNext = vi.fn();
    render(<FullNameStep fullName="John Doe" onChange={onChange} onNext={onNext} progress={0} />);
    const input = screen.getByPlaceholderText('e.g. John Stone');
    fireEvent.change(input, { target: { value: 'John Doe' } });
    const nextButton = screen.getByRole('button', { name: /next/i });
    fireEvent.click(nextButton);
    expect(onNext).toHaveBeenCalled();
  });
});

describe('SubmittedMessage', () => {
  it('renders the emoji correctly', () => {
    render(<SubmittedMessage />);
    const emojiDiv = screen.getByText('🥳');
    expect(emojiDiv).toBeInTheDocument();
  });

  it('renders the thank you message correctly', () => {
    render(<SubmittedMessage />);
    const thankYouMessage = screen.getByText('Thank you for registering with Buena.');
    expect(thankYouMessage).toBeInTheDocument();
    expect(thankYouMessage).toHaveClass('text-2xl', 'font-semibold', 'text-gray-800', 'text-center', 'mb-6');
  });
});
