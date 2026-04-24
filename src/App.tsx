import { useState } from 'react';
import { TextInput } from './components/TextInput/TextInput';

function App() {
  const [text, setText] = useState('');

  return (
    <div>
      <h1>Character Counter</h1>

      <TextInput onTextChange={setText} />

      <p>{text}</p>
    </div>
  );
}

export default App;