import './App.css';
import './assets/css/pro.css';
import './assets/css/siz.css';
import './assets/css/kurs.css'
import './assets/css/modul.css'
import { Footer, Header, KursItem, SizItem } from './Components';
import { ProItem } from './Components';
import bg from './assets/images/kurs_bg.png'
import galery from './assets/icons/gurnal.svg'
import kalam from './assets/icons/kalam.svg'
import reiting from './assets/icons/reiting.svg'
import gift from './assets/icons/gift.svg'
import ModulItem from './Components/ModulItem/ModulItem';

function App() {
  return (
    <div className="App">
      <Header />

      <main>
        {/* pro start */}
        <section className="pro">
          <div className="container">
            <div className="pro_wrapper">
              <h3 className="pro_title">
                <span>MEDIA BOOST PRO</span> kimlar uchun?
              </h3>
              <p className="pro_subtitle">
                <span>Instagram’da</span> nafaqat post joylash, balki savdo qilishni o‘rganmoqchimisiz? Unda bu kurs aynan siz uchun!
              </p>
              <ul className="pro_card_wrapper">
                <ProItem
                  num="1"
                  span="SMM mutaxassislari —"
                  text="oddiy kontent emas, natija beradigan strategiyalar orqali mijozlarga haqiqiy qiymat yaratmoqchi bo‘lganlar uchun."
                />
                <ProItem
                  num="2"
                  span="SMM mutaxassislari —"
                  text="oddiy kontent emas, natija beradigan strategiyalar orqali mijozlarga haqiqiy qiymat yaratmoqchi bo‘lganlar uchun."
                />
                <ProItem
                  num="3"
                  span="Yangi boshlayotganlar — "
                  text="Instagram olamiga endi kirayotgan, qanday boshlashni bilmayotgan, lekin o‘rganib pul ishlamoqchi bo‘lganlar uchun."
                />
                <ProItem
                  num="4"
                  span="Shaxsiy brend yaratmoqchi bo‘lganlar —"
                  text="o‘z ismi bilan tanilish, auditoriya yig‘ish va kuchli ishonch shakllantirishni xohlovchilar uchun."
                />
                <ProItem
                  num="5"
                  span="Bloger bo‘lmagan, mahsulotini internetda sotmoqchi bo‘lganlar — "
                  text="yuzini ko‘rsatmasdan blog yuritish, va savdo qilishni o‘rganmoqchilar uchun."
                />
              </ul>
            </div>
          </div>
        </section>
        {/* pro end */}

        <div className="flex">
          <div className="container">
            <ul className="flex_wrapper">
              <SizItem nom="elma" num="" title="O’zbekistondagi yirik elektronika savdo do’konlari bilan hamkorlikda!" span="Mahsulotlarni Uzum market, Zoodmall va shu kabi marketplacelarda savdosini yo’lga qo’yishda hamkorlik qilgan!" text="" />
              <SizItem nom="wb" num="" title="Wildberries da savdo va Boshqalarni Ham savdo qilishga o’rgatib kelmoqda!" span="2023-2025 (Davom etmoqda) 300+ o’quvchi" text="" />
              <SizItem nom="active_icon" num="" title="Marketplacelar bo’yicha Treninglar va Online darslar yo’lga qo’ygan!" span="700+ Eshituvchilar soni 50 000$ + Online orqali savdo 2023-2025 (Davom etmoqda)" text="" />
            </ul>
          </div>
        </div>
        {/* siz start */}
        <section className="siz">
          <div className="container">
            <div className="siz_wrapper">
              <h3 className="siz_glavni_title">
                Sizda shunday <span>muammolar</span> bormi?
              </h3>

              <div className="siz_card_wrapper">
                <SizItem nom="num" num="?" title="Instagram yuritishni xohlaysiz, lekin qayerdan boshlashni bilmaysizmi?" span="Biz nima qilamiz ?" text="Sizga aniq va samarali kontent strategiyani beramiz. 4 kunlik mini-reja bilan 1-haftadanoq natija ko‘rasiz." />
                <SizItem nom="num" num="?" title="Video va postlar tayyorlaysiz, lekin hech kim e’tibor bermayaptimi?" span="Biz nima qilamiz ?" text="Sotuvchi kontent ssenariylarini o‘rgatamiz. Postni ochgan odam aynan sizning mahsulotingizni xohlab qoladi." />
                <SizItem nom="num" num="?" title="Profilingizga kirgan odamlar chiqib ketmoqda, ishonchsiz ko‘rinayapsizmi?" span="Biz nima qilamiz ?" text="Instagram profilingizni professional darajada qadoqlaymiz. Bio, profil rasmi, highlights — hammasi sizni ekspert sifatida ko‘rsatadi." />
                <SizItem nom="num" num="?" title="Kamera oldida gapira olmaysiz, o‘zingizga ishonchingiz yo‘qmi?" span="Biz nima qilamiz ?" text="Oddiy, hayotiy ssenariylar orqali sizni kamera oldida erkin va tabiiy gapiradigan darajagacha olib chiqamiz." />
                <SizItem nom="num" num="?" title="Kurslar o‘qigansiz, lekin baribir savdo qilolmayapsizmi?" span="Biz nima qilamiz ?" text="Kurs davomida sizga real topshiriqlar beramiz, feedback’lar va qo‘shimcha Zoom darslar bilan haqiqiy natijaga olib chiqamiz." />
                <SizItem nom="num" num="?" title="Sizda mahsulot bor, lekin uni qanday sotishni bilmaysizmi?" span="Biz nima qilamiz ?" text="Siz uchun ishlaydigan mini-launch strategiyasini o‘rgatamiz. 5 kunlik kontent orqali mahsulotingizni sotishga olib chiqamiz." />
              </div>
            </div>
          </div>
        </section>
        {/* siz end */}

        {/* kurs start */}
        <section className="kurs">
          <div className="container">
            <div className="kurs_wrapper">
              <div className="kurs_text_wrapper">
                <h4 className="kurs_title">MEDIA BOOST PRO</h4>
                <p className="kurs_text"><span>Kurs</span> formati</p>
              </div>
              <div className="kurs_left_right">
                <div className="kurs_left">
                  <img className='kurs_img' src={bg} alt="bg" />
                </div>
                <div className="kurs_right">
                  <KursItem img={galery} text_2='1.' span=' 25' text=' + Videodarslar' subtitle='7 ta modul, 25 dan oshiq 7-10 daqiqalik aniq, qisqa, lekin chuqur tushuntirilgan videodarsliklar.' />
                  <KursItem img={reiting} text_2='2.' span='Kurator' text=' nazorati' subtitle='Har bir darsdan keyin amaliy vazifalar beriladi va buni bajarishda Kurator sizga yordam berib boradi.' />
                  <KursItem img={kalam} text_2='3.' span='Zoom' text=' Darslar' subtitle='(1-ta boshlanishida, 1-ta savdo moduli oxirida, 1-ta yakuniy natija bo‘yicha).' />
                  <KursItem img={gift} text_2='4.' span='Bonus ' text='materiallar' subtitle='Video syomkasi va montaj qilish uchun juda ko’p foydali materiallar. Shablonlar va Chek listlar.' />
                </div>
              </div>
            </div>
          </div>
        </section>
        {/* kurs end */}

        {/* modul start */}
        <section className="modul">
          <div className="container">
            <div className="modul_wrapper">

              <h5 className="modul_title"><span>Kurs</span> modullari</h5>
              <ul className='modul_card_wrapper'>
                <ModulItem num='1' num2='1' title='Modul' subtitle='Instagram orqali pul ishlashning formulasi!' text='O‘z mijozingni topish uchun “Tez Avatar Metodi” Ishonchli va kerakli mijozlarni jalb qilish' />
                <ModulItem num='2' num2='2' title='Modul' subtitle='Bir kunda auditoriya aniqlash!' text='4 kunlik kontent yo‘li: Qanday qilib 1 haftada mijoz chiqara oladi? Reels + Story + 1 ta post = Mikrovoronka' />
                <ModulItem num='3' num2='3' title='Modul' subtitle='Tez natija beradigan kontent rejasi!' text='3 ta ishonch uyg‘otuvchi ssenariy.' />
                <ModulItem num='4' num2='4' title='Modul' subtitle='Kamera oldida o‘zingni sot!' text='O‘zingni ekspert sifatida ko‘rsatish: tana, ovoz, ko‘z aloqa.' />
                <ModulItem num='5' num2='5' title='Modul' subtitle='Instagram’dagi pulli postlar sirasi!' text='Reels bilan trafik olish, CTA bilan ishlash: nima deyish kerak? “Sotuvchi post” formulasini yozish' />
                <ModulItem num='6' num2='6' title='Modul' subtitle='Profilni million dollarlik qadoqlash!' text='Profil bio, vizual ko‘rinish, Highlights — 1 kunda tartibga keltirish. Profilingda “ishonch signal”lari!' />
                <ModulItem num='7' num2='7' title='Modul' subtitle='Savdoga chiqarish strategiyasi!' text={`Mini launch: 5 kunlik kontent orqali kurs yoki mahsulot sotish. Savdodan oldingi “issiq postlar” tayyorlash.`} />
              </ul>
            </div>
          </div>
        </section>
        {/* modul end */}

      </main>

      <Footer />
    </div>
  );
}

export default App;
