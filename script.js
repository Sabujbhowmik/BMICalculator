// Global element references
let metricBtn,
  imperialBtn,
  metricSystem,
  imperialSystem,
  fullNameInput,
  calculateBtn,
  resetBtn,
  clearHistoryBtn,
  exportCsvBtn,
  bmiValue,
  bmiCategory,
  bmiIndicator,
  bmiPointer,
  bmiDetailsText,
  healthTips,
  historyList,
  historyModal,
  closeModal,
  modalBody,
  statTotal,
  statAverage,
  statLast,
  dietPlanIntro,
  themeToggle;

// Chart variables
let bmiTrendChart, categoryChart;

// Diet plans data
const dietPlans = {
  underweight: {
    goal: "Healthy Weight Gain Plan",
    description:
      "This plan focuses on nutrient-dense foods to help you gain weight in a healthy way.",
    calorieRange: "2300–2800 calories/day",
    foods: {
      increase: [
        "Nuts and seeds (almonds, walnuts, chia)",
        "Avocados and olive oil",
        "Whole grains (brown rice, quinoa, oats)",
        "Lean proteins (chicken, fish, eggs, paneer)",
        "Full-fat dairy products",
        "Dried fruits and healthy snacks",
      ],
      avoid: [
        "Sugary drinks and junk food as primary calories",
        "Excessive caffeine",
        "Skipping meals",
        "Relying only on salads with low calories",
      ],
    },
    tips: [
      "Eat 5–6 smaller meals throughout the day.",
      "Add healthy fats (nuts, seeds, oils) to every meal.",
      "Drink calories (smoothies, milk, lassi) between meals.",
      "Do strength training 3 times per week.",
      "Track your weight weekly and adjust calories.",
    ],
  },
  normal: {
    goal: "Weight Maintenance Plan",
    description:
      "Maintain your healthy weight with balanced nutrition and regular activity.",
    calorieRange: "1800–2200 calories/day",
    foods: {
      increase: [
        "Colorful fruits and vegetables",
        "Lean proteins (fish, dals, eggs, tofu)",
        "Whole grains (millets, brown rice, whole-wheat roti)",
        "Healthy fats (nuts, seeds, olive oil)",
        "Low-fat dairy (curd, milk, paneer in moderation)",
      ],
      avoid: [
        "Highly processed junk foods",
        "Sugary beverages and sweets",
        "Frequent fried/snack foods",
        "Excess late-night heavy meals",
      ],
    },
    tips: [
      "Maintain consistent meal timing.",
      "Stay hydrated throughout the day.",
      "Aim for 150+ minutes of physical activity per week.",
      "Include all food groups in your meals.",
      "Monitor your weight once every 2–4 weeks.",
    ],
  },
  overweight: {
    goal: "Healthy Weight Loss Plan",
    description:
      "Gradual weight loss through balanced nutrition and increased activity.",
    calorieRange: "1500–1800 calories/day",
    foods: {
      increase: [
        "High-fiber vegetables (bhindi, lauki, cabbage, leafy greens)",
        "Lean proteins (chicken, egg whites, pulses, sprouts)",
        "Low glycemic fruits (apple, guava, berries, orange)",
        "Whole grains in controlled portions",
        "Water and unsweetened herbal teas",
      ],
      avoid: [
        "Sugary drinks and fruit juices",
        "Refined carbs (white bread, bakery items)",
        "Deep-fried snacks and fast food",
        "High-fat dairy and creamy desserts",
      ],
    },
    tips: [
      "Aim for slow weight loss (0.5–1 kg per week).",
      "Use smaller plates to control portions.",
      "Walk 30–45 minutes on most days of the week.",
      "Keep a simple food diary to understand habits.",
      "Sleep 7–8 hours; poor sleep affects weight.",
    ],
  },
  obese: {
    goal: "Sustainable Weight Management Plan",
    description:
      "Comprehensive plan focusing on long-term lifestyle changes for healthy weight reduction.",
    calorieRange: "1200–1500 calories/day (or as advised by doctor)",
    foods: {
      increase: [
        "Non-starchy vegetables (gourd, beans, leafy greens, salad)",
        "Lean proteins (pulses, lentils, tofu, fish, egg whites)",
        "High-fiber foods (salad, sprouts, fruits with skin)",
        "Water, lemon water without sugar, zero-calorie drinks",
        "Herbs and spices for flavor instead of heavy sauces",
      ],
      avoid: [
        "Sugary foods and beverages",
        "Refined flour & deep-fried snacks",
        "High-fat meats and processed meats",
        "Alcohol and sweetened drinks",
        "Fast food and frequent restaurant meals",
      ],
    },
    tips: [
      "Consult a healthcare professional before starting.",
      "Set an initial goal of losing 5–10% of current weight.",
      "Combine diet control with regular physical activity.",
      "Consider counseling/behavioral therapy for habits.",
      "Seek support from family or a support group.",
    ],
  },
};

