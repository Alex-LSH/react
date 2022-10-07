import React from 'react';
import { useParams } from 'react-router-dom';

import { Test } from './test'

function switchSample(topic) {
  switch (topic) {
    case 'test': return Test
    default: return <></>
  }
}

function PayMenu() {
  const topic = useParams()

  return (
    switchSample(topic)
  )
}

export default PayMenu;
