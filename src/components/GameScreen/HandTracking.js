import Handsfree from "handsfree";
import "handsfree/build/lib/assets/handsfree.css";

const HandGesture = () => {
  // Enable Mediapipe's "Hands" model
  const handsfree = new Handsfree({
    hands: {
      enabled: true,
      // The maximum number of hands to detect [0 - 4]
      maxNumHands: 1,

      // Minimum confidence [0 - 1] for a hand to be considered detected
      minDetectionConfidence: 0.5,

      // Minimum confidence [0 - 1] for the landmark tracker to be considered detected
      // Higher values are more robust at the expense of higher latency
      minTrackingConfidence: 0.5,
    },
    // showDebug: true,
    // setup: {
    //   wrap: {
    //     $parent: document.querySelector("#debugger-holder"),
    //   },
    // },
  });
  // Enable plugins tagged with "browser"
  handsfree.enablePlugins("browser");
  handsfree.update({
    hands: true,
    weboji: false,
  });
  const eventMap = {
    start: "mousedown",
    held: "mousemove",
    released: "mouseup",
  };

  handsfree.use("dragAndDrop", {
    onFrame: ({ hands }) => {
      try {
        if (!hands.multiHandLandmarks) return;
        if (!hands.pointer) return;
        hands.pointer.forEach((pointer, hand) => {
          if (pointer.isVisible && hands.pinchState[hand][0]) {
            // Get the event and element to send events to
            const event = eventMap[hands.pinchState[hand][0]];
            const $el = document.elementFromPoint(pointer.x, pointer.y);

            // Dispatch the event
            if ($el) {
              $el.dispatchEvent(
                new MouseEvent(event, {
                  bubbles: true,
                  cancelable: true,
                  clientX: pointer.x,
                  clientY: pointer.y,
                })
              );
            }
          }
        });
      } catch {
        console.log("Error");
      }
    },
  });
  // Start tracking
  handsfree.start();
};

export default HandGesture;
