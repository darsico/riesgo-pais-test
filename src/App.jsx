import { useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)
  const historico = 'https://mercados.ambito.com/riesgopais/historico'
  const jornada = 'https://www.ambito.com/mercados/riesgo-pais/jornada'
  const semanal = 'https://www.ambito.com/mercados/riesgo-pais/semanal'
  const general = 'https://www.ambito.com/mercados/riesgo-pais/general'

  useEffect(() => {
    const getData = async (url) => {
      const response = await fetch(url)
      const data = await response.json()
      console.log(data, `${url} data`)
    }
    getData(historico)
    getData(jornada)
    getData(semanal)
    getData(general)
  }, [])
  return (
    <div className="App">
      <div>
        <a href="https://vitejs.dev" target="_blank">
          <img src="/vite.svg" className="logo" alt="Vite logo" />
        </a>
        <a href="https://reactjs.org" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </div>
  )
}

export default App
