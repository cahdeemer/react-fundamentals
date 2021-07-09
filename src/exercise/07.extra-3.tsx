// Basic Forms
// http://localhost:3000/isolated/exercise/07.tsx

import * as React from 'react'
import {getRandomUsername} from '../utils'

interface FormElements extends HTMLFormControlsCollection {
  usernameInput: HTMLInputElement;
};

interface UsernameFormElement extends HTMLFormElement {
  readonly elements: FormElements;
};

function UsernameForm({
  onSubmitUsername,
}: {
  onSubmitUsername: (username: string) => void
}) {
  const [username, setUsername] = React.useState('');

  function handleSubmit(event: React.FormEvent<UsernameFormElement>) {
    event.preventDefault();
    onSubmitUsername(event.currentTarget.elements.usernameInput.value);
  };

  function handleChange(event: React.ChangeEvent<HTMLInputElement>) {
    setUsername(event.currentTarget.value);
  };

  function handleRandomClick() {
    setUsername(getRandomUsername());
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <button type="button" onClick={handleRandomClick}>Random</button>
      </div>
      <div>
        <label htmlFor="usernameInput">Username:</label>
        <input
          type="text"
          id="usernameInput"
          value={username}
          onChange={handleChange}
        />
      </div>
      <button type="submit">Submit</button>
    </form>
  )
}

function App() {
  const onSubmitUsername = (username: string) =>
    alert(`You entered: ${username}`)
  return <UsernameForm onSubmitUsername={onSubmitUsername} />
}

export {App}
