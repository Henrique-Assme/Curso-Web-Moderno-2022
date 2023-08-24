import React from 'react'
import ReactDOM from 'react-dom'

import Primeiro from './componentes/Primeiro'
import BomDia from './componentes/BomDia'
import { BoaTarde, BoaNoite } from './componentes/Multiplos'
import Saudacao from './componentes/Saudacao'
import Pai from './componentes/Pai'
import Filho from './componentes/Filho'

const h1Exemplo = <h1>React</h1>
ReactDOM.render(
    <>
        h1Exemplo
        <Primeiro />
        <BomDia nome="guilherme"/>
        <BoaTarde name="Bruna"/>
        <BoaNoite name="Henrique"/>
        <Saudacao tipo="Bom dia" nome="Henrique"/>
        <Pai nome="Rodrigo" sobrenome="Assme">
            <Filho nome="Henrique"></Filho>
            <Filho nome="Felipe"></Filho>
        </Pai>
    </>,
document.getElementById('root'))