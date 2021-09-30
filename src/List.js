import React from 'react'
import styled from 'styled-components'
import { FaTrash, FaEdit } from 'react-icons/fa'
import { useGlobalContext } from './context'
const List = () => {
  const { list, clearList, deleteItem, editItem } = useGlobalContext()
  return (
    <Wrapper>
      <div className='todoList'>
        <div>
          {list.map((item) => {
            const { id, title } = item
            return (
              <article key={id} className='todo-item '>
                <p>{title}</p>
                <div className='btn-container'>
                  <button className='edit-btn' onClick={() => editItem(id)}>
                    <FaEdit />
                  </button>
                  <button className='delete-btn' onClick={() => deleteItem(id)}>
                    <FaTrash />
                  </button>
                </div>
              </article>
            )
          })}
        </div>
        <button onClick={clearList} className='clear-btn'>
          clear list
        </button>
      </div>
    </Wrapper>
  )
}

const Wrapper = styled.div`
  margin-top: 2rem;
  p {
    margin-bottom: 0;
    color: var(--clr-grey-1);
    letter-spacing: 2px;
    transition: var(--transition);
  }
  .todo-item {
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin-bottom: 0.5rem;
    transition: var(--transition);
    padding: 0.25rem 1rem;
    border-radius: var(--radius);
    text-transform: capitalize;
  }
  .todo-item:hover {
    color: var(--clr-grey-5);
    background: var(--clr-grey-10);
  }
  .edit-btn,
  .delete-btn {
    background: transparent;
    border-color: transparent;
    cursor: pointer;
    font-size: 1rem;
    margin: 0 0.15rem;
    transition: var(--transition);
  }
  .edit-btn {
    color: var(--clr-green-light);
    &:hover {
      color: var(--clr-green-dark);
    }
  }
  .delete-btn {
    color: var(--clr-red-light);
    &:hover {
      color: var(--clr-red-dark);
    }
  }
  .clear-btn {
    text-transform: capitalize;
    width: 10rem;
    height: 1.5rem;
    display: grid;
    align-items: center;
    background: transparent;
    border-color: transparent;
    color: var(--clr-red-light);
    margin: 0 auto;
    font-size: 0.85rem;
    letter-spacing: var(--spacing);
    cursor: pointer;
    transition: var(--transition);
    margin-top: 1.25rem;
    &:hover {
      color: var(--clr-red-dark);
    }
  }
`
export default List
