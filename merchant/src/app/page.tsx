import Image from "next/image";
import Link from "next/link";

export default function Component() {
  return (
    <div className="flex flex-col min-h-screen bg-green-50">
      <section className="flex-grow flex items-center w-full py-12 md:py-24 lg:py-32">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
            <div className="space-y-8">
              <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl lg:text-7xl text-green-800">
                Secure and Convenient Banking
              </h1>
              <p className="text-lg sm:text-xl md:text-2xl text-gray-800">
                Manage your finances with ease using our bank wallet app. Enjoy
                seamless transactions, real-time insights, and top-notch
                security.
              </p>
              <div className="flex space-x-4">
                <Link
                  href="/signin"
                  className="inline-flex items-center justify-center px-6 py-3 text-base font-medium text-white bg-green-600 rounded-md shadow-sm hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-500"
                  prefetch={false}
                >
                  Sign In
                </Link>
                <Link
                  href="/about"
                  className="inline-flex items-center justify-center px-6 py-3 text-base font-medium text-green-600 bg-white border border-green-300 rounded-md shadow-sm hover:bg-green-50 hover:text-green-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-500"
                  prefetch={false}
                >
                  Learn More
                </Link>
              </div>
            </div>
            <div className="mt-10 lg:mt-0">
              <Image
                src={"/wallet.png"}
                width="600"
                className="w-full h-auto rounded-xl shadow-lg object-cover object-center"
                alt="Hero"
                height="400"
              />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
