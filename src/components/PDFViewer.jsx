import { useCallback, useState, useEffect } from "react";
// import { useResizeObserver } from "@wojtekmaj/react-hooks";
import { pdfjs, Document, Page } from "react-pdf";
import "react-pdf/dist/esm/Page/AnnotationLayer.css";
import "react-pdf/dist/esm/Page/TextLayer.css";

import "./Styles/PDFViewer.css";

pdfjs.GlobalWorkerOptions.workerSrc = new URL("pdfjs-dist/build/pdf.worker.min.js", import.meta.url).toString();

const options = {
  cMapUrl: "/cmaps/",
  standardFontDataUrl: "/standard_fonts/",
};

const resizeObserverOptions = {};

const maxWidth = 800;

function PDFVierwer() {
  const [file, setFile] = useState(null);
  const [numPages, setNumPages] = useState();
  const [containerWidth, setContainerWidth] = useState();

  const onResize = useCallback((entries) => {
    const [entry] = entries;

    if (entry) {
      setContainerWidth(entry.contentRect.width);
    }
  }, []);

  function onFileChange(event) {
    const { files } = event.target;
    console.log(event.target);

    if (files && files[0]) {
      setFile(files[0] || null);
    }
  }

  function onDocumentLoadSuccess({ numPages: nextNumPages }) {
    setNumPages(nextNumPages);
  }

  useEffect(() => {
    const defaultFilePath = require("../images/Sam Hodgkinson CV_2023_April.pdf");
    setFile(defaultFilePath);
  }, []);

  return (
    <div className="PDF-container">
      <div className="PDF-doc-container">
        <Document file={file} onLoadSuccess={onDocumentLoadSuccess} options={options}>
          {Array.from(new Array(numPages), (el, index) => (
            <Page key={`page_${index + 1}`} pageNumber={index + 1} width={containerWidth ? Math.min(containerWidth, maxWidth) : maxWidth} />
          ))}
        </Document>
      </div>
    </div>
  );
}

export default PDFVierwer;
