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
    {abbr: 'Lun', date: '08', amount: 80},
    {abbr: 'Mar', date: '09', amount: 20},
    {abbr: 'Mie', date: '10', amount: 60},
    {abbr: 'Jue', date: '11', amount: 40},
    {abbr: 'Vie', date: '12', amount: 10},
    {abbr: 'Sab', date: '13', amount: 100},
    {abbr: 'Dom', date: '14', amount: 80},
    {abbr: 'Lun', date: '15', amount: 80},
    {abbr: 'Mar', date: '16', amount: 20},
    {abbr: 'Mie', date: '17', amount: 60},
    {abbr: 'Jue', date: '18', amount: 40},
    {abbr: 'Vie', date: '19', amount: 10},
    {abbr: 'Sab', date: '20', amount: 100},
    {abbr: 'Dom', date: '07', amount: 80},
    {abbr: 'Lun', date: '21', amount: 75},
    {abbr: 'Mar', date: '22', amount: 20},
    {abbr: 'Mie', date: '23', amount: 64},
    {abbr: 'Jue', date: '24', amount: 40},
    {abbr: 'Vie', date: '25', amount: 10},
    {abbr: 'Sab', date: '26', amount: 100},
    {abbr: 'Dom', date: '27', amount: 80},
    {abbr: 'Jue', date: '28', amount: 45},
    {abbr: 'Vie', date: '29', amount: 18},
    {abbr: 'Sab', date: '30', amount: 95},
    {abbr: 'Dom', date: '31', amount: 80}
  ];

  const daysBars = daysData.map((day, i) => {
    // const style = { height: var(--h) };
    return (
      <div className="day-bar__bar" key={i} style={{ '--height': `${day.amount}%`,  '--daysLength': `${daysData.length - 1 }`}}></div>
    ); 
  }); 

  // eslint-disable-next-line
  {/* <div className="bars-container__day-bar" key={ i }>
    <div className="day-bar__bar" key={i}></div> 
    <span className="day-bar__label"> { day.abbr } { day.date } </span>
  </div> */}

  const daysLabels =  daysData.map((day, i) => {
    return (
      <span className="day-bar__label" key={i}> { `${day.abbr} ${day.date}` } </span>
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