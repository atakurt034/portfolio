import { BrowserRouter as Router } from 'react-router-dom'
import { Footer } from './components/Footer'

import { About } from './screens/about/AboutScreen'
import { Stacks } from './screens/stacks/StacksScreen'
import { Project } from './screens/projects/Project'
import { Contact } from './screens/contact/Contact'

import SpeedDials from './components/navitems/SpeedDial'

function App() {
  return (
    <Router>
      <About />
      <Stacks />
      <Project />
      <Contact />
      <SpeedDials />
      <Footer />
    </Router>
  )
}

export default App
