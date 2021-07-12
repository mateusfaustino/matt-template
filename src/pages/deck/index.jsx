import styled from "styled-components"
import { Fab } from '@material-ui/core';
import {MdAdd} from 'react-icons/md'
import { database} from '../../services/firebase'
import Button from '../../components/styleguide/molecules/buttons' 
import { useParams } from "react-router";
import { Link } from "react-router-dom";
import { Showcase } from "../../components/this-project/showcase/showcase";
import React,{useEffect, useState} from "react";
import { ShowcaseItem as Item } from "../../components/this-project/showcase/item";
import Spacing from '../../components/styleguide/atoms/spacing';
const spacing = new Spacing(7,'16px','10vw')   
const Container = styled.div`
    display:flex;
    flex-direction:column;
    align-items:center;
    height:100vh;
    margin-top: 48px;
    a.study{
        margin:0 ${spacing.margin} 40px ${spacing.margin};
        width:${spacing.container};
        button{
            width:100%;

        }
    } 
    a.add{
        position:fixed;
        right:${spacing.margin};
        bottom:32px;
    }
`

export const Deck = ()=>{
    const [documents, setDocuments] = useState([]);
    const [deckName, setDeckName] = useState('');
    let { id } = useParams();
    useEffect(() => {
        database.collection(`deck/${id}/cards`).orderBy('word').get().then((snapshot)=>{
            let arr = []
            snapshot.docs.map((doc) =>{
                arr.push({ 
                    id: doc.id,
                    word: doc.data().word,
                    scores: doc.data().score
                })
            });
            setDocuments(arr)
        })
        database.collection(`deck`).get().then((snapshot)=>{
            snapshot.docs.map((doc) =>{
                if(doc.id==id)
                    setDeckName(doc.data().name) 
            });
        })
    }, [database])
    return(
        <Container >
            <h1>
                {deckName}
            </h1>
            <Link className='study' to={`/study/${id}`}>
                <Button color='secondary'>Study deck</Button>
            </Link>

            <Showcase>
            {
                documents.map((document)=>{
                    return(
                        <Item
                            title={document.word}
                            scores={document.scores}
                        />
                            
                    )
                })
            }
            </Showcase>

            <Link to={`/new-card/${id}`} className='add'>
                <Fab color="primary" aria-label="add">
                    <MdAdd />
                </Fab>
            </Link>
        </Container>
            

    )
}
     
