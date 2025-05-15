
export function ProItem({ num, span, text }) {
    return (
        <>
            <li className="pro_card">
                <div className="pro_img_wrapper">
                    <div className="num">{num}</div>
                    <span className="pro_tochki">...</span>
                </div>
                <p className="pro_card_subtitle"><span>{span}</span> {text}</p>
            </li>
        </>
    )
}
