import { BrowserRouter as Router } from 'react-router-dom'
import { Footer } from './components/Footer'

import { About } from './screens/about/AboutScreen'
import { Stacks } from './screens/stacks/StacksScreen'
import SpeedDials from './components/navitems/SpeedDial'
import { Bounce } from 'react-reveal'

function App() {
  return (
    <Router>
      <About />
      <Stacks />
      <SpeedDials />
      <Footer />
    </Router>
  )
}

export default App
