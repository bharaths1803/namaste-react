import React from "react";
class UserClass extends React.Component {
  constructor(props) {
    super(props);
    console.log(this.props.name + "Children class constructor");
    this.state = {
      count: 0,
      count2: 2,
    };
  }
  render() {
    console.log(this.props.name + "Children class render");
    const { name, location } = this.props;
    const { count, count2 } = this.state;
    return (
      <div className="user-card">
        <h1>Name: {name}</h1>
        <h2>Location: {location}</h2>
        <h4>Contact: @bharaths1803</h4>
        <h4>{count}</h4>
        <button
          onClick={() => {
            this.setState({
              count: this.state.count + 1,
              count2: this.state.count2 + 1,
            });
          }}
        >
          Update Count
        </button>
        <h4>{count2}</h4>
      </div>
    );
  }
  componentDidMount() {
    console.log(this.props.name + "Child class mount");
  }
}

export default UserClass;
