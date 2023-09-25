2. its all brand new and thats freaking me out in a casual way

3. nothing

4. JSX stands for javascript XML

5. What are the benefits of using React over Traditional DOM?

React uses a virtual DOM, as well as encourages using components to build and reuse as seen fit.

6. Describe how we can define a mounting callback in a functional component.

useEffect hook? lets you perform side effects

7. In what scenarios will a component re-render?
   React components re-render when there is a change in their states, change in the hooks, or if its parent re-renders.
8. What is the children prop?
   Allows us to pass components as data to other components.

9. When using map to render components to the page, what prop must we pass? And why do we need it?

Need to pass a unique 'key' prop to each rendered component. this helps react keep track of items within the mapped code, and keepsthe component stable.

10. What is the difference in HTML output when using <></> vs. <div></div> tags?

If you use <div></div> you'll get a div and it's children in DOM, which takes up room in our HTML code. If you use <></> you'll get only the children in DOM?

11. In React how can we lend access to state that exists in a parent component to a child component?

We have to pass the state data as props to the child component. child components can recieve and use data from its parent.

12. What is a virtual DOM? And how is this concept used by React?
    Virtual DOM is an in memory copy of the DOM. In conjunction with React, we aren't updating or interacting directly with the real DOM, we are interacting with the virtual DOM. React changes the DOM itself.

13. What is a "Container" component? What is their function?

The catergory of "container" components covers components with logic that fetch data and render other components based on state.

const [count, setCount] = useState(initial ?? 0);

const handleClick = () => {
setCount(count + 1);
};
