import { useState } from "react";


export const useForm = (ValorInicialFormulario = {}) => {

    const [formState, setFormState] = useState(ValorInicialFormulario);

    const onInputChange = ({ target }) => {
        const { name, value } = target;
        setFormState({
            ...formState,
            [name]: value
        });
    };

    const onResetForm = () => {
        setFormState(ValorInicialFormulario)
    }

    return {
        ...formState,
        formState,
        onInputChange,
        onResetForm
    }
}
