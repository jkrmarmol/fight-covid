import VirusFly from './Components/VirusFly';
import Header from './Components/Header';
import RecoverEarth from './Components/RecoverEarth';
import ImageRight from './Components/ImageRight';
import CovidCase from './Components/CovidCase';
import Footer from './Components/Footer';
import { Provider } from 'react-redux';
import { store } from './store';
import './style.css';


function App() {
  return (
    <div className='container'>
      <VirusFly />
      <Header />
      <RecoverEarth />
      <ImageRight />
      <Provider store={store}>
        <CovidCase />
      </Provider>
      <Footer />
    </div>
  );
}

export default App;
