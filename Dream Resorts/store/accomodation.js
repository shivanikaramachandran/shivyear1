document,addEventListener('alpine:init', () => {
    Alpine.store('accomodation', {
      rooms: [
        {
          type: 'Single  Room',
          price: 25000,
        },
        {
          type: 'Double Room',
          price: 35000,
        },
        {
          type: 'Triple Room',
          price: 45000,
        },
        {
          type: 'Suite Room',
          price: 55000,
        }
      ]
  
  });
  });