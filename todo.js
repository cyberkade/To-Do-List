let userRequest = prompt("What would you like to do next?");
const todo = [];
while (userRequest !== "quit" && userRequest !== "q") {
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
      prompt("Type the number of the todo you want to delete")
    );
    if (!Number.isNaN(removed)) {
      const deleted = todo.splice(removed, 1);
      console.log(`${deleted} was removed`);
    } else {
      console.log("Unknown index");
    }
  }
  userRequest = prompt("What would you like to do next?");
}
alert("YOU QUIT THE APP");
console.log("YOU QUIT THE APP");
