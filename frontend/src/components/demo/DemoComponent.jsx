import React, { useState, useEffect } from 'react';
import axios from 'axios';

const DemoComponent = () => {
  const [str, setStr] = useState('');
  useEffect(() => {
    axios
      .get('/demo')
      .then(received => {
        console.log(received);
        setStr(received.data.str);
        console.log(str);
      })
      .catch(err => console.log(err));
  }, []);
  return (
    <div>
      <p>str: {str}</p>
    </div>
  );
};

export default DemoComponent;
