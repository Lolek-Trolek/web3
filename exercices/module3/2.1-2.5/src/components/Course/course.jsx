import Header from '../Header/header';
import Content from '../Content/content';
import '../Content/content.css';

const Course = ({ course }) => {
  return (
    <div>
      <Header name={course.name} />
      <Content className ='app-container' parts={course.parts} />
    </div>
  );
};

export default Course;
