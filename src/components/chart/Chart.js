import React from 'react';
import CalendarHeader from './calendar-header/calendarHeader';
import CalendarBody from './calendar-body/calendarBody';

import './Chart.scss'

const Chart = () => {
  return (
    <div className="chart">
      <CalendarHeader />
      <CalendarBody />
    </div>
  )
}

export default Chart;