// Weekly meal plans
const weeklyMealPlans = {
  underweight: [
    {
      day: "Mon",
      breakfast: "Oats with milk, nuts & banana",
      lunch: "Rice, dal, paneer curry, salad",
      dinner: "Grilled chicken/fish with potatoes",
      snack: "Peanut butter sandwich + milk",
    },
    {
      day: "Tue",
      breakfast: "Stuffed paratha with curd",
      lunch: "Veg pulao with raita",
      dinner: "Egg curry with rice",
      snack: "Trail mix or dry fruits",
    },
    {
      day: "Wed",
      breakfast: "Poha with peanuts + glass of milk",
      lunch: "Chapati, chole, salad",
      dinner: "Paneer bhurji with roti",
      snack: "Fruit smoothie with nuts",
    },
    {
      day: "Thu",
      breakfast: "Idli with sambar & chutney",
      lunch: "Fish curry with rice",
      dinner: "Khichdi with ghee & curd",
      snack: "Cheese cubes + fruit",
    },
    {
      day: "Fri",
      breakfast: "Upma with veggies",
      lunch: "Rajma chawal with salad",
      dinner: "Chicken biryani (moderate oil)",
      snack: "Banana with peanut butter",
    },
    {
      day: "Sat",
      breakfast: "Dosa with potato masala",
      lunch: "Pulao with curd & papad",
      dinner: "Veg pasta with cheese",
      snack: "Milkshake",
    },
    {
      day: "Sun",
      breakfast: "Paneer sandwich + juice",
      lunch: "Roast chicken with vegetables",
      dinner: "Homemade pizza with extra veggies & cheese",
      snack: "Ice-cream or kheer",
    },
  ],
  normal: [
    {
      day: "Mon",
      breakfast: "Veg omelette + brown bread",
      lunch: "Roti, dal, veg sabzi, salad",
      dinner: "Fish curry with rice & salad",
      snack: "Fruit + handful of nuts",
    },
    {
      day: "Tue",
      breakfast: "Idli with sambar",
      lunch: "Veg pulao with curd",
      dinner: "Chapati with paneer bhurji",
      snack: "Buttermilk + roasted chana",
    },
    {
      day: "Wed",
      breakfast: "Poha with veggies",
      lunch: "Khichdi with salad",
      dinner: "Chicken curry with roti",
      snack: "Seasonal fruit",
    },
    {
      day: "Thu",
      breakfast: "Dosa with chutney",
      lunch: "Roti with mixed veg sabzi",
      dinner: "Dal, rice & salad",
      snack: "Sprouts chaat",
    },
    {
      day: "Fri",
      breakfast: "Upma + coconut chutney",
      lunch: "Rajma chawal (controlled portion)",
      dinner: "Grilled fish/chicken with veggies",
      snack: "Yogurt with fruits",
    },
    {
      day: "Sat",
      breakfast: "Paratha (less oil) + curd",
      lunch: "Brown rice with dal & veg",
      dinner: "Vegetable soup + roti",
      snack: "Roasted makhana",
    },
    {
      day: "Sun",
      breakfast: "Stuffed dosa/uttapam",
      lunch: "Home style biryani + raita",
      dinner: "Light khichdi + salad",
      snack: "Fruit salad",
    },
  ],
  overweight: [
    {
      day: "Mon",
      breakfast: "Oats with skim milk & berries",
      lunch: "2 rotis, dal, 1 veg sabzi, salad",
      dinner: "Grilled chicken + sautéed vegetables",
      snack: "Cucumber & carrot sticks",
    },
    {
      day: "Tue",
      breakfast: "Upma with vegetables",
      lunch: "Brown rice, sambar & salad",
      dinner: "Veg soup + 1–2 rotis",
      snack: "Buttermilk + roasted chana",
    },
    {
      day: "Wed",
      breakfast: "2 egg whites + 1 toast",
      lunch: "Roti with chole (less oil), salad",
      dinner: "Fish curry with small portion of rice",
      snack: "1 fruit (apple/pear)",
    },
    {
      day: "Thu",
      breakfast: "Idli (2–3) with sambar",
      lunch: "Khichdi with lots of vegetables",
      dinner: "Paneer tikka + salad",
      snack: "Sprouts salad",
    },
    {
      day: "Fri",
      breakfast: "Veg poha",
      lunch: "Roti, dal, bhindi sabzi",
      dinner: "Dal, soup & sautéed veggies",
      snack: "Green tea + nuts (small handful)",
    },
    {
      day: "Sat",
      breakfast: "Dalia (broken wheat) with veggies",
      lunch: "Brown rice, rajma, salad",
      dinner: "Chicken stew with veggies",
      snack: "Fruit + buttermilk",
    },
    {
      day: "Sun",
      breakfast: "Stuffed paratha (less oil) + curd",
      lunch: "Moderate cheat meal in control",
      dinner: "Light soup + salad",
      snack: "Popcorn (air-popped)",
    },
  ],
  obese: [
    {
      day: "Mon",
      breakfast: "Vegetable omelette (egg whites) + 1 toast",
      lunch: "Large salad + dal + 1 roti",
      dinner: "Veg soup + grilled paneer/tofu",
      snack: "Cucumber & tomato slices",
    },
    {
      day: "Tue",
      breakfast: "Oats with water/skim milk & seeds",
      lunch: "Brown rice (small) + sambar + salad",
      dinner: "Chicken/fish with steamed vegetables",
      snack: "1 fruit (guava/orange)",
    },
    {
      day: "Wed",
      breakfast: "Idli (2) + sambar",
      lunch: "Roti (2) + dal + sabzi",
      dinner: "Mixed veg soup + salad",
      snack: "Sprouts chaat (no fried items)",
    },
    {
      day: "Thu",
      breakfast: "Poha with lots of veggies (less oil)",
      lunch: "Khichdi with salad",
      dinner: "Paneer (grilled) + stir-fried veggies",
      snack: "Buttermilk (unsweetened)",
    },
    {
      day: "Fri",
      breakfast: "Upma (less oil) + coconut chutney (small)",
      lunch: "Roti (2) + rajma (less oil) + salad",
      dinner: "Chicken stew with veggies (no cream)",
      snack: "Roasted makhana",
    },
    {
      day: "Sat",
      breakfast: "Dalia porridge with veggies",
      lunch: "Brown rice + dal + salad",
      dinner: "Veg soup + 1 roti",
      snack: "Carrot sticks + hummus",
    },
    {
      day: "Sun",
      breakfast: "2 boiled eggs + 1 toast",
      lunch: "Controlled home-style biryani + raita",
      dinner: "Light khichdi + salad",
      snack: "Fruit salad (no added sugar)",
    },
  ],
};

