import TextInput from './TextInput'

export default function LabeledTextInput(props) {

    const { label, ...otherProps } = props

    return (
        <div className="flex-col">
            <div>{ label }</div>
            <TextInput placeholder={ label } { ...otherProps } />
        </div>
    )
}
