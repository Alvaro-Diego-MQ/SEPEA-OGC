"use client"
import React from 'react'
import { useRouter } from 'next/navigation';
import HeaderAutoevaluacion from '../../Components/NuevaAutoevaluacion/headerAutoevaluacion'
import Autoevaluacion from '../../Components/NuevaAutoevaluacion/Autoevaluacion'
export default function NuevaAutoevaluacion() {
  const router = useRouter();
  const {escuela} = router.query;

  return (
    <div>
        <HeaderAutoevaluacion escuelaSeleccionada={escuela}/>
        <div>
            <Autoevaluacion/>
        </div>
    </div>
  )
}
