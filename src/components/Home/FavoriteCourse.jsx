const FavoriteCourse = () => {
  return (
    <div className="max-w-7xl mx-auto p-3">
      {/* first part  */}
      <div className="flex">
        {/* left  */}
        <div className="">
          <h3 className="mb-2 text-primary text-xl font-bold">
            Favourite Course
          </h3>
          <h1 className="mb-2 text-4xl font-bold">Top Category</h1>
          <button className="md:hidden whitespace-nowrap transition-all delay-100 duration-300 font-semibold border-2 border-primary-focus hover:text-white hover:bg-primary-focus  px-3 py-1 rounded-full m-2">
            All Categories
          </button>
          <p className="text-lg">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Eget aenean
            accumsan bibendum
          </p>
          <p className="text-lg">
            gravida maecenas augue elementum et neque. Suspendisse imperdiet.
          </p>
        </div>
        {/* right */}
        <div className="hidden md:block">
          <button className="whitespace-nowrap transition-all delay-100 duration-300 font-semibold border-2 border-primary-focus hover:text-white hover:bg-primary-focus  px-6 py-3 rounded-full">
            All Categories
          </button>
        </div>
      </div>
      {/* second part */}
      <div className="mt-24">
        {/* course container */}
        {/* course car 1 */}
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-5">
          {/* course 1 */}
          <div className="card max-w-md md:max-w-xs border hover:bg-accent-focus transition-all duration-700">
            <figure className="px-10 pt-10">
              <img
                src="https://dreamslms.dreamguystech.com/html/assets/img/categories-icon-02.png"
                alt="Shoes"
                className="rounded-xl"
              />
            </figure>
            <div className="card-body items-center text-center hover:text-white">
              <h2 className="text-xl font-bold">Node JS</h2>
              <h2 className="text-xl font-bold">Frontend</h2>
              <p>40 Instructors</p>
            </div>
          </div>
          {/* course 1 */}
          <div className="card max-w-md md:max-w-xs border hover:bg-accent-focus transition-all duration-700">
            <figure className="px-10 pt-10">
              <img
                src="https://dreamslms.dreamguystech.com/html/assets/img/categories-icon-02.png"
                alt="Shoes"
                className="rounded-xl"
              />
            </figure>
            <div className="card-body items-center text-center hover:text-white">
              <h2 className="text-xl font-bold">Node JS</h2>
              <h2 className="text-xl font-bold">Frontend</h2>
              <p>40 Instructors</p>
            </div>
          </div>
          {/* course 1 */}
          <div className="card max-w-md md:max-w-xs border hover:bg-accent-focus transition-all duration-700">
            <figure className="px-10 pt-10">
              <img
                src="https://dreamslms.dreamguystech.com/html/assets/img/categories-icon-02.png"
                alt="Shoes"
                className="rounded-xl"
              />
            </figure>
            <div className="card-body items-center text-center hover:text-white">
              <h2 className="text-xl font-bold">Node JS</h2>
              <h2 className="text-xl font-bold">Frontend</h2>
              <p>40 Instructors</p>
            </div>
          </div>
          {/* course 1 */}
          <div className="card max-w-md md:max-w-xs border hover:bg-accent-focus transition-all duration-700">
            <figure className="px-10 pt-10">
              <img
                src="https://dreamslms.dreamguystech.com/html/assets/img/categories-icon-02.png"
                alt="Shoes"
                className="rounded-xl"
              />
            </figure>
            <div className="card-body items-center text-center hover:text-white">
              <h2 className="text-xl font-bold">Node JS</h2>
              <h2 className="text-xl font-bold">Frontend</h2>
              <p>40 Instructors</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FavoriteCourse;
