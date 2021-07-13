import React, { FC} from 'react';
import { Text, View, ScrollView } from 'react-native';
import { TextMoves, Texto } from '../Themes/Styled';
import { theme } from '../Themes/Theme';

interface Props {
    data: [];
}

const Moves: FC<Props> = (props) => {

    return (
        <View style={{ width: '90%', flex: 4, marginBottom: 10 }}>
            <Texto size={'12px'} color={theme.colors.gray} bold={'100'} line={'40px'}>Movimentos:</Texto>
            <ScrollView style={{ width: '100%' }} contentContainerStyle={{ flexDirection: 'row', flexWrap: 'wrap' }}>
                {props.data.map((item, index) =>
                    <TextMoves key={index}>{item.move.name}</TextMoves>
                )}
            </ScrollView>
        </View>
    );
}

export default Moves;