/**
 * Service for communicating with the portfolio analysis backend
 */

interface AnalysisResponse {
  stocks: string;
  sectors: string;
}

/**
 * Uploads a portfolio file to the backend for analysis
 * @param file - The file to upload (Excel/CSV)
 * @returns The analysis results
 */
export async function uploadPortfolioFile(file: File): Promise<AnalysisResponse> {
  const formData = new FormData();
  formData.append('file', file);

  try {
    const apiUrl = import.meta.env.VITE_API_URL + '/upload';

    console.log(`Uploading file to: ${apiUrl}`);
    
    const response = await fetch(apiUrl, {
      method: 'POST',
      body: formData,
      // Don't set Content-Type header - the browser will set it with the correct boundary for FormData
    });

    if (!response.ok) {
      const errorText = await response.text();
      const errorMessage = `Error uploading file: ${errorText || response.statusText} (Status: ${response.status})`;
      console.error(errorMessage);
      throw new Error(errorMessage);
    }

    // The response from Flask's render_template is HTML
    const data = await response.json();

    if(data.error){
      console.error('Backend error:', data.error);
      throw new Error(data.error);
    }


    return {
      stocks: data.stocks,
      sectors: data.sectors
    };
  } catch (error) {
    console.error('Upload error:', error);
    throw error;
  }
}

/**
 * Extracts a table from the HTML response
 * @param html - The HTML response
 * @param className - The class of the table to extract
 * @param index - Optional index if there are multiple tables with the same class
 * @returns The table HTML
 */
function extractTable(html: string, className: string, index: number = 0): string {
  // Create a DOM parser to parse the HTML
  const parser = new DOMParser();
  const doc = parser.parseFromString(html, 'text/html');
  
  // Find all tables with the given class
  const tables = doc.querySelectorAll(`.${className}`);
  
  // If no tables found or index out of bounds
  if (tables.length === 0 || index >= tables.length) {
    return '<p>No data available</p>';
  }
  
  // Return the table at the specified index
  return tables[index].outerHTML;
}