// DOMContentLoaded
document.addEventListener("DOMContentLoaded", () => {
  cacheElements();
  setCurrentYear();
  loadThemePreference();
  loadUserPreferences();
  setupEventListeners();
  loadHistory();
  initCharts();
  setupDietPlanButtons();
  loadDietPlan("normal");
  updateHistoryStats();
});

// Cache DOM elements
function cacheElements() {
  metricBtn = document.getElementById("metricBtn");
  imperialBtn = document.getElementById("imperialBtn");
  metricSystem = document.getElementById("metricSystem");
  imperialSystem = document.getElementById("imperialSystem");
  calculateBtn = document.getElementById("calculateBtn");
  resetBtn = document.getElementById("resetBtn");
  clearHistoryBtn = document.getElementById("clearHistoryBtn");
  exportCsvBtn = document.getElementById("exportCsvBtn");
  bmiValue = document.getElementById("bmiValue");
  bmiCategory = document.getElementById("bmiCategory");
  bmiIndicator = document.getElementById("bmiIndicator");
  fullNameInput = document.getElementById("fullName");
  bmiPointer = document.getElementById("bmiPointer");
  bmiDetailsText = document.getElementById("bmiDetailsText");
  healthTips = document.getElementById("healthTips");
  historyList = document.getElementById("historyList");
  historyModal = document.getElementById("historyModal");
  closeModal = document.getElementById("closeModal");
  modalBody = document.getElementById("modalBody");
  statTotal = document.getElementById("statTotal");
  statAverage = document.getElementById("statAverage");
  statLast = document.getElementById("statLast");
  dietPlanIntro = document.getElementById("dietPlanIntro");
  themeToggle = document.getElementById("themeToggle");
}

// Year in footer
function setCurrentYear() {
  const yearSpan = document.getElementById("currentYear");
  if (yearSpan) yearSpan.textContent = new Date().getFullYear();
}

// Event listeners
function setupEventListeners() {
  metricBtn.addEventListener("click", () => switchUnitSystem("metric"));
  imperialBtn.addEventListener("click", () => switchUnitSystem("imperial"));

  calculateBtn.addEventListener("click", calculateBMI);
  resetBtn.addEventListener("click", resetForm);
  clearHistoryBtn.addEventListener("click", clearHistory);
  exportCsvBtn.addEventListener("click", exportHistoryToCsv);

  closeModal.addEventListener("click", () => {
    historyModal.style.display = "none";
  });

  window.addEventListener("click", (e) => {
    if (e.target === historyModal) {
      historyModal.style.display = "none";
    }
  });

  // Enter key triggers calculate
  document.addEventListener("keydown", (e) => {
    if (e.key === "Enter") {
      calculateBMI();
    }
  });

  // Theme toggle
  themeToggle.addEventListener("click", toggleTheme);

  // Save preferences when inputs change
  ["fullName", "age", "gender"].forEach((id) => {
    const el = document.getElementById(id);
    if (el) {
      el.addEventListener("change", saveUserPreferences);
    }
  });
}

