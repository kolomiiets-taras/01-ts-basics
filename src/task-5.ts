type Status = "loading" | "success" | "error";

function logStatus(status: Status): void {
  if (status === "loading") {
    console.log("Loading...");
  } else if (status === "success") {
    console.log("Success!");
  } else {
    console.log("Error occurred.");
  }
}

logStatus("loading");
logStatus("success");
logStatus("error");
// logStatus("done"); // Error: Argument of type '"done"' is not assignable to parameter of type 'Status'
