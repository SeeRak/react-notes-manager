import { useState } from 'react'
import style from './style.module.css'
import { Trash as TrashIcon } from 'react-bootstrap-icons' 
export function TextCard({title, subtitle, content, onClickTrash, onClick}){

    const [isCardHovered, setIsCardHovered] = useState(false)
    const [isTrashHovered, setIsTrashHovered] = useState(false)

    function onClickTrash_(e){
        onClickTrash();
        e.stopPropagation();
    }
    return (
        <div onClick={onClick} onMouseEnter={() => setIsCardHovered(true)} onMouseLeave={() => setIsCardHovered(false)} className={`card ${style.container}`} style={({borderColor: isCardHovered ? "#0d6efd" : "transparent"})}>
        <div className="card-body">
            <div className={style.title_row}>
            <h5 className="card-title">{title}</h5>
            <TrashIcon onClick={onClickTrash_} size={20} onMouseEnter={() => setIsTrashHovered(true)} onMouseLeave={() => setIsTrashHovered(false)} style={({color: isTrashHovered ? "#FF7373" : "#B8B8B8"})}/>

            </div>
          <h6 className="card-subtitle mb-2 text-muted">{subtitle}</h6>
          <p className={`card-text ${style.text_content}`}>
            {content}
          </p>
        </div>
      </div>
    )
}