import React, { useState } from 'react'
import styled from 'styled-components'
import Calendar from 'react-calendar'
import 'react-calendar/dist/Calendar.css'
import moment from 'moment'

const StyledCalendar = styled(Calendar)`
  border-radius: 15px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  background-color: #fff;
  color: #333;
  padding: 20px;
  width: 300px;
  font-size: 14px;
  border: ${(props) => (props.isBlocked ? '2px solid #b9b9b9c7' : '2px solid #56648f')};
  background-color: ${(props) => (props.isBlocked ? '#b9b9b9c7' : '#eff5ffb8')};
  button {
    border-radius: 20px;
  }
`

const CalendarReact = ({ isBlocked, ...props }) => {
  const minDate = moment().startOf('day')

  return (
    <div style={{ pointerEvents: isBlocked ? 'none' : 'auto' }}>
      <StyledCalendar minDate={minDate.toDate()} isBlocked={isBlocked} locale="en-US" {...props} />
    </div>
  )
}

export default CalendarReact