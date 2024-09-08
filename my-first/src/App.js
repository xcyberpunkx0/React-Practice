import React from 'react';
import {comments} from './commentData';
import Card from './Card';


function App() {
  return(
    <div>
      {
        comments.map(comment=> 
          <Card object = {comment}/>
        )
      }
    </div>
  );
}

export default App;