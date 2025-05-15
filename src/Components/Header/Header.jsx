import './header.css'
import tel from '../../assets/icons/tel.svg'

export function Header() {
  return (
    <header className='header'>
      <div className="container">
        <div className="header_wrapper">
          <h1 className="header_logo_title">Active <span>Media</span></h1>
          <p className="header_subtitle">Sakhib Akhmatov - <span>online</span> va <span>offline</span> kurslar!</p>
          <button className="header_btn">
            <img src={tel} alt="" />
            0555 996 966
          </button>
        </div>
      </div>
    </header>
  )
}
