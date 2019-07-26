1. What problem does the context API help solve?
    prop drilling
1. In your own words, describe `actions`, `reducers` and the `store` and their role in Redux. What does each piece do? Why is the store known as a 'single source of truth' in a redux application?
        1) Actions are Javascript Objects that send data from the app to the store.

        2) Reducers are pure functions that take in the current state and an action, to return a newly updated state.

        3) The Store is where the app's state is located. It's the only place that state exists so every component must use actions and reducers to retrieve and update the state.


1. What is the difference between Application state and Component state? When would be a good time to use one over the other?
        1) Application state is referencing the Store's state, that is accessible to multiple components within the app through reducers and actions. Component state is the  state specific to a class component, and not accessible anywhere except to child components it may pass props to.

        2) In redux, we'll generally use Application state for handling the app's data; but component state for handling component's methods, like setting the input of a form to the component's local state, to send that data back to the application's state and update it universally.

1. Describe `redux-thunk`, what does it allow us to do? How does it change our `action-creators`?
        1) It's a specific middleware for Redux that gives our actions access to dispatch() to dispatch specifically the actions needed in each action creator. This also allows us to work with asynchronous functions being called with the action creator.

1. What is your favorite state management system you've learned and this sprint? Please explain why!
        Context API because I always have trouble passing props down correctly. It makes it easier to pass props directly to a component as needed rather than goin down a chain of components and easily missing something that breaks the whole application.
