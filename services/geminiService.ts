import { GoogleGenAI, GenerateContentResponse } from "@google/genai";

const API_KEY = process.env.API_KEY || '';

const ai = new GoogleGenAI({ apiKey: API_KEY });

const SYSTEM_INSTRUCTION = `
Sei "Mauro", un assistente virtuale amichevole ed esperto per una casa vacanze situata a Torpè, in Sardegna.
Il tuo obiettivo è aiutare i turisti a pianificare il loro soggiorno.
Rispondi sempre in italiano. Sii conciso, caloroso e accogliente.

Informazioni chiave su Torpè e dintorni che devi sapere:
- Posizione: Torpè è un tranquillo borgo collinare vicino a Posada (borgo medievale).
- Spiagge vicine: Spiaggia di Su Tiriarzu (Posada), La Caletta, Budoni. Distano circa 5-10 minuti in auto.
- Attrazioni: Castello della Fava (Posada), Parco Naturale di Tepilora (ideale per trekking e kayak), Nuraghe San Pietro.
- Servizi appartamento: Parcheggio gratuito, Wi-Fi, Aria condizionata, Cucina attrezzata, Vista panoramica.
- Cibo locale: Consiglia seadas, pane carasau, porceddu, e vini come il Cannonau.

Se ti chiedono disponibilità specifiche, rispondi che possono controllare il calendario qui sotto o inviare una richiesta tramite il modulo.
`;

export const sendMessageToConcierge = async (message: string): Promise<string> => {
  if (!API_KEY) {
    return "Mi dispiace, il servizio di intelligenza artificiale non è configurato al momento (Manca API Key).";
  }

  try {
    const response: GenerateContentResponse = await ai.models.generateContent({
      model: 'gemini-2.5-flash',
      contents: message,
      config: {
        systemInstruction: SYSTEM_INSTRUCTION,
        temperature: 0.7,
      }
    });

    return response.text || "Mi dispiace, non ho capito. Puoi ripetere?";
  } catch (error) {
    console.error("Gemini API Error:", error);
    return "C'è stato un problema tecnico. Per favore riprova più tardi.";
  }
};