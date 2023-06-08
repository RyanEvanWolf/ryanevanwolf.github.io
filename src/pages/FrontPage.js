import {h,Fragment, Component} from 'preact';
import {AppNavBar,HeroBanner,EmploymentHistory} from '../components/Primary'





export class FrontPage extends Component
{
  constructor(props) {
    super(props);
  }

  render()
  { 
    return <Fragment>
                <HeroBanner/>
                <EmploymentHistory/>
            </Fragment>
  }
}