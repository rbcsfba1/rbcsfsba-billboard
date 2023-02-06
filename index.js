// document.addEventListener("load", () => {
//   const webview = document.querySelector("iframe#webview");
//   webview.addEventListener("load", (event) => {
//     console.log(event);
//     debugger;
//   });
// });

document.querySelector("iframe#webview").onload = (event) => {
  console.log(event);
  debugger;
};

debugger;