import {h,Fragment, Component} from 'preact';
import {TechBadge} from '../components/Primary.js';
import CareersData from '../static/Careers.json';

function CVTimeline()
{
  return <ul className="timeline timeline-horizontal w-full">
            <li className="max-w-10">
              <div className="timeline-middle">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-5 h-5"><path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z" clipRule="evenodd" /></svg>
              </div>
              <div className="timeline-end timeline-box">First Macintosh computer</div>
              <hr/>
            </li>
            <li className="max-w-10">
              <hr/>
              <div className="timeline-middle">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-5 h-5"><path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z" clipRule="evenodd" /></svg>
              </div>
              <div className="timeline-end timeline-box">iPod</div>
              <hr/>
            </li>
          </ul>
}

export class CV extends Component
{
  constructor(props) {
    super(props);
    this.state ={};
  }









  render(props,state)
  { 
    return <><div className="carousel w-full">
              { 
              
              Object(CareersData.list).map(info=>{
                return <div className="carousel-item h-full flex flex-col gap-2 rounded-xl shadow-md outline-1 stroke-slate-950 p-2">{
                              <span>{info.title}</span>}
                              <hr/>
                              <div className="w-full">
                                {
                                  info.tags.map(tag => {return <TechBadge tag={tag} />;})
                                }
                              </div>
                        </div>})}
            </div>
            <CVTimeline />
          </>
  }
}