import Text_head from '../components/child/head_text'
import Faq_content from '../components/faq/Faq_content'
import Card_Kelas from '../components/kelas/Card_Kelas'

const Kelas_page = () => {
  return (
    <div className=' flex flex-col justify-center items-center pt-40'>
        <Text_head 
        name='Kelas Terbaru'
        dest='Lorem ipsum dolor sit, amet consectetur adipisicing elit.'
        />
        <div className='grid grid-cols-3 gap-5 px-30 mt-20'>
          <Card_Kelas />
        </div>
        <Faq_content/>
    </div>
  )
}

export default Kelas_page