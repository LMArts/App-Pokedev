import React, {FC} from 'react';
import { StatusBar, Image} from 'react-native';
import { ButtonBack, Container, Titulo, Texto, TituloArrow } from '../Themes/Styled';
import { theme } from '../Themes/Theme';
import { useNavigation } from '@react-navigation/native';

interface Props {
    title: string;
    screenBack: string
}

const HeaderArrow: FC<Props> = (props) =>{

    const navigation = useNavigation();

    const handleNavigation = () => {
        navigation.navigate(props.screenBack);
    }

    return(
        <Container>
            <StatusBar backgroundColor={theme.colors.primaryBlue} />
            <TituloArrow>
                <ButtonBack onPress={()=> handleNavigation()}>
                    <Image source={require('../Assets/arrow-left.png')} />
                </ButtonBack>
                <Texto size={'18px'} color={theme.colors.white} bold={'bold'} line={'23px'}>PokeDev</Texto>
            </TituloArrow>
            <Titulo height={'43px'} color={theme.colors.secundaryBlue}>
                <Texto size={'16px'} color={theme.colors.white} bold={'bold'} line={'24px'}>{props.title}</Texto>
            </Titulo>
        </Container>
    );
} 

export default HeaderArrow;