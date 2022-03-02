import React from 'react'
import style from './style.module.scss'
import { AiOutlineLeftCircle, AiOutlineRightCircle } from 'react-icons/ai'

interface IWallpaper {
    imagem: string,
    descricao: string,
}

export default function WallpaperPrincipal({imagem, descricao} : IWallpaper) {
  return (
      <div className={style.container}>
          <AiOutlineLeftCircle className={style.seta}/>
         <img className={style.wallpaper} src={imagem} alt={descricao} />
            <AiOutlineRightCircle className={style.seta}/>
      </div>
  )
}
