import React from 'react';

import './calendarHeader.scss'

const CalendarHeader = () => {
  const selectedCurrency = 'AR$';

  const monthsData = [
    { name: 'Enero', amount: 15100 },
    { name: 'febrero', amount: 16100 },
    { name: 'marzo', amount: 14500 },
    { name: 'Abril', amount: 15100 },
    { name: 'Mayo', amount: 16100 },
    { name: 'junio', amount: 14500 },
    { name: 'julio', amount: 17800 },
    { name: 'agosto', amount: 22500 },
    { name: 'septiembre', amount: 16100 },
    { name: 'octubre', amount: 14500 },
    { name: 'noviembre', amount: 17800 },
    { name: 'diciembre', amount: 22500 },
  ];

  const monthsDivs = monthsData.map((month, i) => {
    return(
      <div className="month-header" key={ i }>
        <span className="month-header__name">{ month.name }</span>
        <span className="month-header__amount">desde { selectedCurrency } { month.amount }</span>
      </div>
    );
  });

  return (
    <div className="calendar-header">
      { monthsDivs }
    </div>
  )
}

export default CalendarHeader;