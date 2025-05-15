
export function SizItem({ num, title, span, text, nom }) {
    return (
        <>
            <li className="siz_card">
                <div className="siz_img_wrapper">
                    <div className={nom}>{num}</div>
                </div>
                <p className="siz_title">{title}</p>
                <p className="siz_span"><span>{span}</span></p>
                <p className="siz_card_subtitle"> {text}</p>
            </li>
        </>
    )
}
