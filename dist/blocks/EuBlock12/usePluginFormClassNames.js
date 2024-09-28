import { useInputStyles } from "./components";
export var usePluginFormClassNames = function (prop) {
    var inputClasses = useInputStyles(prop);
    var classNames = {
        textField: {
            inputContainer: inputClasses.inputContainer,
            input: inputClasses.textField,
        },
        textArea: {
            input: inputClasses.input,
        },
        selectInput: {
            container: inputClasses.selectContainer,
            control: inputClasses.selectInput,
        },
        radioButtonInput: {
            legend: inputClasses.legend,
            fieldset: inputClasses.checkBoxOrRadioInput,
            radioButtonInput: inputClasses.radioButton,
            label: inputClasses.radioLabel,
            optionContainer: "option container",
            errorMessage: "error message",
            input: inputClasses.radioInput,
        },
        checkBoxInput: {
            label: inputClasses.radioLabel,
            legend: inputClasses.legend,
            input: inputClasses.checkboxInput,
            errorMessage: "",
            fieldset: "",
            optionContainer: "",
            checkboxInput: "",
        },
        ratingInput: {
            rating: inputClasses.rating,
            label: inputClasses.ratingLabel,
        },
        opinionScale: {
            containedBox: inputClasses.opinionScale,
            label: inputClasses.ratingLabel,
            boxText: inputClasses.opinionScaleText,
        },
        imageUpload: {
            container: inputClasses.uploadImageContainer,
        },
    };
    return { classNames: classNames };
};
