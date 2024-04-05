import QRCode from "react-qr-code";
import { handleQRModalPropsType } from "../../types";
import { toPng, toBlob } from "html-to-image";
import { useRef } from "react";
type QRCodeModalProps = {
  handleQRModal: ({ link, isOpen }: handleQRModalPropsType) => void;
  linkQR: string;
};

const QRCodeModal = ({ handleQRModal, linkQR }: QRCodeModalProps) => {
  const imageDiv = useRef(null);

  const handleDownloadQR = async () => {
    if (imageDiv.current) {
      toPng(imageDiv.current, { cacheBust: false })
        .then((dataUrl) => {
          // console.log("dataUrl", dataUrl);
          const link = document.createElement("a");
          link.download = "client-company-name-qrcode.png";
          link.href = dataUrl;
          link.click();
          // }
        })
        .catch((err) => {
          console.log(err);
        });
    }
  };

  const handleCopyQR = () => {
    if (imageDiv.current) {
      toBlob(imageDiv.current).then(function (blob) {
        if (blob) {
          // console.log("blob", blob);
          navigator.clipboard.write([
            new ClipboardItem({
              "image/png": blob,
            }),
          ]);

          alert("Copy To ClipBoard!");
        }
      });
    }
  };
  return (
    <>
      <div className="fixed z-10 overflow-y-auto top-0 w-full left-0">
        <div className="flex items-center justify-center min-height-100vh pt-4 px-4 pb-20 text-center sm:block sm:p-0">
          <div className="fixed inset-0 transition-opacity">
            <div className="absolute inset-0 bg-gray-600 opacity-50" />
          </div>
          <span className="hidden sm:inline-block sm:align-middle sm:h-screen">
            &#8203;
          </span>
          <div
            className="inline-block align-center   bg-white rounded-lg text-left overflow-hidden shadow-xl transform transition-all sm:my-8 sm:align-middle sm:max-w-lg sm:w-full"
            role="dialog"
            aria-modal="true"
            aria-labelledby="modal-headline"
          >
            <div className="p-2 sm:p-10 bg-white" ref={imageDiv}>
              <h1 className="text-center text-2xl font-bold">
                Rahul dfasfsdf Company
              </h1>
              <div className="bg-white flex justify-center mt-8 ">
                <QRCode value={linkQR} />
              </div>
            </div>
            <div className="bg-gray-200 px-4 py-3 flex justify-between">
              <button
                type="button"
                className="py-2 px-4 bg-gray-500 text-white rounded hover:bg-gray-700 mr-2"
                onClick={() => {
                  handleQRModal({ link: "", isOpen: false });
                }}
              >
                Cancel
              </button>
              <div>
                <button
                  type="button"
                  onClick={handleDownloadQR}
                  className="py-2 px-4 bg-blue-500 text-white rounded font-medium hover:bg-blue-700 mr-2 transition duration-500"
                >
                  Download
                </button>
                <button
                  type="button"
                  // onClick={() => handleDownloadQR(true)}
                  onClick={handleCopyQR}
                  className="py-2 px-4 bg-blue-500 text-white rounded font-medium hover:bg-blue-700 mr-2 transition duration-500"
                >
                  Copy
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default QRCodeModal;
