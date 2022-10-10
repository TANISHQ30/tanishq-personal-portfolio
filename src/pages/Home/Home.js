import '../../App.css';
import Navbar from '../../components/Navbar';
import Footer from '../../components/Footer';
import { motion } from 'framer-motion';
import { FaLongArrowAltRight } from 'react-icons/fa';
import '../../App.css';
import { FaChevronRight } from 'react-icons/fa';

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
        <div className="mx-5 lg:mx-48 my-20 lg:my-52">
          <h5 className="text-lg text-stone-400">
            <span>Hello, my name is,</span>
          </h5>
          <h1 className="text-4xl text-white font-bold lg:text-6xl my-4">
            <span>
              Tanishq Deshmukh
              <span className="text-4xl lg:text-6xl text-red-600 font-bold">
                .
              </span>
            </span>
          </h1>
          <h1 className="text-4xl text-stone-300 font-bold lg:text-6xl">
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
            className="inline-flex adq1 text-xl mt-8 text-gray-200 hover:text-white gap-x-2 lg:text-3xl lg:mt-12"
          >
            Get In Touch
            <FaLongArrowAltRight className="arrow" />
          </a>
        </div>
        <div className="w-full bg-black">
          <div className="mx-5 lg:mx-48 my-20 lg:my-52">
            <div className="flex flex-col md:flex-row">
              <div className="w-full lg:w-1/2">
                <div className="text-2xl font-bold text-stone-200 mr-1 lg:text-4xl">
                  <span>{'About me'}</span>
                </div>
                <div className="text-lg text-stone-200 mt-6 mr-1 lg:mr-1 lg:text-xl lg:mt-12">
                  <span>
                    {
                      "Hello! I'm Yashita Namdeo, from Indore, also known as Mini Mumbai and the Cleanest City of India."
                    }
                  </span>
                </div>
                <div className="text-lg text-stone-200 mt-2 mr-1 lg:text-xl">
                  <span>
                    {
                      'I am a creative, time punctual, dedicated, goal-oriented individual with decent moral Values and Ethicates along with a high-energy level, honed communication skills, strong organizational skills, and meticulous attention to detail.'
                    }
                  </span>
                </div>
                <div className="text-lg gap-y-5 text-stone-200 mt-2 mr-1 lg:text-xl">
                  <span>
                    {
                      'I am a creative, time punctual, dedicated, goal-oriented individual with decent moral Values and Ethicates along with a high-energy level, honed communication skills, strong organizational skills, and meticulous attention to detail.'
                    }
                  </span>
                </div>
                <div className="text-lg text-stone-200 mt-2 mr-1 lg:text-xl">
                  <span>
                    {
                      'I am pursuing my Bachelors from SVVV, Indore in Computer Science and Engineering (2018-2022) my current GPA is 3.7 out of 4.'
                    }
                  </span>
                </div>
                <div className="text-lg text-stone-200 mt-3 mr-1 lg:text-xl">
                  <span>
                    {
                      'I am a member of Developer Student Club - SVVV and have also been awarded 75% Merit Scholarship(Top 10%) by my college. Here are a few of the other activities that I love to do!'
                    }
                  </span>
                </div>
                <div className="text-lg text-stone-200 mt-3 mr-1 lg:text-xl">
                  <span>
                    {
                      'Here are a few of the other activities that I love to do!'
                    }
                  </span>
                </div>
                <div className="flex flex-row">
                  <div className="my-6 w-1/2 lg:w-1/3">
                    <ul>
                      <li>
                        <span className="flex inline-flex text-white text-lg">
                          <FaChevronRight className="chevronArrow" /> Coding{' '}
                        </span>
                      </li>
                      <li>
                        <span className="flex inline-flex text-white text-lg">
                          <FaChevronRight className="chevronArrow" /> Painting{' '}
                        </span>
                      </li>
                      <li>
                        <span className="flex inline-flex text-white text-lg">
                          <FaChevronRight className="chevronArrow" /> Problem
                          Solving{' '}
                        </span>
                      </li>
                      <li>
                        <span className="flex inline-flex text-white text-lg">
                          <FaChevronRight className="chevronArrow" /> Mentoring{' '}
                        </span>
                      </li>
                    </ul>
                  </div>

                  <div className="my-6 w-1/2 lg:w-2/3">
                    <ul>
                      <li>
                        <span className="flex inline-flex text-white text-lg">
                          <FaChevronRight className="chevronArrow" /> Reading{' '}
                        </span>
                      </li>
                      <li>
                        <span className="flex inline-flex text-white text-lg">
                          <FaChevronRight className="chevronArrow" /> Crafting{' '}
                        </span>
                      </li>
                      <li>
                        <span className="flex inline-flex text-white text-lg">
                          <FaChevronRight className="chevronArrow" /> Team
                          Management{' '}
                        </span>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>

              <div className="w-full text-lg text-stone-200 font-bold mt-6 lg:w-1/2 lg:text-xl lg:mt-16">
                <span>
                  {
                    "I'm a Final Year Computer Science Engineering Student at SVVV, Indore. Primarily interested in Web Development and Data Science."
                  }
                </span>
              </div>
            </div>
            {/* <div className="flex flex-col md:flex-row mx-5 lg:mx-40 my-20 lg:my-52">
            <div className="text-lg text-stone-200 font-bold mt-6 lg:text-xl lg:mt-16">
              <span>
                {
                  "Hello! I'm Yashita Namdeo, from Indore, also known as Mini Mumbai and the Cleanest City of India. I am a creative, time punctual, dedicated, goal-oriented individual with decent moral Values and Ethicates along with a high-energy level, honed communication skills, strong organizational skills, and meticulous attention to detail. I am pursuing my Bachelors from SVVV, Indore in Computer Science and Engineering (2018-2022) my current GPA is 3.7 out of 4. I am a member of Developer Student Club - SVVV and have also been awarded 75% Merit Scholarship(Top 10%) by my college. Here are a few of the other activities that I love to do!."
                }
              </span>
            </div>
            <div className="text-lg text-stone-200 font-bold mt-6 lg:text-xl lg:mt-16">
              <span>
                {
                  "I'm a Final Year Computer Science Engineering Student at SVVV, Indore. Primarily interested in Web Development and Data Science."
                }
              </span>
            </div>
          </div> */}
          </div>
        </div>
        <Footer />
      </motion.body>
    </div>
  );
}

export default Home;
