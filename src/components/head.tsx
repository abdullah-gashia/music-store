import Image from "next/image";
import background from "../image/bg.jpg";
import pheader from "../image/tt.png"

export default function Head() {
  return (
    <header
      style={{
        backgroundImage: `url(${background.src})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
      className="h-screen w-full relative rounded-b-lg overflow-hidden"
    >
      <div className="container mx-auto px-4 py-8">
        <div className="mx-auto max-w-screen-xl px-4 py-8 sm:px-6 sm:py-12 lg:px-8 text-center">
          <div className="flex flex-col items-center gap-4 md:flex-row md:items-center md:justify-between">
            <div className="mb-8 md:mb-0">
              <h1 className="text-5xl font-bold text-white sm:text-3xl">Music store</h1>
            </div>
            <div className="flex items-center gap-4 flex-wrap justify-center">
              <button
                className="inline-block rounded-full px-5 py-3 text-lg font-medium text-white transition hover:bg-white hover:bg-opacity-30 focus:outline-none focus:ring"
                type="button"
              >
                Home
              </button>
              <button
                className="inline-block rounded-full px-5 py-3 text-lg font-medium text-white transition hover:bg-white hover:bg-opacity-30 focus:outline-none focus:ring"
                type="button"
              >
                Our Shop
              </button>
              <button
                className="inline-block rounded-full px-5 py-3 text-lg font-medium text-white transition hover:bg-white hover:bg-opacity-30 focus:outline-none focus:ring"
                type="button"
              >
                Product Details
              </button>
              <button
                className="inline-block rounded-full px-5 py-3 text-lg font-medium text-white transition hover:bg-white hover:bg-opacity-30 focus:outline-none focus:ring"
                type="button"
              >
                Contact Us
              </button>
              <button
                className="inline-block rounded-full bg-red-500 px-5 py-3 text-lg font-medium text-white transition hover:bg-indigo-700 focus:outline-none focus:ring"
                type="button"
              >
                SIGN IN
              </button>
            </div>
          </div>
          <div className="flex flex-col items-center gap-8 lg:flex-row lg:items-center lg:justify-between mt-12">
            <div className="text-left lg:w-1/2">
              <h1 className="text-4xl font-bold text-white">WELCOME TO MUSIC STORE</h1>
              <h2 className="text-5xl font-bold text-white mt-4">BEST MUSIC SITE EVER!</h2>
              <p className="text-white mt-4">
                WHAT IT DO YOU LIKE TO DAY I DON'T CARE I LIKE SKIBIDI TOILET SO CAT IS VERY
                CUTE I WANT TO GO BACK DOME FOR SLEEP I HATE TUESDAY I LOVE WEBPROGRAM SUUUU ~
                ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~
              </p>
              <div className="relative mt-6">
                <input
                  type="search"
                  placeholder="Type Something"
                  className="rounded-full px-6 py-3 text-lg font-normal focus:outline-none focus:ring w-[380px]"
                />
                <button
                  className=" rounded-full bg-red-500 px-6 py-3 text-lg text-white transition hover:bg-indigo-700 ml-4 focus:outline-none focus:ring"
                  type="button"
                >
                  SEARCH NOW
                </button>
              </div>
            </div>
            <div className="lg:w-1/2 flex justify-center">
              <div className="relative">
                <Image
                  src={pheader}
                  alt="SKIBIDIMAN"
                  width={400}
                  height={400}
                  className="rounded-lg"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}
