import {render,h, Component} from 'preact';

const random = { 
    plane: <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADAAAAAwCAYAAABXAvmHAAAACXBIWXMAAAsTAAALEwEAmpwYAAAEgUlEQVR4nO2Yb2gbZRzHH93chkwE9YXNVlERtl1zSfoH3Bw2fZ51oiC+cET6Zwj+QfdGBKEmd6kLc2IL9sWqMKm6rr3nOqEvRGw3da0U2TtRZLm7tJY6R2vt1lxyd9lW1P75ySVpm6TXpsykNpgPfN/dPfl+eO55Hp4gVKRIkSIFR7l3+IiTU4IOXp5heeUHB6+8zATkbagQcHLKURenLDi5EDh5BRzLmbD75beYgLwTbWaYgLzT5VP6LQSA5WVgOclgObmdCcgP3vaPANzx1Dn9cA2NykSIhjGNTmKqtnp6ITez7PHAFqcvdNpSIBm7X/qzzC91MF75ofWOS7rUXaQn7CVUHSOiBoTqQKgGRIwCESNgSqBcwnLKmw5OnrcWSITxS38zfFBgOJmxGuPpC7Cd9EQ8mKp9mIbniKhCPPHy6QJEVKdQrnHw0hGWl2dWEyjzS8kEF/bxwb697wQPmO/hnnAloZF2LKpqslx6LASwGP4d5QMnJx1kOTm8toAE9uMKVLZdgeozUzcSpSMpyRCw+ISIqLagfMH6go/aOXlkhUCzDBWtY3Dw40kgNJJSJpuAmniWaoDFyDymalvOFvFqMAH5PjsnfW8KON8dgf2nxqGmK1kkLesTwOK0Yi7qQ93G/WgjqO2N3lsjqK9Uf3b9j+Wpt0oEsKDCE6cnwN01nSaAaVgnVO0gdLritkpgwXgPC7EIEYwJ0q0fy/Z8IAB3HurWa4mg9RBBm4kXX4xF+Sc/uQZVbVfi64FpDkL1mWuARXUe0/AAptP17rO/7UD/BkJjnYTGIBEDMDU+8vTClsznDgvaI1jQThBBv7q02DKTLI27VDjw4Ti4Tv6ytLAZvwSOk8N/YTFywv259jDKFW7xpitVIBH9y2c7Ju92n4UdRNA9mOoDRNAWlrc6awF3ZxiqWsbA4VdW7EymQNlxqQnlA0yNS+kCBhBBH8GCYaSXXlvg8Q+upp3SGQJzewI/2fIkcOOFjBlI7svmtrZ+gaqWX2fXELiI8oV7CLZiwRhfKp96mKwqkVJeiP6IBf01FxcaWk1gLy+9iPIJoTHeUiAuYSkwRajWXitG2cUxHL7Qz1YCDC/d2tM0fE9eBdw9sQeIoC9YHOdLpTHV5hMLWvdUdsBdmWM4faHxVWagB20EWDC+WCkQBSxoo1jQudpz4TUXoZML3bQS2MdffmZDBDy9sA1TvRUL2jQWo7cIVWXz0DIvHNnefeyN0e3mpSdToIyXr7sDQ1vRZqe8adhmJWDn5VOoEGC9w6y1QLAKFQIuLuReIcBLo6hQcHCh5zMFyvxSMyoUXN7Qq+kC0oJ56UGFgtMX8qYK2DnpEiokXJzSmjYDfsWDCgknp3xqCrCcMstyyvsIZT87NhUVfGg/65OfY9++vPu/7lKkyP+K0rqvjpXW982V1vfDYnbHcz49DWYupGVXw9cW+SYj34JtRS6CrTEzA1CSmoaBWEnjYPb/ikrr+jo3XfnGwXhsR797KbtAff/rpfV9s5utfEnDoGGrGyjP0YdWpEiRIig3/AOtxb6f4CvruwAAAABJRU5ErkJggg=="></img>
}
export class AppNavBar extends Component
{
    constructor(props)
    {
        super(props)
    }

    render() 
    {
        return <div className="navbar bg-slate-800">
                    <div className="flex-1">
                        <a className="btn btn-ghost normal-case text-xl">{random.plane}daisyUI</a>
                    </div>
                    <div className="flex-none">
                        <ul className="menu menu-horizontal info px-1">
                            <li><a>Link</a></li>
                            <li>
                            <details>
                                <summary>
                                Parent
                                </summary>
                                <ul className="p-2 bg-base-100">
                                    <li><a>Link 1</a></li>
                                    <li><a>Link 2</a></li>
                                </ul>
                            </details>
                            </li>
                        </ul>
                    </div>
                </div>
    }
}
