import { CardKelas_model } from "../../types/Model"
import ButtonDefault from "../child/Button_default"
const Card_Kelas = () => {
    
  
  return (
    <>    
    {CardKelas_model.map((item, index) => (
    
    <div 
    style={{ animationDelay: `${index * 0.7}s` }}
    key={index} 
    className="flex flex-col bg-white rounded-xl shadow-xl animate__animated animate__fadeInUp">
      <img src={item.img} alt="" className=" rounded-t-xl h-60" />
      <div className="pt-12 pb-5 px-5 min-h-60 flex flex-col  justify-between">
        <div className="gap-3 flex flex-col"> {/* text atas */}
          <div key={index} className="flex flex-row">
          {item.start.map((item, index) => (
              <i key={index} className={`${item} text-star-color `}></i>
            ))}
            </div>
            <h1 className="text-[21px] font-bold">{item.title}</h1>
        </div>
        <div className="flex flex-row justify-between"> {/* text bawah */ }
          <p className="text-lg font-bold text-star-blue">Rp. {item.price.toLocaleString("id-ID")}</p>
          <ButtonDefault SizeButton="navSize" button={{ name: "Beli Kelas", link: "/kelas" }} bgactive={true}/>
        </div>
      </div>
    </div>
    
    ))}
    </>
  )
}

export default Card_Kelas