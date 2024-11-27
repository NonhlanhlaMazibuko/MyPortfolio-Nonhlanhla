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
    skills: ['CSS', 'HTML', 'React', 'Figma', 'Tailwind', 'JavaScript']
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
      id="skills"
      className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8 p-8 bg-cover bg-center"
      style={{ backgroundImage: `url(${process.env.PUBLIC_URL}/Assets/home_bg/home.jpg)` }}
    >
      {skillsData.map((category, index) => (
        <div
          key={index}
          className="flex flex-col items-center p-4 border rounded-lg shadow-md"
          style={{ backgroundColor: '#c6b7c8' }}
        >
          <div className="mb-4">
            <img src={category.image} alt={`${category.title} Icon`} className="w-20 h-20 object-contain" />
          </div>
          <h3 className="text-xl font-semibold text-center mb-4">{category.title}</h3>
          <ul className="flex flex-wrap justify-center gap-2">
            {category.skills.map((skill, i) => (
              <li
                key={i}
                className="p-2 text-sm font-semibold text-black bg-white rounded-lg border border-purple-200"
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