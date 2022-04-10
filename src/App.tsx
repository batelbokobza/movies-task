import { Link, Outlet } from 'react-router-dom';
import './App.css';
import AppWrapper from './components/AppWrapper/AppWrapper';
import ResultsProvider from './context/ResultsContext';

const App = () => {
  
  return (
    <div>
      
        <ResultsProvider>
          <AppWrapper/>
        </ResultsProvider>
    </div>
  );
}

export default App;