// Theme handling
function loadThemePreference() {
  const saved = localStorage.getItem("bmiTheme");
  if (saved === "dark") {
    document.body.classList.add("dark-mode");
    updateThemeToggleText();
  } else {
    updateThemeToggleText();
  }
}

function toggleTheme() {
  document.body.classList.toggle("dark-mode");
  const isDark = document.body.classList.contains("dark-mode");
  localStorage.setItem("bmiTheme", isDark ? "dark" : "light");
  updateThemeToggleText();
}

function updateThemeToggleText() {
  const icon = themeToggle.querySelector("i");
  const textSpan = themeToggle.querySelector("span");
  if (document.body.classList.contains("dark-mode")) {
    icon.classList.remove("fa-moon");
    icon.classList.add("fa-sun");
    textSpan.textContent = "Light Mode";
  } else {
    icon.classList.remove("fa-sun");
    icon.classList.add("fa-moon");
    textSpan.textContent = "Dark Mode";
  }
}

// Unit switching
function switchUnitSystem(system) {
  if (system === "metric") {
    metricBtn.classList.add("active");
    imperialBtn.classList.remove("active");
    metricSystem.classList.add("active");
    imperialSystem.classList.remove("active");
  } else {
    imperialBtn.classList.add("active");
    metricBtn.classList.remove("active");
    imperialSystem.classList.add("active");
    metricSystem.classList.remove("active");
  }
  saveUserPreferences();
}

// User preferences (age, gender, last unit)
function saveUserPreferences() {
  const fullName = document.getElementById("fullName").value || "";
  const age = document.getElementById("age").value || "";
  const gender = document.getElementById("gender").value || "";
  const unitSystem = metricBtn.classList.contains("active")
    ? "metric"
    : "imperial";

  const prefs = { fullName, age, gender, unitSystem };
  localStorage.setItem("bmiPreferences", JSON.stringify(prefs));
}

function loadUserPreferences() {
  const prefs = JSON.parse(localStorage.getItem("bmiPreferences") || "null");
  if (!prefs) return;

  if (prefs.fullName)
    document.getElementById("fullName").value = prefs.fullName;
  if (prefs.age) document.getElementById("age").value = prefs.age;
  if (prefs.gender) document.getElementById("gender").value = prefs.gender;

  if (prefs.unitSystem === "imperial") {
    switchUnitSystem("imperial");
  } else {
    switchUnitSystem("metric");
  }
}

// Reset form
function resetForm() {
  document.getElementById("weightMetric").value = "";
  document.getElementById("heightMetric").value = "";
  document.getElementById("weightImperial").value = "";
  document.getElementById("feet").value = "";
  document.getElementById("inches").value = "";

  bmiValue.textContent = "--";
  bmiCategory.textContent = "Enter your details";
  bmiCategory.className = "bmi-category";
  bmiDetailsText.textContent =
    "Your BMI will be shown here with health interpretation.";
  bmiIndicator.style.width = "0%";
  bmiPointer.style.left = "0%";
  bmiPointer.style.backgroundColor = "var(--primary)";
  healthTips.innerHTML =
    "<li>Enter your weight and height to get personalized health recommendations.</li>";
}

// BMI Calculation
function calculateBMI() {
  let weightKg, heightM, bmi;

  if (metricBtn.classList.contains("active")) {
    const weight = parseFloat(document.getElementById("weightMetric").value);
    const heightCm = parseFloat(document.getElementById("heightMetric").value);

    if (!weight || !heightCm || weight <= 0 || heightCm <= 0) {
      alert("Please enter valid weight and height values.");
      return;
    }

    weightKg = weight;
    heightM = heightCm / 100;
    bmi = weightKg / (heightM * heightM);
  } else {
    const weightLbs = parseFloat(
      document.getElementById("weightImperial").value
    );
    const feet = parseInt(document.getElementById("feet").value) || 0;
    const inches = parseInt(document.getElementById("inches").value) || 0;

    if (!weightLbs || (feet === 0 && inches === 0) || weightLbs <= 0) {
      alert("Please enter valid weight and height values.");
      return;
    }

    const totalInches = feet * 12 + inches;
    weightKg = weightLbs * 0.453592;
    heightM = totalInches * 0.0254;
    bmi = weightKg / (heightM * heightM);
  }

  bmi = Math.round(bmi * 10) / 10;
  const fullName = document.getElementById("fullName").value.trim();
  const age = document.getElementById("age").value;
  const gender = document.getElementById("gender").value;
  const date = new Date().toLocaleString("en-IN", {
    year: "numeric",
    month: "short",
    day: "2-digit",
    hour: "2-digit",
    minute: "2-digit",
  });

  let categoryLabel, categoryClass, color, dietCategory;

  if (bmi < 18.5) {
    categoryLabel = "Underweight";
    categoryClass = "category-underweight";
    color = "#4cc9f0";
    dietCategory = "underweight";
  } else if (bmi < 25) {
    categoryLabel = "Normal Weight";
    categoryClass = "category-normal";
    color = "#22c55e";
    dietCategory = "normal";
  } else if (bmi < 30) {
    categoryLabel = "Overweight";
    categoryClass = "category-overweight";
    color = "#f97316";
    dietCategory = "overweight";
  } else {
    categoryLabel = "Obese";
    categoryClass = "category-obese";
    color = "#ef4444";
    dietCategory = "obese";
  }

  displayResults(bmi, categoryLabel, categoryClass, color, fullName);
  generateHealthTips(bmi, categoryLabel, age, gender);
  saveToHistory(
    bmi,
    categoryLabel,
    categoryClass,
    date,
    weightKg,
    heightM,
    age,
    gender,
    fullName
  );

  updateCharts();
  updateHistoryStats();

  // Diet plan update
  updateDietPlanButtons(dietCategory);
  loadDietPlan(dietCategory);
  dietPlanIntro.innerHTML = `
    <strong>Personalized Diet Plan for ${categoryLabel}:</strong>
    Based on your BMI of <strong>${bmi}</strong>, here are dietary suggestions to support your health goals.
  `;

  // Save preferences (age, gender, unit)
  saveUserPreferences();
}

