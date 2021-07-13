import React, { FC} from 'react';
import { View } from 'react-native';
import { Container, Imagem, Texto } from '../Themes/Styled';
import { theme } from '../Themes/Theme';

interface Props {
    sprite: string;
    name: string;
}

const Name: FC<Props> = (props) => {

    return (
        <View style={{ width: '90%', flex: 1, marginVertical: 30, flexDirection: 'row' }}>
            <View style={{ width: '35%' }}>
                <Imagem source={{ uri: `${props.sprite}` }} />
            </View>
            <View style={{ width: '65%', paddingVertical: 5 }}>
                <Texto size={'12px'} color={theme.colors.gray} bold={'100'} line={'15px'}>Nome:</Texto>
                <Texto size={'24px'} color={theme.colors.black} bold={'bold'} line={'40px'}>{props.name}</Texto>
            </View>
        </View>
    );
}

export default Name;