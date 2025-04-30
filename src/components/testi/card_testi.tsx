const Card_testi = () => {
    let dummy = [{
        id: 1
    },
    {
        id: 2
    },
    {
        id: 3
    },
    {
        id: 4
    },
    {
        id: 5
    },
    {
        id: 6
    },
    {
        id: 7
    },
    {
        id: 8
    },
  ]
  return (
    <>
    {dummy.map((item, index) => (
    <div>
        <div className="bg-white min-h-[264px] rounded-xl shadow-xl p-5 flex flex-col" key={index}>
            <p className="font-bold text-lg">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dolor, 
            saepe a. Quod eos non, dolores sapiente dicta quam esse 
            reprehenderit explicabo vitae nesciunt ut laborum harum,
            vel optio corporis voluptatem?</p>
            <p>lorem lorem lorem lorem lorem</p>
        </div>
        <div className="flex flex-row mt-5 items-center gap-3">
          <img src="/img/testimonial/people-1.jpg" alt="" className="w-20 h-20 rounded-full fit"/>
          <div className="flex flex-col">
            <p className="font-bold text-xl ">People {item.id}</p>
            <p className="font-bold text-lg text-gray-400">Flutter Develover</p>
          </div>
        </div>
    </div>
    ))}
  </>
  )
}

export default Card_testi