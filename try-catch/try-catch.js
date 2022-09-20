
// 1.An errorless example: shows alert (1) and (2):
// try {
//     console.log('Start of try runs');
//     console.log('End of try runs');
// } catch (error) {
//     console.log('Catch is ignored,because there are no errors');
// }

// 2. An example with an error: shows (1) and (3)

// try {
//     console.log('Start of tey runs');
//     lll; //ReferenceError: lll is not defined
//     console.log('End of try (never reached)');
// } catch (error) {
//     console.log(error, 'error');
//     console.log('Error has occurred!`');
// }
// 3.try catch works synchronously
// if an exception happens in 'scheduled ' code,like in  setTimeout,then try...catch won't catch it
// try {
//     setTimeout(function(){
//         noSuchVariable //script will die here
//     },1000)
// } catch (error) {
//     console.log(`won't work`)
// }

// That’s because the function itself is executed later, when the engine has already left the try...catch construct.
// To catch an exception inside a scheduled function, try...catch must be inside that function:

// setTimeout(function() {
//     try {
//       noSuchVariable; // try...catch handles the error!
//     } catch(error) {
//         console.log(error, 'error');
//       console.log( "error is caught here!" );
//     }
//   }, 1000);

//4.Error object
// When an error occurs, JavaScript generates an object containing the details about it. The object is then passed as an argument to catch:

//   try {
//     lalala; // error, variable is not defined!
//   } catch (err) {
//     console.log(err.name); // ReferenceError
//     console.log(err.message); // lalala is not defined
//     console.log(err.stack); // ReferenceError: lalala is not defined at (...call stack)
  
//     // Can also show an error as a whole
//     // The error is converted to string as "name: message"
//     console.log(err); // ReferenceError: lalala is not defined
//   }

  //5. using try...catch
  // if we don't need error details,catch may omit(省略) it

//   let json = "{ bad json}";
//   try {
//     let user = JSON.parse(json); // <-- when an error occurs...
//     console.log( user.name ); // doesn't work
//   } catch (error) {
//     // ...the execution jumps here
//     console.log( "Our apologies, the data has errors, we'll try to request it one more time." );
//     console.log( err.name );
//     console.log( err.message );
//   }

// throw new error

let json = '{ "age": 30 }'; // incomplete data

try {

  let user = JSON.parse(json); // <-- no errors

  if (!user.name) {
    throw new Error("Incomplete data: no name"); // (*)
  }

  console.log( user.name );

} catch (err) {
   console.log( "JSON Error: " + err.message ); // JSON Error: Incomplete data: no name
}
