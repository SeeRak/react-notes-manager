import { NoteAPI } from 'api/note-api';
import { NoteForm } from 'components/NoteForm/NoteForm';
import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate, useParams, useSearchParams } from 'react-router-dom'
import { deleteNote, updateNote } from 'store/note/note-slice';
import style from './style.module.css'

export function Note(){
    const { noteId } = useParams();
    const [ searchParams ] = useSearchParams();
    const note = useSelector(store => store.NOTE.noteList.find(note => note.id === noteId))
    const [isEditable, setIsEditable] = useState(false)
    const dispatch = useDispatch()
    const navigate = useNavigate();
    async function submit(formValues){
        const updatedNote = await NoteAPI.update({...formValues, id: note.id})
        dispatch(updateNote(updatedNote))
        setIsEditable(false)
    }
    function deleteNote_(note){
        if(window.confirm("supprimer la note ?")){
            NoteAPI.deleteById(note.id);
            dispatch(deleteNote(note))
            navigate("/")
        }        
    }
    return (
        <>
          {note && <NoteForm onSubmit={isEditable && submit} isEditable={isEditable} title={isEditable ? "Edit Note" : note.title} note={note} onClickEdit={() => setIsEditable(!isEditable)} onClickTrash={() => deleteNote_(note)}/> }  
        </>
    )
}