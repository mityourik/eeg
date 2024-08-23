import { useState } from 'react';
import Main from './pages/Main/Main';
import Header from './components/Header/Header';

const App = () => {
  const [activeMenuIndex, setActiveMenuIndex] = useState<number | null>(null);

  return (
    <>
      <Header onMenuSelect={setActiveMenuIndex} />
      <Main activeMenuIndex={activeMenuIndex} />
    </>
  );
}

export default App;