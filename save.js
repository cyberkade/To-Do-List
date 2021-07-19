const form = document.querySelector('#form');
const todo = [];
form.addEventListener('submit',(e)=>{
  e.preventDefault();
  let userRequest = form.elements.req.value;
  if (userRequest === "list") {
    console.log("**********");
    for (let i = 0; i < todo.length; i++) {
      console.log(`${i + 1}: ${todo[i]}`);
    }
    console.log("**********");
  } else if (userRequest === "new") {
    const userAction = prompt("Specify Your New Todo");
    console.log(`${userAction} added to the list!`);
    todo.push(userAction);
  } else if (userRequest === "delete") {
    const removed = parseInt(
      prompt('Enter the number of the todo you want to delete (Enter 0 to delete nothing).')
    );
    if (removed === 0){
      alert('Nothing was deleted');
    } else if(!Number.isNaN(removed)) {
      const deleted = todo.splice(removed -1, 1);
      console.log(`${deleted} was removed`);
    }else{
      console.log("Unknown index");
    }
  }
});


