import style from './style.module.css'

export function ButtonPrimary({children, onClick}){
    return (
        <button onClick={onClick} type='button' className={`btn btn-primary ${style.button}`}>{children}</button>
    )
}