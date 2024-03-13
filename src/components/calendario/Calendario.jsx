import * as React from 'react'
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider'
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs'
import { DateCalendar } from '@mui/x-date-pickers/DateCalendar'
import dayjs from 'dayjs'

export default function BasicDateCalendar(props) {
  const hoje = (data) => {
    const today = dayjs()
    return data.isSame(today, 'day')
  }

  const shouldDisableDate = (data) => hoje(data)

  return (
    <LocalizationProvider dateAdapter={AdapterDayjs} {...props}>
      <DateCalendar shouldDisableDate={shouldDisableDate} disablePast {...props} />
    </LocalizationProvider>
  )
}
