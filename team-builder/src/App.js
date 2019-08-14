// React Imports
import React, { useState, useEffect } from 'react';

// Material-UI
import Button from '@material-ui/core/Button';
import Container from '@material-ui/core/Container';
import CssBaseline from '@material-ui/core/CssBaseline';
import Grid from '@material-ui/core/Grid';

// Local
import Data from './data/Data';
import Navbar from './components/Nav/Navbar';
import TeamDisplay from './components/TeamDisplay';
import Form from './components/Form';

const App = () => {
  const [members, setMembers] = useState(Data);

  const addMember = member => {
    setMembers([...members, member]);
  }

  return (
    <>
    <CssBaseline />
    <Navbar />
    <Container className="App">
      <Form addMember={addMember}/>
      <TeamDisplay members={members}/>
    </Container>
    </>
  );
}

export default App;
