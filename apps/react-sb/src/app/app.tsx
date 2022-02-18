// eslint-disable-next-line @typescript-eslint/no-unused-vars
import styles from './app.module.scss';
import ItemImage from './components/item-image/item-image';
import Navbar from './components/navbar/navbar';

import NxWelcome from './nx-welcome';

export function App() {
  return (

    <>

      <Navbar />
      <ItemImage srcImage="assets/image1.jpeg" widthImage="550px" />

    </>
  );
}

export default App;

const logostyle = { height: 30 }

