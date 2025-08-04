import Image from "next/image";
import { Poppins } from "next/font/google";
import Link from "next/link";

const poppins = Poppins({
  weight: ["400", "500", "600", "700", "800"],
  subsets: ["latin"],
  variable: "--font-poppins",
});

export default function Home() {
  return (
    <>
      <div className="min-h-[50vh] grid grid-cols-1 lg:grid-cols-2 gap-4 p-6">
        <div className="flex flex-col justify-center items-center text-center  px-4 sm:px-8 lg:px-20">
          <p
            className={`text-2xl sm:text-3xl md:text-4xl font-extrabold ${poppins.variable}`}
          >
            The Best URL Shortener for Your Needs
          </p>
          <p className="text-blue-200 mt-4 text-base sm:text-lg">
            We are the straightforward solution for shortening URLs, making them
            easy to share and manage.
          </p>
          <div className="mt-6 flex   gap-4">
            <Link href="/github" target="_blank">
              <button
                type="button"
                className="w-full sm:w-auto cursor-pointer text-white bg-gradient-to-r from-blue-400 to-blue-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-medium rounded-lg text-sm px-6 py-2.5 hover:scale-105 transition-transform duration-300 ease-in-out "
              >
                GitHub
              </button>
            </Link>
            <Link href="/shorten">
              <button
                type="button"
                className="w-full sm:w-auto cursor-pointer text-white bg-gradient-to-r from-blue-400 to-blue-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-medium rounded-lg text-sm px-6 py-2.5 hover:scale-105 transition-transform duration-300 ease-in-out"
              >
                Try Now
              </button>
            </Link>
          </div>
        </div>

        {/* Image Section */}
        <div className="relative w-full h-64 sm:h-96 ">
          <Image
            fill
            priority={true}
            src="/vector.jpg"
            alt="A vector image"
            sizes="(max-width: 1024px) 100vw, 50vw"

            className="object-cover rounded-lg hover:absolute hover:scale-102 transition-transform duration-300 ease-in-out"
          />
        </div>
      </div>

      {/* Gradient Divider */}
      <div className="breaker shadow-lg shadow-white/50 h-[2px] mt-4 w-4/5 sm:w-2/3 mx-auto bg-gradient-to-r from-transparent via-blue-300 to-transparent" />
    </>
  );
}
