import style from './style.module.css'

export function ButtonPrimary({children, onClick, isDisabled}){
    return (
        <button disabled={isDisabled} onClick={onClick} type='button' className={`btn btn-primary ${style.button}`}>{children}</button>
    )
}