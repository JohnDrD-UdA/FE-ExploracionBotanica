import { Html5Qrcode, Html5QrcodeScanner } from "html5-qrcode";
import { FunctionComponent, useEffect, useRef, useState } from "react";
import { ScanProps } from "./HTML5Sscan.interface";

const qrcodeRegionId = "html5qr-code-full-region";

// Creates the configuration object for Html5QrcodeScanner.
const createConfig = (props: any) => {
  let config: { fps: any; qrbox?: any; aspectRatio?: any; disableFlip?: any } =
    { fps: null };
  if (props.fps) {
    config.fps = props.fps;
  }
  if (props.qrbox) {
    config.qrbox = props.qrbox;
  }
  if (props.aspectRatio) {
    config.aspectRatio = props.aspectRatio;
  }
  if (props.disableFlip !== undefined) {
    config.disableFlip = props.disableFlip;
  }
  return config;
};

const Html5QrcodePluginold: FunctionComponent<ScanProps> = (props) => {
  useEffect(() => {
    // when component mounts
    const config = createConfig(props);
    const verbose = props.verbose === true;
    // Suceess callback is required.
    if (!props.qrCodeSuccessCallback) {
      throw "qrCodeSuccessCallback is required callback.";
    }
    const html5QrcodeScanner = new Html5QrcodeScanner(
      qrcodeRegionId,
      config,
      verbose
    );
    html5QrcodeScanner.render(
      props.qrCodeSuccessCallback,
      props.qrCodeErrorCallback
    );

    // cleanup function when component will unmount
    return () => {
      html5QrcodeScanner.clear().catch((error) => {
        console.error("Failed to clear html5QrcodeScanner. ", error);
      });
    };
  }, []);

  return <div id={qrcodeRegionId} />;
};

export const Html5QrcodePlugin: FunctionComponent<ScanProps> = (props) => {
  const previewRef = useRef<HTMLDivElement>(null);
  const memoizedResultHandler = useRef(props.qrCodeSuccessCallback);
  const memoizedErrorHandler = useRef(props.qrCodeErrorCallback);
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    memoizedResultHandler.current = props.qrCodeSuccessCallback;
  }, [props.qrCodeSuccessCallback]);

  useEffect(() => {
    memoizedErrorHandler.current = props.qrCodeErrorCallback;
  }, [props.qrCodeErrorCallback]);

  useEffect(() => {
    navigator.mediaDevices
      .getUserMedia({
        video: true,
        audio: false,
      })
      .then((stream) => {
        stream.getTracks().forEach((t) => {
          t.stop();
        });
      })
      .catch(() => {
        console.log("error on tracks");
      });

    setLoading(false);
  }, []);

  useEffect(() => {
    if (!loading) {
      if (!previewRef.current) return;
      const html5QrcodeScanner = new Html5Qrcode(previewRef.current.id);
      const didStart = html5QrcodeScanner
        .start(
          { facingMode: "environment" },
          { fps: 10 },
          (_, { result }) => {
            memoizedResultHandler.current(result);
          },
          (_, error) => {
            memoizedErrorHandler.current(error);
          }
        )
        .then(() => true);
      return () => {
        didStart
          .then(() => {
            html5QrcodeScanner.stop();
          })
          .catch(() => {
            console.log("Error stopping scanner");
          });
      };
    }
  }, [loading]);

  return <div id="preview" ref={previewRef} />;
};
export default Html5QrcodePlugin;
