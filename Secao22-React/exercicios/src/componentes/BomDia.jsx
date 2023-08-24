import React, { Fragment } from "react"

// export default (props) => 
//     <Fragment>
//         <h1>Bom dia {props.nome}!</h1>
//         <h2>Até Breve!</h2>
//     </Fragment>

export default props => [ //pode ser assim tmb
    <h1 key="h1">Bom dia {props.nome}!</h1>,
    <h4 key="h4">Até Breve!</h4>
]