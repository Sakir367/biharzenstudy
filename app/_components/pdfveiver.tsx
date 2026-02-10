"use client";

import { useState } from "react";

export default function PdfViewer() {
  const [openPdf, setOpenPdf] = useState(false);

  return (
    <div className="flex flex-col items-center gap-6">

      {/* Open Button */}
      <button
        onClick={() => setOpenPdf(true)}
        className="px-4 py-2 bg-purple-600 text-white rounded"
      >
        Open PDF
      </button>

      {/* PDF Modal */}
      {openPdf && (
        <div className="fixed inset-0 bg-black/60 flex items-center justify-center z-50">

          <div className="bg-white w-[90%] h-[90%] rounded-lg relative">

            {/* Close Button */}
            <button
              onClick={() => setOpenPdf(false)}
              className="absolute top-3 right-3 bg-red-500 text-white px-3 py-1 rounded"
            >
              Close
            </button>

            {/* PDF */}
            <iframe
              src="/pdf/cv_sohrab_alam-rigger.pdf"
              className="w-full h-full rounded-lg"
            />

          </div>
        </div>
      )}

    </div>
  );
}
