import React from 'react';
import Avatar from '@material-ui/core/Avatar';
import Container from '@material-ui/core/Container';
import Box from '@material-ui/core/Box';

import profilePicture from './assets/images/profile_picture.jpg'; 
import './styles/Custom.scss';

function App() {

  return (

    <Box display="flex" height={1} alignItems="center" justifyContent="center" p={1} bgcolor="colors.orange">
      
 
      <Box>
        <Box display="flex" justifyContent="center">
          <Avatar height={1} style={{height: 120, width: 120}} alt="Eber Alejandro Foto Perfil" src={profilePicture}/>
        </Box>
        
        <h1>Eber A. Martínez Pantoja</h1>
        <h3>Coming soon!</h3>

      </Box>
    </Box>
     
  );
}

export default App;
