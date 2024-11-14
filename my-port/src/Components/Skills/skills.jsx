import React from 'react';

const skillsData = [
  {
    title: 'Data',
    image: `${process.env.PUBLIC_URL}/Assets/skills/data.png`,
    skills: [
       'NLP', 'MySQL', 'Python', 'PySpark', 'PyTorch', 'Airflow',
       'Snowflake', 'MS PowerBI',
       'Mathematics', 'R-Programming', 'Machine Learning',
       'Visualization', 'Analytics'
    ]
  },
  {
    title: 'Frontend',
    image: `${process.env.PUBLIC_URL}/Assets/skills/frontend.png`,
    skills: ['CSS', 'HTML', 'React', 'Figma', 'Tailwind', 'JavaScript' ]
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
      'Shell', 'VSCode', 'Docker', 'Kafka', 'Teamwork', 
      'Kubernetes', 'Git/GitHub', 'Netlify/Render', 'Data Warehousing/ETL'
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
          className="languageSubContainer flex flex-col items-center p-4 border rounded-lg shadow-md bg-purple-100"
        >
          <div className="ellipse mb-4">
            <img src={category.image} alt="Ellipse Icon" className="w-20 h-20 object-contain"/>
          </div>
          <h3 className="languageContainerText text-2xl font-semibold text-lg font-sans">
            {category.title}
          </h3>
          <ul className="flex flex-wrap justify-center gap-2">
            {category.skills.map((skill, i) => (
              <li
                key={i}
                className="language p-2 font-sans font-semibold text-sm text-black-600 bg-white rounded-lg border border-purple-1000"
              >
                {skill}
              </li>
            ))}
          </ul>
        </div>
      ))}
    </section>
  );
};

export default Skills;