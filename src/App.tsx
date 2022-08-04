import React from 'react';
import { Banner } from './Components/Banner';
import { DataGrid } from './Components/DataGrid';
import { DetailPanel } from './Components/DetailPanel';
import { useMockData } from './mockData';

const App = () => {
  useMockData();

  return (
    <div style={{display: 'flex', flexDirection:'column', width: '100vw', height: '100vh'}}>
      <Banner />
      <div style={{display:'flex', flexGrow: 1, background: '#f6f8fa', padding: '40px 24px'}}>
        <DetailPanel />
        <DataGrid />
      </div>
    </div>
  );
}

export default App;
