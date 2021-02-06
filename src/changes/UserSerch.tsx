import { Component } from "react";

interface UserSerchProps {
  users: {
    name: string;
    age: number;
  };
}

class UserSerch extends Component<UserSerchProps> {
  render() {
    this.props.users;
  }
}

export default UserSerch;
