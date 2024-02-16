import hero from "../assets/hero.png";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";


const AboutPage = () => {
    return (
      <div>
        <Navbar />
        <div className="container mx-auto mt-20 py-8">
          <h1 className="text-3xl font-bold text-gray-200 mb-4 text-center">About Us</h1>
          <div className="flex justify-center items-center mb-6">
            <img className="max-w-[500px] rounded-lg"src={hero} alt="Hero" />
          </div>
          <p className="text-lg text-gray-200 mb-6">
            Welcome to our rental apartment company! We specialize in providing high-quality rental apartments for individuals and families in need of comfortable and convenient living spaces. Our mission is to make the process of finding and renting an apartment as smooth and hassle-free as possible.
          </p>
          <p className="text-lg text-gray-200 mb-4">
            With years of experience in the real estate industry, we have built a reputation for excellence and reliability. Our team of dedicated professionals is committed to ensuring that each of our tenants finds the perfect apartment to suit their needs and preferences.
          </p>
          <p className="text-lg text-gray-200 mb-4">
            Whether you're looking for a cozy studio apartment or a spacious family home, we have a wide range of options available to choose from. We understand that finding the right place to live is important, which is why we strive to offer a diverse selection of apartments in various locations to cater to different lifestyles and budgets.
          </p>
          <p className="text-lg text-gray-200 mb-4">
            At our rental apartment company, we prioritize customer satisfaction above all else. We pride ourselves on our exceptional service and attention to detail, and we are always here to assist you every step of the way. Whether you have questions about a specific property or need help navigating the rental process, our friendly and knowledgeable team is here to help.
          </p>
        </div>
        <Footer />
      </div>
    );
  };

export default AboutPage