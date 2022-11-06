import { PureComponent } from 'react'

class StarClass extends PureComponent {
  render() {
    const { id, active, submit, className, setRating, setHover } = this.props

    return (
      <svg
        className={className}
        onClick={() => {
          if (!submit) {
            setRating(id)
          }
        }}
        onMouseEnter={() => {
          if (!submit) {
            setHover(id)
          }
        }}
        onMouseLeave={() => {
          if (!submit) {
            setHover(active)
          }
        }}
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 512 512"
      >
        <path
          fill="lightgray"
          d="m253.2 448.4-107.8 57.7-2.5 1.1c-18.3 6.9-35.6 5.5-48.7-6.2-12.3-11-16.8-26.8-14.2-44.9l18-124.4-81.4-85.6C2.4 231.8-3.1 214.2 1.7 195.8c5.3-20.4 22.5-32.2 47.4-36.1l108.2-16.3L213.9 26c8.8-16.6 22.6-26.4 39.8-26 16.9.5 30.3 10.8 40.8 29.3l54.8 114.8L470.6 161c19.3 3.3 33.5 13.4 39.2 30.1 5.7 16.7.3 33.6-14.3 50.8l-88.1 89.9 19.8 124.3c3.1 21.5-.6 38.5-15 48.7-12.9 9.1-29.1 9.1-47.8 2.7l-3.1-1.3-108.1-57.8z"
        />
      </svg>
    )
  }
}

export default StarClass
