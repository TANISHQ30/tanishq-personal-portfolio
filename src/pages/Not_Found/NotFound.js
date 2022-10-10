import '../../App.css';
// import Footer from '../../components/Footer';
import Navbar from '../../components/Navbar';
import { FaArrowLeft } from 'react-icons/fa';

function NotFound() {
  const currentPage = 'NotFound';
  return (
    <body className="flex flex-col min-h-screen pattern-dots pattern-stone-900 pattern-bg-black pattern-opacity-100 pattern-size-6">
      <Navbar parentToChild={currentPage} />
      <div className="mt-20 lg:mt-40">
        <section className="">
          <div className="py-8 px-4 mx-auto max-w-screen-xl lg:py-16 lg:px-6">
            <div className="mx-auto max-w-screen-sm text-center">
              <h1 className="mb-4 text-4xl tracking-tight font-extrabold lg:text-9xl text-white dark:text-primary-500">
                {'404'}
              </h1>
              <p className="mb-4 text-3xl tracking-tight font-bold text-gray-200 md:text-4xl dark:text-white">
                {"Something's missing."}
              </p>
              <p className="mb-4 text-lg font-light text-gray-400 dark:text-gray-400">
                {
                  "Sorry, we can't find that page. You'll find lots to explore on the home page."
                }
              </p>
              <a
                href="/"
                className="inline-flex text-white bg-primary-600 hover:bg-primary-800 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:focus:ring-primary-900 my-4"
              >
                <FaArrowLeft size={20} className=" mr-2" />
                {'  Back to Homepage'}
              </a>
            </div>
          </div>
        </section>
      </div>
      {/* <Footer /> */}
    </body>
  );
}

export default NotFound;
