import {render,h, Component} from 'preact';
import {AppNavBar} from './components/Primary'

class Clock extends Component {

  constructor() {
    super();
    this.state = { time: Date.now() };
  }

  // Lifecycle: Called whenever our component is created
  componentDidMount() {
    // update time every second
    this.timer = setInterval(() => {
      this.setState({ time: Date.now() });
    }, 1000);
  }

  // Lifecycle: Called just before our component will be destroyed
  componentWillUnmount() {
    // stop when not renderable
    clearInterval(this.timer);
  }

  render() {
    let time = new Date(this.state.time).toLocaleTimeString();
    return <span class="">{time}</span>;
  }
}

class Counter extends Component {
  state = {
    value: 0
  };

  increment = () => {
    this.setState(prev => ({ value: prev.value +1 }));
  };

  render(props, state) {
    return (
      <div>
        <p>Counter: {state.value}</p>
        <button onClick={this.increment}>Increment</button>
      </div>
    );
  }
}

function MyComponent(props) {
  const yes = () => {console.log("Helloo")};
  const x = [1,2,3,4,5,6,7,8,8];
  let s ="";
  x.forEach((value) => {s+= String(value)});


  return <div>
          <div>
              My name is {props.name}.
          <Clock ></Clock>
          <Counter></Counter>
          <h1 classname="bg-gradient-to-r from-green-400 to-blue-500 text-transparent text-9xl bg-clip-text font-extrabold"> hello world </h1>
        </div>;
        </div>;
}


class MyC extends Component
{
  constructor(props) {
    super(props);
  }

  render()  {
    return <div>
              <button class="btn btn-primary">Button</button>
            </div>
  }
}



  
window.onload = () => {
  console.log("ran");
  render(<AppNavBar/>, document.body)
};