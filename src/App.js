import './App.css';
import Footer from './components/Footer';
import ItemListContainer from './components/ItemListContainer';
import NavBar from './components/Navbar';

export default function App() {
  return (
    <>
      <NavBar />
      <ItemListContainer greeting={'Holaa!!'} />
      <Footer />
    </>
  );
}