// Display result
function displayResults(bmi, category, categoryClass, color, fullName) {
  bmiValue.textContent = bmi;
  bmiValue.style.color = color;
  bmiCategory.textContent = category;
  bmiCategory.className = `bmi-category ${categoryClass}`;

  let detailText = "";
  if (category === "Underweight") {
    detailText =
      "Your BMI is below the healthy range. Consider increasing calories and consulting a professional if needed.";
  } else if (category === "Normal Weight") {
    detailText =
      "Your BMI is in the healthy range. Maintain your habits with regular activity and a balanced diet.";
  } else if (category === "Overweight") {
    detailText =
      "Your BMI is slightly above the healthy range. Gradual weight loss through diet and exercise is recommended.";
  } else {
    detailText =
      "Your BMI is in the obese range. It is advisable to seek medical guidance for a safe weight-loss plan.";
  }
  if (fullName) {
    detailText = `${fullName}, ${detailText}`;
  }

  bmiDetailsText.textContent = detailText;

  // Scale positioning
  let indicatorWidth = 0;
  let pointerPosition = 0;

  if (bmi < 18.5) {
    indicatorWidth = (bmi / 18.5) * 25;
    pointerPosition = indicatorWidth;
  } else if (bmi < 25) {
    indicatorWidth = 25 + ((bmi - 18.5) / (25 - 18.5)) * 25;
    pointerPosition = indicatorWidth;
  } else if (bmi < 30) {
    indicatorWidth = 50 + ((bmi - 25) / (30 - 25)) * 25;
    pointerPosition = indicatorWidth;
  } else {
    indicatorWidth = 75 + Math.min(((bmi - 30) / 20) * 25, 25);
    pointerPosition = indicatorWidth;
  }

  indicatorWidth = Math.min(indicatorWidth, 100);
  pointerPosition = Math.min(pointerPosition, 97);

  bmiIndicator.style.width = `${indicatorWidth}%`;
  bmiPointer.style.left = `${pointerPosition}%`;
  bmiPointer.style.backgroundColor = color;
}

// Health tips
function generateHealthTips(bmi, category, age, gender) {
  let tips = [];

  if (category === "Underweight") {
    tips = [
      "Increase caloric intake using whole, nutrient-dense foods (nuts, seeds, milk, dal, rice).",
      "Include strength training exercises to build muscle mass.",
      "Eat 5–6 small meals rather than 2–3 large ones.",
      "Include healthy fats such as nuts, seeds, ghee in moderation.",
      "Consult a dietitian if weight gain is difficult.",
    ];
  } else if (category === "Normal Weight") {
    tips = [
      "Maintain regular physical activity (150+ minutes per week).",
      "Follow a balanced plate: ½ vegetables, ¼ protein, ¼ whole grains.",
      "Limit sugary drinks, fast food and packaged snacks.",
      "Monitor your weight once a month to track changes.",
      "Prioritize sleep and stress management.",
    ];
  } else if (category === "Overweight") {
    tips = [
      "Aim for slow weight loss with small calorie deficit (avoid crash diets).",
      "Increase daily steps (8k–10k) and add brisk walking.",
      "Replace refined carbs with whole grains and high-fiber options.",
      "Avoid sugary drinks; prefer water/unsweetened beverages.",
      "Plan meals in advance to avoid random snacking.",
    ];
  } else {
    tips = [
      "Consult with a healthcare professional for a tailored plan.",
      "Focus on long-term lifestyle changes, not quick fixes.",
      "Start with gentle activities (walking, light exercises).",
      "Avoid highly processed foods, sugary drinks and deep-fried items.",
      "Consider joining a support group or working with a counselor.",
    ];
  }

  if (age) {
    const ageNum = parseInt(age);
    if (ageNum > 50) {
      tips.push(
        "Pay attention to bone health with adequate calcium, vitamin D and gentle strength training."
      );
      tips.push(
        "Include balance and flexibility exercises to reduce fall risk."
      );
    } else if (ageNum < 25) {
      tips.push(
        "Build strong habits now; early lifestyle patterns greatly impact future health."
      );
    }
  }

  if (gender === "female") {
    tips.push(
      "Ensure adequate iron intake (green leafy vegetables, lentils, jaggery, meat/eggs if non-vegetarian)."
    );
  }

  healthTips.innerHTML = "";
  tips.forEach((tip) => {
    const li = document.createElement("li");
    li.textContent = tip;
    healthTips.appendChild(li);
  });
}

