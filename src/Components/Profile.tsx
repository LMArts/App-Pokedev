import React, { FC, useEffect, useState } from 'react';
import {View} from 'react-native';
import axios from 'axios';
import Name from './Name';
import Loading from './Loading';
import Abilities from './Abilities';
import Moves from './Moves';

interface Props {
    url: string;
}

const Profile: FC<Props> = (props) => {

    const [habilidade, setHabilidade] = useState(null);
    const [movimento, setMovimento] = useState(null);
    const [especie, setEspecie] = useState(null);
    const [sprite, setSprite] = useState(null);
    const [isLoading, setLoading] = useState(true);

    useEffect(() => {
        axios.get(`${props.url}`)
            .then((data) => { 
                setHabilidade(data.data.abilities),
                setMovimento(data.data.moves), 
                setEspecie(data.data.species.name), 
                setSprite(data.data.sprites.front_default) 
            })
            .catch(() => alert('Houve um erro!'))
            .finally(() => setLoading(false));
    }, []);

    return (
        <>
            {
                isLoading ? 
                <Loading /> : 
                <View style={{flex: 1, width: '100%', alignItems: 'center'}}>
                    <Name sprite={sprite} name={especie} />
                    <Abilities data={habilidade} />
                    <Moves data={movimento} />
                </View>
            }
        </>
    );
}

export default Profile;