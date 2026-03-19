# Static Product List in React

## Assignment Overview

Build a **Static Product List** display using React, focusing on rendering a list from a provided dataset without involving state management.

> While this project can be completed using Vite or Expo, the instructions below are specifically tailored for a **Vite** environment.

---

## Objective

Build a static product list display using React, focusing on rendering a list from a provided dataset without involving state management.

---

## Setup Instructions

### 1. Create the Project

```bash
npm create vite@latest my-product-list -- --template react
cd my-product-list
npm install
npm run dev
```

> **Note:** Vite uses Hot Module Replacement (HMR) via WebSockets (WS) by default. Ensure your environment allows WebSocket connections for the "Fast Refresh" feature to work correctly.

---

## Assignment Details

### Component Creation

Create a `ProductList` component (e.g., `ProductList.jsx`) that will be responsible for rendering the list of products.

### Product Data

Define a constant array named `products` in the `ProductList` component or in a separate data file. Each element should represent a product object with properties like `id`, `name`, `description`, and `price`.

**Example product object:**

```js
{ id: 1, name: "Laptop", description: "High-performance laptop for professionals.", price: 1200 }
```

### Rendering the List

- **Mapping Data:** Use the `map()` function to iterate over the `products` array and return a JSX structure for each product.
- **Structure:** Display each product's `name`, `description`, and `price` (e.g., as a card or `div`).
- **Unique Keys:** Each element must have a unique `key` prop — use the product's `id`.

### Styling (Optional)

Apply CSS to style the list and product items using inline styles, CSS stylesheets, or a CSS-in-JS library like `styled-components`.

**Goal:** Aim for a clean and organized layout where each product's information is easy to read and distinguish from others.

---

## Relevant Resources

- [React Lists & Keys](https://www.w3schools.com/react/react_lists.asp) — Learn how to handle lists and the importance of keys.
- [JavaScript Array .map()](https://www.w3schools.com/jsref/jsref_map.asp) — Understand the logic behind iterating through your data.
- [React Components](https://www.w3schools.com/react/react_components.asp) — Basics on creating and nesting components.
- [React CSS Styling](https://www.w3schools.com/react/react_css.asp) — Different methods to style your product cards.

---

## Testing

You must include:
- At least **3 normal test cases**
- At least **3 edge test cases**

Tests should be demonstrated in the video submission.

---

## Submission Checklist

- [ ] Public GitHub repository with all source code and this `README.md`
- [ ] Video demonstration (YouTube, public or unlisted) showing:
  - Program functionality
  - All test cases (3+ normal, 3+ edge cases)
- [ ] Submit GitHub repo link + YouTube link

---

## Support

If you hit a roadblock during setup or implementation, reach out via the class Slack channel.
