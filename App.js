const heading = React.createElement("h1", {id: "test"}, "Hello World using React :) ");

console.log(heading); // returns an React object 

const root = ReactDOM.createRoot(document.getElementById("root"));

console.log("root", root); /// object of type ReactDOM

root.render(heading); // rrot.rneder takes the React object, takes the h1 tag and object that is understood by browser and convertig it into javascript and putting it in the browser.