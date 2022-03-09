# Tech stack

The application was created using Next.js examaple with `dynamic routing` as the base template. `Docker` and `eslint` were also added to the initial setup. `Material UI` was used for component and the dfault`CSS module` setup for writing CSS.

## Styling

I've created a global stylesheet where I've declared some purpose variables for font colors and general global CSS that was needed. To overwrite Material UI styles the main app component was wrapped in a `StyledEngineProvider` as per instructions by Material UI. I've tried to follow some font and color styles from the original job addvertisement on the Unity careers page.

## Data fetching and state management

For data fetching I used `ReactQuery` library and `axios`. I am working on a small POC project for ReactQuery at the moment and wanted to use the oportunity to learn it better. I think it's a usefull library for optimising api calls, caching and a smooth user experience. It can also replace some of the global and local state management, since the data can be retrieved using ReactQuery hooks wherever it's needed. There was no need to use Redux or context in this application, but in general I would vouch for using context for global state. When combined with ReactQuery and hooks for local state, it eliminates the need to use Redux.