// History handling
function saveToHistory(
  bmi,
  category,
  categoryClass,
  date,
  weightKg,
  heightM,
  age,
  gender,
  fullName
) {
  let history = JSON.parse(localStorage.getItem("bmiHistory")) || [];

  const historyItem = {
    id: Date.now(),
    bmi,
    category,
    categoryClass,
    date,
    weightKg,
    heightM,
    age: age || null,
    gender: gender || null,
    fullName: fullName || null, // ⬅️ new
  };

  history.unshift(historyItem);
  if (history.length > 50) history = history.slice(0, 50);

  localStorage.setItem("bmiHistory", JSON.stringify(history));
  loadHistory();
}

function loadHistory() {
  const history = JSON.parse(localStorage.getItem("bmiHistory")) || [];
  historyList.innerHTML = "";

  if (history.length === 0) {
    historyList.innerHTML = `
      <div class="empty-history">
        <i class="fas fa-history"></i>
        <h3>No calculations yet</h3>
        <p>Your BMI calculations will appear here</p>
      </div>
    `;
    return;
  }

  history.forEach((item) => {
    const div = document.createElement("div");
    div.className = "history-item";
    div.innerHTML = `
      <div>
        ${
          item.fullName
            ? `<div class="history-name">${item.fullName}</div>`
            : ""
        }
        <div class="history-date">${item.date}</div>
        <div>Weight: ${item.weightKg.toFixed(1)} kg | Height: ${(
      item.heightM * 100
    ).toFixed(1)} cm</div>
      </div>
      <div style="text-align:right;">
        <div class="history-bmi">${item.bmi}</div>
        <div class="history-category ${item.categoryClass}">${
      item.category
    }</div>
      </div>
      <div class="history-actions">
        <button class="btn-view" data-id="${item.id}">
          <i class="fas fa-eye"></i>
        </button>
        <button class="btn-delete" data-id="${item.id}">
          <i class="fas fa-trash"></i>
        </button>
      </div>
    `;
    historyList.appendChild(div);
  });

  // Attach event listeners for view/delete
  historyList.querySelectorAll(".btn-view").forEach((btn) => {
    btn.addEventListener("click", () =>
      viewHistoryDetails(parseInt(btn.getAttribute("data-id")))
    );
  });

  historyList.querySelectorAll(".btn-delete").forEach((btn) => {
    btn.addEventListener("click", () =>
      deleteHistoryItem(parseInt(btn.getAttribute("data-id")))
    );
  });
}

function viewHistoryDetails(id) {
  const history = JSON.parse(localStorage.getItem("bmiHistory")) || [];
  const item = history.find((h) => h.id === id);
  if (!item) return;

  modalBody.innerHTML = `
      <div style="margin-bottom: 16px;">
      <div style="font-size:1.05rem;font-weight:600;margin-bottom:6px;">Calculation Details</div>
      ${
        item.fullName
          ? `<div style="font-weight:600;margin-bottom:4px;">${item.fullName}</div>`
          : ""
      }
      <div style="color:var(--gray);">${item.date}</div>
    </div>


    <div style="display:grid;grid-template-columns:1fr 1fr;gap:12px;margin-bottom:16px;">
      <div style="background:rgba(148,163,184,0.08);padding:12px;border-radius:12px;">
        <div style="font-weight:600;color:var(--gray);margin-bottom:4px;">BMI</div>
        <div style="font-size:1.8rem;font-weight:700;color:var(--primary);">${
          item.bmi
        }</div>
      </div>
      <div style="background:rgba(148,163,184,0.08);padding:12px;border-radius:12px;">
        <div style="font-weight:600;color:var(--gray);margin-bottom:4px;">Category</div>
        <div class="${
          item.categoryClass
        }" style="padding:4px 12px;border-radius:999px;display:inline-block;font-weight:600;">
          ${item.category}
        </div>
      </div>
    </div>

    <div style="background:rgba(148,163,184,0.08);padding:14px;border-radius:12px;margin-bottom:16px;">
      <div style="font-weight:600;margin-bottom:8px;">Measurements (Metric)</div>
      <div style="display:grid;grid-template-columns:1fr 1fr;gap:10px;font-size:0.9rem;">
        <div>
          <div style="font-weight:600;color:var(--gray);">Weight</div>
          <div>${item.weightKg.toFixed(1)} kg</div>
        </div>
        <div>
          <div style="font-weight:600;color:var(--gray);">Height</div>
          <div>${(item.heightM * 100).toFixed(1)} cm</div>
        </div>
      </div>
    </div>

    ${
      item.age || item.gender
        ? `
      <div style="background:rgba(148,163,184,0.08);padding:14px;border-radius:12px;">
        <div style="font-weight:600;margin-bottom:8px;">Additional Information</div>
        <div style="display:grid;grid-template-columns:1fr 1fr;gap:10px;font-size:0.9rem;">
          ${
            item.age
              ? `<div><div style="font-weight:600;color:var(--gray);">Age</div><div>${item.age} years</div></div>`
              : ""
          }
          ${
            item.gender
              ? `<div><div style="font-weight:600;color:var(--gray);">Gender</div><div style="text-transform:capitalize;">${item.gender}</div></div>`
              : ""
          }
        </div>
      </div>
    `
        : ""
    }
  `;

  historyModal.style.display = "flex";
}

