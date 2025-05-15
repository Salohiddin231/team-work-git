import './App.css';
import './assets/css/pro.css'
import './assets/css/siz.css'
import { Footer, Header, SizItem } from './Components';
import { ProItem } from './Components';

function App() {
  return (
    <div className="App">
      <Header />

      <main>

        {/* pro start */}
        <section className="pro">
          <div className="container">
            <div className="pro_wrapper">
              <h3 className="pro_title"><span>MEDIA BOOST PRO</span> kimlar uchun?</h3>
              <p className="pro_subtitle"><span>Instagram’da</span> nafaqat post joylash, balki savdo qilishni o‘rganmoqchimisiz? Unda bu kurs aynan siz uchun!</p>
              <ul className="pro_card_wrapper">
                <ProItem num='1' span='SMM mutaxassislari —' text='oddiy kontent emas, natija beradigan strategiyalar orqali mijozlarga haqiqiy qiymat yaratmoqchi bo‘lganlar uchun.' />
                <ProItem num='2' span='SMM mutaxassislari —' text='oddiy kontent emas, natija beradigan strategiyalar orqali mijozlarga haqiqiy qiymat yaratmoqchi bo‘lganlar uchun.' />
                <ProItem num='3' span='Yangi boshlayotganlar — ' text='Instagram olamiga endi kirayotgan, qanday boshlashni bilmayotgan, lekin o‘rganib pul ishlamoqchi bo‘lganlar uchun.' />
                <ProItem num='4' span='Shaxsiy brend yaratmoqchi bo‘lganlar —' text='o‘z ismi bilan tanilish, auditoriya yig‘ish va kuchli ishonch shakllantirishni xohlovchilar uchun.' />
                <ProItem num='4' span='Bloger bo‘lmagan, mahsulotini internetda sotmoqchi bo‘lganlar — ' text='yuzini ko‘rsatmasdan blog yuritish, va savdo qilishni o‘rganmoqchilar uchun.' />
              </ul>
            </div>
          </div>
        </section>
        {/* pro end */}

        {/* siz start */}
        <section className="siz">
          <div className="container">
            <div className="siz_wrapper">
              <h3 className="siz_title">Sizda shunday <span>muammolar</span> bormi?</h3>

              <ul className="siz_card_wrapper">
                <SizItem num='?' title='Instagram yuritishni xohlaysiz, lekin qayerdan boshlashni bilmaysizmi?' span='Biz nima qilamiz ?' text='Sizga aniq va samarali kontent strategiyani beramiz. 4 kunlik mini-reja bilan 1-haftadanoq natija ko‘rasiz.' />
                <SizItem num='?' title='Video va postlar tayyorlaysiz, lekin hech kim e’tibor bermayaptimi?' span='Biz nima qilamiz ?' text='Sotuvchi kontent ssenariylarini o‘rgatamiz. Postni ochgan odam aynan sizning mahsulotingizni xohlab qoladi.' />
                <SizItem num='?' title='Profilingizga kirgan odamlar chiqib ketmoqda, ishonchsiz ko‘rinayapsizmi?' span='Biz nima qilamiz ?' text='Instagram profilingizni professional darajada qadoqlaymiz. Bio, profil rasmi, highlights — hammasi sizni ekspert sifatida ko‘rsatadi.' />
                <SizItem num='?' title='Kamera oldida gapira olmaysiz, o‘zingizga ishonchingiz yo‘qmi?' span='Biz nima qilamiz ?' text='Oddiy, hayotiy ssenariylar orqali sizni kamera oldida erkin va tabiiy gapiradigan darajagacha olib chiqamiz.' />
                <SizItem num='?' title='Kurslar o‘qigansiz, lekin baribir savdo qilolmayapsizmi?' span='Biz nima qilamiz ?' text='Kurs davomida sizga real topshiriqlar beramiz, feedback’lar va qo‘shimcha Zoom darslar bilan haqiqiy natijaga olib chiqamiz.' />
                <SizItem num='?' title='Sizda mahsulot bor, lekin uni qanday sotishni bilmaysizmi?' span='Biz nima qilamiz ?' text='Siz uchun ishlaydigan mini-launch strategiyasini o‘rgatamiz. 5 kunlik kontent orqali mahsulotingizni sotishga olib chiqamiz.' />

              </ul>
            </div>
          </div>
        </section>
        {/* siz end */}

      </main>

      <Footer />
    </div>
  );
}

export default App;
