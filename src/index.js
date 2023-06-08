import {h,render,Fragment} from 'preact';
import Router from 'preact-router'
import { FrontPage } from './pages/FrontPage';
import {Projects} from './pages/Projects'
import { AppNavBar } from './components/Primary';

function MyApp() {
  return <><AppNavBar/>
              <Router>
                <FrontPage default={true} path="/Home/*"/>
                <Projects  path="/Projects/*"/>  
              </Router> 
          </>
          {/* <Router id="content">
         </Router></> */}
}

function App() {
  return (
    <p class="big">Hello World!</p>
  )
}

window.onload = () => {
  render(<MyApp/>, document.body)
};