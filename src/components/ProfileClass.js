import React from "react"

import UserContext from "../utils/Usercontext"


class Profile extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      count: 1,
      count2: 0
    }
    console.log("constructor")
  }
  componentDidMount() {
    console.log("component")
  }

  render() {
    console.log("render")


    return (
      <div>
        {/* <UserContext.Consumer>
          <p>{(value) => console.log(value)}</p>
        </UserContext.Consumer> */}
        <h1>This is Profile Class Component</h1>
        <UserContext.Consumer>
          {({ user }) => (
            <h4>{user.name}-{user.email}</h4>
          )}
        </UserContext.Consumer>
        <h2>{this.props.name}</h2>
        <h2>{this.state.count}</h2>
        <h2>{this.state.count2}</h2>
        <button onClick={() => this.setState({
          count: 2
        })}>click</button>
      </div>
    )
  }


}

export default Profile