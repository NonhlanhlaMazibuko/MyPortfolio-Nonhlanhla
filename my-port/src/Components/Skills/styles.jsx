import React from 'react';

const skillsData = [
  {
    title: 'Data',
    image: `${process.env.PUBLIC_URL}/Assets/skills/data.png`,
    skills: [
      'Python', 'R-Programming', 'MS PowerBI', 'Machine Learning',
      'MySQL', 'Snowflake', 'Airflow', 'Mathematics', 'PySpark & PyTorch', 'NLP'
    ]
  },
  {
    title: 'Frontend',
    image: `${process.env.PUBLIC_URL}/Assets/skills/frontend.png`,
    skills: ['JavaScript', 'React', 'HTML', 'CSS', 'Figma', 'Tailwind']
  },
  {
    title: 'Backend',
    image: `${process.env.PUBLIC_URL}/Assets/skills/backend.png`,
    skills: ['NodeJS', 'PostgreSQL', 'MongoDB', 'Postman']
  },
  {
    title: 'Other Professional Skills',
    image: `${process.env.PUBLIC_URL}/Assets/skills/others.png`,
    skills: [
      'VSCode', 'Git/GitHub', 'Netlify/Render', 'Docker', 'Kafka', 
      'Kubernetes', 'Data Warehousing/ETL', 'Teamwork'
    ]
  }
];

const Skills = () => {
  return (
    <section 
      className="languageMainContainer grid grid-cols-4 gap-8 p-8 bg-cover bg-center"
      style={{ backgroundImage: `url(${process.env.PUBLIC_URL}/Assets/home_bg/home.jpg)` }}
    >
      {skillsData.map((category, index) => (
        <div
          key={index}
          className="languageSubContainer flex flex-col items-center p-4 border rounded-lg shadow-md bg-white"
        >
          <div className="ellipse mb-4">
            <img src={category.image} alt="Ellipse Icon" className="w-20 h-20 object-contain"/>
          </div>
          <h3 className="languageContainerText text-2xl font-semibold mb-4 text-center">
            {category.title}
          </h3>
          <div className="flex flex-wrap justify-center gap-2">
            {category.skills.map((skill, i) => (
              <span
                key={i}
                className="p-2 font-sans font-semibold text-sm text-green-600 bg-white rounded-full border border-green-600"
              >
                {skill}
              </span>
            ))}
          </div>
        </div>
      ))}
    </section>
  );
};

export default Skills;
