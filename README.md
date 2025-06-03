## NirmitBistro 🍽️

A fully responsive, single-page restaurant menu web app built using **React** and **Redux**, designed to deliver a smooth user experience for browsing and ordering meals. 

🟢 **Live Site:**  
[https://nirmit-1606.github.io/NirmitBistro/](https://nirmit-1606.github.io/NirmitBistro/)

### 🛠️ Overview

NirmitBistro is a dynamic food menu application where users can:

- Browse a collection of meals fetched from an external API
<!-- - View meal descriptions, calories, pricing, and dietary tags -->
- Add items to a cart and manage item quantities
- Preview the cart instantly via a dropdown interface
- Persist cart data across sessions with localStorage
<!-- - Deploy the entire application via GitHub Pages -->

### ✨ Key Features

- 📦 Redux Cart Management: Users can add, increment, and decrement items, or remove them entirely.
- 🛒 Cart Icon with Preview: Animated cart icon updates in real-time and shows a hover-based cart preview.
- 🍲 Recipe Cards: Display key details with consistent layout.
- 🔄 Persistent Cart: Items remain in the cart even after refreshing or closing the browser.
- 🎨 Responsive Design: Layout adapts well across devices.
- 📂 Custom Subpath Hosting: App is configured to work under GitHub Pages subdirectory (/NirmitBistro) using basename and homepage settings.

### 📦 API

The app fetches real meal data from:
[https://dummyjson.com/recipes](https://dummyjson.com/recipes)