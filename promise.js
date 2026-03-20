function registerUser() {
  return new Promise((resolve) => {
    setTimeout(() => {
      console.log("User registered");
      resolve();
    }, 1000);
  });
}

function sendEmail() {
  return new Promise((resolve) => {
    setTimeout(() => {
      console.log("Email sent");
      resolve();
    }, 1000);
  });
}

function saveLog() {
  return new Promise((resolve) => {
    setTimeout(() => {
      console.log("Log saved");
      resolve();
    }, 1000);
  });
}
registerUser()
  .then(() => sendEmail())
  .then(() => saveLog())
  .then(() => {
    console.log("All tasks completed");
  })
  .catch((error) => {
    console.error(error);
  });
