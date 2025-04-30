type head_text = {
    name: string
    dest: string
}
const Text_head = ({name, dest}: head_text) => {
  return (
    <div className="flex flex-col justify-center items-center ">
        <p className='text-4xl font-bold animate__animated animate__fadeInUp'>{name}</p>
        <h1 className='text-base font-semibold py-4 animate__animated animate__fadeInUp'>{dest}</h1>
    </div>
  )
}

export default Text_head