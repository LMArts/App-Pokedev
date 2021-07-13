import React, { FC, useEffect, useState } from 'react';
import axios from 'axios';
import Config from '../Services/Config.json';
import Loading from './Loading';
import Iterator from './Iterator';

const List: FC = () => {

    const [poke, setPoke] = useState(null);
    const [isLoading, setLoading] = useState(true);

    useEffect(() => {
        axios.get(Config.url + `?limit=${20}`)
            .then((data) => { setPoke(data.data.results) })
            .catch(() => alert('Houve um erro!'))
            .finally(() => setLoading(false));
    }, []);

    return (
        <>
            {
                isLoading ? <Loading /> : <Iterator data={poke} />
            }
        </>
    );
}

export default List;