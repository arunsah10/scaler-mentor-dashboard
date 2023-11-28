import React, { useEffect } from 'react'

import { useContext,} from 'react';
import noteContext from '../context/notes/noteContext';
const About = () => {
  // const a=useContext(noteContext);
  // useEffect(()=>{
  //   a.update();
  // })
  return (
    <div>
      {/* This is About {a.state.name} and he is in class {a.state.class}; */}
      This is about page
    </div>
  )
}

export default About
