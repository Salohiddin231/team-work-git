
export function KursItem({ img, text_2, span, text, subtitle }) {
    return (
        <>
            <li className="kurs_card">
                <div className="kurs_num">
                    <img src={img} alt="img" />
                </div>
                <p className="kurs_card_title">{text_2} <span>{span}</span> {text}</p>
                <p className="kurs_subtitle">{subtitle}</p>
            </li>
        </>
    )
}
