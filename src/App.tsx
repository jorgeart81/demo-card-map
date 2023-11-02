import { Card } from './components';

import './App.css';

const data = [
  {
    description: 'Ubicación Casa',
    address: 'Bencinera Shell Las Flores',
    coordinates: { latitude: 1234, longitude: 433323 },
  },
  {
    description: 'Ubicación Campus RESB',
    address: 'UAndes Apoquindo',
    coordinates: { latitude: 56789, longitude: 67655544 },
  },
];

function App() {

  return (
    <>
      <Card houseList={data} />
    </>
  );
}

export default App;
