import { HashRouter as Router, Route, Switch } from 'react-router-dom';
import './assets/scss/global.scss';
import { AppHeader } from './cmps/AppHeader';

import { HomePage } from './pages/HomePage';
import { StatisticPage } from './pages/StatisticPage';
import { ContactPage } from './pages/ContactPage';
import { ContactEdit } from './pages/ContactEdit';
import { ContactDetails } from './pages/ContactDetails';


export function App() {
  return (
    <Router>
      <div id='App'>
        <AppHeader />
        <main className='container'>
          <Switch>
            <Route component={ContactEdit} path='/contact/edit/:id?' />
            <Route component={ContactDetails} path='/contact/:id' />
            <Route component={ContactPage} path={'/contact'} />
            <Route component={StatisticPage} path={'/statistic'} />
            <Route component={HomePage} path={'/'} />
          </Switch>
        </main>
      </div>
    </Router>

  )
}



