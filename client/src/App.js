import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import { ApolloClient, ApolloProvider, InMemoryCache } from '@apollo/client';
import Navbar from './components/login/Navbar';

import MoodForm from './components/mood/Mood';
import CalendarPage from './components/calander/Calendar'
import Home from './components/home/Home';
import Dashboard from './components/habitDash/habitDashboard';
import Habits from './components/habits/Habits';
import habits from './habitExamples'

const client = new ApolloClient({
  request: operation => {
    const token = localStorage.getItem('id_token');
    operation.setContext({
      headers: {
        authorization: token ? `Bearer ${token}` : ''
      }
  });
  },
  uri: '/graphql',
  cache: new InMemoryCache(),
});

function App() {
  return (
    <ApolloProvider client={client}>
      <Router>
      <Navbar />
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route exact path="/mood/">
          <MoodForm />
        </Route>
        <Route exact path="/dashboard/">
          <Dashboard habits={habits}/>
        </Route>
        <Route exact path="/calendar/:userId">
          <CalendarPage />
        </Route>
        <Route exact path="/habits/">
          <Habits habits={habits}/>
        </Route>
      </Switch>
      </Router>
    </ApolloProvider>
  );
}

export default App;
