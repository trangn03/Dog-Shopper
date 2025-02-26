module.exports = (req, res) => {
  const dogs = [
      { id: 1, name: "Tini", breed: "CHIHUAHUA", price: "1000", description: "This is a crazy tiny dog with big alien eyes",
        imageUrl: "https://images.unsplash.com/photo-1605639156481-244775d6f803?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGV8fHx8&auto=format&fit=crop&w=687&q=80" },
      { id: 2, name: "Butty", breed: "CORGI", price: "1500", description: "This is a cute dog with a heart-shaped butt",
        imageUrl: "https://images.unsplash.com/photo-1597633425046-08f5110420b5?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGV8fHx8&auto=format&fit=crop&w=1170&q=80" }
  ];
  
  res.status(200).json(dogs);
};
