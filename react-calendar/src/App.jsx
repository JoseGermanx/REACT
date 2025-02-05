import Timeline from "react-calendar-timeline";
// import 'react-calendar-timeline/lib/Timeline.css'
import moment from "moment";

const alojamientos = [
  { group: 1, id: 1, nombre: "Tiny Cabin 1", reservas: [{ id: 871, desde: "2025-02-03", hasta: "2025-02-10", estado: "reservado" }] },
  { group: 1, id: 1, nombre: "Tiny Cabin 1", reservas: [{ id: 871, desde: "2025-02-03", hasta: "2025-02-10", estado: "reservado" }] },
  { group: 1, id: 2, nombre: "Tiny Cabin 2", reservas: [{ id: 872, desde: "2025-02-10", hasta: "2025-02-15", estado: "pendiente" }] },
  { group: 1, id: 3, nombre: "Tiny Cabin 3", reservas: [{ id: 873, desde: "2025-02-15", hasta: "2025-02-20", estado: "bloqueado" }] },
  { group: 1, id: 4, nombre: "Tiny Cabin 4", reservas: [{ id: 874, desde: "2025-02-20", hasta: "2025-02-25", estado: "reservado" }] },
  { group: 1, id: 5, nombre: "Tiny Cabin 5", reservas: [{ id: 875, desde: "2025-02-25", hasta: "2025-03-02", estado: "pendiente" }] },
  { group: 2, id: 6, nombre: "Suite 1", reservas: [{ id: 876, desde: "2025-02-03", hasta: "2025-02-10", estado: "reservado" }] },
  { group: 2, id: 7, nombre: "Suite 2", reservas: [{ id: 877, desde: "2025-02-10", hasta: "2025-02-15", estado: "pendiente" }] },
  { group: 2, id: 8, nombre: "Suite 3", reservas: [{ id: 878, desde: "2025-02-15", hasta: "2025-02-20", estado: "bloqueado" }] },
  { group: 2, id: 9, nombre: "Suite 4", reservas: [{ id: 879, desde: "2025-02-20", hasta: "2025-02-25", estado: "reservado" }] },
  { group: 2, id: 10, nombre: "Suite 5", reservas: [{ id: 880, desde: "2025-02-25", hasta: "2025-03-02", estado: "pendiente" }] },
  { group: 2, id: 11, nombre: "Suite 6", reservas: [{ id: 881, desde: "2025-03-02", hasta: "2025-03-07", estado: "bloqueado" }] },
];

const estadosColores = {
  reservado: "green",
  pendiente: "yellow",
  bloqueado: "red",
};

const ReservaTimeline = () => {
  const items = alojamientos.flatMap((a) =>
    a.reservas.map((r) => ({
      id: r.id,
      group: a.id,
      title: r.id,
      start_time: new Date(r.desde),
      end_time: new Date(r.hasta),
      color: estadosColores[r.estado] || "gray",
    }))
  );

  const groups = [
    { id: 1, title: "Tiny 1" },
    { id: 2, title: "Tiny 2" },
    { id: 3, title: "Tiny 3" },
    { id: 4, title: "Tiny 4" },
    { id: 5, title: "Tiny 5" },
    { id: 6, title: "Suite 1"},
    { id: 7, title: "Suite 2"},
    { id: 8, title: "Suite 3"},
    { id: 9, title: "Suite 4"},
    { id: 10, title: "Suite 5"},
    { id: 11, title: "Suite 6"},
    { id: 12, title: "Suite 7"},
    { id: 13, title: "Suite 8"},
    { id: 14, title: "Suite 9"},
    { id: 15, title: "Suite 10"},
    { id: 16, title: "Suite 11"},
    { id: 17, title: "Suite 12"},
    { id: 18, title: "Suite 13"},
    { id: 19, title: "Suite 14"},
    { id: 20, title: "Suite 15"},
        
    
  ];

  // const items = [
  //   {
  //     id: 1,
  //     group: 1,
  //     title: "Tiny 1",
  //     start_time: moment(),
  //     end_time: moment().add(1, "hour"),
  //   },
  //   {
  //     id: 2,
  //     group: 2,
  //     title: "Tiny 2",
  //     start_time: moment().add(-0.5, "hour"),
  //     end_time: moment().add(0.5, "hour"),
  //   },
  //   {
  //     id: 3,
  //     group: 1,
  //     title: "Suite 1",
  //     start_time: moment().add(2, "hour"),
  //     end_time: moment().add(3, "hour"),
  //   },
  // ];

  return (
    <div style={{ width: "1200px", height: "100vh" }}>
    <Timeline
      // groups={alojamientos.map((a) => ({ id: a.id, title: a.nombre }))}
      groups={groups}
      items={items}
      defaultTimeStart={moment().add(0, "day")}
      defaultTimeEnd={moment().add(12, "day")}
      
    />
  </div>
  );
};

export default ReservaTimeline;
