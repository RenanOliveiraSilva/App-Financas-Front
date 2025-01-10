import React from 'react'
import Toast, { BaseToast, ErrorToast } from 'react-native-toast-message';

import { s } from "./styles";

// Definindo configurações personalizadas para o Toast
const toastConfig = {
    success: (props: any) => (
        <BaseToast
            {...props}
            style={ s.successToast }
            text1Style={ s.successText }
        />
    ),
    error: (props: any) => (
        <ErrorToast
            {...props}
            style={ s.errorToast }
            text1Style={ s.errorText }
        />
    ),
    warning: (props: any) => (
        <BaseToast
            {...props}
            style={ s.warningToast }
            text1Style={ s.warningText }
        />
    ),
    info: (props: any) => (
        <BaseToast
            {...props}
            style={ s.infoToast }
            text1Style={ s.infoText }
        />
    ),
};

// Componente centralizado para Toast
const ToastComponent = () => {
    return <Toast config={toastConfig} />;
};

export default ToastComponent;