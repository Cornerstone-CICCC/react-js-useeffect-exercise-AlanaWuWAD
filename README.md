[![Review Assignment Due Date](https://classroom.github.com/assets/deadline-readme-button-22041afd0340ce965d47ae6ef1cefeee28c7c493a6346c4f15d667ab976d596c.svg)](https://classroom.github.com/a/S-jE14JC)
# React.js - useEffect on State Change

**Goal:** To practice using `useEffect` to respond to state changes in a component.

## Instructions

Set up your React project using Vite:  
`npm create vite@latest effect-on-state`

In this exercise, you will work in a single file: `App.tsx`.

You’ll create **three separate pieces of state**, and use `useEffect` to run some code **when each state changes**.

## Tasks

### 1. Message Logger

- Create a button labeled **"Send Message"**.
- When clicked:
  - Set a `message` state to `"Hello from React!"`.
- Use `useEffect` to watch `message`.
  - When `message` changes, log it to the console.

### 2. Like Counter

- Create a button labeled **"Like"**.
- Each click should increment a `likes` state by 1.
- Use `useEffect` to show an `alert()` every time `likes` changes.
  - Example: `"Likes updated to 3!"`

### 3. Color Box

- Create a button labeled **"Change Color"**.
- Each click should toggle a `color` state between `"red"` and `"blue"`.
- Use `useEffect` to log the current color to the console.

## Requirements

- Use `useState` and `useEffect` inside `App.tsx`.
- No need to create separate component files.

## Example Layout

```tsx
return (
  <div>
    <h2>Message Logger</h2>
    <button>Send Message</button>

    <h2>Like Counter</h2>
    <button>Like</button>

    <h2>Color Box</h2>
    <button>Change Color</button>
    <div style={{ width: 100, height: 100 }}>Color Box</div>
  </div>
);
```
