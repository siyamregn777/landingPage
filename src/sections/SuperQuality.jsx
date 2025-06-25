import Button from "../components/Button"
import {shoe8} from '../assets/images'
const SuperQuality = () => {
  return (
    <section id="about-us" className="flex justify-between items-center max-lg:flex-col gap-10 w-full max-container">
      <div className="flex flex-1 flex-col ">
        <h2 className="mt-10 font-palanquin lg:max-w-lg capitalize text-4xl font-bold">
          we Provide You&nbsp;
          <span className="text-coral-red mt-3 inline-block">Super</span>
          <span className="text-coral-red mt-3 inline-block"> Quality</span> Shoes
        </h2>
        <p className="mt-6 lg:max-w-lg info-text">
          Lorem ipsum dolor sit amet consectetur 
          adipisicing elit. Aliquid aut culpa qui 
          hic! Enim provident vitae incidunt fuga. 
          Nemo accusamus sit repellat commodi tempora 
          alias non amet delectus dolor ipsa?
        </p>
        <div className="mt-11">
          <Button label="View More"/>
        </div>
        
      </div>
      <div className="flex-1 flex justify-center items-center">
        <img 
          src={shoe8} 
          alt="shoe"
          width={579}
          height={522}
          className="object-contain"
        />

      </div>
    </section>
  )
}

export default SuperQuality
