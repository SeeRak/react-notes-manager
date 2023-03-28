import { NoteAPI } from 'api/note-api'
import { TextCard } from 'components/TextCard/TextCard'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { deleteNote } from 'store/note/note-slice'
import style from './style.module.css'

export function NoteList({noteList}){
    const navigate = useNavigate();
    const dispatch = useDispatch();

    function deleteNote_(note){
        if(window.confirm("supprimer la note ?")){
            NoteAPI.deleteById(note.id);
            dispatch(deleteNote(note))
        }        
    }
    return (
       <div className={`row justify-content-center`}>
        {
            noteList.map((note) => {
                return (
                    <div key={note.id} className={style.card_container}>
                        <TextCard title={note.title} subtitle={note.subtitle} content={note.content} onClick={() => navigate("/note/"+note.id)} onClickTrash={() => deleteNote_(note)}/>
                    </div>
                )
            })
        }
        </div> 
    )
}