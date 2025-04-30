import ButtonGreen from '../components/child/buttongreen'
import Faq_content from '../components/faq/Faq_content'
import Hero from '../components/home/Hero'
import KelasTerbaru from '../components/home/KelasTerbaru'
import Testi_list from '../components/testi/Testi_list'

const Home_page = () => {
  return (
    <>
        <header className='min-h-screen '>
            <Hero />
        </header>
        <div className='flex justify-center items-center flex-col'>
        <p className='text-4xl font-bold '>Kelas Terbaru</p>
        <h1 className='text-base font-semibold py-4'>Lorem ipsum dolor sit, amet consectetur adipisicing elit.</h1>
        <div className='grid grid-cols-3 px-30 mt-30 gap-5'>
          <KelasTerbaru />  
        </div>
            <ButtonGreen />
            <Testi_list/>
            <Faq_content/>
            
        </div>
    </>
  )
}

export default Home_page