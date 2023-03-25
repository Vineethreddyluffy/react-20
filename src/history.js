import './index.css'

const GetItem = props => {
  const {item, onDelete} = props
  const {timeAccessed, logoUrl, title, domainUrl, id} = item
  const onButton = () => {
    onDelete(id)
  }

  return (
    <li className="todo-cont">
      <div className="todo">
        <p className="Mpara">{timeAccessed}</p>
        <div className="item-cont">
          <div className="img-cont">
            <img src={logoUrl} alt="domain logo" className="logo" />
            <p className="Mpara">{title}</p>
            <p className="paraof">{domainUrl}</p>
          </div>
          <button
            type="button"
            onClick={onButton}
            className="button"
            data-testid="delete"
          >
            <img
              src="https://assets.ccbp.in/frontend/react-js/delete-img.png"
              alt="delete"
            />
          </button>
        </div>
      </div>
    </li>
  )
}
export default GetItem
