"use client"
import React from 'react'
import { useRouter } from 'next/router';
import HeaderAutoevaluacion from '../../Components/NuevaAutoevaluacion/headerAutoevaluacion'
import Autoevaluacion from '../../Components/NuevaAutoevaluacion/Autoevaluacion'

export default function NuevaAutoevaluacion() {
  

  return (
    <div  >
        <HeaderAutoevaluacion />
        <div>
            <Autoevaluacion/>
        </div>
        
    </div>
  )
}
