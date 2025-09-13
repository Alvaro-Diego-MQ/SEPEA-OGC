"use client"
import React from 'react'
import { useRouter } from 'next/router';
import HeaderAutoevaluacion from '../../components/NuevaAutoevaluacion/headerAutoevaluacion'
import Autoevaluacion from '../../components/NuevaAutoevaluacion/Autoevaluacion'

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
