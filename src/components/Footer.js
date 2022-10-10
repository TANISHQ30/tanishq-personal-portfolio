import { GoMarkGithub } from 'react-icons/go';
import { FaSpotify, FaInstagram } from 'react-icons/fa';
import { FiArrowUpRight } from 'react-icons/fi';
import '../styles/global.css';

function Footer() {
  return (
    <footer className="mt-auto pt-10 bg-black">
      <div className="mx-5 lg:mx-40">
        <h3 className="font-Inter text-xl lg:text-2xl font-semibold">
          <span className="text-stone-600">Get in touch</span>
        </h3>
        <h3 className="font-Inter w-full text-2xl lg:w-5/4 md:w-4/3 lg:text-5xl my-2 lg:my-10 font-semibold">
          <span className="text-gray-200">
            Want to get in touch with me regarding a project, a future
            collaboration, or simply to say hello?
          </span>
        </h3>
        <h5 className="flex inline-flex gap-x-2 font-Inter text-gray-200 w-full text-lg my-2 lg:w-5/4 md:w-4/3 lg:text-xl">
          If you want to chat about a project — email me at
          <a
            href="mailto:tanishqdeshmukh30@gmail.com"
            className="inline-flex adq1 text-gray-400 hover:text-white"
          >
            tanishqdeshmukh30@gmail.com
            <FiArrowUpRight size={25} />
          </a>
        </h5>
        <h5 className="flex flex-row gap-x-4 font-Inter w-full text-lg mb-6 lg:w-5/4 md:w-4/3 lg:text-xl">
          <span className="text-gray-200">
            Currently based in Cork, Ireland — Looking for opportunities in{' '}
          </span>
        </h5>
        <h5 className="flex flex-row font-Inter w-full text-lg mb-8 lg:w-5/4 md:w-4/3 lg:text-xl">
          <span className="text-gray-200">
            I can help design and building website for your needs, improve an
            existing part of your website user-experience, rectify your website
            strategy, and build strong design system for your website.
          </span>
        </h5>
        <div className="flex flex-row gap-x-4">
          <a
            target="_blank"
            rel="noopener noreferrer"
            href="https://www.instagram.com/tanishqdeshmukh/"
            className="rounded-xl flex-none bg-stone-900 p-3 text-2xl text-black ring-black transition-all duration-150 hover:ring-2 ring-offset-2"
          >
            <FaInstagram color="red" />
          </a>
          <a
            target="_blank"
            rel="noopener noreferrer"
            href="https://github.com/TANISHQ30"
            className="rounded-xl flex-none bg-stone-900 p-3 text-2xl text-black ring-black transition-all duration-150 hover:ring-2 ring-offset-2"
          >
            <GoMarkGithub color="white" />
          </a>
          <a
            target="_blank"
            rel="noopener noreferrer"
            href="https://open.spotify.com/user/tanishqdeshmukh30"
            className="rounded-xl flex-none bg-stone-900 p-3 text-2xl text-black ring-black transition-all duration-150 hover:ring-2 ring-offset-2"
          >
            <FaSpotify color="lime" />
          </a>
        </div>
      </div>

      <br />
    </footer>
  );
}

export default Footer;
