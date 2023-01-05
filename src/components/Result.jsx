import ClipboardJS from "clipboard";
import React from "react";

const Result = ({ shortUrl }) => {
  const clipboard = new ClipboardJS(".btn");

  clipboard.on("success", (e) => {
    console.log(e.text);
    e.clearSelection();
  });

  clipboard.on("error", (e) => console.log(e.trigger));

  return (
    <div>
      {shortUrl && (
        <div className="row mt-5 bg-warning p-5 rounded shadow">
          <h2>Shortened link :</h2>
          <div className="d-flex mt-3">
            <h3 className="col-12 bg-dark text-white p-4 rounded" id="link">
              {shortUrl}
              <button
                className="btn btn-primary text-end mx-5"
                data-clipboard-target="#link"
              >
                Copy to Clipboard
              </button>
            </h3>
          </div>
        </div>
      )}
    </div>
  );
};

export default Result;
