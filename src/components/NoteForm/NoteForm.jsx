import { ButtonPrimary } from 'components/ButtonPrimary/ButtonPrimary'
import { useState } from 'react'
import { PencilFill, TrashFill } from 'react-bootstrap-icons'
import style from './style.module.css'

export function NoteForm({title, onClickEdit, onClickTrash, onSubmit}){

    const [formValues, setFormValues] = useState({title:"", content:""})

    function updateFormValues(e) {
        setFormValues({...formValues, [e.target.name] : e.target.value})
    }

    const actionIcons = 
    <>
        <div className={`col-1`}>
            {onClickEdit && <PencilFill onClick={onClickEdit} className={style.icon}/>}            
        </div>
        <div className={`col-1`}>
            {onClickTrash && <TrashFill onClick={onClickTrash} className={style.icon}/>} 
        </div>
    </>

    const titleInput = 
    <>
        <label className='form-label'>Title</label>
        <input onChange={updateFormValues} type="text" name='title' className='form-control' />
    </>

    const contentInput =  
    <>
        <label className='form-label'>Content</label>
        <textarea onChange={updateFormValues} type="text" name='content' className='form-control' rows="5"/>
    </>

    const submitInput =  
    <div className={style.submit_btn}>
        {onSubmit && <ButtonPrimary onClick={() => onSubmit(formValues)}>Submit</ButtonPrimary>}
    </div>


    return (
        <form className={style.container}>
            <div className='row justify-content-space-between'>
                <div className='col-10'><h2 className='mb-3'>{title}</h2></div>
                {actionIcons}
            </div>
            <div className={`mb-3 ${style.title_input_container}`}> {titleInput} </div>          
            <div className='mb-3'>{contentInput}</div>
            {submitInput}
        </form>
    )
}