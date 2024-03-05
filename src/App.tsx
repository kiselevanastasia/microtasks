import React, { MouseEvent } from 'react';
import './App.css';
import { Body } from './site/Body';
import { Footer } from './site/Footer';
import { Header } from './site/Header';
import { useState } from 'react';
import { NewComponent } from './NewComponent';
import { Button } from './components/Button';
import { Filter } from './Filter';

export type FilterType = 'all' | 'RUBLS' | 'Dollars'

function App() {

  const [students, setStudents] = useState([
    { id: 1, name: "James", age: 8 },
    { id: 2, name: "Robert", age: 18 },
    { id: 3, name: "John", age: 28 },
    { id: 4, name: "Michael", age: 38 },
    { id: 5, name: "William", age: 48 },
    { id: 6, name: "David", age: 58 },
    { id: 7, name: "Richard", age: 68 },
    { id: 8, name: "Joseph", age: 78 },
    { id: 9, name: "Thomas", age: 88 },
    { id: 10, name: "Charles", age: 98 },
    { id: 11, name: "Christopher", age: 100 },
  ]
  )

  const [money, setMoney] = useState([
    { banknots: 'Dollars', value: 100, number: ' a1234567890' },
    { banknots: 'Dollars', value: 50, number: ' z1234567890' },
    { banknots: 'RUBLS', value: 100, number: ' w1234567890' },
    { banknots: 'Dollars', value: 100, number: ' e1234567890' },
    { banknots: 'Dollars', value: 50, number: ' c1234567890' },
    { banknots: 'RUBLS', value: 100, number: ' r1234567890' },
    { banknots: 'Dollars', value: 50, number: ' x1234567890' },
    { banknots: 'RUBLS', value: 50, number: ' v1234567890' },
  ])

  const [filterMoney, setFilterMoney] = useState<FilterType>('all')

  let currentMoney = money
  if(filterMoney === 'RUBLS'){
    currentMoney = money.filter((el, index) => el.banknots === 'RUBLS')
  } 
 if (filterMoney === 'Dollars'){
  currentMoney = money.filter((el, index) => el.banknots === 'Dollars')
  }


  const onClickFilter = (btnName: FilterType) => {
    setFilterMoney(btnName)
    console.log(btnName)
  }

  return (
    <div className='App' >
      <Filter onClickFilter={onClickFilter} currentMoney={currentMoney} />
    </div>
  );
}

export default App;
