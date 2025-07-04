const ShoeCard = ({ imgURL, changeBigShoeImage, bigShoeImg }) => {
  const handleClick = () => {
    if (bigShoeImg === imgURL.bigShoe) {
      changeBigShoeImage(imgURL.bigShoe);
    } else {
      changeBigShoeImage(imgURL);
    }
  };

  return (
    <div
      className={`border-2 rounded-xl ${bigShoeImg === imgURL.bigShoe ? 'border-coral-red' : 'border-transparent'} cursor-pointer hover:border-coral-red transition-all duration-300 ease-in-out`}
      onClick={handleClick}
    >
      <div className="flex justify-center items-center bg-card bg-center sm:w-40 sm:h-40 rounded-xl max-sm:p-4">
        <img
          src={imgURL.thumbnail}
          alt="Shoe Thumbnail"
          width={127}
          height={103}
          className="object-contain"
        />
      </div>
    </div>
  );
};
export default ShoeCard;