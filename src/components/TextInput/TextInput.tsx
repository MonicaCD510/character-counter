import React from 'react';

interface TextInputProps {
  onTextChange: (text: string) => void;
}

export const TextInput: React.FC<TextInputProps> = ({ onTextChange }) => {
  return (
    <div>
      <textarea
        placeholder="Start typing..."
        onChange={(e) => onTextChange(e.target.value)}
      />
    </div>
  );
};