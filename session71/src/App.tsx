import React from 'react'
import Count from './components/Count'
import NumRandom from './components/NumRandom'
import ToggleTheme from './components/ToggleTheme'
import ListMode from './components/ListMode'
import Function from './components/Function'
import ChangeLanguage from './components/ChangeLanguage'


export default function App() {
  return (
    <div>App
      <Count></Count>
      <NumRandom></NumRandom>
      <ToggleTheme></ToggleTheme>
      <ListMode></ListMode>
      <Function></Function>
      <ChangeLanguage></ChangeLanguage>
    </div>
  )
}
