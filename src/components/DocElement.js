import React from 'react'

export default function DocElement(props) {
  return (
    <div className='docElement'>
        {props.firstname} {props.lastname}
    </div>
  )
}