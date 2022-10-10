import '../../App.css';
import Navbar from '../../components/Navbar';
import Footer from '../../components/Footer';
import { motion } from 'framer-motion';
import { FaLongArrowAltRight } from 'react-icons/fa';

function Home() {
  const currentPage = 'Home';
  return (
    <div>
      <Navbar parentToChild={currentPage} />
      <motion.body
        initial={{ opacity: 0.8 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className="flex flex-col min-h-screen pattern-dots pattern-stone-900 pattern-bg-black pattern-opacity-100 pattern-size-6"
      >
        <div className="mx-5 lg:mx-40 my-32">
          <h5 className="text-lg text-stone-400">
            <span>Hello, my name is,</span>
          </h5>
          <h1 className="text-4xl text-white font-bold lg:text-6xl  my-4">
            <span>
              Tanishq Deshmukh
              <span className="text-4xl lg:text-6xl text-red-600 font-bold">
                .
              </span>
            </span>
          </h1>
          <h1 className="text-4xl text-stone-200 font-bold lg:text-6xl">
            <span>I love exploring new things!</span>
          </h1>
          <h1 className="text-lg w-full text-stone-200 font-bold mt-6 lg:text-xl lg:mt-16 lg:w-2/5 ">
            <span>
              {
                "I'm a Final Year Computer Science Engineering Student at SVVV, Indore. Primarily interested in Web Development and Data Science."
              }
            </span>
          </h1>
          <h1 className="text-lg w-full text-stone-200 font-bold mt-2 lg:text-xl lg:mt-4 lg:w-2/5">
            <span>
              {
                'I enjoy learning new skills and implementing them in real life!.'
              }
            </span>
          </h1>

          <a
            href="mailto:tanishqdeshmukh30@gmail.com"
            className="inline-flex adq1 text-4xl mt-6 text-gray-200 hover:text-white gap-x-2 lg:text-3xl lg:mt-10"
          >
            Get In Touch
            <FaLongArrowAltRight size={40} />
          </a>
        </div>
        <Footer />
      </motion.body>
    </div>
  );
}

export default Home;
