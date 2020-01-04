import React from 'react';

import './CalendarBody.scss';

const CalendarBody = () => {
  const daysData = [
    {abbr: 'Lun', date: '01', amount: 80},
    {abbr: 'Mar', date: '02', amount: 20},
    {abbr: 'Mie', date: '03', amount: 60},
    {abbr: 'Jue', date: '04', amount: 40},
    {abbr: 'Vie', date: '05', amount: 10},
    {abbr: 'Sab', date: '06', amount: 100},
    {abbr: 'Dom', date: '07', amount: 80},
  ];

  const daysBars = daysData.map((day, i) => {
    // const style = { height: var(--h) };
    return (
      <div className="day-bar__bar" key={i} style={{ '--h': `${day.amount}%` }}></div>
    );
  }); 

  // eslint-disable-next-line
  {/* <div className="bars-container__day-bar" key={ i }>
    <div className="day-bar__bar" key={i}></div> 
    <span className="day-bar__label"> { day.abbr } { day.date } </span>
  </div> */}

  const daysLabels =  daysData.map((day, i) => {
    return (
      <span className="day-bar__label" key={i}> { day.abbr } { day.date } </span>
    );
  });

  return (
    <div className="calendar-body">
      <div className="calendar-body__bars-container">
        { daysBars }
        { daysLabels }
      </div>
      <p className="calendar-body__message">Tarifa por adulto para una estadía de 14 días.</p>
      <p className="calendar-body__message">Los precios visualizados son los mejores encontrados por los usuaruis en los últimos días y pueden no estar actualizados.</p>
    </div>
  )
}

export default CalendarBody;