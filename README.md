# Next.js 15 Unhandled Promise Rejection Bug

This repository demonstrates a common error in Next.js 15 applications involving unhandled promise rejections within page components.  The issue stems from a `fetch` call within the `About` page that isn't properly handled, leading to a race condition.

## Problem

The `About` page makes a `fetch` request to an API route. The `fetch` promise isn't awaited, meaning the component renders before the response arrives.  This results in the data being undefined or missing until the request completes, potentially leading to unexpected behavior or errors.

## Solution

The solution involves using `async/await` to ensure the data is fetched before the component renders.  This prevents the race condition and guarantees that the data is available when the component renders.  This also showcases how to use error handling to provide fallback content or messages if the API request fails.

## Reproduction Steps

1. Clone the repository.
2. Navigate to the project directory.
3. Run `npm install`.
4. Run `npm run dev`.
5. Visit `/about` in your browser.  Observe the missing data initially, followed by it appearing once the fetch is complete.

## How to fix

Use async/await to ensure the data is fetched before the component renders. Error handling is also implemented to manage potential API request failures.