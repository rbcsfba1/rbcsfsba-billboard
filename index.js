const WEBVIEW_SRC = `https://docs.google.com/presentation/d/e/${PRESENTATION_ID}/embed?rm=minimal&embedded=true&start=${AUTOSTART}&loop=${LOOP}&delayms=${AUTO_ADVANCE_DELAY_SEC * 1000}`;

const iFrame = document.querySelector("iframe#webview");
const run = async () => {
  iFrame.src = WEBVIEW_SRC;
  console.log("[WEBVIEW]: Refreshed");
  setTimeout(run, REFRESH_INTERVAL_SEC * 1000);
};

run();
