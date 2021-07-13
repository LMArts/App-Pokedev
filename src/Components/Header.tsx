import React, {FC} from 'react';
import { StatusBar } from 'react-native';
import { Container, Titulo, Texto} from '../Themes/Styled';
import { theme } from '../Themes/Theme';

interface Props {
    title: string;
}

const Header: FC<Props> = (props) =>{
    return(
        <Container>
            <StatusBar backgroundColor={theme.colors.primaryBlue} />
            <Titulo height={'58px'} color={theme.colors.primaryBlue}>
                <Texto size={'18px'} color={theme.colors.white} bold={'bold'} line={'23px'}>PokeDev</Texto>
            </Titulo>
            <Titulo height={'43px'} color={theme.colors.secundaryBlue}>
                <Texto size={'16px'} color={theme.colors.white} bold={'bold'} line={'24px'}>{props.title}</Texto>
            </Titulo>
        </Container>
    );
} 

export default Header;