import { arrowRight } from "../assets/icons"
import { offer } from "../assets/images"
import Button from "../components/Button"
const SpecialOffers = () => {
  return (
    <section className="flex justify-center items-center max-xl:flex-col-reverse gap-10 max-container">
      <div className="flex-1">
        <img 
          src={offer} width={773} height={687} className="object-contain w-full"
        />
        </div>
         <div className="flex flex-1 flex-col ">
        <h2 className="mt-10 font-palanquin lg:max-w-lg capitalize text-4xl font-bold">
          <span className="text-coral-red mt-3 inline-block">Special</span> Offer
        </h2>
        <p className="mt-6 lg:max-w-lg info-text">
          Lorem ipsum dolor sit amet consectetur 
          adipisicing elit. Aliquid aut culpa qui 
          hic! Enim provident vitae incidunt fuga. 
          Nemo accusamus sit repellat commodi tempora 
          alias non amet delectus dolor ipsa?
        </p>
        <p className="mt-6 lg:max-w-lg info-text">
          Lorem ipsum dolor sit amet consectetur 
          adipisicing elit. Aliquid aut culpa qui 
          hic! Enim provident vitae incidunt fuga. 
          Nemo accusamus sit repellat commodi tempora 
          alias non amet delectus dolor ipsa?
        </p>
        <div className="mt-11 flex flex-wrap gap-4">
          <Button label="Shop now" iconURL={arrowRight}/>
          <Button label="Learn More" backgroundColor="bg-white" borderColor="border-slate-gray" textColor="text-slate-gray"/>
        </div>
        {/* <div className="mt-10 flex justify-center items-center max-w-lg">
          <img src={offer} width={140} height={140} className="object-contain" />
        </div> */}
      </div>
    </section>
  )
}

export default SpecialOffers
