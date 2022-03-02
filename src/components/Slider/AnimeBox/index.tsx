import React from 'react'
import style from './style.module.scss'
import image from '../../../assets/shingeki.jpg'
import {MdFavoriteBorder, MdFavorite} from 'react-icons/md'
import {AiFillInfoCircle} from 'react-icons/ai'
export default function AnimeBox() {
  return (
    <div className={style.box}>
        <div className={style.box_principal}>
            <img className={style.img} src={image} alt="" />
            <div className={style.box_principal_info}>
                <span className={style.titulo}>Shingeki no Kyojin</span>
                <span className={style.tipo}>Serie</span>
                <span className={style.descricao_audio}>Legendado/Dublado</span>
            </div>
            
        </div>

        <div className={style.box_secundaria}>
            <button>
                <MdFavoriteBorder className={style.botao}/>
            </button>

            <button>
                <AiFillInfoCircle className={style.botao}/>
            </button>
        </div>

    </div>
  )
}
