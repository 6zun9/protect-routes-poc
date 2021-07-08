import React from 'react';
import auth from './auth';

export const AppLayout = (props) => {
  return (
    <div>
      App layout
      <button onClick={() => {
        auth.logout(() => {
          props.history.push('/');
        })
      }}>
        logout
      </button>
    </div>
  )
}
