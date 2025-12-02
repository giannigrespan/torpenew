import { GoogleGenAI, GenerateContentResponse } from "@google/genai";

// Initialize the client directly with the API key from process.env
const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });

const GOOGLE_CALENDAR_ID = process.env.GOOGLE_CALENDAR_ID;
const GOOGLE_API_KEY = process.env.GOOGLE_API_KEY;

const SYSTEM_INSTRUCTION = `
Sei "Laura", un assistente virtuale amichevole ed esperto per una casa vacanze situata a Torpè, in Sardegna.
Il tuo ruolo è fornire informazioni accurate, gestire prenotazioni e offrire un'esperienza accogliente ai potenziali ospiti.
Rispondi sempre in italiano. Sii conciso, caloroso e accogliente.

Informazioni chiave su Torpè e dintorni che devi sapere:
- Posizione: Torpè (NU), Sardegna nord-orientale
- Distanza mare: 5km (5 minuti di auto)
- Spiagge: Posada (5min), La Caletta (10min), San Teodoro (25min), Costa Smeralda (45min), Cala Goloritzè (30min)
- Attrazioni: Castello della Fava (Posada), Parco Naturale di Tepilora (ideale per trekking e kayak), Nuraghe San Pietro.
- Struttura:2 camere da letto, 1 bagno, Cucina attrezzata, terrazzo
- Capacità: fino a 5 ospiti
- servizi: WiFi, aria condizionata, parcheggio privato, ombrellone e sdraio
- Cibo locale: Consiglia seadas, pane carasau, porceddu, e vini come il Cannonau e il Vermentino
- Check-in dalle 15:00, Check-out entro 10:00

OBIETTIVO
- Convertire interesse in prenotazione
- Risolvere obiezioni
- Fornire informazioni accurate ma non fornire mai il prezzo
- Mantenere conversazione naturale (non modulo)

COSA EVITARE
- Sconto promossi non autorizzati
- Tono freddo o robotico
- Troppe emoji
- Promettere servizi non inclusi
- Ignorare domande


COME RISPONDERE
- Cordiale, professionale, accogliente
- Usa emoji con moderazione (massimo 1-2 per messaggio)
- SEMPRE in italiano
- Ricorda i dettagli della conversazione
- Se chiede prenotazione: chiedi nome, email, date, ospiti, richieste speciali in modo conversazionale
- Se chiede meteo o spiagge: fornisci informazioni accurate
- Se non sai qualcosa: rimanda a info@casatorpe.it

Se ti chiedono disponibilità specifiche, verifica nel calendario al quale hai accesso e se c'è posto disponibile rispondi in modo affermativo, solo se tutti i giorni richiesti sono disponibili. Se invece non c'è disponibilità rispondi di inviare una richiesta tramite il modulo di contatto o tramite telegram
`;

// Funzione per recuperare gli eventi dal calendario Google
const fetchCalendarEvents = async (startDate: Date, endDate: Date): Promise<any[]> => {
  if (!GOOGLE_CALENDAR_ID || !GOOGLE_API_KEY) {
    console.warn('Calendar credentials not configured');
    return [];
  }

  try {
    const timeMin = startDate.toISOString();
    const timeMax = endDate.toISOString();

    const response = await fetch(
      `https://www.googleapis.com/calendar/v3/calendars/${encodeURIComponent(GOOGLE_CALENDAR_ID)}/events?` +
      `key=${GOOGLE_API_KEY}&timeMin=${timeMin}&timeMax=${timeMax}&singleEvents=true&orderBy=startTime`
    );

    if (!response.ok) {
      console.error('Failed to fetch calendar events:', response.status);
      return [];
    }

    const data = await response.json();
    return data.items || [];
  } catch (error) {
    console.error('Error fetching calendar events:', error);
    return [];
  }
};

// Funzione per ottenere lo stato di disponibilità del calendario
const getCalendarAvailability = async (): Promise<string> => {
  const today = new Date();
  // Cerca disponibilità per i prossimi 6 mesi
  const futureDate = new Date();
  futureDate.setMonth(today.getMonth() + 6);

  const events = await fetchCalendarEvents(today, futureDate);

  if (events.length === 0) {
    return "INFORMAZIONI CALENDARIO: Nessun evento trovato nel calendario. Tutti i giorni potrebbero essere disponibili, ma conferma con il proprietario.";
  }

  // Crea un riepilogo degli eventi
  const eventSummary = events.map((event: any) => {
    const start = event.start.date || event.start.dateTime?.split('T')[0];
    const end = event.end.date || event.end.dateTime?.split('T')[0];
    return `Dal ${start} al ${end}`;
  }).join(', ');

  return `INFORMAZIONI CALENDARIO: Periodi occupati nei prossimi 6 mesi: ${eventSummary}.
Quando un utente chiede disponibilità per date specifiche, controlla attentamente se le date richieste cadono in questi periodi occupati.
Se anche solo un giorno del periodo richiesto è occupato, rispondi che non c'è disponibilità per quelle date.`;
};

export const sendMessageToConcierge = async (message: string): Promise<string> => {
  try {
    // Recupera le informazioni del calendario
    const calendarInfo = await getCalendarAvailability();

    // Aggiungi le informazioni del calendario al messaggio
    const enhancedMessage = `${calendarInfo}\n\nMESSAGGIO UTENTE: ${message}`;

    const response: GenerateContentResponse = await ai.models.generateContent({
      model: 'gemini-2.5-flash',
      contents: enhancedMessage,
      config: {
        systemInstruction: SYSTEM_INSTRUCTION,
        temperature: 0.7,
      }
    });

    return response.text || "Mi dispiace, non ho capito. Puoi ripetere?";
  } catch (error) {
    console.error("Gemini API Error:", error);
    return "C'è stato un problema tecnico momentaneo. Per favore riprova più tardi.";
  }
};
