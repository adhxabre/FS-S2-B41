import React, {useState} from 'react'

function App() {
  const [state, setState] = useState(true)

  const nama = "mbah"

  function onChange(e) {
    return setState(e.target.value)
  }

  function Login(props) {
    return(
      <div>
        <h1>Welcome to my pages</h1>
        <button onClick={props.login}>Login</button>
      </div>
    )
  }

  function Logout(props) {
    return(
      <div>
        <h1>Already Logged in</h1>
        <button onClick={props.logout}>Logout</button>
      </div>
    )
  }

  return(
    <div>
      <h1>Kalo ngeklik button, ya sesuai tulisannya, bakal nambah atau ngurang</h1>
      <p>{state}</p>

      <p>{nama}</p>
      {
        state ? (
          <Logout logout={() =>  setState(!state)} />
        ) : (
          <Login login={() => setState(!state)}/>
        )
      }

      <input type="text" onChange={onChange} />
    </div>
  )
}

export default App