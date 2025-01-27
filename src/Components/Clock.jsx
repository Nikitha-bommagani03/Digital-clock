import {Component} from "react"
class  Clock extends Component {
    constructor(props) {
      super(props);
      this.state = {
        time: new Date().toLocaleTimeString(),
      };
    }
    componentDidMount() {
      this.timerID = setInterval(()=>this.tick(), 1000);
    }
    tick() {
      this.setState({
        time: new Date().toLocaleTimeString(),
      });
    }
    render() {
      return (
        <div className="c1">
          <div className="c3">{this.state.time}</div>
        </div>
      );
    }
  }
  export default  Clock