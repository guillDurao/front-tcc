import React from 'react';
import RoutesComponent from '../../routes';
import '../../assets/styles/global.scss'

const App: React.FC = () => {

  return (<div className='main-container'>
    <RoutesComponent />
  </div>)
}

export { App };