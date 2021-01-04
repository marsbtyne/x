import React, { useState }from 'react';
import { Box, Button } from 'grommet';
import catPresent from '../assets/catpresent.gif';
import yodaStove from '../assets/yodastove.gif';
import steam from '../assets/steam.jpg';
import gamemoney from '../assets/gamemoney.gif';
import dog from '../assets/dogmoney.gif';
import pusheen from '../assets/pusheen.gif';

const Present = (props) => {

  let image = (<img src ={pusheen} />);
  if (props.present == 'MomDad') {
    image = (<Box gap='small'><img src={yodaStove} />$200 towards a new stove!</Box>);
  } else if (props.present == 'Connor') {
    image = (<Box gap='small'><img src={gamemoney} />$25 Steam gift card!</Box>);
  } else if (props.present == 'Jacinda') {
    image= (<Box gap='small'><img src={dog} />$25 Chewy gift card for Hershey and Mosby!</Box>);
  } 
  return (
  <Box gap='medium'>
    {image}
    <Button primary onClick={props.closeActive} label="Back To Tree" />
  </Box>
  )
}

  


export default Present;