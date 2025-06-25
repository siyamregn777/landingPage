import { arrowRight } from "../assets/icons"
import { bigShoe1 } from "../assets/images"
import Button from "../components/Button"
import { statistics } from "../constants"
import ShoeCard from "../components/ShoeCard"
import { shoes } from "../constants"
import {useState} from 'react'

const Hero = () => {
  const[bigShoeImg , setBigShoeImg] = useState(bigShoe1);
  return (
    <section id="home" className="w-full flex xl:flex-row flex-col justify-center min-h-screen gap-10">
      <div className="relative xl:w-2/5 flex-col  justify-center items-start w-full max-xl:padding-x pt-28">
        <p className="text-xl font-montserrat text-coral-red">Our Summer Collection</p>
        <h1 className="mt-10 font-palanquin text-8xl max-sm:text-[72px] max-sm:leading-[82px] font-bold">
          <span className="xl:bg-white xl:whitespace-nowrap relative z-10 pr-10">The New Arrival </span><br/>
          <span className="text-coral-red mt-3 inline-block">Nike</span> Shoes
        </h1>
        <p className="text-slate-gray font-montserrat text-lg leading-8 mt-6 mb-14 sm:max-w-sm">
          Discover the latest trends in footwear with our exclusive Nike collection. 
          Step into style and comfort with every pair.
        </p>
        <Button label="Shop Now" iconURL={arrowRight}/>
        <div className="flex justify-start items-start flex-wrap w-full mt-20 gap-16">
          {statistics.map((stat,index)=> (
            <div key={index}>
              <p className="text-4xl font-palanquin font-bold">{stat.value}</p>
              <p className="leading-7 font-montserrat text-slate-gray">{stat.label}</p>
            </div>
            ))}
        </div>
      </div>
      <div className="relative flex flex-1 justify-center items-center xl:min-h-screen max-xl:py-40 bg-primary bg-hero bg-cover bg-center">
        <img
           src={bigShoeImg}
           alt="Big Shoe"
           width={6100}
           height={500}
           className="object-contain relative z-10"
           
        />
        <div className="flex sm:gap-6 gap-4 absolute -bottom-[5%] sm:left-[10%] max-sm:px-6">
          {shoes.map((shoe)=>(
            <div key={shoe}>
              <ShoeCard 
                imgURL={shoe} 
                changeBigShoeImage={(shoe)=> {setBigShoeImg(shoe.bigShoe)}}
                bigShoeImg={bigShoeImg}
            
              />
            </div>
          
          ))}
        </div>
      </div>
    </section>
  )
}

export default Hero
