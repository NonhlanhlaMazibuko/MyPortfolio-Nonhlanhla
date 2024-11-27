import React from 'react';

const About = () => {
  return (
    <section 
      id="about" 
      className="w-full md:h-screen p-4 flex items-center py-16 bg-cover bg-center"
      style={{ backgroundImage: `url(${process.env.PUBLIC_URL}/Assets/home_bg/home.jpg)` }}
    >
      <div className="max-w-[1240px] m-auto md:grid grid-cols-3 gap-8 bg-white bg-opacity-80 rounded-lg p-6 shadow-lg"
      style={{ backgroundColor: '#f1e7f1' }}
      >
        <div>
          <h3 className="uppercase tracking-widest text-2xl font-semibold py-4 text-gray-800">About Me</h3>
        </div>
        <div className="col-span-2">
          <p className="text-lg text-gray-700 py-2 leading-relaxed">
          I am passionate software engineer and aspiring data scientist
           with a strong foundation in data science, machine learning, and mathematics. I specialize
            in building scalable and maintainable applications using modern technologies, including React,
            Node.js, and AWS. My academic journey includes a Bachelor of Science degree
            with a major in Mathematics and an upcoming Postgraduate Diploma in Data Science,
            highlighting my deep commitment to data-driven solutions and analytical thinking.
          </p>
          <p className="text-lg text-gray-700 py-2 leading-relaxed">
          Beyond formal education, I’m dedicated to continual learning. In my free time,
          I pursue personal projects and online courses to stay current with the latest developments
          in both software development and data science. My journey is grounded in a drive to make a meaningful impact,
          build my skills, and create solutions that bring value to users and organizations alike.
          </p>
          <a
            href="/pdfs/NonhlanhlaMazibukoResume-preferred.pdf"
            target="_blank"
            rel="noreferrer"
            className="inline-block py-2 text-blue-600 underline font-semibold mt-4"
          ><button className="w-full p-4 text-gray-100 bg-gray-500 hover:bg-gray-600 mt-4 rounded-lg">
          Get My Resume
        </button>
          </a>
        </div>
      </div>
    </section>
  );
};

export default About;