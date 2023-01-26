
import './App.css'

import Header from './components/Header/Header'
import Origin from './components/Origin/Origin'
import Destination from './components/Destination/Destination'
import Form from './components/Form/Form'

function App() {
  

  return (
    <div className="App">
      <Header />
      <Origin endPoint='STOCKHOLM' time='10.30' />
      <Destination endPoint='GÖTEBORG' time='14.45' />
      <Form />
    </div>
  )
}

export default App
