import hero from "../assets/hero.png";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";


const AboutPage = () => {
    return (
      <div>
        <Navbar />
        <div className="container mx-auto py-8">
          <div className="flex justify-center items-center mb-6">
            <img className="max-w-[500px] rounded-lg"src={hero} alt="Hero" />
          </div>
          <h1 className="text-3xl font-bold text-gray-200 mb-4 text-center">About Us</h1>
          <h1 className="text-lg text-gray-200 mb-6">
          Welcome to the about page of our rental apartment company mock website!
          </h1>
          <p className="text-lg text-gray-200 mb-4">
          This website serves as a project for learning and skill development in web development. Created with a focus on rental apartments, it offers an opportunity to practice coding skills and gain experience in building functional websites.
          </p>
          <p className="text-lg text-gray-200 mb-4">
          The primary goal of this project is to enhance coding abilities and explore various aspects of web development. Through hands-on experience, experimentation, and continuous learning, we aim to improve our skills and expand our knowledge in the field.
          </p>
        </div>
        <Footer />
      </div>
    );
  };

export default AboutPage