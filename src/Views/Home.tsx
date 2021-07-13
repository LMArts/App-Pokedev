import React, {FC} from 'react';
import List from '../Components/List';
import Header from '../Components/Header';

const Home: FC = () => {

    return (
        <>
            <Header title="Lista de Pokémons"/>
            <List/>
        </>
    );
}

export default Home;
