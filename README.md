# semhar-z.github.io


# Chicago Businesses App

A React application that displays a searchable and filterable list of businesses licensed in Chicago. The app fetches data from the [City of Chicago Business Licenses API](https://data.cityofchicago.org/resource/uupf-x98q.json) and allows users to search by business name and or filter by business type.

## Technologies Used

- **React**: To build a responsive and interactive user interface.
- **JavaScript**: For implementing the app's logic.
- **HTML/CSS**: For structuring and styling components.
- **Fetch API using AJAX**: To retrieve business license data from the API.

## Features

- Search businesses by name using the search bar.
- Filter businesses by type using a dropdown menu.
- Displays business name, type, and address in a user-friendly layout.
- Gracefully handles loading and error states.
- map feature is integrated in the application by using a library Leaflet with the react-leaflet package.

## Approach

1. **Component-Based Design**: 
   - `BusinessList`: Fetches data, manages state, and applies search and filter logic.
   - `BusinessItem`: Displays individual business details.
   - `App`: Serves as the root component.

2. **Data Fetching and State Management**:
   - The app uses `useState` for managing business data, search queries, and filter selections.
   - Data is fetched from the API on component mount using `useEffect`.

3. **Performance Optimization**:
   - Filtering and searching operations are performed on the client side.
   - Simple styles were used for styling components using styles.css file.

## Unsolved problems
   
   - I wanted to add routes and nav bars for this project but time did permit. 


## Live Site

[Click here to view the live site](#)(https://chicagobusinessfinder.netlify.app/).

## git repo

https://github.com/semhar-z/semhar-z.github.io.git