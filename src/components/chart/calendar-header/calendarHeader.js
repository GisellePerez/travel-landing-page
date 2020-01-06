import React from 'react';

import './calendarHeader.scss'

const CalendarHeader = () => {
  const selectedCurrency = 'AR$';

  const monthsData = [
    { name: 'Enero', amount: 15100, isSelected: false },
    { name: 'febrero', amount: 16100, isSelected: false },
    { name: 'marzo', amount: 14500, isSelected: false },
    { name: 'Abril', amount: 15100, isSelected: false },
    { name: 'Mayo', amount: 16100, isSelected: false },
    { name: 'junio', amount: 14500, isSelected: false },
    { name: 'julio', amount: 17800, isSelected: false },
    { name: 'agosto', amount: 22500, isSelected: false },
    { name: 'septiembre', amount: 16100, isSelected: false },
    { name: 'octubre', amount: 14500, isSelected: false },
    { name: 'noviembre', amount: 17800, isSelected: false },
    { name: 'diciembre', amount: 22500, isSelected: false },
  ];

  const monthsDivs = monthsData.map((month, i) => {
    return(
      <div className="month-header" key={ i }>
        <span className="month-header__name">{ month.name }</span>
        <span className="month-header__amount">desde { selectedCurrency } { month.amount }</span>
      </div>
    );
  });

  const onPreviousMonths = () =>  {
    console.log('prev')
  }

  const onNextMonths = () => {
    console.log('next')
  }

  // main return 
  return (
    <div className="calendar-header">
      <div className="calendar-header__arrow previous" onClick={ onPreviousMonths }> 
        <span> &#8249; </span> 
      </div>
      <div className="calendar-header__months"> { monthsDivs } </div>
      <div className="calendar-header__arrow next" onClick={ onNextMonths }> 
        <span> &#8250; </span>
      </div>
    </div>
  )
}

export default CalendarHeader;