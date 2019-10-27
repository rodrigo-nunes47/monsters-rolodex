import React from 'react';
import { Card } from '../card/card.component';
import './card-list.styles.css';

//props are the parameters we get from our functional components
export const CardList = props => (
    <div className='card-list'>
        {
            props.monsters.map(monster => (<Card key={monster.id} monster={ monster } />))
        }
    </div>);