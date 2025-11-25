import React from 'react';

// Using a public holiday calendar as a placeholder. 
// In production, the user should replace this CID with their property's calendar ID.
const GOOGLE_CALENDAR_ID = "en.italian%23holiday%40group.v.calendar.google.com";

export const CalendarSection: React.FC = () => {
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
            <iframe
              src={`https://calendar.google.com/calendar/embed?height=600&wkst=2&bgcolor=%23ffffff&ctz=Europe%2FRome&src=${GOOGLE_CALENDAR_ID}&color=%230B8043&showTitle=0&showPrint=0&showTabs=1&showCalendars=0`}
              style={{ border: 0 }}
              width="800"
              height="600"
              frameBorder="0"
              scrolling="no"
              className="absolute top-0 left-0 bottom-0 right-0 w-full h-full rounded-lg"
              title="Calendario Disponibilità"
            ></iframe>
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