function CardList({image, gradient, title, text}){
    return(
        <>
<section className="pt-2 pb-5 lg:pb-5 mx-16">
   <div className="container">
    <div className={gradient + " flex-wrap flex -mx-10 rounded-lg gird grid-cols-2 transition ease-in-out delay-150 duration-300"}>
        <div className="w-full md:w-1/4 lg:w-1/6 px-4">
            <div className="py-10 max-w-[500] overflow-hidden">
                <img
                    src={image}
                    alt="foto"
                    className="w-full rounded-lg"
                />
            </div>
        </div>
        <div className="group mt-24">
            <h3 
            href="https://hubs.mozilla.com/NoB6ZRq/ante-sala/"
            className="
            font-semibold
            text-xl
            sm:text-2xl
            lg:text-m
            xl:text-l
            ml-6
            text-white
            group-hover:-translate-y-14
            transition 
            ease-in-out 
            delay-150 duration-300
            flex flex-wrap
            text-left
            ">
                {title}
            </h3>
            <p className="lg:text-m text-left text-white text-opacity-0 group-hover:text-opacity-100 group-hover:-translate-y-10 transition ease-in-out delay-150 duration-300 px-8">
                {text}
            </p>
        </div>
      </div>
   </div>
</section>
</>
    );
}

export default CardList;