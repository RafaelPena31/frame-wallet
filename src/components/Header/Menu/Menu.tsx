import { message } from 'antd'
import 'antd/dist/antd.css'
import React, { useContext } from 'react'
import { Link } from 'react-router-dom'
import { AppFirebase } from '../../../config/AppFirebase'
import { UserContext } from '../../../context/UserContext'
import { WalletContext } from '../../../context/WalletContext'
import './Menu.scss'

function Menu(): JSX.Element {
  const warning = () => {
    message.warning('No cryptocurrencies have been purchased yet. Your wallet is empty.')
  }

  const { walletValue, setWalletValue } = useContext(WalletContext)
  const { setCurrencyUserApp } = useContext(UserContext)

  if (walletValue.length !== 0) {
    return (
      <nav className='menu'>
        <Link
          to='/'
          onClick={() => {
            AppFirebase.auth().signOut()
            setWalletValue([])
            setCurrencyUserApp([])
          }}>
          Sign out
        </Link>
        <Link to='/home'>Home</Link>
        <Link to='/account'>Account</Link>
        <Link to='/wallet'>Wallet</Link>
      </nav>
    )
  }
  return (
    <nav className='menu'>
      <Link
        to='/'
        onClick={() => {
          AppFirebase.auth().signOut()
          setWalletValue([])
          setCurrencyUserApp([])
        }}>
        Sign out
      </Link>
      <Link to='/home'>Home</Link>
      <Link to='/account'>Account</Link>
      <Link to='/home' onClick={warning}>
        Wallet
      </Link>
    </nav>
  )
}

export default Menu
