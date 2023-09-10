const myPromise = new Promise((resolve, reject) => {
    // Simulate an asynchronous operation
    setTimeout(() => {
      const dataObject = {
        name: 'John Doe',
        age: 30,
        email: 'johndoe@example.com',
      };
      // Resolve the promise with the object as data
      resolve(dataObject);
    }, 1000); // Simulating a delay of 1 second
  });
  
  myPromise
    .then((data) => {
      console.log('Promise resolved with data:', data);
      // You can access the object's properties here
      console.log('Name:', data.name);
      console.log('Age:', data.age);
      console.log('Email:', data.email);
    })
    .catch((error) => {
      console.error('Promise rejected with error:', error);
    });




    const mYPromise = new Promise((resolve, reject) => {
      // Asynchronous operation
    
      let x=true
      if (x==true) {
        setTimeout(()=>{
            resolve('Success data');
        })
        
      } else {
        reject('Error message');
      }
    });
    
    myPromise
      .then((data) => {
        console.log('Promise resolved with data:', data);
        // Handle success here
      })
      .catch((error) => {
        console.error('Promise rejected with error:', error);
        // Handle error here
      });
    
      fetch("https://jsonplaceholder.typicode.com/users").then((content)=>{
        let jsonData = content.json()
        console.log(jsonData)
        return jsonData
      })
      .then((resp)=>{
        console.log(resp);
      })
    
  
