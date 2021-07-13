import React, { FC } from 'react';
import { FlatList} from 'react-native';
import { List } from '../Themes/Styled';
import ListButton from './ListButton';

interface Data {
    name: string,
    url: string
}

interface Props {
    data: Data[]; 
}

const Iterator: FC<Props> = (props) => {
    return (
        <List>
            <FlatList
                data={props.data}
                keyExtractor={(item, index) => index.toString()}
                renderItem={({ item, index }) => (
                    <ListButton screen={'Details'} text={item.name} url={item.url} />
                )}
            />
        </List>
    );
}

export default Iterator;