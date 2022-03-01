import React from 'react'
import Search from './Search';
import Login from './Login';
import Logo from './Logo';
export default function Header() {
  return (
    <header>
        <Logo/>
        <Search/>
        <Login/>
  </header>
  )
}
