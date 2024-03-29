import React, { useState } from 'react'
import { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'

import {
  PagehigherOrderComponent,
  CustomInput,
  CustomButton,
} from '../components'
import { useGlobalContext } from '../context'

const Home = () => {
  const [playerName, setPlayerName] = useState('')

  const navigate = useNavigate()

  // Check all contract methods inside AvaxGods.sol file
  const { contract, walletAddress, setShowAlert, gameData, setErrorMessage } =
    useGlobalContext()

  const handleRegisterClick = async () => {
    try {
      const playerExist = await contract.isPlayer(walletAddress)

      if (!playerExist) {
        await contract.registerPlayer(playerName, playerName, {
          gasLimit: 200000,
        })

        setShowAlert({
          status: true,
          type: 'info',
          message: `${playerName} is being summoned!`,
        })
      }
    } catch (error) {
      setErrorMessage(error)
    }
  }

  useEffect(() => {
    const checkForPlayerToken = async () => {
      const playerExist = await contract.isPlayer(walletAddress)
      const playerTokenExist = await contract.isPlayerToken(walletAddress)

      if (playerExist && playerTokenExist) navigate('/create-battle')
    }

    if (contract) checkForPlayerToken()
  }, [contract])

  useEffect(() => {
    if (gameData.activeBattle) {
      navigate(`/battle/${gameData.activeBattle.name}`)
    }
  }, [gameData])

  return (
    <div className='flex flex-col'>
      <CustomInput
        label='Name'
        placeholder='Enter your player name'
        value={playerName}
        handleValueChange={setPlayerName}
      />

      <CustomButton handleClick={handleRegisterClick} restStyles='mt-6'>
        Resgister
      </CustomButton>
    </div>
  )
}

export default PagehigherOrderComponent(
  Home,
  <>
    Welcome to POLYXBATTLE <br />
  </>,
  <>
    Connect your wallet to start playing <br /> the ultimate Web3 Battle Card
    Game
  </>
)
