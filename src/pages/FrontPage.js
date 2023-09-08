import {h,Fragment, Component} from 'preact';
import {AppNavBar,HeroBanner,EmploymentHistory} from '../components/Primary'




function About(props) {
  return <div class="w-full h-screen">My name is {props.name}.</div>;
}



export class FrontPage extends Component
{
  constructor(props) {
    super(props);
  }

  render()
  { 
    return <div class="flex flex-wrap flex-col animated-fade-in">
              <HeroBanner/>
              <About/>

            </div>
    {/* <div class="sticky top-0">B</div>
    <div>
      <div>
        <img src="..." />
        <strong>Bob Alfred</strong>
      </div> */}

                {/* <HeroBanner/>
                <EmploymentHistory/> */}
  }
}