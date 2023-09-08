import {h,render,Fragment} from 'preact';
import Router from 'preact-router'
import { FrontPage } from './pages/FrontPage';
import {Projects} from './pages/Projects'
import { AppNavBar } from './components/Primary';

// import data from './static/Careers/RRS_Junior.json' assert { type: 'json' };


import './style.css';

function MyApp() {
  return <div class="w-screen h-screen bg-orange-500">
            <AppNavBar/>
              <Router>
                <FrontPage default={true} path="/Home/*"/>
                <Projects  path="/Projects/*"/>  
              </Router> 
          </div>
          {/* <Router id="content">
         </Router></> */}
}

window.onload = () => {
  render(<MyApp/>, document.body)
};