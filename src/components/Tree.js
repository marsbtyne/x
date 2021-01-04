import React, { useState }from 'react';
import { Anchor, Box } from 'grommet';
import Present from './Present';
import catPresent from '../assets/catpresent.gif';
import dogPresent from '../assets/dogpresent.gif';
import pusheen2 from '../assets/pusheen2.gif';
import winter from '../assets/winter.gif';

const Tree = () => {

  const [activePresent, setActivePresent] = useState('');

  const closeActive = () => {
    setActivePresent('');
  }

  const tree = (
    <div>
      <img src={winter} />
      <Box direction='row' align='center' gap='small'>
      <Box
      alignContent='center'
      align='center'
      width='190px'
      height='250px'
      direction='column'
        onClick={() => setActivePresent('Jacinda')}
        border={{ color: 'brand', size: 'small' }}
        background='light-3'
        pad='medium'
        justify='center'
        round='small'
        >
          <img width='150px' height='120px' src={dogPresent}/><br/>
      Jacinda
      </Box>
      <Box
      alignContent='center'
      align='center'
      width='190px'
      height='250px'
      direction='column'
        onClick={() => setActivePresent('Connor')}
        border={{ color: 'brand', size: 'small' }}
        background='light-3'
        pad='medium'
        justify='center'
        round='small'
        >
          <img src={catPresent}/><br/>
      Connor
      </Box>
      <Box
      alignContent='center'
      align='center'
      width='190px'
      height='250px'
      direction='column'
        onClick={() => setActivePresent('MomDad')}
        border={{ color: 'brand', size: 'small' }}
        background='light-3'
        pad='medium'
        justify='center'
        round='small'
        >
          <img width='150px' height='150px' src={pusheen2}/><br/>
      Mom + Dad
      </Box>
      </Box>
    </div>
  );
  return (
  <div>
    {activePresent ? <Present present={activePresent} closeActive={closeActive} /> : tree }
  </div>
  )
}

  


export default Tree;