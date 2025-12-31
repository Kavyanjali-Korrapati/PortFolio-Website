
import { GoogleGenAI } from "@google/genai";
import { PERSONAL_INFO, SKILLS, PROJECTS } from "../constants";

const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });

const SYSTEM_PROMPT = `
You are the AI Assistant for ${PERSONAL_INFO.name}, a ${PERSONAL_INFO.role}. 
Your goal is to answer questions from recruiters and potential clients about ${PERSONAL_INFO.name}.

CONTEXT:
- BIO: ${PERSONAL_INFO.bio}
- SKILLS: ${SKILLS.map(s => `${s.name} (${s.category})`).join(', ')}
- PROJECTS: ${PROJECTS.map(p => `${p.title}: ${p.description}`).join(' | ')}
- CONTACT: Email is ${PERSONAL_INFO.email}, Location is ${PERSONAL_INFO.location}.

RULES:
1. Be professional, friendly, and concise.
2. If asked about contact info, provide ${PERSONAL_INFO.email}.
3. If asked about skills or projects not listed, politely state you are focusing on the MERN stack but always willing to learn.
4. Keep answers under 3 sentences unless asked for detail.
`;

export const getAIAssistantResponse = async (userMessage: string, history: { role: 'user' | 'model', parts: { text: string }[] }[]) => {
  try {
    const response = await ai.models.generateContent({
      model: "gemini-3-flash-preview",
      contents: [
        ...history.map(h => ({ role: h.role === 'model' ? 'model' : 'user' as any, parts: h.parts })),
        { role: 'user', parts: [{ text: userMessage }] }
      ],
      config: {
        systemInstruction: SYSTEM_PROMPT,
        temperature: 0.7,
      },
    });

    return response.text || "I'm sorry, I couldn't process that. Could you try rephrasing?";
  } catch (error) {
    console.error("Gemini Error:", error);
    return "I'm having a bit of a connection issue. Please try again in a moment!";
  }
};
