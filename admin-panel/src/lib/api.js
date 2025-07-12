// export async function getItems() {
//   const res = await fetch('http://localhost:5000/api/items/pending');
//   return res.json();
// }

// // 10. tailwind.config.js (for reference)
// /** @type {import('tailwindcss').Config} */
// module.exports = {
//   content: ["./src/**/*.{js,jsx}"],
//   theme: {
//     extend: {},
//   },
//   plugins: [],
// };


// lib/api.js
export async function getItems() {
  return [
    { id: 1, title: 'Kurta Set', status: 'Pending' },
    { id: 2, title: 'Lehenga', status: 'Pending' },
    { id: 3, title: 'Blazer', status: 'Pending' },
  ];
}
