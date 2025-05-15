
export function SizItem({num, title, span, text}) {
    return (
        <>
            <li className="siz_card">
                <div className="siz_img_wrapper">
                    <div className="num">{num}</div>
                </div>
                <p className="siz_title">{title}</p>
                <p className="siz_span"><span>{span}</span></p>
                <p className="siz_card_subtitle"> {text}</p>
            </li>
        </>
    )
}
