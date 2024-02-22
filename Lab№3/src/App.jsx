import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import {Home, PaletteGalleryPage } from './pages'
import {PalletsData} from './data'

function App() {
  return (
    <>
      <Router>
        <Routes>
            <Route path="/" element={<Home />} />
            {PalletsData.map(({ id }) => <Route path={`/${id}`} key={id} element={<PaletteGalleryPage palletId={id}/>} />)}
          </Routes>
      </Router>
    </>
  )
}

export default App