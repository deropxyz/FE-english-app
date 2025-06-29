import React, { useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";

// This is a placeholder for the Header component.
// In a real app, you would import it from another file.
const Header = () => (
  <header className="bg-white shadow-md p-4 mb-6">
    <div className="max-w-5xl mx-auto">
      <h1 className="text-xl font-bold text-gray-800">
        English Learning Platform
      </h1>
    </div>
  </header>
);
const renderTextWithLineBreaks = (text) =>
  text.split("\n").map((line, idx) => (
    <React.Fragment key={idx}>
      {line}
      <br />
    </React.Fragment>
  ));

// This is a placeholder for the navigate function from react-router-dom.
const navigateToDashboard = (state) => {
  console.log("Navigating to dashboard with state:", state);
  alert(
    `Quiz Submitted!\nScore: ${state.score}\nCheck the console for full answer details.`
  );
};

// This is a placeholder for an axios post call.

const submitQuizData = async (data) => {
  const token = localStorage.getItem("token"); // Jika pakai auth
  return axios.post(
    "https://english-app-production-174b.up.railway.app/api/quiz/submit",
    data,
    {
      headers: {
        Authorization: `Bearer ${token}`,
        "Content-Type": "application/json",
      },
    }
  );
};

const quizData = [
  // --- Section I: Multiple Choice (Single Answer) ---
  {
    id: 1,
    type: "single",
    text: "Planning can help you have healthy meals and snacks no matter how busy things get. Here are five steps to make a meal plan\n\n1. Give yourself time to plan.\nSet aside time each week to make a meal plan. Think about how many meals you need to prepare for the week.\n\n2. Check what you have\nCheck what ingredients you already have in your cupboard or fridge. Check the label.\n\n3. Include some of your favorite meals.\nMake a go-to list of meals that you enjoy Introduce new recipes when you have extra time. Think about having a themed night, like meatless Monday.\n\n4. Use up your leftovers.\nPlan meals that can be refrigerated and heated up or eaten cold the next day. Remember, leftovers stored in the fridge must be used within three days.\n\n5. Make your ingredients work.\nChoose recipes that use the same key ingredients. Pick 2-3 main vegetables and add them to a meat or fish dish.",
    question: "What is the topic of the text?",
    options: [
      "A. How to use up leftovers",
      "B. How to eat healthily.",
      "C. How to make a shopping list.",
      "D. How to cook a healthy dish.",
      "E. How to make a meal plan",
    ],
    correct: "E. How to make a meal plan",
  },
  {
    id: 2,
    type: "single",
    question: "The text states that........",
    options: [
      "A. leftovers cannot be cooked again",
      "B. the label of the food is useless",
      "C. we should shop to get ingredients every day",
      "D. meat is not the best choice for a meal plan",
      "E. we can make more than one recipe with the same key ingredients",
    ],
    correct:
      "E. we can make more than one recipe with the same key ingredients",
  },
  {
    id: 3,
    type: "single",
    question: "According to the text, we are not allowed to eat leftovers.",
    options: [
      "A. after three days",
      "B. after we put them in the fridge",
      "C. after we cooked them again",
      "D. before they rotten",
      "E. before we heat them",
    ],
    correct: "A. after three days",
  },
  {
    id: 4,
    type: "single",
    text: "5 Tips for Healthier Grocery Shopping\n\nHealthy eating also involves decision making and those decisions play a big role in health. We compiled five tips to help you stay focused, improve your grocery shopping, and keep the foods you want to avoid at the store, so that you don't have to try and resist them at home.\n\n1. Make a healthy grocery list of things to eat before you head to the grocery store. If you're newer to healthy cooking, pick out recipes or meals first, then build your grocery list from the meals you'd like to try, or the healthy meals you love.\n\n2. Think about the future and your future goals while you're shopping.\n\n3. Grab a healthy snack for you to eat while shopping. People buy more calories and make poor decisions while shopping hungry Keeping yourself full and preoccupied can help you stick to your list and goals.\n\n4. Look for lower calorie, nutrient-filled replacements of your favorite snacks,, also called “food swaps”.\n\n5. Load u pon fruits and vegetables, and consider all of your options when it comes to buying them. Just be sure to check the labels and pick low or no sodium vegetables and fruit in water (not juice or syrup).",
    question:
      "“Load U pon fruits and vegetables.....” the underlined phrase has similar meaning to ..........",
    options: ["A. Keep", "B. Carry", "C. Pile", "D. Transport", "E. Unpack"],
    correct: "C. Pile",
  },
  {
    id: 5,
    type: "single",
    question: "What can we learn from the text?",
    options: [
      "A. Don’t eat before you go shopping.",
      "B. Buy grocery without shopping list.",
      "C. Checking the price is better than checking the label.",
      "D. Feeling full can help you stick to your shopping list.",
      "E. Make your grocery list with all your favorite things.",
    ],
    correct: "D. Feeling full can help you stick to your shopping list.",
  },
  {
    id: 6,
    type: "single",
    question: "The purpose of these tips is to.....",
    options: [
      "A. Help readers stay focused during grocery shopping.",
      "B. Improve the readers’ shopping ability",
      "C. Keep foods at these store.",
      "D. Cook ingredients at home.",
      "E. Make a healthy grocery plan",
    ],
    correct: "A. Help readers stay focused during grocery shopping.",
  },
  // --- Section II: Complex Multiple Choice (Multiple Answers) ---
  {
    id: 7,
    type: "multiple",
    text: "10 Table Manners Tips\n\nTable manners have evolved over centuries to make the practice of eating with others pleasant and sociable. With so many table manners to keep track, keep these basic, but so-important, table manners in mind as you eat:\n\n1. Chew with your mouth closed.\n2. Keep your smartphone off the table and set to silent or vibrate. Wait to check calls and texts until you are finished with the meal and away from the table.\n3. Hold utensils correctly. Don't use your fork or spoon like a shovel or stab your food.\n4. Wash up and come to the table clean. Don't groom or attend to hygiene at the table.\n5. Remember to use your napkin.\n6. Wait until you're done chewing to sip or swallow a drink.\n7. Pace yourself with fellow diners. Cut only one piece of food at a time.\n8. Avoid slouching and don't place your elbows on the table while eating.\n9. Instead of reaching across the table for something, ask for it to be passed to you.\n10. Bring your best self to the meal. Take part in the dinner conversation.",
    question: "Which tips are related to healthy eating habits?",
    options: ["A. 1", "B. 2", "C. 4", "D. 5", "E. 8"],
    correct: ["A. 1", "B. 2", "C. 4", "D. 5"],
  },
  {
    id: 8,
    type: "multiple",
    question: "Why should people follow the table manners?",
    options: [
      "A. To make a favorable impression",
      "B. To respect to hosts and guests",
      "C. To prevent diners from being offensive",
      "D. To show others that the dinners are rich",
      "E. To prevent the owners of the restaurant give a warning",
    ],
    correct: [
      "A. To make a favorable impression",
      "B. To respect to hosts and guests",
      "C. To prevent diners from being offensive",
    ],
  },
  {
    id: 9,
    type: "multiple",
    question: "Which sentences belong to negative imperatives?",
    options: [
      "A. Remember to use your napkin",
      "B. Don’t use your fork or spoon like a shovel or stab your food",
      "C. Avoid slouching and don’t place your elbows on the table while eating",
      "D. Don’t groom or attend to hygiene at the table",
      "E. Bring your best self to the meal",
    ],
    correct: [
      "B. Don’t use your fork or spoon like a shovel or stab your food",
      "C. Avoid slouching and don’t place your elbows on the table while eating",
      "D. Don’t groom or attend to hygiene at the table",
    ],
  },
  // --- Section III: Matching ---
  {
    id: 10,
    type: "matching",
    question: "From the word to the matching meaning!",
    items: [
      { word: "A. Fiber", id: "A" },
      { word: "B. Fat", id: "B" },
      { word: "C. Calorie", id: "C" },
    ],
    matches: [
      { synonym: "1. The amount of energy.", id: "1" },
      { synonym: "2. Indigestible carbohydrate.", id: "2" },
      { synonym: "3. Oily and greasy substances.", id: "3" },
    ],
    correct: {
      A: "2", // Fiber -> Indigestible carbohydrate
      B: "3", // Fat -> Oily and greasy substances
      C: "1", // Calorie -> The amount of energy
    },
  },
];

// Renamed to ChapterQuiz to be more generic
const Chapter4Quiz = () => {
  const navigate = useNavigate();

  const [answers, setAnswers] = useState({});
  const currentChapter = 5; // Updated chapter number

  /**
   * Calculates the final score based on answers.
   * Weighting: Single Choice 40%, Multiple Choice 30%, Matching 30%.
   * Fill-in-the-blank and Essay questions are not scored.
   * @returns {string} The final score, formatted to two decimal places.
   */
  const calculateScore = () => {
    let correctSingle = 0;
    let correctMultiple = 0;
    let correctMatching = 0;

    const singleQs = quizData.filter((q) => q.type === "single");
    const multipleQs = quizData.filter((q) => q.type === "multiple");
    const matchingQs = quizData.filter((q) => q.type === "matching");

    // Score single-choice questions
    singleQs.forEach((q) => {
      if (answers[q.id] === q.correct) correctSingle++;
    });

    // Score multiple-choice questions
    multipleQs.forEach((q) => {
      const userAns = answers[q.id] || [];
      const correctSet = new Set(q.correct);
      const userSet = new Set(userAns);
      if (
        userSet.size === correctSet.size &&
        [...correctSet].every((opt) => userSet.has(opt))
      ) {
        correctMultiple++;
      }
    });

    // Score matching questions
    matchingQs.forEach((q) => {
      const userPairs = answers[q.id] || {};
      const correctPairs = q.correct;
      // Check if user has answered all parts and if each part is correct
      if (
        Object.keys(userPairs).length === Object.keys(correctPairs).length &&
        Object.entries(correctPairs).every(
          ([key, val]) => userPairs[key] === val
        )
      ) {
        correctMatching++;
      }
    });

    const totalSingle = singleQs.length || 1;
    const totalMultiple = multipleQs.length || 1;
    const totalMatching = matchingQs.length || 1;

    // Calculate weighted score
    const score =
      (correctSingle / totalSingle) * 55 +
      (correctMultiple / totalMultiple) * 35 +
      (correctMatching / totalMatching) * 10;

    return score.toFixed(2);
  };

  /**
   * Handles changes for single-answer, fill-in-the-blank, and essay questions.
   * @param {number} questionId - The ID of the question being answered.
   * @param {string} value - The selected answer or text input.
   */
  const handleAnswerChange = (questionId, value) => {
    setAnswers((prev) => ({ ...prev, [questionId]: value }));
  };

  /**
   * Handles changes for multiple-answer (checkbox) questions.
   * @param {number} questionId - The ID of the question.
   * @param {string} option - The checkbox option being toggled.
   */
  const handleMultiAnswerChange = (questionId, option) => {
    setAnswers((prev) => {
      const current = prev[questionId] || [];
      const updated = current.includes(option)
        ? current.filter((o) => o !== option)
        : [...current, option];
      return { ...prev, [questionId]: updated };
    });
  };

  /**
   * Handles changes for matching questions.
   * @param {number} questionId - The ID of the question.
   * @param {string} prefix - The item from the left column being matched.
   * @param {string} adjective - The selected item from the right column.
   */
  const handleMatchingChange = (questionId, prefix, adjective) => {
    setAnswers((prev) => ({
      ...prev,
      [questionId]: {
        ...(prev[questionId] || {}),
        [prefix]: adjective,
      },
    }));
  };

  /**
   * Handles the submission of the quiz.
   */
  const handleSubmit = async () => {
    const autoScore = calculateScore();
    const userId = localStorage.getItem("userId");

    try {
      await submitQuizData({
        chapter: currentChapter,
        answers,
        autoScore,
        manualScore: null,
        totalScore: autoScore,
      });

      navigate("/dashboard", { state: { reload: true } });
    } catch (err) {
      console.error(err);
      alert("Failed to submit quiz. See console for details.");
    }
  };

  // --- JSX Rendering ---
  return (
    <div className="min-h-screen bg-gray-50 font-sans">
      <Header />
      <div className="max-w-4xl mx-auto p-4 sm:p-6">
        <div className="bg-white rounded-xl shadow-lg p-6 sm:p-8">
          <h1 className="text-3xl font-bold text-blue-800 mb-2">
            Chapter 4 Quiz
          </h1>
          <p className="text-gray-500 mb-8">
            Read the texts carefully and answer the questions.
          </p>

          {quizData.map((q, idx) => (
            <div key={q.id} className="mb-8 border-t border-gray-200 pt-6">
              {/* Optional text for questions */}
              {q.text && (
                <div className="bg-gray-50 p-4 rounded-lg mb-4 text-gray-700 text-sm italic leading-relaxed">
                  {renderTextWithLineBreaks(q.text)}
                </div>
              )}

              <p className="mb-4 font-semibold text-gray-800 text-lg">
                {q.id}. {q.question}
              </p>

              {/* --- Question Type Renderers --- */}

              {/* Single Choice (Radio) */}
              {q.type === "single" && (
                <div className="space-y-2">
                  {q.options.map((opt, i) => (
                    <label
                      key={i}
                      className="flex items-center p-3 rounded-lg hover:bg-blue-50 transition-colors cursor-pointer"
                    >
                      <input
                        type="radio"
                        name={`q-${q.id}`}
                        value={opt}
                        className="mr-3 h-4 w-4 text-blue-600 border-gray-300 focus:ring-blue-500"
                        checked={answers[q.id] === opt}
                        onChange={() => handleAnswerChange(q.id, opt)}
                      />
                      {opt}
                    </label>
                  ))}
                </div>
              )}

              {/* Multiple Choice (Checkbox) */}
              {q.type === "multiple" && (
                <div className="space-y-2">
                  {q.options.map((opt, i) => (
                    <label
                      key={i}
                      className="flex items-center p-3 rounded-lg hover:bg-blue-50 transition-colors cursor-pointer"
                    >
                      <input
                        type="checkbox"
                        value={opt}
                        className="mr-3 h-4 w-4 rounded text-blue-600 border-gray-300 focus:ring-blue-500"
                        checked={answers[q.id]?.includes(opt) || false}
                        onChange={() => handleMultiAnswerChange(q.id, opt)}
                      />
                      {opt}
                    </label>
                  ))}
                </div>
              )}

              {/* Matching */}
              {q.type === "matching" && (
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 items-center">
                  <div className="font-semibold text-center text-gray-600">
                    Word
                  </div>
                  <div className="font-semibold text-center text-gray-600">
                    Synonym
                  </div>
                  {q.items.map((item, i) => (
                    <React.Fragment key={i}>
                      <div className="p-2 bg-gray-100 rounded text-center">
                        {item.word}
                      </div>
                      <select
                        value={answers[q.id]?.[item.id] || ""}
                        onChange={(e) =>
                          handleMatchingChange(q.id, item.id, e.target.value)
                        }
                        className="w-full border border-gray-300 p-2 rounded-lg focus:ring-blue-500 focus:border-blue-500"
                      >
                        <option value="">Select a synonym</option>
                        {q.matches.map((match) => (
                          <option key={match.id} value={match.id}>
                            {match.synonym}
                          </option>
                        ))}
                      </select>
                    </React.Fragment>
                  ))}
                </div>
              )}

              {/* Fill in the Blank */}
              {q.type === "fill" && (
                <input
                  type="text"
                  className="w-full border border-gray-300 p-2 rounded-lg focus:ring-blue-500 focus:border-blue-500"
                  placeholder="Type your answer here..."
                  value={answers[q.id] || ""}
                  onChange={(e) =>
                    handleAnswerChange(q.id, e.target.value.toLowerCase())
                  }
                />
              )}

              {/* Essay */}
              {q.type === "essay" && (
                <textarea
                  rows={5}
                  className="w-full border border-gray-300 p-2 rounded-lg focus:ring-blue-500 focus:border-blue-500"
                  placeholder="Type your answer here..."
                  value={answers[q.id] || ""}
                  onChange={(e) => handleAnswerChange(q.id, e.target.value)}
                />
              )}
            </div>
          ))}

          <div className="mt-8 text-center">
            <button
              onClick={handleSubmit}
              className="bg-blue-600 hover:bg-blue-700 text-white font-bold px-8 py-3 rounded-lg shadow-md transition-transform transform hover:scale-105"
            >
              Submit Quiz
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Chapter4Quiz;
