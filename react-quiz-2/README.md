1 hannah

2 Which features or concepts of React do you feel like you are struggling with the most?

Still just getting my head around the intricacies of Firestore and how it interacts with React

3 Which features or concepts in React do you feel most comfortable with?

Routing maybe

4 In React Router DOM how can we gain access to the url parameters within a functional component?

We import components that are the different pages we want to access, using the useParams hook that React Router DOM creates. An example looks like--- import { BrowserRouter, Routes, Route } from 'react-router-dom'; and then importing the other 'pages' import LandingPage from './pages/LandingPage/LandingPage';

5 In React Router DOM how can I redirect to another page? Please provide some pseudocode!

To redirect to another page in an app using React Router DOM, we can use the 'Redirect' component. We import { Redirect } from 'react-router-dom';

const newPage = ({ shouldRedirect }) => {
if (shouldRedirect) {
return <Redirect to="/new-page" />;
}
};

6 When should we opt to use Context over state hooks in react?

Context is an alternative way to pass state down the component tree instead of props, so we should use it when passing data to a deep-level child component to reduce having to pass it though every single intermediate component.

7 What is a virtual DOM? And how is this concept used by React?

A virtual DOM is an in memory copy of the DOM, which React utilizes to do batch DOM updates, which depending on the code can result in faster repaint. These updates are done after React uses a diffing algorithm to check what parts of the virtual DOM have been changed, as our code using React doesn't update the DOM directly.

8 When using React Router DOM, what component do we have to wrap our application with? Why do we need to use this component?

We wrap our app with <BrowserRouter> as it is a router implementation that uses the HTML5 history API to sync the UI with the URL. We need <BrowserRouter> to store the current location in the browsers address bar and to help us navigates through the subsequent <Routes>.

9 What is the difference between firebase and firestore?

Firebase is the app development platform that has a focus on backend services, whilst Firestore is a NoSQL document-based database that Firebase provides. Firestore lets us store, retrieve and manage large amounts of data.

10 How can we get a DocumentReference from Firestore?

We have to import our database from our Firestore project, then we get the document reference by doing something like const docRef = doc(db, 'movies', id); We are specifying a path to the document.

11 What is the benefits of using Firestore over local app data?

Firestore is well suited towards live data and is similar to what we already know aka it is a doument database with a JSON-like structure. It allows real time updates and allows people on different devices to view the same database information?

12 What type of testing does React Testing Library allow us to perform?

Component testing. Encourages us to test the behaviour of our apps instead of just implementaion deatils. Allows us to test an app like a user would use it.

13 In React Router Dom, how can we redirect to a different page? (There more than 2 ways, list 2)

Redirect and useHistory

14 What is the difference between controlled and uncontrolled form components?

Controlled form components are determined by state meaning out app keeps track of the forms values at all times.The state is used to handle the form data within the component, vs an uncontrolled form component where the DOM handles the form data by itself. It is managing itself internally.



const states = [
    { label: 'New South Wales', value: 'NSW' },
    { label: 'Victoria', value: 'VIC' },
    { label: 'Queensland', value: 'QLD' },
];

const MyForm = () => {

   const MyForm = () => {
    const handleSubmit = (e) => {
        e.preventDefault();
        const formData = {
            firstName: e.target.firstName.value,
            selectedState: e.target.selectedState.value,
        };
        console.log('Form Data:', formData);
    };
    
    const handleSubmit = (e) => {
        e.preventDefault();
        console.log('Form Data:', formData);
    };

    return (
        <form onSubmit={handleSubmit}>
            <div>
                <label htmlFor="firstName">First Name:</label>
                <input
                    type="text"
                    id="firstName"
                    name="firstName"
                    value={formData.firstName}
                    onChange={handleInputChange}
                />
            </div>
            <div>
                <label htmlFor="state">State:</label>
                <select
                    id="state"
                    name="selectedState"
                    value={formData.selectedState.value}
                    onChange={handleInputChange}
                >
                    {states.map((state) => (
                        <option key={state.value} value={state.value}>
                            {state.label}
                        </option>
                    ))}
                </select>
            </div>
            <button type="submit">Submit</button>
        </form>
    );
};

function App() {
    return (
        <div className="App">
            <div>
                <Header />
            </div>
        </div>
    );
}

export default App;