import React from "react";
import Card from "./projectCard";

const Projects = ({ setIsPopupOpen }) => {
  return (
    <div id="projects" className="w-full" style={{ backgroundColor: '#f3e9f3' }}>
      <div className="max-w-[1240px] mx-auto px-2 py-16">
        <h2 className="tracking-widest uppercase py-4 font-semibold py-4 text-gray-800">Projects</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 gap-8">
          <Card
            title="MovieReel Project"
            backgroundImage={"/Assets/projects/MovieReel.png"}
            projectCode="https://github.com/202404-Y-ZA-FSW/movies-project-nonhlanhla_konanani"
            projectDemo="https://lovely-kelpie-7015ee.netlify.app"
            tech="ReactJS"
            description="MovieReel is a web application that showcases dynamic movie and actor data through a movie API. The project includes features such as browsing movies by categories, viewing detailed movie and actor pages, and integrating video trailers. It demonstrates skills in frontend development, API integration, and creating interactive user experiences."
            styles="CSS"
            setIsPopupOpen={setIsPopupOpen}
          />
          <Card
            title="Taskly Task Manager"
            backgroundImage={"Assets/projects/taskly.png"}
            projectCode="https://github.com/mpho-oganne/taskly-fullstack-project"
            projectDemo="#projects"
            tech="NodeJS | React"
            description="The Taskly Task Manager is a web application designed to streamline task organization and productivity. Built using the MERN stack, the application allows users to create, update, filter, and delete tasks. Features include an intuitive dashboard, calendar integration, and weekly AI-generated reports. The project showcases expertise in CRUD operations, user authentication (session-based), and front-end development with React. Taskly demonstrates the integration of APIs to enhance functionality and interactivity."
            styles="TailwindCSS"
            setIsPopupOpen={setIsPopupOpen}
          />
          <Card
            title="Data Imputation"
            backgroundImage={"Assets/projects/impute.png"}
            projectCode="https://github.com/NonhlanhlaMazibuko/Data_science_projects/tree/main/Imputation"
            projectDemo="/#projects"
            tech="Jupyter Notebook"
            description="This project explored the impact of data imputation techniques on analysis results, focusing on missing data handled under the assumption of Missing at Random (MAR). Using Python and the KNNImputer from sklearn, the assignment analyzed how imputation affected time-series data trends. A detailed report was prepared, outlining steps taken and interpretations of results, emphasizing the balance between preserving data accuracy and minimizing imputation bias."
            styles="SK-Learn | Pandas"
            setIsPopupOpen={setIsPopupOpen}
          />
          <Card
            title="Random Forest Model"
            backgroundImage={"Assets/projects/random.png"}
            projectCode="https://github.com/NonhlanhlaMazibuko/Data_science_projects/blob/main/RDKit_machine_learning/solubility_assignment(1).ipynb?short_path=39718c9"
            projectDemo="/#projects"
            tech="Jupyter Notebook"
            description="This project applied Random Forest algorithms to a chemistry dataset to predict chemical properties and behaviors. Using RDKit, molecular descriptors were generated to represent the chemical structures numerically. The workflow included data preprocessing, feature selection, and model training to evaluate the predictive accuracy of the random forest model. Key metrics such as accuracy, precision, and feature importance were analyzed to interpret the results. The project highlighted the effective use of machine learning in chemistry, demonstrating skills in feature engineering, model evaluation, and leveraging domain-specific libraries like RDKit."
            styles="SK-Learn | Pandas"
            setIsPopupOpen={setIsPopupOpen}
          />
          <Card
            title="K-Means Clustering"
            backgroundImage={"Assets/projects/kmeans.png"}
            projectCode="https://github.com/NonhlanhlaMazibuko/Data_science_projects/tree/main/KMean%20Model"
            projectDemo="/#projects"
            tech="Jupyter Notebook"
            description="This project focused on applying dimension reduction techniques to geological data to simplify complex datasets while preserving key patterns and spatial relationships. The analysis aimed to identify meaningful insights by reducing data redundancy and noise. Using methods like Principal Component Analysis (PCA), explored trends and visualized the results on geospatial maps. Techniques such as Inverse Distance Weighting (IDW) and Kriging were also incorporated to interpolate and visualize missing or reduced data values effectively."
            styles="SK-Learn | Pandas"
            setIsPopupOpen={setIsPopupOpen}
          />
          <Card
            title="PowerBI Dashboard"
            backgroundImage={"Assets/projects/powerbi.png"}
            projectCode="https://github.com/NonhlanhlaMazibuko/Data_science_projects/tree/main/Power_BI_Student_reports"
            projectDemo="/#project"
            tech="PowerBI"
            description="The Student Performance Dashboard is developed to analyze and visualize
                        educational performance metrics using Power BI. Key features included 
                        interactive visualizations of grades, attendance, and other academic factors. 
                        Filters and drill-through to uncover trends and relationships 
                        affecting student outcomes. This project demonstrated proficiency in data cleaning, 
                        dashboard design, and actionable insights using Power BI's advanced features."
            styles="Dax"
            setIsPopupOpen={setIsPopupOpen}
          />
        </div>
      </div>
    </div>
  );
};

export default Projects;