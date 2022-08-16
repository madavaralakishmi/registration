import './index.css'

const Registration = props => {
  const {onButtonStatus} = props

  const onChangedStatus = () => {
    onButtonStatus()
  }

  return (
    <>
      <div className="bg-shadow-box center">
        <img
          src="https://assets.ccbp.in/frontend/react-js/success-icon-img.png"
          alt="success"
        />
        <p>Submitted Successfully</p>
        <button type="button" onClick={onChangedStatus}>
          Submit another Response
        </button>
      </div>
    </>
  )
}

export default Registration
