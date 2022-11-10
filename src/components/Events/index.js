import {Component} from 'react'
import EventItem from '../EventItem'
import './index.css'

const registerEvents = {
  yetToRegister: 'YET_TO_REGISTER',
  registered: 'REGISTERED',
  registrationsCLose: 'REGISTRATIONS_CLOSED',
}

const eventsList = [
  {
    id: 'f9bb2373-b80e-46b8-8219-f07217b9f3ce',
    imageUrl:
      'https://assets.ccbp.in/frontend/react-js/event-canada-dance-festival-img.png',
    name: 'Canada Dance Festival',
    location: 'Canada, America',
    registrationStatus: 'YET_TO_REGISTER',
  },
  {
    id: 'c0040497-e9cb-4873-baa9-ef5b994abfff',
    imageUrl:
      'https://assets.ccbp.in/frontend/react-js/events-kathakali-img.png',
    name: 'Puthanalkkal Kalavela',
    location: 'Karnataka, India',
    registrationStatus: 'REGISTERED',
  },
  {
    id: '0037d5e4-4005-4030-987b-ce41b691b92a',
    imageUrl:
      'https://assets.ccbp.in/frontend/react-js/events-kuchipudi-img.png',
    name: 'Nithyopahara',
    location: 'Kerala, India',
    registrationStatus: 'REGISTRATIONS_CLOSED',
  },
  {
    id: 'c9ff08cb-610c-4382-9939-78e5e50a72b2',
    imageUrl:
      'https://assets.ccbp.in/frontend/react-js/events-bharatanatyam-img.png',
    name: 'Shivam',
    location: 'Andhra Pradesh, India',
    registrationStatus: 'YET_TO_REGISTER',
  },
  {
    id: 'd1153723-5b6e-4628-9a1a-ccd8f84f1273',
    imageUrl: 'https://assets.ccbp.in/frontend/react-js/events-kolatam-img.png',
    name: 'Janapada Kolatam',
    location: 'Tamil Nadu, India',
    registrationStatus: 'REGISTERED',
  },
  {
    id: '7d6ec013-d0ae-4d84-b776-14b733a9174f',
    imageUrl:
      'https://assets.ccbp.in/frontend/react-js/event-colonial-fest-img.png',
    name: 'Colonial Fest',
    location: 'Washington, America',
    registrationStatus: 'REGISTRATIONS_CLOSED',
  },
]
// Write your code here
class Events extends Component {
  state = {
    activeID: '',
    showStatus: false,
  }

  onClickEvent = id => {
    this.setState({activeID: id, showStatus: true})
  }

  renderRegisteredSuccess = () => (
    <>
      <img
        src="https://assets.ccbp.in/frontend/react-js/events-regestered-img.png"
        alt="registered"
        className="registered"
      />
      <h1 className="para">You have already registered for the event</h1>
    </>
  )

  renderRegistrationClosed = () => (
    <>
      <img
        src="https://assets.ccbp.in/frontend/react-js/events-registrations-closed-img.png "
        alt="registrations closed"
        className="registrationsClosedImage"
      />
      <h1 className="closedHeader">Registrations Are Closed Now!</h1>
      <p className="para">Stay tuned. We will reopen the registrations soon!</p>
    </>
  )

  yetToRegisterNow = () => (
    <>
      <img
        src="https://assets.ccbp.in/frontend/react-js/events-register-img.png"
        alt="yet to register"
        className="yetToRegisterImage"
      />
      <p>
        A live Performance brings so much to your relationship with dance.
        Seeing dance live can often make you fall totally in love with this
        beautiful art form.
      </p>
      <button className="buttonRegister" type="button">
        Register Here
      </button>
    </>
  )

  renderEvent = () => {
    const {activeID} = this.state

    const filteredList = eventsList.filter(eachOne => eachOne.id === activeID)

    switch (filteredList[0].registrationStatus) {
      case registerEvents.registered:
        return this.renderRegisteredSuccess()

      case registerEvents.registrationsCLose:
        return this.renderRegistrationClosed()

      case registerEvents.yetToRegister:
        return this.yetToRegisterNow()

      default:
        return null
    }
  }

  render() {
    const {showStatus, activeID} = this.state

    return (
      <div className="mainContainer">
        <div className="eventContainer">
          <h1 className="eventName">Events</h1>
          <ul className="unorderListContainer">
            {eventsList.map(eachEvent => (
              <EventItem
                key={eachEvent.id}
                eachEvent={eachEvent}
                onClickEvent={this.onClickEvent}
                isActive={eachEvent.id === activeID}
              />
            ))}
          </ul>
        </div>
        <div className="registrationContainer">
          {showStatus ? (
            <div className="registrationType">{this.renderEvent()}</div>
          ) : (
            <p className="header">
              Click on an event, to view its registration details
            </p>
          )}
        </div>
      </div>
    )
  }
}

export default Events
