import React, { FC} from 'react';
import { Text, View, ScrollView } from 'react-native';
import { Texto } from '../Themes/Styled';
import { theme } from '../Themes/Theme';

interface Props {
    data: [];
}

const Abilities: FC<Props> = (props) => {

    return (
        <View style={{ width: '90%', flex: 1, marginVertical: 10 }}>
            <Texto size={'12px'} color={theme.colors.gray} line={'30px'} bold={'100'} >Habilidades:</Texto>
            <ScrollView style={{ width: '100%' }} contentContainerStyle={{ flexDirection: 'row', flexWrap: 'wrap' }}>
                {props.data.map((item, index) =>
                    <Texto size={'16px'} color={theme.colors.black} bold={'bold'} line={'15px'} key={index}>{item.ability.name}   </Texto>
                )}
            </ScrollView>
        </View>
    );
}

export default Abilities;