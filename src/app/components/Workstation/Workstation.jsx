import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getStatusSchedule } from '../../thunks/workstationThunks';
import { Schedule } from '../Schedule';
import './Workstation.css'

export const Workstation = ({ data }) => {
  const dispatch = useDispatch();
  const statusSchedule = useSelector((state) => state.workstation.statusesSchedules)[data.id]

  React.useEffect(() => {
    dispatch(getStatusSchedule(data.id))
  }, [data.id, dispatch])

  return <div className='workstation-container'>
    <p><b>Id:</b> {data.id}</p>
    <p><b>Desk number:</b> {data.deskNumber}</p>
    <div className='status-container'>
      <p><b>Status:</b></p>
      {statusSchedule ? <div className='status-dot' style={{ backgroundColor: statusSchedule.status ? 'green' : 'red' }}></div> : null}
    </div>
    {statusSchedule ? <Schedule schedule={statusSchedule.schedule} /> : null}
  </div>
} 