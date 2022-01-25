import React from 'react';


function Content() {
  const text = ['Fotografia ślubna', 'Fotografia okolicznościowa', 'Chrzest Święty', 'Sesje plenerowe']
  
  return (
  <div className='container'>
    <div className='container-text'>
        Agnieszka Jankowska
        <div className='container-subtext'>
        {text[0]}
    </div>
    </div>
   
  </div>
  )
}

export default Content;
