import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { ApolloClient, ApolloProvider, InMemoryCache } from '@apollo/client';

import MoodForm from './components/moodForm';
import CalendarPage from './components/Calendar';
import Home from './components/home';
import Dashboard from './components/habitDashboard';
import Habits from './components/habits';
import habits from './habitExamples'

const client = new ApolloClient({
  uri: '/graphql',
  cache: new InMemoryCache(),
});

function App() {
  return (
    <ApolloProvider client={client}>
      <Router>
        <MoodForm/>
        {/* <div className="flex-column justify-center align-center min-100-vh bg-primary">
          <Switch>
            <Route exact path="/">
              <Home />
            </Route>
            <Route exact path="/matchup">
              <Matchup />
            </Route>
            <Route exact path="/matchup/:id">
              <Vote />
            </Route>
            <Route>
              <NotFound />
            </Route>
          </Switch>
        </div> */}
      </Router>
    </ApolloProvider>
  );
}

export default App;
