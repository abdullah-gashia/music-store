// App.tsx
import React from "react";
import MusicStore from "../app/MusicStore";
import './styles.css';

const App: React.FC = () => {
  return (
    <div className="App">
      <MusicStore />
    </div>
  );
};

export default App;
