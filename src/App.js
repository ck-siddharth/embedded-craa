import React from 'react';
import EmbedComponent from './EmbedComponent';

function App() {
  const dataId = "001"; // Replace with your desired data-id value

  return (
    <div>
      <EmbedComponent dataId={dataId} />
    </div>
  );
}

export default App;
