```javascript
// pages/index.js
import Link from 'next/link';

export default function Home() {
  return (
    <div>
      <h1>Welcome to my Next.js app!</h1>
      <Link href="/about">
        <a>Go to About page</a>
      </Link>
    </div>
  );
}
```
```javascript
// pages/about.js

export default function About() {
  // This will cause an error because the fetch function isn't awaited
  fetch('/api/data')
    .then((response) => response.json())
    .then((data) => console.log(data));

  return (
    <div>
      <h1>About Page</h1>
      {/* The content will be rendered before the fetch request completes */}
      <p>Some content here</p>
    </div>
  );
}
```
```javascript
//pages/api/data.js

export default async function handler(req, res) {
  const data = await someExpensiveOperation();
  res.status(200).json({ data });
}

function someExpensiveOperation(){
  return new Promise(resolve => {
    setTimeout(() => {
        resolve({ message: 'This is some data'});
    }, 2000);
});
}
```