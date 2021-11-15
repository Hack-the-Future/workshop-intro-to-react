import { useState } from 'react'
import ListItem from './ListItem'

const TodoList = () => {
  const [newListItem, setNewListItem] = useState('')
  const [listItems, setListItems] = useState([])
  const [currId, setCurrId] = useState(0)
  const onListItemInputChange = (e) => {
    setNewListItem(e.target.value)
  }

  const onAddClick = () => {
    setListItems((prev) => [...prev, { item: newListItem, id: currId }])
    setCurrId((p) => p + 1)
    setNewListItem('')
  }

  const onListItemDelete = (listId) => {
    setListItems((prev) => prev.filter(({ id }) => listId !== id))
  }

  return (
    <>
      <div>
        <h3>TodoList</h3>
        <p>Add a new item to the list!</p>
        <input onChange={onListItemInputChange} value={newListItem} />
        <button type="button" onClick={onAddClick}>
          add!
        </button>
      </div>
      <div>
        <p>Your list</p>
        <ul>
          {listItems.map(({ item, id }) => (
            <ListItem key={id} onListItemDelete={() => onListItemDelete(id)}>
              {item}
            </ListItem>
          ))}
        </ul>
      </div>
    </>
  )
}

export default TodoList
