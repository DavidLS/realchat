import React, { useState } from 'react'

const MessageForm = (props) => {
  const [buttonDisabled, setButtonDisabled] = useState(true)
  const [value, setValue] = useState('')
  return (
    <form
      onSubmit={(event) => {
        event.preventDefault()
        const message = event.target[0].value
        console.log(`Message: ${message}`)
        setValue('')
      }}
    >
      <input
        value={value}
        onChange={
          (event) => {
            const message = event.target.value
            if (/^(.|\s)*\S(.|\s)*$/.test(message)) { // empty - only spaces
              setValue(message)
              setButtonDisabled(false)
            }
          }
        }
        placeholder={props.placeholder}
        type="text"
      />
      <button
        type="submit"
        disabled={buttonDisabled}
      >
        Send
      </button>
    </form>
  )
}

export default MessageForm
