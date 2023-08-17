import './index.css'
import {Component} from 'react'

class Welcome extends Component {
  state = {isSubscribed: true}

  onButtonClick = () => {
    const {isSubscribed} = this.state

    if (isSubscribed === true) {
      this.setState({isSubscribed: false})
    } else {
      this.setState({isSubscribed: true})
    }
  }

  render() {
    const {isSubscribed} = this.state

    return (
      <div className="bg-container">
        <h1 className="heading">Welcome</h1>
        <p className="paragraph">Thank you! Happy Learning</p>
        {isSubscribed ? (
          <button className="button" type="button" onClick={this.onButtonClick}>
            Subscribe
          </button>
        ) : (
          <button className="button" type="button" onClick={this.onButtonClick}>
            Subscribed
          </button>
        )}
      </div>
    )
  }
}

export default Welcome
