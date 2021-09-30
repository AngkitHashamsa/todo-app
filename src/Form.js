import React from 'react'

import Alert from './ALert'
import styled from 'styled-components'
import { useGlobalContext } from './context'
const Form = () => {
  const { name, handleChange, handleSubmit, isEdited, alert } =
    useGlobalContext()

  return (
    <Wrapper>
      <form>
        {alert.show && <Alert />}
        <h3>todo app</h3>
        <div className='form-control'>
          <input
            type='text'
            className='input'
            placeholder='add item'
            value={name}
            onChange={handleChange}
          />
          <button className='submit-btn' type='submit' onClick={handleSubmit}>
            {isEdited ? 'edit' : 'add'}
          </button>
        </div>
      </form>
    </Wrapper>
  )
}

const Wrapper = styled.div`
  h3 {
    color: var(--clr-primary-1);
    margin-bottom: 1.5rem;
    text-align: center;
  }
  .form-control {
    display: flex;
    justify-content: center;
  }
  .input {
    padding: 0.25rem;
    padding-left: 1rem;
    background: var(--clr-grey-10);
    border-top-left-radius: var(--radius);
    border-bottom-left-radius: var(--radius);
    border-color: transparent;
    font-size: 1rem;
    flex: 1 0 auto;
    color: var(--clr-grey-5);
    &::placeholder {
      font-family: var(--ff-secondary);
      color: var(--clr-grey-5);
    }
    &:focus {
      outline: none;
    }
  }

  .submit-btn {
    background: var(--clr-primary-8);
    border-color: transparent;
    flex: 0 0 5rem;
    display: grid;
    align-items: center;
    padding: 0.25rem;
    text-transform: capitalize;
    letter-spacing: 2px;
    border-top-right-radius: var(--radius);
    border-bottom-right-radius: var(--radius);
    cursor: pointer;
    content: var(--clr-primary-5);
    transition: var(--transition);
    font-size: 0.85rem;
    &:hover {
      background: var(--clr-primary-5);
      color: var(--clr-white);
    }
  }
`

export default Form
