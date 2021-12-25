import useNextCharHighlight from './useNextCharHighlight'

export default function MainText(props) {

    const {
        completedText,
        nextChar,
        textAfterNextChar,
    } = props

    const nextCharClass = useNextCharHighlight()

    return (
        <div className="main-text" tabIndex={ 0 }>
            <span className="completed-text">{ completedText }</span>
            <span className={ nextCharClass }>{ nextChar }</span>
            <span className="text-after-next-char">{ textAfterNextChar }</span>
        </div>
    )
}