import { NextResponse } from "next/server";
import { GoogleGenerativeAI } from "@google/generative-ai";
if (!process.env.GEMINI_API_KEY) {
  throw new Error("GEMINI_API_KEY is not defined in the environment variables.");
}
const genAI = new GoogleGenerativeAI(process.env.GEMINI_API_KEY);

const responseSchema = {
  type: "object",
  questions: {
    type: "array",
    question: {
      type: "object",
      properties: {
        questionTitle: { type: "string" },
      },
    },
  }
};

const getSystemPrompt = (mentor:any, userInfo:any) => {
  return `You are an assistant whose task is to learn about a candidate using the information provided in User Profile and learn about the candidate and generate atleast 3 questions from the mentor whose information is also provided in Available Mentors information which the candidate could possiblly ask for proper guidence of that mentor for his future career ahead
  
  User Profile:
  ${JSON.stringify(userInfo, null, 2)}
  
  Available Mentors:
  ${JSON.stringify(mentor, null, 2)}
  
  Provide recommendations following this exact JSON structure:
  ${JSON.stringify(responseSchema, null, 2)}
  
  Consider factors like:
  - Skills and expertise alignment
  - Career goals compatibility
  - Industry experience
  - Mentoring style preferences
  
  Return only valid JSON matching the schema above.`;
};
const parseGeminiResponse = (response:any) => {
  try {
    const jsonMatch = response.match(/```(?:json)?\s*([\s\S]*?)\s*```/);
    if (jsonMatch) {
      return JSON.parse(jsonMatch[1]);
    }

    return JSON.parse(response);
  } catch (error) {
    try {
      console.log(error)
      // Remove any markdown formatting or extra characters
      const cleaned = response
        .replace(/```json?/g, "")
        .replace(/```/g, "")
        .trim();
      return JSON.parse(cleaned);
    } catch (innerError) {
      console.log(innerError)
      throw new Error("Failed to parse Gemini response as JSON");
    }
  }
};

export async function POST(req: Request) {
  const requestBody = await req.json();
  const { mentorInfo, userInfo } = requestBody;
  const model = genAI.getGenerativeModel({ model: "gemini-pro" });
  const prompt = getSystemPrompt(mentorInfo, userInfo);
  const result = await model.generateContent(prompt);
  const response = result.response.text();
  const parsedResponse = parseGeminiResponse(response);

  return NextResponse.json({
    questions: parsedResponse?.properties?.questions || [],
    success: true,
  });
}
