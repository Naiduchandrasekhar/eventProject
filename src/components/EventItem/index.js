// Write your code here
import './index.css'

const EventItem = props => {
  const {eachEvent, onClickEvent, isActive} = props
  const {id, imageUrl, name, location} = eachEvent

  const onEventClick = () => {
    onClickEvent(id)
  }

  const bgClassName = isActive ? 'bgColor' : ''

  return (
    <li className="list">
      <button type="button" className="button" onClick={onEventClick}>
        <img src={imageUrl} alt="event" className={`images ${bgClassName}`} />
      </button>
      <p className="name">{name}</p>
      <p className="location">{location}</p>
    </li>
  )
}

export default EventItem
