import React from 'react';
import Button from './Button';



function Talker() {
    function talk() {
        let speech = '';
        for (let i = 0; i < 10000; i++) {
          speech += 'blah ';
        }
        alert(speech);
      }
  return <Button talk={talk} />;
}

export default Talker;