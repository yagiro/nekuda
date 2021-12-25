export default function MainText(props) {

    const {
        completedText,
        nextChar,
        textAfterNextChar,
    } = props

    return (
        <div className="main-text" tabIndex={ 0 }>
            <span className="completed-text">{ completedText }</span>
            <span className="next-char">{ nextChar }</span>
            <span className="text-after-next-char">{ textAfterNextChar }</span>
        </div>
    )
}