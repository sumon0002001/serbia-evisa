import { useEffect, useState } from 'react'

import axios from 'axios';
import { pdfjs } from 'react-pdf';
import PdfViewer from './PdfViewer.tsx';

pdfjs.GlobalWorkerOptions.workerSrc = new URL(
  'pdfjs-dist/build/pdf.worker.min.mjs',
  import.meta.url,
).toString();

function PdfUploader() {
  const [title, setTitle] = useState("");
  const [file, setFile] = useState("");
  const [allPdf, setAllPdf] = useState([]);
  const [pdfFile, setPdfFile] = useState("");

  const handleFileChange = (e: { target: { files: any[]; }; }) => {
    const selectedFile = e.target.files[0];
    if (selectedFile) {
      console.log(selectedFile);
      setFile(selectedFile);

    }
  }

  const fetchPdf = async () => {
    try {
      const result = await axios.get("http://localhost:5001/get-pdf")

      console.log(result);
      setAllPdf(result.data)

    } catch (error) {
      console.log(error);

    }
  }

  useEffect(() => {
    fetchPdf();
  }, [])

  const handleUpload = async () => {
    if (!file && !title) {
      alert("Please enter title and select file!!")
      return;
    }

    const formData = new FormData();
    formData.append("title", title);
    formData.append("file", file);

    try {
      const result = await axios.post("http://localhost:5001/upload-pdf", formData, {
        headers: { "Content-Type": "multipart/form-data" }
      })

      console.log(result);
      alert(result.data.message || "Uploaded Successfully ✅");

    } catch (error) {
      alert("PDF Not Uploaded");

    }
  }

  const showPdf = (filename: any) => {
    const url = `http://localhost:5001/uploads/${filename}`;
    // window.open(url,"_blank");
    setPdfFile(url);
  }

  return (
    <div className="app-container">
     
      <h2>Uploaded Visas</h2>
      <div className="gallery">
        {allPdf.map((data) => (
          <div className="gallery-item" key={data._id}>
            <h4>{data.title}</h4>
            <button
              className="upload-btn"
              onClick={() => showPdf(data.filename)}
            >
              Show Visa
            </button>
          </div>

        ))}
      </div>
      {pdfFile && (
        <div className="server-preview">
          <h3 style={{ textAlign: "center" }}>PDF Viewer</h3>
          <PdfViewer pdf={pdfFile} />
        </div>
      )}


    </div>
  )
}

export default PdfUploader
