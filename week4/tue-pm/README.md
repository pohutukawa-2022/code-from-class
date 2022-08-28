# Stateful React Components

## Agenda

* What is state? And how is it different than props?
  - **State** is data that is _intended to **change**_ (and can be rendered). State is only for the component it’s defined in.
  - **Props** are data that are passed in, do not change and are only rendered. Props are passed in from a parent component and are read-only in child components.
* Making state changes from user events.

## Code demo

### Add component state

* Start with a functional component
* Declare a new state variable (`count`) using React's `useState` function
* Define the initial value (`0`) by passing it to `useState`

  ```js
  function Counter() {
    const [count, setCount] = useState(0)
  }
  ```

### Add an event handler to increase values

* Add a button to fire the event
  - Use the button's `onClick` attribute/prop
* Add a `handleClick` function to handle the click event
  - Use `setCount(newValue)` in the event handler to change state values

  ```js
  function Counter() {
    const [count, setCount] = useState(0)

    function handleClick () {
        setCount(count + 1)
    }

    return (
      <>
        <div>Current count: {count}</div>
        <button onClick={handleClick}>Increase</button>
      </>
    )
  }
  ```

### Add an input to update the state

* Add an `<input>` element to allow the user to change the count directly
  - Use `onChange` on the input element
* Add a `handleChange` to handle the change event
  - The event object (`event`) is passed to the handler function
  - Use `setCount(newValue)` in the event handler to change state values
  - The value from an `<input>` will always be a string so be sure it is a value number

  ```js
  function Counter () {
    const [count, setCount] = useState(0)

    function handleClick () {
        setCount(count + 1)
    }

    function handleChange (event) {
        const {name, value} = e.target
        const newCount = Number(value)
        if (isNaN(newCount)) return
        setCount(count + 1)
    }

    return (
      <>
        Make count: <input name="count" value={count} onChange={handleChange} />
        <p>Current count: {count}</p>
        <button onClick={handleClick}>Increase</button>
      </>
    )
  }
  ```

* The value of `count` always gets included when the component is rendered. As soon as you change the value in the input box, the `handleChange` handler fires and updates the state with the numeric version of the new value as soon as `setCount` is called. Also, and very importantly, that forces React to re-render the component with the new value which then replaces the input with the value you just entered in the rendered output for the user to see.
