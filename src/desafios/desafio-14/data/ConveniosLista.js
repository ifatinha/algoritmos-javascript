const planosSaude = [
  "Unimed",
  "SulAmérica Saúde",
  "Amil",
  "One Health",
  "Bradesco Saúde",
  "Golden Cross",
  "Intermédica",
  "Notre Dame Seguro Saúde",
  "Porto Seguro Saúde",
  "Marítima Seguros Saúde",
  "Omint Saúde",
  "Prevent Senior Saúde",
];

function generateRandomPlan() {
  return planosSaude[Math.floor(Math.random() * 12 + 0)];
}

export default { generateRandomPlan };
