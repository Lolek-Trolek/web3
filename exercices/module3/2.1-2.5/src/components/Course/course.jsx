import Header from '../Header/header';
import Content from '../Content/content';
import '../Content/content.css';

const Course = ({ courses }) => {
  
  return (
    courses.map(course =>{
      const total = course.parts.reduce((sum,part)=>sum+part.exercises,0);
      return (
      <div key={course.id}>
      <Header name={course.name} />
      <Content className ='app-container' parts={course.parts}/>
      <p><strong>Total of {total} exercises</strong></p>
      </div>
      )
    }
    )
  );
};

export default Course;
