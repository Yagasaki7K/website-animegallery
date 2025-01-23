import React, { useEffect, useState } from 'react';
import Container from '@/components/Container';
import "@/styles/globals.css";

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
      <Container />
    </>
  );
};

export default App;
