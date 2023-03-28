import { ButtonPrimary } from 'components/ButtonPrimary/ButtonPrimary'
import { FieldError } from 'components/FiledError/FieldError'
import { useState } from 'react'
import { PencilFill, TrashFill } from 'react-bootstrap-icons'
import { ValidatorService } from 'services/form-validators'
import style from './style.module.css'

const VALIDATORS  = {
    title : (value) => {
        return ValidatorService.min(value,3) || ValidatorService.max(value,20)
    },
    content : (value) => {
        return ValidatorService.min(value,3)
    }
}

export function NoteForm({isEditable=true, note,title, onClickEdit, onClickTrash, onSubmit}){
    const [formErrors, setFormErrors] = useState({title: note?.title ? undefined : "", content:note?.content ? undefined : ""})
    const [formValues, setFormValues] = useState({title:note?.title || "", content:note?.content || "z"})

    function updateFormValues(e) {
        setFormValues({...formValues, [e.target.name] : e.target.value})
        validate(e.target.name, e.target.value)
    }

    function validate(filedName, filedValue){
        setFormErrors({...formErrors, [filedName]:VALIDATORS[filedName](filedValue)})
    }

    function hasError(){
        return Object.values(formErrors).some(error => error !== undefined)
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
    <div className='mb-5'>
        <label className='form-label'>Title</label>
        <input value={formValues.title} onChange={updateFormValues} type="text" name='title' className='form-control' />
        <FieldError msg={formErrors.title}/>
    </div>

    const contentInput =  
    <div className='mb-5'>
        <label className='form-label'>Content</label>
        <textarea value={formValues.content} onChange={updateFormValues} type="text" name='content' className='form-control' rows="5"/>
        <FieldError msg={formErrors.content}/>
    </div>

    const submitInput =  
    <div className={style.submit_btn}>
        {onSubmit && <ButtonPrimary isDisabled={hasError()} onClick={() => onSubmit(formValues)}>Submit</ButtonPrimary>}
    </div>


    return (
        <form className={style.container}>
            <div className='row justify-content-space-between'>
                <div className='col-10'><h2 className='mb-3'>{title}</h2></div>
                {actionIcons}
            </div>
            <div className={`mb-3 ${style.title_input_container}`}> {isEditable && titleInput} </div>          
            <div className='mb-3'>{isEditable ? contentInput : <pre>{note.content}</pre>}</div>
            {submitInput}
        </form>
    )
}