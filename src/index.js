import {render,h, Component} from 'preact';
import TopAppBar from 'preact-material-components/TopAppBar';
import 'preact-material-components/TopAppBar/style.css';



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
  return <div>My name is {props.name}.
          <Clock ></Clock>
          <Counter></Counter>
        </div>;
}


// Usage
const App = <MyComponent name="John Doe" />;


  
window.onload = () => {
  console.log("ran");
  render(App, document.body)
};