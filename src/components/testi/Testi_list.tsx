import Text_head from '../child/head_text'
import Card_testi from './card_testi'

const testi_list = () => {
  return (
    <div className=' flex flex-col justify-center items-center pt-40'>
        <Text_head 
        name='Testimoni'
        dest='Lorem ipsum dolor sit, amet consectetur adipisicing elit.'
        />
        <div className='grid grid-cols-3 gap-5 px-30 mt-20'>
            <Card_testi />
        </div>
    </div>
  )
}

export default testi_list