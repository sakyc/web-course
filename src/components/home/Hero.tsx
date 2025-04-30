import ButtonDefault from '../child/Button_default'
import ButtonBorder from '../child/button_border'
import heroImg from '/img/hero.png'
const Hero = () => {
  
  return (
    <div className='flex flex-row py-20 justify-between px-30  min-h-screen items-center'>
        <div className='w-1/2'>
            <p 
            className='text-6xl text-text-color font-bold animate__animated animate__fadeInUp'
            style={{ animationDelay: "1s" }}
            >Temukan <br /> Bakat Kreatifmu Bersama Kami!</p>

            <h1 
            className='font-semibold text-xl my-6  animate__animated animate__fadeInUp' 
            style={{ animationDelay: "1.5s" }}
            >Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque fugit aperiam iste repellendus ducimus nam!
            </h1>

            <div 
            className='animate__animated animate__fadeInUp flex flex-row gap-2'
            style={{ animationDelay: "2s" }}
            >
              <ButtonDefault
              SizeButton='lg' 
              button={{name:"Lihat Kelas", link:"/kelas"}} bgactive={true}
              />
              <ButtonBorder SizeButton='lg' button={{name:"Lihat Promo", link:"/promo"}} />
            </div>
        </div>
        <img    
        src={heroImg} 
        alt="" 
        className='w-1/2 bg animate__animated animate__fadeInUp animate__duration-2s' 
        
        />
    </div>
  )
}

export default Hero