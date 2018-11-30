import React from 'react';
import Heart from './heart';
export default function Header (props) {
  return (
    <React.Fragment>
      <h1>{props.title}<Heart color="purple"/></h1>
    </React.Fragment>
  );
}
  
