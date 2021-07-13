import React, { FC } from 'react';
import {ActivityIndicator } from 'react-native';
import { LoadingContainer } from '../Themes/Styled';
import { theme } from '../Themes/Theme';

const Loading: FC = () => {
    return (
        <LoadingContainer>
            <ActivityIndicator size="large" color={theme.colors.secundaryBlue} />
        </LoadingContainer>
    );
}

export default Loading;