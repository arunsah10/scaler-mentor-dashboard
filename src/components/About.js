import React from "react";
const About = () => {
  // const a=useContext(markContext);
  // useEffect(()=>{
  //   a.update();
  // })
  return (
    <div>
      {/* This is About {a.state.name} and he is in class {a.state.class}; */}
      <div class="accordion" id="accordionExample">
        <div class="accordion-item">
          <h2 class="accordion-header">
            <button
              class="accordion-button"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#collapseOne"
              aria-expanded="true"
              aria-controls="collapseOne"
            >
              Login Details
            </button>
          </h2>
          <div
            id="collapseOne"
            class="accordion-collapse collapse show"
            data-bs-parent="#accordionExample"
          >
            <div class="accordion-body">
              <h1>Mentor 1</h1>
              <p>
                <strong>email:</strong> test64@gmail.com
                <br />
                <strong>password:</strong> test@123
              </p>
              <h1>Mentor 2</h1>
              <p>
                <strong>email:</strong> result63@gmail.com
                <br />
                <strong>password:</strong> result@123
              </p>
              <h1>Mentor 3</h1>
              <p>
                <strong>email:</strong> result45@gmail.com
                <br />
                <strong>password:</strong> result@123
              </p>
            
            </div>
          </div>
        </div>
        <div class="accordion-item">
          <h2 class="accordion-header">
            <button
              class="accordion-button collapsed"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#collapseTwo"
              aria-expanded="false"
              aria-controls="collapseTwo"
            >
              About the project
            </button>
          </h2>
          <div
            id="collapseTwo"
            class="accordion-collapse collapse"
            data-bs-parent="#accordionExample"
          >
            <div class="accordion-body">
            This Evaluation Dashboard project is designed to provide a platform for mentors to manage student evaluations securely and efficiently. Mentors can either log in using their credentials or sign up if they are new users. Once authenticated, mentors can add students to their dashboard and assign marks based on project criteria such as ideation, execution, presentation, communication, and viva. The system ensures privacy by allowing each mentor to view and evaluate only their own students, maintaining confidentiality and fairness. The dashboard also calculates the total marks obtained by each student automatically, providing mentors with comprehensive insights into student performance. Overall, the project streamlines the evaluation process while prioritizing data security and user authentication for a seamless user experience.
            </div>
          </div>
        </div>
        {/* <div class="accordion-item">
          <h2 class="accordion-header">
            <button
              class="accordion-button collapsed"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#collapseThree"
              aria-expanded="false"
              aria-controls="collapseThree"
            >
              Accordion Item #3
            </button>
          </h2>
          <div
            id="collapseThree"
            class="accordion-collapse collapse"
            data-bs-parent="#accordionExample"
          >
            <div class="accordion-body">
              <strong>This is the third item's accordion body.</strong> It is
              hidden by default, until the collapse plugin adds the appropriate
              classes that we use to style each element. These classes control
              the overall appearance, as well as the showing and hiding via CSS
              transitions. You can modify any of this with custom CSS or
              overriding our default variables. It's also worth noting that just
              about any HTML can go within the <code>.accordion-body</code>,
              though the transition does limit overflow.
            </div>
          </div>
        </div> */}
      </div>
    </div>
  );
};

export default About;
