const jobs = [
  { title: "Marketing Intern", location: "US, NY, New York" },
  {
    title: "Customer Service - Cloud Video Production",
    location: "NZ, Auckland",
  },
  {
    title: "Commissioning Machinery Assistant (CMA)",
    location: "US, IA, Wever",
  },
  {
    title: "Account Executive - Washington DC",
    location: "US, DC, Washington",
  },
  { title: "Bill Review Manager", location: "US, FL, Fort Worth" },
  { title: "Accounting Clerk", location: "US, MD," },
  { title: "Head of Content (m/f)", location: "DE, BE, Berlin" },
  {
    title: "Lead Guest Service Specialist",
    location: "US, CA, San Francisco",
  },
  { title: "HP BSM SME", location: "US, FL, Pensacola" },
  {
    title: "Customer Service Associate - Part Time",
    location: "US, AZ, Phoenix",
  },
  {
    title: "ASP.net Developer Job opportunity at United States,New Jersey",
    location: "US, NJ, Jersey City",
  },
  {
    title: "Talent Sourcer (6 months fixed-term contract)",
    location: "GB, LND, London",
  },
  {
    title: "Applications Developer, Digital",
    location: "US, CT, Stamford",
  },
  { title: "Installers", location: "US, FL, Orlando" },
  { title: "Account Executive - Sydney", location: "AU, NSW, Sydney" },
  {
    title: "VP of Sales - Vault Dragon",
    location: "SG, 01, Singapore",
  },
  { title: "Hands-On QA Leader", location: "IL, Tel Aviv, Israel" },
  {
    title: "Southend-on-Sea Traineeships Under NAS 16-18 Year Olds Only",
    location: "GB, SOS, Southend-on-Sea",
  },
  { title: "Visual Designer", location: "US, NY, New York" },
  {
    title: "Process Controls Engineer - DCS PLC MS Office - PA",
    location: "US, PA, USA Northeast",
  },
  { title: "Marketing Assistant", location: "US, TX, Austin" },
  { title: "Front End Developer", location: "NZ, N, Auckland" },
  { title: "Engagement Manager", location: "AE," },
  {
    title: "Vice President, Sales and Sponsorship (Businessfriend.com)",
    location: "US, CA, Carlsbad",
  },
  { title: "Customer Service", location: "GB, LND, London" },
  { title: "H1B SPONSOR FOR L1/L2/OPT", location: "US, NY, New York" },
  { title: "Marketing Exec", location: "SG," },
  {
    title: "HAAD/DHA Licensed Doctors Opening in UAE",
    location: "AE, AZ, Abudhabi",
  },
  {
    title: "Talent Management Process Manager",
    location: "US, MO, St. Louis",
  },
  { title: "Customer Service Associate", location: "CA, ON, Toronto" },
  {
    title: "Customer Service Technical Specialist",
    location: "US, MA, Waltham",
  },
  { title: "Software Applications Specialist", location: "US, KS," },
  { title: "Craftsman Associate", location: "US, WA, Everett" },
  { title: "Completion Engineer", location: "US, CA, San Ramon" },
  { title: "I Want To Work At Karmarama", location: "GB, LND," },
  {
    title: "English Teacher Abroad",
    location: "US, NY, Saint Bonaventure",
  },
]

//funzione ----
function searchJobs(titleKeyword, locationKeyword) {
  // Trasformo le keyword in casesensitive con to lowercase
  titleKeyword = titleKeyword.toLowerCase();
  locationKeyword = locationKeyword.toLowerCase();

  // Array dove salvo i risultati
  let results = [];

  // Contatore per i risultati
  let count = 0;

  // Ciclo i lavori e li trasformo in tolowercase
  for (let i = 0; i < jobs.length; i++) {
    let title = jobs[i].title.toLowerCase();
    let location = jobs[i].location.toLowerCase();

    // Controllo se il titolo e la posizione contengono le keyword specificate
    if (title.includes(titleKeyword) && location.includes(locationKeyword)) {
      // Se le parole inserite sono incluse aggiungo il lavoro ai risultati e il contatore che si incrementa
      results.push(jobs[i]);
      count++;
    }
  }

  // Restituisco il risultato e il contatore
  return {
    result: results,
    count: count
  };
}

// provo se la funzione funziona, e stampo il risultagto in un consolelog
const searchResult = searchJobs("marketing", "");
console.log(searchResult);



// FUNZIONE PER VISUALIZZARE I RISULTATI NELL'HTML
function displayResults(results) {

  const resultsDiv = document.getElementById('results');


  resultsDiv.innerHTML = '';

  const resultList = document.createElement('ul');

  results.result.forEach(job => {
    const listItem = document.createElement('li');
    listItem.textContent = `${job.title} - ${job.location}`;
    resultList.appendChild(listItem);
  });


  resultsDiv.appendChild(resultList);
  const countInfo = document.createElement('p');
  countInfo.textContent = `il numero di lavori trovati è: ${results.count}`;
  resultsDiv.appendChild(countInfo);
}


document.getElementById('searchButton').addEventListener('click', function () {
  const titleKeyword = document.getElementById('titleInput').value;
  const locationKeyword = document.getElementById('locationInput').value;
  const searchResult = searchJobs(titleKeyword, locationKeyword);
  displayResults(searchResult);
});




