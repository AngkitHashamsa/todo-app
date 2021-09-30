import React, { useState, useContext, useEffect } from 'react'

const AppContext = React.createContext()
const getLocalStorage = () => {
  let list = localStorage.getItem('list')
  return list ? JSON.parse(localStorage.getItem('list')) : []
}
export const AppProvider = ({ children }) => {
  const [name, setName] = useState('')
  const [alert, setAlert] = useState({
    show: false,
    msg: 'item added',
    type: 'success',
  })
  const [editId, setEditId] = useState(null)
  const [list, setList] = useState(getLocalStorage())
  const [isEdited, setIsEdited] = useState(false)

  const handleSubmit = (e) => {
    e.preventDefault()
    if (!name) {
      AlertF(true, 'danger', 'please enter value')
    } else if (name && isEdited) {
      setList(
        list.map((item) => {
          if (item.id === editId) {
            return { ...item, title: name }
          }
          return item
        })
      )
      AlertF(true, 'success', 'value edited')
      setIsEdited(false)
      setEditId(null)
      setName('')
    } else {
      const newItem = { id: new Date().getTime().toString(), title: name }
      setList([...list, newItem])
      AlertF(true, 'success', 'item added')
      setName('')
    }
  }

  useEffect(() => {
    localStorage.setItem('list', JSON.stringify(list))
  }, [list])
  const handleChange = (e) => {
    setName(e.target.value)
  }

  const clearList = () => {
    AlertF(true, 'success', 'item removed')
    setList([])
  }

  const deleteItem = (id) => {
    AlertF(true, 'danger', 'item removed')
    setList(list.filter((item) => item.id !== id))
  }

  const editItem = (id) => {
    const oneItem = list.find((item) => item.id === id)

    setEditId(id)
    setIsEdited(true)
    setName(oneItem.title)
  }

  const AlertF = (show = false, type = '', msg = '') => {
    setAlert({ show, type, msg })
  }

  useEffect(() => {
    let timeOut = setTimeout(() => {
      AlertF()
    }, 2000)
    return () => clearTimeout(timeOut)
  }, [list])

  return (
    <AppContext.Provider
      value={{
        name,
        alert,
        editId,
        list,
        isEdited,
        handleChange,
        handleSubmit,
        setName,
        clearList,
        deleteItem,
        editItem,
      }}
    >
      {children}
    </AppContext.Provider>
  )
}

export const useGlobalContext = () => {
  return useContext(AppContext)
}
