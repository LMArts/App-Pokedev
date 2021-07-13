import React, { FC } from 'react';
import { Image } from 'react-native';
import { Button, ContainerList, Texto} from '../Themes/Styled';
import { useNavigation } from '@react-navigation/native';
import { theme } from '../Themes/Theme';


interface Props {
    text: string;
    url: string;
    screen: string;
}

const ListButton: FC<Props> = (props) => {

    const navigation = useNavigation();

    const handleNavigation = () => {
        navigation.navigate(props.screen, {url: props.url});
    }

    return (
        <ContainerList>
            <Button activeOpacity={0.7} onPress={()=> handleNavigation()}>
                <Texto size={'16px'} bold={'bold'} color={theme.colors.gray} line={'23px'}>{props.text}</Texto>
                <Image resizeMode='cover' source={require('../Assets/arrow-right.png')} />
            </Button>
        </ContainerList>
        
    );
}

export default ListButton;