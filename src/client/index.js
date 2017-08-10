import React from 'react';
import ReactDOM from 'react-dom';
import App from '../components/App';


if(window._data){
  ReactDOM.render(<App userData={window._data}/>, document.getElementById("root"));
}


// export default (() => {
//   console.log('hello react SSR on client side')
// })();
