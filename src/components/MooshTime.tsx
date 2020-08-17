import React from 'react';

const timeStringFormatOptions = [
  [], // use default locale
  { hour: '2-digit', minute: '2-digit' }
];

export default class MooshTime extends React.Component {
  state: any;

  constructor(props: any) {
    super(props);

    this.state = {
      date: new Date(),
      timerIntervalId: undefined
    };

    this.showTime = this.showTime.bind(this);
    this.showDate = this.showDate.bind(this);
  }

  componentDidMount() {
    this.setState({
      timerIntervalId: setInterval(() => { this.setState({ date: new Date() }); }, 3000)
    });
  }

  componentWillUnmount() {
    if (this.state.timerIntervalId) {
      clearInterval(this.state.timerIntervalId);
    }
  }

  showTime(): String {
    return this.state.date.toLocaleTimeString(...timeStringFormatOptions);
  }

  showDate(): String {
    return this.state.date.toLocaleDateString();
  }

  render() {
    return(
      <div id="mooshDateTime">{`${this.showDate()} ${this.showTime()}`}</div>
    )
  }
};