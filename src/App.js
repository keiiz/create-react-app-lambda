import React from 'react';

function App() {
  const handleSubmit = () => {
    window.parent.postMessage({
      type: 'addToCart',
      variantId: 12345678, // Replace with actual variant ID
      quantity: 1,
      metadata: {
        '_customization': 'testing999'
      }
    }, '*'); // Replace '*' with your Shopify store's origin for added security
  };

  return (
    <div className="App" style={{ padding: '20px', textAlign: 'center' }}>
      <h1>Product Customizer</h1>
      <p>Click the button to add the product to cart with customization.</p>
      <button 
        onClick={handleSubmit}
        style={{
          padding: '10px 20px',
          fontSize: '16px',
          backgroundColor: '#4CAF50',
          color: 'white',
          border: 'none',
          borderRadius: '5px',
          cursor: 'pointer'
        }}
      >
        Add to Cart
      </button>
    </div>
  );
}

export default App;
