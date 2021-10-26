import harvardArt  from './data/harvardArt'
import GalleryNavigation from './components/GalleryNavigation';


function App() {

  return (
    

    <GalleryNavigation galleries={harvardArt.records} />
    // <h1>Hello from App</h1>
  );
}
// console.log(harvardArt)
export default App;

