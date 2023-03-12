import Input from 'components/Input'
import { Body1, H4 } from 'components/Typography'
import Style from './style'
interface IProps {
    label: string,
    value: string,
    onChange: (e: React.ChangeEvent<HTMLInputElement>) => void,
    name?: string,
    error?: string,
    fullWidth?: boolean,
    margin?: string,
    className?: string,
    type?: string
}

const InputGroup = ({ label, type, value, name, error, fullWidth, margin, className = "", onChange }: IProps) => {
    return (
        <Style className={className} margin={margin} fullWidth={fullWidth}>
            <H4
                weight={500}
                color='primary/200'
                margin='0 0 5px'
            >{label}</H4>
            <Input
                type={type || "text"}
                fullWidth={fullWidth}
                hasError={Boolean(error)}
                value={value}
                onChange={onChange}
                name={name}
                placeholder={label.toLocaleLowerCase()}
            />
            {error && <Body1
                color="danger"
                weight={500}
                margin='5px 5px 0'
                className='error'>{error}</Body1>}
        </Style>
    )
}

export default InputGroup