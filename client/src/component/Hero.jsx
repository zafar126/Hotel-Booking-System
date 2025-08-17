// import React from "react";
// import { assets , cities } from "../assets/assets";

// const Hero = () => {
//   return (
//     <>
//       <div
//         style={{ backgroundImage: "url('/heroImage.png')" }}
//   className="flex flex-col items-start justify-center px-4 md:px-10 lg:px-24 xl:px-32 text-white bg-no-repeat bg-cover bg-center bg-fixed h-screen w-full">
      
//         <p className="bg-[#49B9FF] w-[300px]  text-center mr-9 rounded-full mt-30">
//           The Ultimate Hotel Experience
//         </p>

//         <h1 className="font-playfair text-1xl md:text-4xl md:text-[20x] md:leading-[36x] font-bold md:font-extrabold max-w-xl mr-18 pr-18 mt-4 ml-[1px]">
//           Discover Your Perfect <br /> Gateway Destination
//         </h1>

//         <p className="max-w-110 mt-2 text-sm md:text-base ml-[1px]">
//           Unparalleled luxury and comfort await at the world's most exclusive
//           hotels and resort. Start your journey today.
//         </p>
//         <form className="bg-white mt-6 text-gray-500 rounded-lg px-6 py-4 flex flex-col md:flex-row items-start gap-4 ml-[3px]">
//           <div>
//             <div className="flex items-center gap-2">
//               <img src={assets.calenderIcon} alt="" className="h-4" />
//               <label htmlFor="destinationInput">Destination</label>
//             </div>
//             <input
//               list="destinations"
//               id="destinationInput"
//               type="text"
//               className="rounded border border-gray-200 px-3 py-1.5 mt-1.5 text-sm outline-none"
//               placeholder="Type here"
//               required
//             />
//             <datalist id="destinations">
//               {cities.map((city, index) => (
//                 <option key={index} value={city} />
//               ))}
//             </datalist>
//           </div>

//           <div>
//             <div className="flex items-center gap-2">
//               <img src={assets.calenderIcon} alt="" className="h-4" />
//               <label htmlFor="checkIn">Check in</label>
//             </div>
//             <input
//               id="checkIn"
//               type="date"
//               className="rounded border border-gray-200 px-3 py-1.5 mt-1.5 text-sm outline-none"
//             />
//           </div>

//           <div>
//             <div className="flex items-center gap-2">
//               <img src={assets.calenderIcon} alt="" className="h-4" />
//               <label htmlFor="checkOut">Check out</label>
//             </div>
//             <input
//               id="checkOut"
//               type="date"
//               className="rounded border border-gray-200 px-3 py-1.5 mt-1.5 text-sm outline-none"
//             />
//           </div>

//           <div className="flex md:flex-col  gap-2 items-start">
//             <label htmlFor="guests">Guests</label>
//             <input
//               min={1}
//               max={4}
//               id="guests"
//               type="number"
//               className="rounded border border-gray-200 px-3 py-1.5  text-sm outline-none max-w-16"
//               placeholder="0"
//             />
//           </div>

//           <button className="flex items-center justify-center gap-1 rounded-md bg-black py-3 px-4 text-white my-auto cursor-pointer">
//             <img src={assets.searchIcon} alt="Search" className="h-4" />
//             <span>Search</span>
//           </button>
//         </form>
//       </div>
//     </>
//   );
// };
// export default Hero;
import React from "react";
import { assets, cities } from "../assets/assets";

const Hero = () => {
  return (
    <div
      style={{ backgroundImage: "url('/heroImage.png')" }}
      className="flex flex-col items-start justify-center px-4 md:px-10 lg:px-24 xl:px-32 text-white bg-no-repeat bg-cover bg-center bg-fixed h-screen w-full"
    >
      {/* Tagline */}
      <p className="bg-[#49B9FF] w-[220px] sm:w-[260px] md:w-[300px] text-center rounded-full py-2 text-xs sm:text-sm md:text-base">
        The Ultimate Hotel Experience
      </p>

      {/* Heading */}
      <h1 className="font-playfair text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold md:font-extrabold max-w-xl mt-4">
        Discover Your Perfect <br /> Gateway Destination
      </h1>

      {/* Subheading */}
      <p className="max-w-lg mt-3 text-sm sm:text-base md:text-lg">
        Unparalleled luxury and comfort await at the world's most exclusive
        hotels and resorts. Start your journey today.
      </p>

      {/* Form */}
      <form className="bg-white mt-6 text-gray-700 rounded-lg px-4 sm:px-6 py-4 flex flex-col sm:flex-col md:flex-row items-stretch gap-4 w-full max-w-4xl">
        
        {/* Destination */}
        <div className="flex-1">
          <div className="flex items-center gap-2">
            <img src={assets.calenderIcon} alt="calendar" className="h-4" />
            <label htmlFor="destinationInput">Destination</label>
          </div>
          <input
            list="destinations"
            id="destinationInput"
            type="text"
            className="w-full rounded border border-gray-200 px-3 py-2 mt-2 text-sm outline-none"
            placeholder="Type here"
            required
          />
          <datalist id="destinations">
            {cities.map((city, index) => (
              <option key={index} value={city} />
            ))}
          </datalist>
        </div>

        {/* Check In */}
        <div className="flex-1">
          <div className="flex items-center gap-2">
            <img src={assets.calenderIcon} alt="calendar" className="h-4" />
            <label htmlFor="checkIn">Check in</label>
          </div>
          <input
            id="checkIn"
            type="date"
            className="w-full rounded border border-gray-200 px-3 py-2 mt-2 text-sm outline-none"
          />
        </div>

        {/* Check Out */}
        <div className="flex-1">
          <div className="flex items-center gap-2">
            <img src={assets.calenderIcon} alt="calendar" className="h-4" />
            <label htmlFor="checkOut">Check out</label>
          </div>
          <input
            id="checkOut"
            type="date"
            className="w-full rounded border border-gray-200 px-3 py-2 mt-2 text-sm outline-none"
          />
        </div>

        {/* Guests */}
        <div className="flex flex-col flex-1">
          <label htmlFor="guests">Guests</label>
          <input
            min={1}
            max={10}
            id="guests"
            type="number"
            className="w-full rounded border border-gray-200 px-3 py-2 mt-2 text-sm outline-none"
            placeholder="0"
          />
        </div>

        {/* Search Button */}
        <button className="flex items-center justify-center gap-2 rounded-md bg-black px-4 py-3 text-white text-sm sm:text-base hover:bg-gray-800 transition">
          <img src={assets.searchIcon} alt="Search" className="h-4" />
          <span>Search</span>
        </button>
      </form>
    </div>
  );
};

export default Hero;
