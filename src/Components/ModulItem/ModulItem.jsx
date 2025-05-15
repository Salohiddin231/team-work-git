import React from 'react'

export default function ModulItem({ num, num2, text, title,subtitle }) {
    return (
        <>
            <li className="modul_card">
                <div className="modul_img_wrapper">
                    <div className="num">{num}</div>
                    <span className="modul_tochki">...</span>
                </div>
                <p className="modul_title">{num2}, {title}</p>
                <p className="modul_subtitle">{subtitle}</p>
                <p className="modul_text">{text}</p>
            </li>
        </>
    )
}
