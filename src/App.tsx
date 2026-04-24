import { useState } from 'react';
import { TextInput } from './components/TextInput/TextInput';

function App() {
  const [text, setText] = useState('');

  const characterCount = text.length;

  const wordCount = text.trim()
    ? text.trim().split(/\s+/).length
    : 0;

  const readingTime = wordCount / 200;

  return (
    <div>
      <h1>Character Counter</h1>

      <TextInput onTextChange={setText} />

      <p>Characters: {characterCount}</p>
      <p>Words: {wordCount}</p>
      <p>Reading Time: {readingTime.toFixed(2)} minutes</p>
    </div>
  );
}

export default App;