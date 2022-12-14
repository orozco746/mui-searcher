import { Container } from "@mui/material";
import React, { useState, useEffect } from "react";
import Searcher from "./components/Searcher";
import UserCard from "./containers/UserCard";
import {getGitHubUser} from './services/users'

const App = () => {

  const [inputUser, setInputUser] = useState('octocat');
  const [userState, setUserState] = useState(inputUser);



  const gettingUser = async (user) =>{ 
    const userResponse = await getGitHubUser(user);

    if(userState ==='octocat'){
      localStorage.setItem('octocat', userResponse)
    }
    
    if(userResponse.message === 'Not Found'){
      console.log('Not Found')
      const{ octocat } = localStorage;
      setInputUser(octocat);
      gettingUser('octocat');
    } else{
      setUserState(userResponse)
    }
  };
  
  console.log(userState)

  useEffect(()=>{
    gettingUser(inputUser)
  },[inputUser])

  return(
    <Container sx={{
      background: 'whitesmoke',
      width: '80vw',
      height: '500px',
      borderRadius:'16px',
      marginTop: '40px',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center'
    }} >
      <Searcher inputUser={inputUser} setInputUser={setInputUser} />
      <UserCard userState={userState} />
    </Container>
  )
};

export default App;