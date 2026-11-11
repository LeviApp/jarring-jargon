import React, { useState, useEffect } from 'react'
import Entry from "./components/Entry"
import logo from "./assets/JarringJargonLogo.png"
import "./App.css"
function App() {

  const [dictionary, setDictionary] = useState([{ context: "LEGAL", explanation: "This is a legal description." }, { context: "MEDICAL", explanation: "This is a medical description." }])
  const dictCount = dictionary.length;

  const [input, setInput] = useState("")
  const [uiMode, setUIMode] = useState(false)

  const fetchWords = async (word) => {
    const words = await fetch(`https://api.dictionaryapi.dev/api/v2/entries/en/${word}`)

    const wordJson = await words.json();
    setDictionary([...dictionary, ...wordJson])
    console.log({ wordJson })
  }



  return (
    <>
      <header>
        <img src={logo} alt="Jarring Jargon Logo" />
        {!uiMode && (
          <button onClick={() => setUIMode(!uiMode)}>
            <svg xmlns="http://www.w3.org/2000/svg" width="50" height="50" viewBox="0 0 24 24" fill="#F8BE00">
              <polygon points="12,7 15.5,8.5 17,12 15.2,15.8 11.5,17 8,15.2 7,11.5 9,8.2" />
              <polygon points="12,1 13.2,5.5 10.8,5.5" />
              <polygon points="12,23 10.5,18.2 13.5,18.2" />
              <polygon points="1,12 5.8,10.5 5.5,13.2" />
              <polygon points="23,11.5 18.2,13.5 18.5,10.8" />
              <polygon points="4.2,4.2 8.2,6.8 6.5,8.5" />
              <polygon points="19.8,19.8 15.5,17.2 17.5,15.5" />
              <polygon points="19.5,4.5 17.2,8.5 15.5,6.8" />
              <polygon points="4.5,19.5 6.8,15.2 8.8,17" />
            </svg>
          </button>
        )
        }
        {uiMode && (
          <button onClick={() => setUIMode(!uiMode)}>
            <svg xmlns="http://www.w3.org/2000/svg" width="50" height="50" viewBox="0 0 24 24" fill="black">
              <polygon points="14,2 7.5,5.5 4,12 7,18.5 14.5,22 20,19.5 14.5,19 10,15.5 9.5,10.5 12.5,6.5 18,4.5" />
            </svg>
          </button>
        )
        }
      </header>
      <div className='content'>
        <section className={`${uiMode ? "lightMode" : "darkMode"}`}>
          <div className='inputField'>
            <h2>Specialty</h2>
            <input type="text" />
          </div>
          <div className='inputField'>
            <h2>Complex Text</h2>
            <textarea type="text" />
          </div>
          <button onClick={() => fetchWords(input)}>Simplify</button>
        </section>
        <section className={`${uiMode ? "lightMode" : "darkMode"} solution`}>
          {dictionary.map((entry, i) => {
            return (
              <Entry key={i} entry={entry} index={i + 1} />
            )
          })}
        </section>
      </div>
    </>
  )
}

export default App;