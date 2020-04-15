import React from "react";

class Clock extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
        'time': {}
    };
  }

  retrieveTime() {
    const date = new Date();
    let hours = date.getHours();
    let minutes = date.getMinutes();
    let seconds = date.getSeconds();
    let object = {seconds, minutes, hours};
    this.setState({ "time": object });
  }

  componentDidMount() {
    this.startTimer();
  }

  startTimer() {
    this.interval = setInterval(() => this.tick(), 1000);
  } 

  stopTimer() {
    clearInterval(this.interval);
  }

  tick() {
    this.retrieveTime();
  }

  render() {
    return(
      <div className="clock">
        <h2>Clock</h2>
        <p>{this.state.time.hours}:{this.state.time.minutes}:{this.state.time.seconds}</p>
        <div>
            <button onClick={() => this.stopTimer()}>Stop Clock</button>
        </div>
        <div>
            <button onClick={() => this.startTimer()}>Restart Clock</button>
        </div>
      </div>
    )
  }
}

export default Clock;