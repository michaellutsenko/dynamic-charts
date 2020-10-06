# Dynamic charts

## How to run

1. Run `npm install` to install dependencies
2. Run `npm start` to launch the app in development mode
3. ??????
4. PROFIT

## Changelog

_(since the initial demonstration, that is)_

- Changed the structure of the store (now everything depends on indices instead
  of having to run `Object.keys()` every single time)
- Changed the API call. Now we handle network errors right there. See
  `src/api/index.js` for commentaries
- Updated and simplified the scheduler logic. See `src/scheduler.js`
- The chart renderer actually works now!

## Developer's notes

The first thing I did after the discussion was changing the structure of the
store. I liked the idea of removing `Object.keys()` and instead have everything
depend on indices. This led to recurring calculation of indices in action
creators. While changing the scheduler to work with the new store structure, I
realised that we already have the required indices right there, so it allowed me
to get rid of unneeded extra calculations

Turns out, `Recharts` doesn't really allow for a different data structure, so I
had to add an additional step to format the data into the shape that recharts
could swallow. See `src/App.js:18`.

**What could be improved:**

- When creating multiple charts, they appear out-of-sync. I know they don't have
  to be synchronised, but they can be. I see two ways of solving this: one would
  be sending one request every second and just increasing the number of
  requested points, the other would be wrapping the calls with
  `Promise.allSettled()`
- The code structure is suitable for a small project, but on a real large-scale
  project this structure wouldn't have been used as it's hard to extend.
- The extra step to format the data into a recharts-friendly shape - I'm not
  happy about it. I believe it could be improved, but I'm too tired to be
  bothered right now
- Error handling for both API calls and store. We've discussed several ideas,
  what I have right now is extremely basic (but it works)
- There's a significant amount of logic that should be covered with tests

**Just for laughs**

In `src/App.js:57`, change the `isAnimationActive` prop to `true` and reload the
app. Enjoy the snake race :D
