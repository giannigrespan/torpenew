import React from 'react';

// ISTRUZIONI:
// 1. Vai su calendar.google.com
// 2. Impostazioni > Seleziona il tuo calendario
// 3. Scorri fino a "Integra calendario" -> Copia l'ID calendario
// 4. IMPORTANTE: In "Autorizzazioni di accesso", spunta "Rendi disponibile pubblicamente"
// 5. Incolla l'ID qui sotto al posto della stringa di esempio.
// Esempio ID: "mariorossi@gmail.com" oppure "c9...40group.calendar.google.com"

const GOOGLE_CALENDAR_ID = "30b4ce93b122922faa6a2d31336dca98611c0790fdd3732491f40593b14f2557@group.calendar.google.com"; 

export const CalendarSection: React.FC = () => {
  // Codifichiamo l'ID per gestire caratteri speciali (come @ o #) nell'URL
  const encodedId = encodeURIComponent(GOOGLE_CALENDAR_ID);

  return (
    <section id="calendar" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-serif font-bold text-gray-900 mb-4">Verifica Disponibilità</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Consulta il calendario per vedere i giorni liberi. Le date occupate sono segnate.
            Contattaci direttamente per confermare la tua prenotazione.
          </p>
        </div>

        <div className="bg-white p-4 rounded-xl shadow-lg border border-gray-200">
          <div className="relative w-full overflow-hidden pt-[75%] sm:pt-[56.25%]">
            {GOOGLE_CALENDAR_ID === "30b4ce93b122922faa6a2d31336dca98611c0790fdd3732491f40593b14f2557@group.calendar.google.com" ? (
              <div className="absolute top-0 left-0 w-full h-full flex items-center justify-center bg-gray-100 text-gray-500">
                <p>Configurazione Calendario mancante. Inserisci l'ID nel codice.</p>
              </div>
            ) : (
              <iframe
                src={`https://calendar.google.com/calendar/embed?height=600&wkst=2&bgcolor=%23ffffff&ctz=Europe%2FRome&src=${encodedId}&color=%230B8043&showTitle=0&showPrint=0&showTabs=1&showCalendars=0`}
                style={{ border: 0 }}
                width="800"
                height="600"
                frameBorder="0"
                scrolling="no"
                className="absolute top-0 left-0 bottom-0 right-0 w-full h-full rounded-lg"
                title="Calendario Disponibilità"
              ></iframe>
            )}
          </div>
        </div>
        
        <div className="mt-8 text-center">
          <p className="text-sm text-gray-500 italic">
            * Il calendario è aggiornato periodicamente. Per la certezza assoluta, invia una richiesta.
          </p>
        </div>
      </div>
    </section>
  );
};
