const Home = () => {
  return (
    <div style={{ 
        padding: '20px', 
        backgroundImage: 'url("https://c8.alamy.com/comp/2BBYY63/chicago-city-name-usa-travel-destination-sign-2BBYY63.jpg")',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        height: '100vh',
       }}>
      <h1>Welcome to Chicago Business Explorer</h1>
      <h3 style={{color: 'red', marginUp: '20px'}}> Discover licensed businesses in Chicago effortlessly. Use the search and filters to find
      businesses by name, type, or location. Start exploring and find what you need!</h3>
    </div>
  );
};

export default Home
