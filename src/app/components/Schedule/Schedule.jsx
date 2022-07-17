import React from 'react';

export const Schedule = ({ schedule }) => {
  const weekDays = ['Sun', 'Mon', 'Tues', 'Wednes', 'Thurs', 'Fri', 'Satur']
  return <div>
    <table border={'1'}>
      <tbody>
        <tr>
          {weekDays.map((el) => {
            return <th key={el}>{el + 'day'}</th>
          })}
        </tr>
        <tr>
          {weekDays.map((el, index) => {
            return <td key={index}>{schedule[el] ? <>&#10003;</> : <>&#10006;</>}</td>
          })}
        </tr>
      </tbody>
    </table>
  </div>
}