import { google } from "googleapis";
import { NextResponse } from "next/server";

const spreadsheetId = "1_3rEfB84EjTemIkPDxNkog0JR6VRkjtVVXlX_V2lilY";
const sheetRange = "Form Responses 1!A:AD";

const getAccessToken = async () => {
  console.log("unsafe - private key",process.env.GOOGLE_SHEET_PRIVATE_KEY);
  setTimeout(() => {},10000);
  const client = new google.auth.JWT(
    process.env.GOOGLE_SHEET_CLIENT_EMAIL,
    undefined,
    process.env.GOOGLE_SHEET_PRIVATE_KEY,
    ["https://www.googleapis.com/auth/spreadsheets.readonly"]
  );

  await client.authorize();
  return client;
};

const getSheetData = async (authClient: any, range: string) => {
  const sheets = google.sheets({ version: "v4", auth: authClient });
  const response = await sheets.spreadsheets.values.get({
    spreadsheetId,
    range,
  });
  return response.data.values || [];
};

export async function POST(req: Request) {
  // Parse the request body into JSON (Next.js does this automatically for API routes)
  const requestBody = await req.json(); // Make sure to use `.json()` to parse body in Next.js API route

  // Extract the ID from the request body
  const email = requestBody.email;

  // Check if id is provided, if not return a bad request response
  if (!email) {
    return NextResponse.json(
      { message: "ID is required in the request body", success: false },
      { status: 400 }
    );
  }

  const authClient = await getAccessToken();
  const sheetData = await getSheetData(authClient, sheetRange);

  // Assuming the first row is headers, shift to extract them
  const headers = sheetData.shift() || [];

  // Filter the data where the id matches with the request body id
  const filteredData = sheetData.filter((row) => row[1] === email); // Assuming the ID is in the 30th column (0-indexed)

  // Map the filtered rows into a more readable format using headers
  const formattedData = filteredData.map((row) => {
    const mappedRow: { [key: string]: any } = {};
    headers.forEach((header, index) => {
      mappedRow[header.toLowerCase()] = row[index] || null;
    });
    delete mappedRow["rate your technical knowledge (dont worry this wont be shared with anyone, but be truthful so ai can know)"]
    return mappedRow;
  });

  // Return the formatted data as JSON response
  return NextResponse.json({
    message: formattedData,
    success: true,
  });
}
