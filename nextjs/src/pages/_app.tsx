import React, { useEffect, useState } from 'react';
import GlobalStyles from '@/styles/GlobalStyles';
import Container from '@/components/Container';

const App: React.FC = () => {
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  if (!isClient) {
    return null;
  }

  return (
    <>
      <GlobalStyles />
      <Container />
    </>
  );
};

export default App;
