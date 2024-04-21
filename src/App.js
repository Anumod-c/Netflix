import './App.css'
import Navbar from './components/Navbar/Navbar';
import Banner from './components/Banner/Banner';
import RowPost from './components/RowPost/RowPost';
import { action,comdedy,documentries,horror,orginals, romantic } from './url';
function App() {
  return (
    <div>
      
   <Navbar/>
   <Banner/>
   <RowPost url={orginals} title='Netflix Orginals'/>
    <RowPost url={action}  title='Action' isSmall/>
    <RowPost url={horror}  title='Horror' isSmall/>
   <RowPost url={comdedy}  title='Comedy' isSmall/>
   <RowPost url={romantic}  title='Romantic' isSmall/>
   <RowPost url={documentries}  title='Documentries' isSmall/>  


    </div>
  );
}

export default App;
