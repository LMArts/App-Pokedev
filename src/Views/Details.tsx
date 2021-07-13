import React, {FC} from 'react';
import {RouteProp} from '@react-navigation/native';
import HeaderArrow from '../Components/HeaderArrow';
import Profile from '../Components/Profile';

type RootStackParamList = {
    Details: {url: string}
}

type Params = {
    route: RouteProp<RootStackParamList, 'Details'>;
}

const Details: FC<Params> = ({route}) => {

    return (
        <>
            <HeaderArrow screenBack="Home" title="Detalhes do Pokémon"/>
            <Profile url={route.params.url}/>
        </>
    );
}
export default Details;