function deleteHistoryItem(id) {
  if (!confirm("Are you sure you want to delete this calculation?")) return;

  let history = JSON.parse(localStorage.getItem("bmiHistory")) || [];
  history = history.filter((item) => item.id !== id);
  localStorage.setItem("bmiHistory", JSON.stringify(history));

  loadHistory();
  updateCharts();
  updateHistoryStats();
}

function clearHistory() {
  if (!confirm("Are you sure you want to clear all calculation history?"))
    return;
  localStorage.removeItem("bmiHistory");
  loadHistory();
  updateCharts();
  updateHistoryStats();
}

// Export CSV
function exportHistoryToCsv() {
  const history = JSON.parse(localStorage.getItem("bmiHistory")) || [];
  if (history.length === 0) {
    alert("No history to export.");
    return;
  }

  const header = [
    "Date",
    "Full_Name",
    "BMI",
    "Category",
    "Weight_kg",
    "Height_cm",
    "Age",
    "Gender",
  ];
  const rows = history.map((item) => [
    `"${item.date}"`,
    `"${item.fullName || ""}"`,
    item.bmi,
    `"${item.category}"`,
    item.weightKg.toFixed(1),
    (item.heightM * 100).toFixed(1),
    item.age || "",
    item.gender || "",
  ]);

  const csvContent = [header.join(","), ...rows.map((r) => r.join(","))].join(
    "\n"
  );
  const blob = new Blob([csvContent], { type: "text/csv;charset=utf-8;" });
  const url = URL.createObjectURL(blob);
  const a = document.createElement("a");
  a.href = url;
  a.download = "bmi_history.csv";
  a.click();
  URL.revokeObjectURL(url);
}

// History statistics
function updateHistoryStats() {
  const history = JSON.parse(localStorage.getItem("bmiHistory")) || [];
  const total = history.length;
  statTotal.textContent = total;

  if (total === 0) {
    statAverage.textContent = "--";
    statLast.textContent = "--";
    return;
  }

  const sum = history.reduce((acc, item) => acc + Number(item.bmi), 0);
  const avg = Math.round((sum / total) * 10) / 10;
  statAverage.textContent = avg;
  statLast.textContent = history[0].bmi;
}

// Charts
function initCharts() {
  const trendCtx = document.getElementById("bmiTrendChart").getContext("2d");
  bmiTrendChart = new Chart(trendCtx, {
    type: "line",
    data: {
      labels: [],
      datasets: [
        {
          label: "BMI",
          data: [],
          borderColor: "#4361ee",
          backgroundColor: "rgba(67,97,238,0.12)",
          borderWidth: 3,
          fill: true,
          tension: 0.35,
          pointRadius: 4,
          pointHoverRadius: 5,
        },
      ],
    },
    options: {
      responsive: true,
      plugins: {
        legend: { display: false },
        tooltip: {
          callbacks: {
            label: (context) => `BMI: ${context.raw}`,
          },
        },
      },
      scales: {
        y: {
          beginAtZero: false,
          title: {
            display: true,
            text: "BMI Value",
          },
          grid: {
            color: "rgba(148,163,184,0.25)",
          },
        },
        x: {
          grid: {
            color: "rgba(148,163,184,0.18)",
          },
        },
      },
    },
  });

  const categoryCtx = document.getElementById("categoryChart").getContext("2d");
  categoryChart = new Chart(categoryCtx, {
    type: "doughnut",
    data: {
      labels: ["Underweight", "Normal", "Overweight", "Obese"],
      datasets: [
        {
          data: [0, 0, 0, 0],
          backgroundColor: ["#4cc9f0", "#22c55e", "#f97316", "#ef4444"],
          borderWidth: 2,
          borderColor: "#ffffff",
        },
      ],
    },
    options: {
      responsive: true,
      plugins: {
        legend: {
          position: "bottom",
          labels: {
            padding: 16,
            usePointStyle: true,
            pointStyle: "circle",
          },
        },
        tooltip: {
          callbacks: {
            label: (context) => {
              const label = context.label || "";
              const value = context.raw || 0;
              const total = context.dataset.data.reduce((a, b) => a + b, 0);
              const percentage =
                total > 0 ? Math.round((value / total) * 100) : 0;
              return `${label}: ${value} (${percentage}%)`;
            },
          },
        },
      },
    },
  });

  updateCharts();
}

