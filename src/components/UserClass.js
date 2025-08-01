import React from "react";
class UserClass extends React.Component {
  constructor(props) {
    super(props);
    console.log(this.props.name + "Children class constructor");
    this.state = {
      userInfo: {
        name: "Bharoo",
        location: "Chennai",
        avatar_url:
          "https://tse2.mm.bing.net/th/id/OIP.jYUEQ5iDArrERw6TrwY5xwHaHk?pid=Api&P=0&h=180",
      },
      count: 0,
    };
  }
  render() {
    console.log(this.props.name + "Children class render");
    const { name, location, avatar_url } = this.state.userInfo;
    const { count } = this.state;
    return (
      <div className="user-card">
        <img alt="User Profile image" src={avatar_url} />
        <h1>Name: {name}</h1>
        <h2>Location: {location}</h2>
        <h4>Contact: @bharaths1803</h4>
        <h4>Count: {count}</h4>
      </div>
    );
  }
  async componentDidMount() {
    console.log(this.props.name + "Child class mount");
    const res = await fetch("https://api.github.com/users/bharaths1803");
    const json = await res.json();
    this.setState({ userInfo: json });
    this.timer = setInterval(() => {
      console.log("Interval");
    }, 1000);
  }

  componentDidUpdate(prevProps, prevState) {
    console.log(this.props.name + "Child class state updated");
    if (prevState.userInfo.name !== this.state.userInfo.name) {
      console.log("Updating");
    }
  }

  componentWillUnmount() {
    console.log(this.props.name + "Child class unmount");
    clearInterval(this.timer);
  }
}

export default UserClass;
