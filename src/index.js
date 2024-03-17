import {h,render,Fragment} from 'preact';
import { FrontPage,Projects,CV } from './pages';

// import data from './static/Careers/RRS_Junior.json' assert { type: 'json' };


import './style.css';



function MyApp() {
  return <div class="w-screen h-screen bg-orange-500">
            {/* <FrontPage /> */}
            <CV/>
            <Projects />  
          </div>
}

window.onload = () => {
  console.log(window.location.origin);
  render(<MyApp/>, document.body)
};