function updateCharts() {
  if (!bmiTrendChart || !categoryChart) return;

  const history = JSON.parse(localStorage.getItem("bmiHistory")) || [];

  const recent = history.slice(0, 10).reverse();
  bmiTrendChart.data.labels = recent.map((_, idx) => `Calc ${idx + 1}`);
  bmiTrendChart.data.datasets[0].data = recent.map((item) => item.bmi);
  bmiTrendChart.update();

  const categoryCounts = [0, 0, 0, 0];
  history.forEach((item) => {
    if (item.category === "Underweight") categoryCounts[0]++;
    else if (item.category === "Normal Weight") categoryCounts[1]++;
    else if (item.category === "Overweight") categoryCounts[2]++;
    else if (item.category === "Obese") categoryCounts[3]++;
  });
  categoryChart.data.datasets[0].data = categoryCounts;
  categoryChart.update();
}

// Diet plan buttons
function setupDietPlanButtons() {
  const dietButtons = document.querySelectorAll(".diet-cat-btn");
  dietButtons.forEach((button) => {
    button.addEventListener("click", function () {
      dietButtons.forEach((btn) => btn.classList.remove("active"));
      this.classList.add("active");
      const category = this.getAttribute("data-category");
      loadDietPlan(category);
    });
  });
}

// Load diet plan
function loadDietPlan(categoryKey) {
  const plan = dietPlans[categoryKey];
  const dietPlanDetails = document.getElementById("dietPlanDetails");
  if (!plan) return;

  dietPlanDetails.innerHTML = `
    <div class="diet-plan-content active">
      <div class="diet-goal">${plan.goal}</div>
      <p style="margin-bottom: 10px;">${plan.description}</p>

      <div class="diet-section">
        <h4><i class="fas fa-arrow-up"></i> Foods to Increase</h4>
        <ul>
          ${plan.foods.increase.map((f) => `<li>${f}</li>`).join("")}
        </ul>
      </div>

      <div class="diet-section">
        <h4><i class="fas fa-arrow-down"></i> Foods to Limit / Avoid</h4>
        <ul>
          ${plan.foods.avoid.map((f) => `<li>${f}</li>`).join("")}
        </ul>
      </div>

      <div class="diet-section">
        <h4><i class="fas fa-lightbulb"></i> Key Recommendations</h4>
        <ul>
          ${plan.tips.map((t) => `<li>${t}</li>`).join("")}
        </ul>
      </div>

      <div class="diet-tip-box">
        <strong>Daily Calorie Target:</strong> ${plan.calorieRange}
      </div>
    </div>
  `;

  loadWeeklyMealPlan(categoryKey);
}

// Weekly plan
function loadWeeklyMealPlan(categoryKey) {
  const weeklyPlan = weeklyMealPlans[categoryKey];
  const weeklyMealPlanDiv = document.getElementById("weeklyMealPlan");
  if (!weeklyPlan) {
    weeklyMealPlanDiv.innerHTML = "";
    return;
  }

  weeklyMealPlanDiv.innerHTML = `
    <h3><i class="fas fa-calendar-alt"></i> Sample Weekly Meal Plan</h3>
    <div class="meal-days">
      ${weeklyPlan
        .map(
          (day) => `
        <div class="meal-day">
          <div class="day-header">${day.day}</div>
          <div class="meal-time">
            <span>Breakfast:</span>
            <div class="meal-items">${day.breakfast}</div>
          </div>
          <div class="meal-time">
            <span>Lunch:</span>
            <div class="meal-items">${day.lunch}</div>
          </div>
          <div class="meal-time">
            <span>Dinner:</span>
            <div class="meal-items">${day.dinner}</div>
          </div>
          <div class="meal-time">
            <span>Snack:</span>
            <div class="meal-items">${day.snack}</div>
          </div>
        </div>
      `
        )
        .join("")}
    </div>
    <div class="calorie-info">
      <div class="calorie-total">Approximate Daily Calories</div>
      <div class="calorie-range">${dietPlans[categoryKey].calorieRange}</div>
    </div>
  `;
}
