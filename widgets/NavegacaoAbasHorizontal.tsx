'use client';

import {Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import BotaoIcone from '@/components/BotaoIcone';
import { IconAdjustmentsHorizontal } from '@tabler/icons-react';
import Link from 'next/link';
import Image from 'next/image';
import { Photo } from '@/types/AirbnbDados';

interface NavegacaoAbasHorizontalProps { icons: Photo [] }

const NavegacaoAbasHorizontal = ( props: NavegacaoAbasHorizontalProps ) => {

  const icones = props.icons;

  return(
    <div className='flex flex-row items-center'>
      
      {/* Navegação de filtros */}
      <Swiper
          spaceBetween={10}
          slidesPerView={3}
          breakpoints={{ // responsividade 
              640: {slidesPerView: 3},
              764: {slidesPerView: 4},
              1024: {slidesPerView: 6},
              1280: {slidesPerView: 9},
          }}
      >   
          {/* Map serve para renderizar os ícones */}

          {icones.map((icone, indice)=>(
              <SwiperSlide key={indice}>
                  <Link href={icone.url} className='flex flex-col items-center hover:text-red-500 cursor-pointer transition duration-150'>
                      <Image src={icone.source} alt={icone.description} width={24} height={24}/>
                      <span className='text-sm'>{icone.description}</span>
                  </Link>
              </SwiperSlide>
          ))}

      </Swiper>

      {/* Icone de filtro */}
      <BotaoIcone icone={(
          <IconAdjustmentsHorizontal arial-label="Ícone de Usuário" size={20}/>
      )}>
          Filtros
      </BotaoIcone>            
    </div>
  )
}

export default NavegacaoAbasHorizontal;