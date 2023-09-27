import React from 'react';
import './App.css';
import { latestBoardListMock, top3BoardListMock} from 'mocks';
import Top3Item from 'components/Top3Item';
import CommentItem from 'components/CommentItem';

function App() {
  return (
   <>
       {/* latestBoardListMock.map(boardListItem => <BoardItem boardListItem={boardListItem} />) */}
       {/* <div style={{ display: 'flex', justifyContent: 'center', gap: '24px' }}>
          {top3BoardListMock.map(top3ListItem => <Top3Item top3ListItem={top3ListItem} />)}
           </div> */}
       <div>
        
       </div>
   </>
  );
}

export default App;
