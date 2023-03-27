import { applyMiddleware } from '@reduxjs/toolkit'
import { TextCard } from 'components/TextCard/TextCard'
import { NoteList } from 'container/NoteList/NoteList'
import style from './style.module.css'

export function NoteBrowse(){
    return (
        <>
            <NoteList/>
        </>
    )
}