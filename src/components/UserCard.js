import React from 'react';

export default ({name, image, id}) => <div>
  <div>name: {name}</div>
  <img src={image} />
  <div>github Id: {id}</div>
</div>