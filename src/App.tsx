import { useState } from 'react';
import Header from './components/Header/Header';
import Main from './pages/Main/Main';

const App: React.FC = () => {
  const [activeMenuIndex, setActiveMenuIndex] = useState<number | null>(null);

  return (
    <>
      <Header onMenuSelect={setActiveMenuIndex} activeMenuIndex={activeMenuIndex} />
      <Main activeMenuIndex={activeMenuIndex} onMenuSelect={setActiveMenuIndex} />
    </>
  );
};

export default App;