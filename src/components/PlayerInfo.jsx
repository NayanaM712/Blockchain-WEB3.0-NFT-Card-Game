// import React from 'react'
// import ReactTooltip from 'react-tooltip'

// import styles from '../styles'

// const healtPoints = 25

// const healthLevel = (points) =>
//   points > 13 ? 'bg-green-500' : points > 7 ? 'bg-orange-500' : 'bg-red-500'

// const marginIndexing = (index) => (index === healtPoints - 1 ? 'mr-0' : 'mr-1')

// const PlayerInfo = ({ player, playerIcon, marginTop }) => {
//   // because max health is 25
//   const arrayFromZeroToTwentyFour = [...Array(player.health).keys()]

//   return (
//     <div className={`${styles.flexCenter} ${marginTop ? 'mt-4' : 'mb-4'}`}>
//       <img
//         src={playerIcon}
//         alt='player icon'
//         className='w-14 h-14 object-contain rounded-full'
//         data-for={`Player-${marginTop ? '1' : '2'}`}
//         data-tip
//       />
//       {/* health */}
//       <div
//         data-for={`Health-${marginTop ? '1' : '2'}`}
//         data-tip={`Health: ${player?.health}}`}
//         className={styles.playerHealth}
//       >
//         {arrayFromZeroToTwentyFour.map((item, index) => (
//           <div
//             key={`player-item-${item}`}
//             className={`${styles.playerHealthBar} ${healthLevel(
//               player.health
//             )} ${marginIndexing(index)}`}
//           />
//         ))}
//       </div>

//       {/* mana */}
//       <div
//         data-for={`Mana-${marginTop ? '1' : '2'}`}
//         data-tip='Mana'
//         className={`${styles.flexCenter} ${styles.glassEffect} ${styles.playerMana}`}
//       >
//         {player.mana || 0}
//       </div>

//       <ReactTooltip
//         id={`Player-${marginTop ? '1' : '2'}`}
//         effect='solid'
//         backgroundColor='#7F46F0'
//       >
//         <p>
//           <span className={styles.playerInfoSpan}>Name: </span>{' '}
//           {player?.playerName}
//         </p>
//         <p>
//           <span className={styles.playerInfoSpan}>Name: </span>{' '}
//           {player?.playerAddress?.slice(0, 10)}
//         </p>
//       </ReactTooltip>

//       <ReactTooltip
//         id={`Health-${marginTop ? '1' : '2'}`}
//         effect='solid'
//         backgroundColor='#7F46F0'
//       />

//       <ReactTooltip
//         id={`Mana-${marginTop ? '1' : '2'}`}
//         effect='solid'
//         backgroundColor='#7F46F0'
//       />
//     </div>
//   )
// }

// export default PlayerInfo


import ReactTooltip from 'react-tooltip';
import styles from '../styles';

const healthPoints = 25;

const healthLevel = (points) => (points >= 12 ? 'bg-green-500' : points >= 6 ? 'bg-orange-500' : 'bg-red-500');
const marginIndexing = (index) => (index !== healthPoints - 1 ? 'mr-1' : 'mr-0');

const PlayerInfo = ({ player, playerIcon, mt }) => (
  <div className={`${styles.flexCenter} ${mt ? 'mt-4' : 'mb-4'}`}>
    <img data-for={`Player-${mt ? '1' : '2'}`} data-tip src={playerIcon} alt="player02" className="w-14 h-14 object-contain rounded-full" />

    <div
      data-for={`Health-${mt ? '1' : '2'}`}
      data-tip={`Health: ${player.health}`}
      className={styles.playerHealth}
    >
      {[...Array(player.health).keys()].map((item, index) => (
        <div
          key={`player-item-${item}`}
          className={`${styles.playerHealthBar} ${healthLevel(player.health)} ${marginIndexing(index)}`}
        />
      ))}
    </div>

    <div
      data-for={`Mana-${mt ? '1' : '2'}`}
      data-tip="Mana"
      className={`${styles.flexCenter} ${styles.glassEffect} ${styles.playerMana}`}
    >
      {player.mana || 0}
    </div>

    <ReactTooltip id={`Player-${mt ? '1' : '2'}`} effect="solid" backgroundColor="#7f46f0">
      <p className={styles.playerInfo}>
        <span className={styles.playerInfoSpan}>Name:</span> {player?.playerName}
      </p>
      <p className={styles.playerInfo}>
        <span className={styles.playerInfoSpan}>Address:</span> {player?.playerAddress?.slice(0, 10)}
      </p>
    </ReactTooltip>
    <ReactTooltip id={`Health-${mt ? '1' : '2'}`} effect="solid" backgroundColor="#7f46f0" />
    <ReactTooltip id={`Mana-${mt ? '1' : '2'}`} effect="solid" backgroundColor="#7f46f0" />
  </div>
);

export default PlayerInfo;