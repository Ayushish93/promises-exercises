
/**
 * 
 * EXERCISE 1
 * 
 * @returns {Promise<3>}
 */
function makePromiseResolveWith3(){
  /* IMPLEMENT ME! */
  var p = new Promise((resolve, reject) =>
                    {
    var value = 3;
    if(value === 3)
    {
        resolve(value);
    }
    else
    {
        reject(value);
    }
} ) 
p.then((message) =>
       {
    console.log("promise" + message);
})};


/**
 * 
 * EXERCISE 2
 * 
 * @returns {Promise<,"Boo!">}
 */
function makePromiseRejectWithBoo(){
  /* IMPLEMENT ME! */
   var str = 'Boo';
    var p = new Promise((reject, resolve)  =>
                        {
        if(str === 'Boo')
        {
            reject('Boo');
        }})  
    p.then((message) => {
        console.log("Promise" + message);
    }).catch((message) =>{
        console.log(message);
    })
}

/**
 * 
 * EXERCISE 3
 * 
 * @param {boolean} itShouldResolve - Whether the promise should resolve or reject
 * @returns {Promise<undefined, undefined>}
 */

function makePromiseWithConstructor(itShouldResolve){
  return new Promise((resolve, reject) => {
    /* If itShouldResolve is true, call resolve */
    /* If itShouldResolve is false, call reject */
    var ans = itShouldResolve;
      if(ans === true)
      {
          resolve("resolved called");
      }
      else
      {
          reject("reject called");
      }
  });   promise.then((message) => { console.log("resolved"+ message);}).catch((message) => { console.log("reject" + messsage);}
  });
}

/**
 * 
 * EXERCISE 4
 *
 * @param {any} value 
 * @param {number} delayInMs 
 * @return {Promise<any>} - A promise that will resolve with the value after delayInMs milliseconds
 */
function makeDelayPromise(value, delayInMs){
  /* Return a promise that resolves with the value after delayInMs */
  var v = Number(value); var d = Number(delayInMs);
return new promise((resolve, reject) =>
                    {
    setTimeout(function()
               {
        resolve(v);
    }, d); 
});
promise.then((message) => {
    console.log("success" + message);
});
}

module.exports = {
  makePromiseResolveWith3,
  makePromiseRejectWithBoo,
  makePromiseWithConstructor,
  makeDelayPromise,
};
