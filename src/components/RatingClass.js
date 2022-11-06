import { PureComponent } from 'react'
import StarClass from './StarClass'

class RatingClass extends PureComponent {
  constructor(props) {
    super(props)
    this.state = {
      userRating: 0,
      userHover: 0,
      userSubmit: false,
      buttonText: 'Rate',
    }
    this.setUserRating = this.setUserRating.bind(this)
    this.setUserHover = this.setUserHover.bind(this)
  }

  setUserRating(x) {
    this.setState({ ...this.state, userRating: x })
  }

  setUserHover(y) {
    this.setState({ ...this.state, userHover: y })
  }

  render() {
    return (
      <div className="rating-wrapper">
        {[1, 2, 3, 4, 5].map((index) => (
          <StarClass
            className={`rating-element ${
              index <= (this.state.userHover || this.state.userRating)
                ? 'rating-element__focused'
                : null
            }`}
            id={index}
            setRating={this.setUserRating}
            active={this.state.userRating}
            hover={this.state.userHover}
            setHover={this.setUserHover}
            submit={this.state.userSubmit}
          />
        ))}
        <button
          className={`${
            this.state.userSubmit
              ? 'rating-button rating-button__on'
              : 'rating-button rating-button__off'
          }`}
          onClick={() => {
            this.setState({ userSubmit: true })
            this.setState({ buttonText: '✓' })
          }}
        >
          {this.state.buttonText}
        </button>
      </div>
    )
  }
}

export default RatingClass
