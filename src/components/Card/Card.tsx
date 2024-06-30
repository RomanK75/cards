import React,{PropsWithChildren} from "react"

type Props = {}

const Card = ({children}: PropsWithChildren<Props>) => {
  return (
      <div className="card" style={{width: '18rem'}}>
        {children}
      </div>
    )
}

export default Card