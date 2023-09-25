import React from 'react';
import './App.css';
import BoardItem from 'components/BoardItem';
import { latestBoardListMock} from 'mocks';
import Top3Item from 'components/Top3Item';

function App() {
  return (
   <>
       {/* latestBoardListMock.map(boardListItem => <BoardItem boardListItem={boardListItem} />) */}
       <div style={{ display: 'flex', justifyContent: 'center', gap: '24px' }}>
        <Top3Item />
        <Top3Item />
        <Top3Item />
       </div>
   </>
  );
}

export default App;
