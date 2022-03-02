import React from 'react'
import AnimeBox from '../AnimeBox'
import style from './style.module.scss'
import {AiOutlineRightCircle} from 'react-icons/ai'
export default function Animes() {
  return (
    <div className={style.carousel}>
      <AnimeBox />
      <AiOutlineRightCircle className={style.seta}/>
    </div>
  )
}
