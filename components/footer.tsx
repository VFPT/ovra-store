import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="bg-stone-900 text-white">
      <div className="max-w-7xl mx-auto py-10 px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-lg font-bold mb-2">About Us</h3>
            <p className="text-sm">
              Ovra Store offers the best products and services to our customers. Our mission is to bring quality and innovation to your doorstep.
            </p>
          </div>
          <div>
            <h3 className="text-lg font-bold mb-2">Quick Links</h3>
            <ul>
              <li><a href="/about" className="text-sm hover:underline">About</a></li>
              <li><a href="/services" className="text-sm hover:underline">Services</a></li>
              <li><a href="/contact" className="text-sm hover:underline">Contact</a></li>
              <li><a href="/faq" className="text-sm hover:underline">FAQ</a></li>
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-bold mb-2">Follow Us</h3>
            <div className="flex space-x-4">
              <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
                <FaFacebook className="text-xl hover:text-gray-400" />
              </a>
              <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
                <FaTwitter className="text-xl hover:text-gray-400" />
              </a>
              <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
                <FaInstagram className="text-xl hover:text-gray-400" />
              </a>
              <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer">
                <FaLinkedin className="text-xl hover:text-gray-400" />
              </a>
            </div>
          </div>
        </div>
        <div className="border-t border-gray-700 mt-8 pt-8 text-center text-xs">
          <p>&copy; 2022-2024, Ovra (Ovra Store, S.A.) and the Ovra logo are trademarks or registered trademarks of VFPT, Inc. elsewhere. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
