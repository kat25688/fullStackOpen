// 1.1 Course Information, Step 1

const App = () => {
  // const-definitions

  const course = "Half Stack application development";
  const part1 = "Fundamentals of React";
  const exercises1 = 10;
  const part2 = "Using props to pass data";
  const exercises2 = 7;
  const part3 = "State of a component";
  const exercises3 = 14;
  const total = exercises1 + exercises2 + exercises3;

  return (
    <div>
      <Header course={course} />
      <Content
        part1={part1}
        part2={part2}
        part3={part3}
        exercises1={exercises1}
        exercises2={exercises2}
        exercises3={exercises3}
      />
      <Total total={total} />
    </div>
  );
};

const Header = (props) => {
  return (
    <div>
      <h1>
        {props.course} {props.exercises}
      </h1>
    </div>
  );
};

const Part = (props) => {
  return (
    <p>
      {props.part} {props.exercise}
    </p>
  );
};

const Content = (props) => {
  return (
    <div>
      <p>
        <Part part={props.part1} exercise={props.exercises1} />
        <Part part={props.part2} exercise={props.exercises2} />
        <Part part={props.part3} exercise={props.exercises3} />
      </p>
    </div>
  );
};

const Total = (props) => {
  return (
    <div>
      <p>Number of exercises {props.total}</p>
    </div>
  );
};

export default App;
