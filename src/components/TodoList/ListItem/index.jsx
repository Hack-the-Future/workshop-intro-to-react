const ListItem = ({ children, onListItemDelete }) => {
  const listStyles = {
    display: 'flex',
    gap: '7px',
  }

  return (
    <li>
      <div style={listStyles}>
        <div>{children}</div>
        <button type="button" onClick={onListItemDelete}>
          X
        </button>
      </div>
    </li>
  )
}

export default ListItem
