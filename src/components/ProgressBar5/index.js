// import React from "react";
// import { render } from "react-dom";
// import Styles from "./Styles";
// import Wizard from "./Wizard";
// import MyForm from "./MyForm";
// import { Field } from "react-final-form";
// import { Progress } from "reactstrap";
// import List from "./List";
// import "./progressBar.css";

// class ProgressBar5 extends React.Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//       progressValue: 25
//     };
//   }

//   handleProgress = e => {
//     var div = document.getElementById("div");
//     console.log(e);
//   };

//   handlePageChange = page => {
//     console.log(page);
//     this.setState({ progressValue: (page + 1) * 25 });
//   };

//   handlePageBack = page => {
//     this.setState({ progressValue: this.state.progressValue - 25 });
//   };

//   render() {
//     console.log(this.state.progressValue);
//     return (
//       <Styles>
//         <h1>🏁 React Final Form Example</h1>
//         <Progress color="success" value={this.state.progressValue} />
//         <Wizard
//           nextPage={this.handlePageChange}
//           previousPage={this.handlePageBack}
//           initialValues={{ employed: true }}
//           onSubmit={() => {
//             window.alert("Hello");
//           }}
//         >
//           <Wizard.Page>
//             <p>Page1</p>
//             <div id="div" onClick={this.handleProgress}>
//               <Field name="page1" component="input" type="radio" value="1" />
//               <Field name="page1" component="input" type="radio" value="2" />
//               <Field name="page1" component="input" type="radio" value="3" />
//             </div>
//           </Wizard.Page>
//           <Wizard.Page>
//             <p>Page2</p>
//             <div id="div" onClick={this.handleProgress}>
//               <Field name="page2" component="input" type="radio" value="1" />
//               <Field name="spage2" component="input" type="radio" value="2" />
//               <Field name="page2" component="input" type="radio" value="3" />
//             </div>
//           </Wizard.Page>
//           <Wizard.Page>
//             <p>Page3</p>
//             <div id="div" onClick={this.handleProgress}>
//               <Field name="page3" component="input" type="radio" value="1" />
//               <Field name="page3" omponent="input" type="radio" value="2" />
//               <Field name="page3" component="input" type="radio" value="3" />
//             </div>
//           </Wizard.Page>
//           <Wizard.Page>
//             <p>Page4</p>
//             <div id="div" onClick={this.handleProgress}>
//               <Field name="page4" component="input" type="radio" value="1" />
//               <Field name="page4" component="input" type="radio" value="2" />
//               <Field name="page4" component="input" type="radio" value="3" />
//             </div>
//           </Wizard.Page>
//         </Wizard>
//       </Styles>
//     );
//   }
// }

// export default ProgressBar5