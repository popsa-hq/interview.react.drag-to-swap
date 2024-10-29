This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

# Popsa.com - React Frontend test skeleton

## Getting Started

Run the development server:

```bash
npm run dev
# or
yarn dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## Notes

## Features added: 

- image swapping done through manual code (react state, default mouse events)
- swapping through third party react-dnd-kit (see docs: [https://docs.dndkit.com/](https://docs.dndkit.com/))
- updating the "Last Updated" date/time when a user performs a swap
- allowing the user (engineers) to toggle between manual and react-dnd-kit implementation 

## Reasoning behind two implementations:

I  wanted to understand what logic was happening under the hood, rather than just relying on a third party library. At the same time, I wanted to show I could follow documentation and implement the same feature. Further, using the docs will allow for adding more advanced implementation in the future. 

## Resources: 

I used a combination of google search, documentation, youtube and stack overflow for this project. 

## Future Changes: 

I would have liked to spend more time creating more of a UI experience for the user that shows when they select an image, they can see a "ghost" image of what they selected. I find that currently the default implementation via mouse events (manual implementation) makes it easier for the user to see they are swapping images. The react-dnd-kit doesn't give the same visual cue to the user, meaning you only get the feedback when the drop has been successful.  

---

<sup>Popsa.com</sup>