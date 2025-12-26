
import { GoogleGenAI, Type } from "@google/genai";
import { GeminiAnalysis } from "../types";

export const analyzeNeed = async (need: string, industry: string): Promise<GeminiAnalysis> => {
  const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });
  
  try {
    const response = await ai.models.generateContent({
      model: "gemini-3-flash-preview",
      contents: `Analyze this business marketing need: "${need}" in the ${industry} industry. 
      Provide a professional summary, the ideal type of agency they should look for, and 3 priority tips.`,
      config: {
        responseMimeType: "application/json",
        responseSchema: {
          type: Type.OBJECT,
          properties: {
            summary: { type: Type.STRING },
            recommendedAgencyType: { type: Type.STRING },
            priorityTips: {
              type: Type.ARRAY,
              items: { type: Type.STRING }
            }
          },
          required: ["summary", "recommendedAgencyType", "priorityTips"]
        }
      }
    });

    return JSON.parse(response.text);
  } catch (error) {
    console.error("Gemini analysis failed:", error);
    return {
      summary: "We've received your request and our team will review it shortly.",
      recommendedAgencyType: "Specialized " + industry + " Agency",
      priorityTips: [
        "Prepare your current marketing data",
        "Define your 3-month goals clearly",
        "Set a firm maximum monthly budget"
      ]
    };
  }
};
