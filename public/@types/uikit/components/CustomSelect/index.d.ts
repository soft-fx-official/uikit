/// <reference types="react" />
interface CustomSelectProps {
    data: any;
    options: Array<any>;
    onChange: Function;
    variant: 'standard' | 'outlined' | 'filled';
    optionTemplate: (props: any) => any;
    label: string;
    placeholder: string;
    inputProps: (props: any) => object;
    name: string;
    modalProps: {
        style?: object;
        placeholder: string;
        title: string;
    };
}
declare const CustomSelect: ({ data, options, onChange, variant, optionTemplate, label, name, placeholder, inputProps, modalProps, }: CustomSelectProps) => JSX.Element;
export default CustomSelect;
