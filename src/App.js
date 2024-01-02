import logo from './logo.svg';
import './App.css';
import CodeEditor from './CodeEditor';

function App() {
  const initialCode = `// Type your code here
  function helloWorld() {
    console.log('Hello, World!');
  }
  `;
  return (
    <div className="App">
      <h1>React Code Editor App</h1>
      <CodeEditor initialCode={initialCode} />
    </div>
  );
}

export default App;
