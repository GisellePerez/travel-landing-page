import React from 'react';
import Form from './Form/Form';

import './Header.scss';

import backgroundImage from '../../assets/new-york.jpg';

const Header = () => {
  const style = {
    backgroundImage: `url(${backgroundImage})`
  }
  const cityName = 'Nueva York';
  const formInputsConfirguration = {
    inputs: [
      {
        label: 'Origen',
        type: 'search',
        placeholder: 'Elegí tu origen'
      },
      {
        label: 'Destino',
        type: 'search',
        placeholder: 'Elegí tu destino'
      },
      {
        label: 'Fechas',
        type: 'datepicker',
        placeholder: ''
      },
      {
        label: 'Pasajeros y clase',
        type: 'dropdown',
        placeholder: 'Pasajeros y clase'
      }
    ]
  }

  return (
    <div className="header-container" style={ style } >

      <p className="header__escape-to">Escapate a</p>
      <h2 className="header__city-name">{ cityName }</h2>

      <div className="header__buttons-container">
        <button className="buttons-container__button">Ida y vuelta</button>
        <button className="buttons-container__button">Solo ida</button>
        <button className="buttons-container__button">Multidestino</button>
      </div>

      <Form inputsConfiguration={formInputsConfirguration} />
    </div>
  )
}

export default Header;