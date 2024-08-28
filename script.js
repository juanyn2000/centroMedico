document.write("<h2>Estadisticas centro medico Ñuñoa</h2>");

let consultaRadiologia = [
  {
  hora            : "11:00",
  especialista    : "Ignacio Schulz",
  paciente        : "Francisca Rojas",
  rut             : "9878782-1",
  prevision       : "Fonasa",
  },
  {
  hora            : "11:30",
  especialista    : "Federico subercaseaux",
  paciente        : "Pamela estrada",
  rut             : "15345241-3",
  prevision       : "Isapre",
  },
  {
  hora            : "15:00",
  especialista    : "Fernando Wurthz",
  paciente        : "Armando Luna",
  rut             : "16445345-9",
  prevision       : "Isapre",
  },
  {
  hora            : "15:30",
  especialista    : "Ana Maria Godoy",
  paciente        : "Manuel Godoy",
  rut             : "17666419-0",
  prevision       : "Fonasa",
  },
  {
  hora            : "16:00",
  especialista    : "Patricia Suazo",
  paciente        : "Ramon Ulloa",
  rut             : "14989389-k",
  prevision       : "Fonasa",
  },
];

let consultaTraumatologia = [
  {
  hora            : "8:00",
  especialista    : "Maria Paz Altuzarra",
  paciente        : "Paula Sanchez",
  rut             : "15554774-5",
  prevision       : "Fonasa",
  },
  {
  hora            : "10:00",
  especialista    : "Raul Araya",
  paciente        : "Angélica Navas",
  rut             : "15444147-9",
  prevision       : "Isapre",
  },
  {
  hora            : "10:30",
  especialista    : "Maria Arriagada",
  paciente        : "Ana klapp",
  rut             : "17879423-9",
  prevision       : "Isapre",
  },
  {
  hora            : "11:00",
  especialista    : "Alejandro Badilla",
  paciente        : "Felipe Mardones",
  rut             : "1547423-6",
  prevision       : "Isapre",
  },
  {
  hora            : "11:30",
  especialista    : "Cecilia Budnik",
  paciente        : "Diego marre",
  rut             : "16554741-k",
  prevision       : "Fonasa",
  },
  {
  hora            : "12:00",
  especialista    : "Arturo Cavagnaro",
  paciente        : "Cecilia mendez",
  rut             : "9747535-8",
  prevision       : "Isapre",
  },
  {
  hora            : "12:30",
  especialista    : "Andres kanacri",
  paciente        : "Marcial Suazo",
  rut             : "11254785-5",
  prevision       : "Isapre",
  },
];

let consultaDental = [
  {
  hora            :"8:30",
  especialista    :"Andrea zuñiga",
  paciente        :"Marcela Retamal",
  rut             :"11123425-6",
  prevision       :"Isapre",
  },

  {
  hora            :"11:00",
  especialista    :"Maria Pia Zañartu",
  paciente        :"Angel muñoz",
  rut             :"9878789-2",
  prevision       :"Isapre",
  },
  {
  hora            :"11:30",
  especialista    :"Scarlett Witting",
  paciente        :"Mario kast",
  rut             :"7998789-5",
  prevision       :"Fonasa",
  },
  {
  hora            :"13:00",
  especialista    :"Francisco Von Teuber",
  paciente        :"Karin Fernandez",
  rut             :"18887662-K",
  prevision       :"Fonasa",
  },
  {
  hora            :"13:30",
  especialista    :"Eduardo Viñuela",
  paciente        :"Hugo Sancheza",
  rut             :"17665461-4",
  prevision       :"Fonasa",
  },
  {
  hora            :"14:00",
  especialista    :"Raquel Villaseca",
  paciente        :"Ana Sepulveda",
  rut             :"14441281-0",
  prevision       :"Isapre",
  },
]


//Se añaden nuevas horas a traumatologia
consultaTraumatologia.push(
  {hora: "09:00",  especialista: "René Poblete",    paciente: "Ana Gellona",    rut: "13123329-7",  prevision: "Isapre"},
  {hora: "09:30",  especialista: "Maria Solar",     paciente: "Ramiro Andrade", rut: "12221451-K",  prevision: "Fonasa"},
  {hora: "10:00",  especialista: "Raul Loyola",     paciente: "Carmen Isla",    rut: "10112348-3 ", prevision: "Isapre"},
  {hora: "10:30 ", especialista: "Antonio Larenas", paciente: "Pablo Loayza",   rut: "13453234-1",  prevision: "Isapre"},
  {hora: "12:00",  especialista: "Matias Aravena",  paciente: "Susana Poblete", rut: "14345656-6 ", prevision: "Fonasa"}
);


//Muestra las horas tomadas en Radiologia
document.write(
  `<h4>Pacientes Radiologia</h4>`)
for (let i = 0; i < consultaRadiologia.length; i++) {
   document.write( 	
  `<p>${consultaRadiologia[i].hora} - 
      ${consultaRadiologia[i].especialista} - 
      ${consultaRadiologia[i].paciente} - 
      ${consultaRadiologia[i].rut} -
      ${consultaRadiologia[i].prevision}
    </p>`);
   }


//Muestra el listado de pacientes en todas las especialidades
function listadoPacientes (listado){
  for(let i = 0; i < listado.length; i++){
  document.write(listado[i].paciente + `<br>`);
  }
  document.write(`<br>`);
}
document.write(`<h4>Listado completo de pacientes</h4>`);
listadoPacientes(consultaRadiologia);
listadoPacientes(consultaTraumatologia);
listadoPacientes(consultaDental);

//Listado de pacientes con Isapre
let pacientesIsapre = consultaDental.filter(function(paciente){
 return paciente.prevision === "Isapre";
});
document.write(`<h4>Listado de pacientes con Isapre en Dental</h4>`);
for (let i = 0; i < pacientesIsapre.length; i++){
  document.write(pacientesIsapre[i].paciente + ` - ${pacientesIsapre[i].prevision}<br>`);
}

//pacientes con fonasa en Traumatologia
let pacientesFonasa = consultaTraumatologia.filter(function(paciente){
  return paciente.prevision === "Fonasa";
 });
 document.write(`<h4>Listado de pacientes con Fonasa en Traumatologia</h4>`);
 for (let i = 0; i < pacientesFonasa.length; i++){
   document.write(pacientesFonasa[i].paciente + ` - ${pacientesFonasa[i].prevision}<br>`);
 }