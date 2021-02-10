import { Component } from "react";

interface User {
  name: string;
  age: number;
}

interface UserSerchProps {
  users: User[];
}

interface UserSerchState {
  name: string;
  user: User | undefined;
}

class UserSerch extends Component<UserSerchProps> {
  state: UserSerchState = {
    name: "",
    user: undefined,
  };

  onClick = () => {
    const foundUser = this.props.users.find((user) => {
      return user.name === this.state.name;
    });
    this.setState({ user: foundUser });
  };

  render() {
    const { name, user } = this.state;
    return (
      <div>
        User Search
        <input
          value={name}
          onChange={(e) => this.setState(e.target.value)}
        ></input>
        <button onClick={this.onClick}>Find User</button>
        <div>
          {user && user.name}
          {user && user.age}
        </div>
      </div>
    );
  }
}

export default UserSerch;
