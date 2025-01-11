import React from "react"

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
        <h1>This is Profile Class Component</h1>
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