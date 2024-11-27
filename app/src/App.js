function hello() {
  return "Hello World!";
}

function App() {
  return (
    <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh', backgroundColor: '#f0f0f0' }}>
      <h1 style={{ fontSize: '8vw', fontWeight: 'bold', textAlign: 'center' }}>
        {hello()}
      </h1>
    </div>
  );
}

export default App;
