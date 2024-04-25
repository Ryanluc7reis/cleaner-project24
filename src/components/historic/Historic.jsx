import styled from 'styled-components'
import moment from 'moment'

const Historic = styled.div`
  width: 448px;
  height: 60px;
  box-shadow: 0 4px 20px 0 rgb(0 0 0 / 14%), 0 7px 10px -5px rgb(0 188 212 / 40%);
  background-color: #00cae3;
  color: #fff;
  margin-bottom: 18px;
  text-align: left;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0px 25px;
`

const Date = styled.div`
  font-size: 1.3rem;
`

export default function Historics({ historicType, id, createdDate, ...props }) {
  return (
    <Historic {...props}>
      <h3>{historicType}</h3>
      <Date>{moment(createdDate).format('DD/MM/YYYY')}</Date>
    </Historic>
  )
}
