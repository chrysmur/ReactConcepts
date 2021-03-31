import store from "./store";
import reactDom from "react-dom";
import { connect, Provider } from "react-redux";
import updateInfo from "./actions"; //Dispatch this


//Getting name from the store, we only need to map the state.name to the name used in our app
const mapStateToProps = (state) => {
  return {
    name: state.name,
  };
};

// To update the store, we dispatch our action by calling dispatch with out function creator with name
const mapDispatchToState = (dispatch) => {
  return {updateInfo: name => dispatch(updateInfo(name))}
};


const NameManager = () => {
  // We can update the state for this one 
  const handleSubmit = (e) => {
    e.preventDefault();
  };

// It does not make sense to do this but... This state that is changing rapidly should be store in the component state,
  const handleChange = (e) => {
    props.updateInfo(e.target.value);
  };
  
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input type="text" placeholder="Enter name" onChange={handleChange} />
      </form>
      <p>{props.name}</p>
    </div>
  );
};

const NameManager = connect(mapStateToProps, mapDispatchToState)(NameManager);
const element = (
  <Provider store={store}>
    <NameManager />
  </Provider>
);

reactDom.render(element, document.getElementById("root"));
