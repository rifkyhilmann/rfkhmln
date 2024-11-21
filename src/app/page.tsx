import Image from "next/image";
import Profile from '@/assets/Profile.jpg'
import Popper from "@/components/popover";
import { DataSkills } from '@/data/data'
import CardList from "@/components/CardList";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope } from "@fortawesome/free-regular-svg-icons";
import { faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons";
import './globals.css'

export default function Home() {
    return (
      <div className="flex flex-col items-center h-max content mb-20">
        <div className=" h-max w-full flex items-center md:my-0 my-7 flex-col-reverse md:grid grid-cols-1 md:grid-cols-2 gap-5 md:gap-10 min-h-[700px]">
            {/* Bagian Teks */}
            <div className="flex flex-col md:items-start items-center justify-center gap-1 md:gap-2 animate-slideInFromSides">
              <h3 className="text-lg md:text-2xl text-white">Hello, Im </h3>
              <h1 className="text-3xl md:text-5xl font-semibold text-primary ">Rifky Hilman</h1>
              <h1 className="text-3xl md:text-4xl font-semibold text-white">Fullstack Developer</h1>
              <p className="text-white text-sm px-5 text-justify mt-2 md:px-0 md:text-md">
                I am an experienced Full Stack Web Developer specializing in both frontend and backend development. I have built and managed a variety of web and mobile applications using modern technologies such as React.js, Express.js, Next.js, Vue.js, React Native, and Laravel for server-side development.
              </p>
              <button className="w-32 bg-primary h-10 rounded-full text-[#18181B] font-bold text-sm mt-10 hover:opacity-80">
                Lets talk                
              </button>
            </div>

            {/* Bagian Gambar */}
            <div className="flex items-center justify-center md:justify-end animate-slideInFromRight">
              <Image 
                src={Profile}
                alt="Image Profile"
                className=" h-[300px] w-[300px] md:h-[400px] md:w-[400px] rounded-xl object-cover"
              />
            </div>
          </div>

          <div className="h-max w-full gap-10 mb-40 grid grid-cols-1 md:grid-cols-2">

            <div className="h-max flex flex-col text-white animate-slideInFromSides">
              <p className="mb-5 text-lg">Education</p>
              <CardList
                title="Diploma of Education"
                company="Informatics Management"
                description="Focused on understanding the principles of education technology and systems, with practical experience in developing educational tools and platforms."
              />
              <CardList
                title="Bachelor's Degree "
                company="Informatics Engineering"
                description="Studied the principles of software development, database management, and systems engineering. "
                style="border-t"
              />
            </div>


            <div className="h-max flex flex-col  text-white animate-slideInFromRight">
              <p className="mb-5 text-xl">Experience</p>
              <CardList
                title="Full Stack Developer"
                company="Pranala Jiwa "
                description="Responsible for designing and developing responsive websites with a focus on seamless user experience across all devices."
              />
              <CardList
                title="Full Stack Developer"
                company="Leholeh (internship)"
                description="Led the development of responsive website designs using modern frameworks and create rest full api. "
                style="border-t"
              />
            </div>

          </div>
          
          <div className="w-full min-h-[400px]  flex flex-col items-center py-5 border rounded-lg gap-10 px-1 md:px-5 animate-slideInFromSides">
              <h1 className="text-4xl text-primary font-semibold ">Skills</h1>
              <div className="flex flex-1 flex-wrap w-full justify-center gap-1 md:gap-5">
                {DataSkills.map((items, index) => (
                  <Popper 
                    key={index}
                    image={items.image}
                    title={items.name}
                  />
                ))}
                  
              </div>
          </div>

          <div className="min-h-[350px]  h-max w-full  mt-20 py-5 flex items-center gap-2 flex-col">
              <h4 className="text-sm text-primary">Contact Us</h4>
              <p className="text-white text-3xl font-semibold">How To Contact Us</p>
              <div className="flex flex-col items-center gap-3 mt-10">
                <a href="" className="w-72 h-10 border flex items-center px-4 rounded-full gap-4 card">
                  <FontAwesomeIcon icon={faEnvelope} className="text-primary h-5 w-5" />
                  <p className="text-sm text-white">rifkyhilman1302@gmail.com</p>
                </a>
                <a 
                  target="blank"
                  href="https://www.linkedin.com/in/rifky-hilman-95ba57294/?trk=opento_sprofile_details" 
                  className="w-72 h-10 border flex items-center px-4 rounded-full gap-4 card"
                >
                  <FontAwesomeIcon icon={faLinkedin} className="text-primary h-5 w-5" />
                  <p className="text-sm text-white">rifkyhilman</p>
                </a>
                <a 
                  target="blank"
                  href="https://github.com/rifkyhilmann" 
                  className="w-72 h-10 border flex items-center px-4 rounded-full gap-4 card"
                >
                  <FontAwesomeIcon icon={faGithub} className="text-primary h-5 w-5" />
                  <p className="text-sm text-white">rifkyhilman</p>
                </a>
              </div>
          </div>

      </div>
    );
}
