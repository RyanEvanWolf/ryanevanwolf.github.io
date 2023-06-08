import {h, Fragment,Component} from 'preact';

const random = { 
    plane: <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADAAAAAwCAYAAABXAvmHAAAACXBIWXMAAAsTAAALEwEAmpwYAAAEgUlEQVR4nO2Yb2gbZRzHH93chkwE9YXNVlERtl1zSfoH3Bw2fZ51oiC+cET6Zwj+QfdGBKEmd6kLc2IL9sWqMKm6rr3nOqEvRGw3da0U2TtRZLm7tJY6R2vt1lxyd9lW1P75ySVpm6TXpsykNpgPfN/dPfl+eO55Hp4gVKRIkSIFR7l3+IiTU4IOXp5heeUHB6+8zATkbagQcHLKURenLDi5EDh5BRzLmbD75beYgLwTbWaYgLzT5VP6LQSA5WVgOclgObmdCcgP3vaPANzx1Dn9cA2NykSIhjGNTmKqtnp6ITez7PHAFqcvdNpSIBm7X/qzzC91MF75ofWOS7rUXaQn7CVUHSOiBoTqQKgGRIwCESNgSqBcwnLKmw5OnrcWSITxS38zfFBgOJmxGuPpC7Cd9EQ8mKp9mIbniKhCPPHy6QJEVKdQrnHw0hGWl2dWEyjzS8kEF/bxwb697wQPmO/hnnAloZF2LKpqslx6LASwGP4d5QMnJx1kOTm8toAE9uMKVLZdgeozUzcSpSMpyRCw+ISIqLagfMH6go/aOXlkhUCzDBWtY3Dw40kgNJJSJpuAmniWaoDFyDymalvOFvFqMAH5PjsnfW8KON8dgf2nxqGmK1kkLesTwOK0Yi7qQ93G/WgjqO2N3lsjqK9Uf3b9j+Wpt0oEsKDCE6cnwN01nSaAaVgnVO0gdLritkpgwXgPC7EIEYwJ0q0fy/Z8IAB3HurWa4mg9RBBm4kXX4xF+Sc/uQZVbVfi64FpDkL1mWuARXUe0/AAptP17rO/7UD/BkJjnYTGIBEDMDU+8vTClsznDgvaI1jQThBBv7q02DKTLI27VDjw4Ti4Tv6ytLAZvwSOk8N/YTFywv259jDKFW7xpitVIBH9y2c7Ju92n4UdRNA9mOoDRNAWlrc6awF3ZxiqWsbA4VdW7EymQNlxqQnlA0yNS+kCBhBBH8GCYaSXXlvg8Q+upp3SGQJzewI/2fIkcOOFjBlI7svmtrZ+gaqWX2fXELiI8oV7CLZiwRhfKp96mKwqkVJeiP6IBf01FxcaWk1gLy+9iPIJoTHeUiAuYSkwRajWXitG2cUxHL7Qz1YCDC/d2tM0fE9eBdw9sQeIoC9YHOdLpTHV5hMLWvdUdsBdmWM4faHxVWagB20EWDC+WCkQBSxoo1jQudpz4TUXoZML3bQS2MdffmZDBDy9sA1TvRUL2jQWo7cIVWXz0DIvHNnefeyN0e3mpSdToIyXr7sDQ1vRZqe8adhmJWDn5VOoEGC9w6y1QLAKFQIuLuReIcBLo6hQcHCh5zMFyvxSMyoUXN7Qq+kC0oJ56UGFgtMX8qYK2DnpEiokXJzSmjYDfsWDCgknp3xqCrCcMstyyvsIZT87NhUVfGg/65OfY9++vPu/7lKkyP+K0rqvjpXW982V1vfDYnbHcz49DWYupGVXw9cW+SYj34JtRS6CrTEzA1CSmoaBWEnjYPb/ikrr+jo3XfnGwXhsR797KbtAff/rpfV9s5utfEnDoGGrGyjP0YdWpEiRIig3/AOtxb6f4CvruwAAAABJRU5ErkJggg=="></img>
}



class EmploymentRole extends Component
{
    constructor(props) {
        super(props);
        this.props.className =this.props.className + " relative h-full w-full"
      } 

      render() 
      {
        console.log(this.props);
        return <div id="slide1" className={this.props.className}>
                    sl1
                    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                        <a href="#slide2" className="btn btn-circle">❮</a> 
                        <a href="#slide2" className="btn btn-circle">❯</a>
                    </div>
                </div>
      }

}



export class EmploymentHistory extends Component
{
    constructor(props) {
        super(props);
      } 

      render() 
      {
        return <div className="min-h-screen grid grid-rows-2 grid-flow-rows auto-rows-max">
                <div className="carousel h-full  w-full">
                    {/* <div id="slide1" className="carousel-item relative h-full w-full">
                        sl1
                        <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                            <a href="#slide2" className="btn btn-circle">❮</a> 
                            <a href="#slide2" className="btn btn-circle">❯</a>
                        </div>
                    </div> */}
                    <EmploymentRole className="carousel-item"/>
                    <div id="slide2" className="carousel-item relative h-full w-full">
                        sl2
                        <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                            <a href="#slide1" className="btn btn-circle">❮</a> 
                            <a href="#slide1" className="btn btn-circle">❯</a>
                        </div>
                    </div>                   
                </div>
                    <ul className="steps">
                    <li className="step step-primary">Register</li>
                    <li className="step step-primary">Choose plan</li>
                    <li className="step">Purchase</li>
                    <li className="step">Receive Product</li>
                </ul>
            </div>  
      }
}

export class HeroBanner extends Component
{
  constructor(props) {
    super(props);




  }

  render()  {
    return <div className="hero min-h-screen bg-base-200">
      <div className="hero-content max-w-md flex flex-row">
    

        <div className="min-w-1/2 w-150 bg-blue-500">

            ff
            </div>
        <div className="min-w-1/2 bg-red-500">
            fdf
      </div>
    </div>
  </div>
  }
}


export class AppNavBar extends Component
{
    constructor(props)
    {
        super(props)
        this.state="Home";
    }

    render() 
    {
        return <div className={"navbar bg-slate-800 "+this.state}>
                <div className="navbar-start">
                    <a className="btn">Button</a>
                </div>
            </div>
    }
}
