// Asuncronous code: meaning it does not happen immediately.
const fetchData = () => {
    const promise = new Promise((res, rej) => {
        setTimeout(() => {
            res('Done!');
        }, 1500);
    });
    return promise;
};

setTimeout(() => {
    console.log('Timer is done!');
    fetchData()
      .then(text => {
        console.log(text);
        return fetchData();
      })
      .then(text2 => {
        console.log(text2);
      });
  }, 2000);

// syncronous code: meaning they happen imediately. there is no delay other that your harware
console.log('Hello');
console.log('Hi');

//  when this code is run with node play2.js you will see 'hello' & 'hi' before you will see 'timer is done'. This is because JS will recognize the Asynch code at the top but will move on to the Synch code and the will run the Asynch code after the synch code is executed.

// PROMISES
