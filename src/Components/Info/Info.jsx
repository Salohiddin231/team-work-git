
export function Info({ num, text1, text2, text3 }) {
  return (
    <>
      <div className="info_group">
        <h3 className="info_num">{num}</h3>
        <p className="info_text">{text1} <span>{text2}</span> {text3}</p>
      </div>
    </>
  )
}
