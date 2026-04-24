import { useState } from 'react';
import { TextInput } from './components/TextInput/TextInput';
import { StatsDisplay } from './components/StatsDisplay/StatsDisplay';
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

      <StatsDisplay
        characterCount={characterCount}
        wordCount={wordCount}
        readingTime={readingTime}
      />
    </div>
  );
}

export default App;