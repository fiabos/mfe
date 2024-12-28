import React   from 'react';
import ReactDOM from 'react-dom';
import App from './App';
// mount function
const mount = (el) => {
    ReactDOM.render(
        <App/>,
        el
    );
}


// check if isolated
if (process.env.NODE_ENV === 'development') {
    const el = document.querySelector("#dev-marketing");
    if (el) {
        mount(el);
    } 
}
// export
export { mount };
