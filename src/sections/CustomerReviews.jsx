import ReviewsCard from "../components/ReviewsCard"
import { reviews } from "../constants"
const CustomerReviews = () => {
  return (
    <section className="max-container">
      <h3 className="font-palanquin font-bold text-center text-4xl">
        what our <span className="text-coral-red"> Customer</span> says
      </h3>
      <p className="text-center mt-4 m-auto info-text max-w-lg font-montserrat">
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quam 
        harum voluptatibus ducimus nobis nisi, eveniet consequatur
        doloribus quasi pariatur rerum?
      </p>
      <div className="mt-24 flex flex-1 justify-evenly items-center max-lg:flex-col gap-14">
        {reviews.map((review) => (
          <ReviewsCard
            key={review.customerName}
            imgURL={review.imgURL}
            customerName={review.customerName}
            rating={review.rating}
            feedback={review.feedback}
          />
        ))}
      </div>
    </section>
  )
}

export default CustomerReviews
