# Frontend_Task-Taiyo

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

### `Folder Structure`

    - contact-manager
        - src
            - components
                - countryData
                    - CountryData.tsx
                    - CountryData.css
                - globalData
                    - GlobalData.tsx
                    - GlobalData.css
                - graphData
                    - GraphData.tsx
                    - GraphData.css
                - sidebar
                    -Sidebar.jsx
                    -Sidebar.css
            - icon
                - placeholder.png
            - pages
                - addContact
                    - AddContact.tsx
                    - AddContact.css
                - contact
                    - Contact.tsx
                    - Contact.css
                - dashboard
                    - Dashboard.tsx
                    - Dashboard.css
                - editContact
                    - EditContact.tsx
                    - EditContact.css
            - redux
                - action.ts
                - actionType.ts
                - reducer.ts
                - store.ts
        - App.css
        - App.tsx
        - index.tsx

### `About`

There are basically two parts of this app, in the first part simple CRUD (Create, Read, Update and Delete) Operations have to be done by  React, Redux with Typescript.  In the second part, we have to fetch data from some API and display it.  We have to use React-Query to fetch the data and chart.js to display the graph.
