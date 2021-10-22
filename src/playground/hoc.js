import React from "react";
import ReactDOM from "react-dom";


// const Info = (props) => (
//     console.log(props),
//     <div>
//         <h1>INfo</h1>
//         <p>The info is: {props.info} and {props.calambre}</p>
//     </div>
// );

// const withAdminWarining = (WrappedComponent) => {
//     return (props) => (
//         <div>
//             { props.isAdmin && <p>This is privae info. PLeaseeec</p> }
            
//             <WrappedComponent {...props} />
//         </div>
//     );
// };

// const requireAuthentication = (WrappedComponentas) => {
//     return (props) => (
//         console.log(props),
//         <div>
//             { props.isAuthenticated ? <WrappedComponentas {...props} /> : <p>Please log in to see the info</p> }
//         </div>
//     )
// }

// const AdminInfo = withAdminWarining(Info);
// const AuthInfo = requireAuthentication(Info);

// ReactDOM.render(<AdminInfo isAdmin={false} info="There are the details" calambre="Calamares"/>, document.getElementById("app"));
// ReactDOM.render(<AuthInfo isAuthenticated={true} info="sum info" calambre="Calamares"/>, document.getElementById("app"));


const AnotherComponent = (takeTheseProps) => {
    // takeTheseProps="TAKE THESE PROPS"
    return (
        console.log("takeTheseProps: ", takeTheseProps),
      <div>
        <p>Hey did you {takeTheseProps.info}</p>
      </div>
    )
  }
   
  const HOC = (ImtheAnotherComponentNow) => {
      // iTookYourProps="TAKE THESE PROPS"
    return (iTookYourProps) => (
        console.log("iTookYourProps: ", iTookYourProps),
      <div>
        <p>Hey I'm the Higher order component.</p>
   
        {<ImtheAnotherComponentNow {...iTookYourProps} />}
      </div>
    )
  }
  const RenderMe = HOC(AnotherComponent);
   
   
  ReactDOM.render(<RenderMe info="TAKE THESE PROPS" />, document.getElementById("app"));



















// const exampleLogarithmic = (n) => {
//     let j = 1;
//     for (let i = 2; j <= n; i = i*2) {
//         console.log(i);
//         j++
//     }
// }

// exampleLogarithmic(10);
