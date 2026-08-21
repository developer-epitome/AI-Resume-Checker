const ApiError = require("../utils/ApiError");


async function extractText(buffer) {
    let parser;
    try {
      const { CanvasFactory } = require("pdf-parse/worker");
      const { PDFParse } = require("pdf-parse");

      // parser = new PDFParse({ data: buffer });
         parser = new PDFParse({
            data: new Uint8Array(buffer),
            CanvasFactory,
         });
        const result = await parser.getText();

        const text = (result.text || "").trim();
        if (!text || text.length < 50) {
          throw ApiError.badRequest(
            "Could not extract readable text - is this a scanned/image-only PDF?"
          );   
        }

        return {
          text,
          meta: {
            numPages: result.pages?.length ?? result.numpages ?? null,
           },
         };
     } catch (err) {
       if (err.isOperational) throw err;
       throw ApiError.badRequest("Failed to parse PDF: " + err.message);
     } finally {
       try {
          await parser?.destroy?.(); 
     } catch {   
        /* поор */
     }
   }
}

      


module.exports = { extractText };