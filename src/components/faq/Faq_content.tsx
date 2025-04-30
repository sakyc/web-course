import Dropdown from '../child/dropdown'

const Faq_content = () => {
  return (
    <div className='pt-40 w-full px-20 pb-20'>
      <p className='font-bold text-4xl text-center mb-10'>Pertanyaan yang sering ditanyakan</p>
      <div className='grid grid-cols-2 gap-5'>
          <Dropdown />  
      </div>
    </div>
  )
}

export default Faq_content