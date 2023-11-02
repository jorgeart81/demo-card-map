import { FC, useState } from 'react';

import style from './card.module.css';

interface Props {
  houseList: House[];
}

interface House {
  description: string;
  address: string;
  coordinates: Coordinates;
}

interface Coordinates {
  latitude: number;
  longitude: number;
}

export const Card: FC<Props> = ({ houseList }) => {
  const [house, setHouse] = useState(houseList[0]);

  const handleSelector = (value: number) => {
    const houseIndex = houseList.findIndex(
      ({ coordinates }) =>
        coordinates.latitude === house.coordinates.latitude &&
        coordinates.longitude === house.coordinates.longitude
    );

    const newIndex = houseIndex + value;
    console.log({ houseIndex, newIndex });

    if (houseList.length <= 1) return;
    if (newIndex < 0 || newIndex > houseList.length - 1) return;
    setHouse(houseList[newIndex]);
  };

  const handleClick = () => {
    console.log(house.coordinates);
    window.alert(`Abrir mapa con coordenadas ${JSON.stringify(house.coordinates)}`);
  };

  return (
    <div className={style.cardContainer}>
      <div className={style.selectorContainer}>
        <button onClick={() => handleSelector(-1)}>Up</button>
        <button onClick={() => handleSelector(1)}>Down</button>
      </div>
      <div className={style.cardContainer}>
        <div>
          <p>{house.description}</p>
          <p>{house.address}</p>
        </div>
        <button onClick={handleClick}>Ver mapa</button>
      </div>
    </div>
  );
};
