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
  return axios.post("http://localhost:5000/api/quiz/submit", data, {
    headers: {
      Authorization: `Bearer ${token}`,
      "Content-Type": "application/json",
    },
  });
};

const quizData = [
  // --- Section I: Multiple Choice (Single Answer) ---
  {
    id: 1,
    type: "single",
    text: "I would like to share some tips of how to keep our body's fitness and health. Everyone wants to be healthy. I have some tips for you to follow. \nFirst, exercise regularly. People who exercise regularly have 36 percent lower health-care costs and 54 percent shorter hospital stays. \nSecond, get up early and watch the sunrise. Then walk around your neighborhood after work to tone your muscles, heart, and lungs and burn fat. \nThird, eat a healthy breakfast. High-fiber, whole-grain cereal with low-fat milk and fruit is a healthy and delicious breakfast. \nFinally, make a list of five things in your life for which you're thankful. Being thankful for all those things is extremely important so that we learn to treasure what you have. This way makes our mind happy and healthy.",
    question: "The purpose of the text is....",
    options: [
      "A. to explain how to exercise",
      "B. to inform some ways to have a good body",
      "C. to persuade readers how to stay fit and healthy",
      "D. to entertain readers about things in life",
      "E. to describe tips of how to keep our body's fitness and health",
    ],
    correct: "E. to describe tips of how to keep our body's fitness and health",
  },
  {
    id: 2,
    type: "single",
    question: "How many steps are shown in the texts?",
    options: ["A. Two.", "B. Three", "C. Four.", "D. Five.", "E. Six"],
    correct: "D. Five.",
  },
  {
    id: 3,
    type: "single",
    text: "Ways to Stay Hydrated\n\nFluids are essential to keeping the vital organs active. Dehydration can be mild, moderate, or severe, based on how much of your body's fluid lost or not replaced. Follow these tips to stay safe and healthy, especially when temperatures - or your activity levels - increase.\n\n1. Don't wait till you're thirsty to drink.\nBy the time you feel thirsty, you're already slightly dehydrated. Sip water steadily throughout the day and drink more fluids than usual when the weather is hot, especially if you're active.\n\n2. Flavor your water.\nIf plain water tastes boring to you, you can add flavor with fresh fruits or a splash of fruit juice.\n\n3. Eat water-rich fruits and vegetables.\nCertain fruits and vegetables contain plenty of water In addition to healthful nutrients, such as watermelon, strawberries, pineapples, cucumbers, leafy greens, and tomatoes.\n\n4. Stay inside when it gets too hot.\nAvoid sun exposure, especially between 10a.m. and 2 p.m., when the rays are strongest. Plan outdoor activities in the early morning or evening.\n\n5. Dress for the weather.\nWear light, loose-fitting clothing that lets your skin breathe. Dark colors absorb heat, so stick with lighter shades. You can also wear a wide-brimmed hat in the sun.",
    question: "Why should we stay hydrated?",
    options: [
      "A. To avoid hot weather.",
      "B. To protect our skin.",
      "C. To stay fit and happy.",
      "D. To avoid dehydration.",
      "E. To prevent diseases.",
    ],
    correct: "D. To avoid dehydration.",
  },
  {
    id: 4,
    type: "single",
    question: "The healthy drink to flavor our water is",
    options: [
      "A. Coffee",
      "B. Soda",
      "C. hot chocolate",
      "D. fruits juice",
      "E. sport drink",
    ],
    correct: "D. fruits juice",
  },
  {
    id: 5,
    type: "single",
    question: "The negative imperative is",
    options: [
      "A. Don't wait till you're thirsty to drink.",
      "B. Flavor your water.",
      "C. Eat water-rich fruits and vegetables.",
      "D. Stay inside when it gets too hot.",
      "E. Dress for the weather.",
    ],
    correct: "A. Don't wait till you're thirsty to drink.",
  },
  {
    id: 6,
    type: "single",
    question: "The best color of clothing worn in the hot weather is",
    options: ["A. Black", "B. White", "C. navy", "D. deep purple", "E. brown"],
    correct: "C. navy",
  },
  // --- Section II: Complex Multiple Choice (Multiple Answers) ---
  {
    id: 7,
    type: "multiple",
    text: "How to Keep Your Eyes Healthy\n\nEyes are an important part of your health. So, don't take your eyes for granted. Take these easy steps to keep your eyes healthy.\n\n1. Eat well.\nGood eye health starts with the food. Nutrients like omega-3 fatty acids, lutein, zinc, and vitamins C and E might help ward off age-related vision problems. To get them, consume green leafy vegetables like spinach, kale and collards, oily fish, oranges, and other citrus fruits.\n\n2. Quit smoking.\nSmoking makes you more likely to get cataracts and damage to your optic nerve. The more times you try to quit, the more likely you are to succeed.\n\n3. Wear sunglasses.\nToo much UV exposure boosts your chances of cataracts and macular degeneration. So, choose the right sunglasses. It is a good idea to wear sunglasses for an extra layer.\n\n4. Use safety eyewear.\nIf you use hazardous or airborne materials on the job or at home, wear safety glasses or protective goggles.\n\n5. Look away from the computer screen.\nTry not to stare at a computer or phone screen for too long. Staring at it for too long can cause eyestrain, blurry vision, dry eyes, and trouble focusing at a distance.\n\n6. Visit your eye doctor regularly.\nEveryone needs a regular eye exam, even young children. It helps protect your sight and lets you see the best. Eye exams can also find diseases, like glaucoma, that have no symptoms. It's important to spot them early on, when they're easier to treat.",
    question: "Which of the following statements are true based on the text?",
    options: [
      "A. Safety eyewear prevents us from hazardous materials.",
      "B. We should wear safety glasses wherever we go.", // False, only when using hazardous materials
      "C. Quit smoking can damage our optic nerve.", // True (smoking causes damage)
      "D. Fish with omega-3 fatty acids is good for our eyes.",
      "E. Sunglasses can prevent us from the sun's UV exposure.",
    ],
    correct: [
      "A. Safety eyewear prevents us from hazardous materials.",
      "D. Fish with omega-3 fatty acids is good for our eyes.",
      "E. Sunglasses can prevent us from the sun's UV exposure.",
    ],
  },
  {
    id: 8,
    type: "multiple",
    question: "Staring at phone screen for too long can cause...",
    options: [
      "A. Cataracts",
      "B. blurry vision",
      "C. eyestrain",
      "D. dry eyes",
      "E. macular degeneration",
    ],
    correct: ["B. blurry vision", "C. eyestrain", "D. dry eyes"],
  },
  {
    id: 9,
    type: "multiple",
    question: "What should we avoid so that our eyes are healthy?",
    options: [
      "A. Smoking.",
      "B. Eat balanced diet.", // We should NOT avoid eating a balanced diet
      "C. Not wearing sunglasses.", // This is something to avoid (we should wear them)
      "D. Consuming plenty of water.", // We should NOT avoid this
      "E. Excessive screen time.",
    ],
    correct: [
      "A. Smoking.",
      "C. Not wearing sunglasses.",
      "E. Excessive screen time.",
    ],
  },

  {
    id: 10,
    type: "matching", // Changed to matching for consistency with the prompt's formatting expectation for this question
    question: "Identify the parts of the infographic!",
    items: [
      { word: "Goal", id: "Goal" },
      { word: "Purpose", id: "Purpose" },
      { word: "Steps", id: "Steps" },
    ],
    matches: [
      { synonym: "Stay Hydrated", id: "1" },
      { synonym: "To Provide Health Guidance", id: "2" },
      {
        synonym: "Eat a Healthy died, Exercise regularly,",
        id: "3",
      },
    ],
    correct: {
      Goal: "1",
      Purpose: "2",
      Steps: "3",
    },
  },
];

// Renamed to ChapterQuiz to be more generic
const Chapter3Quiz = () => {
  const navigate = useNavigate();

  const [answers, setAnswers] = useState({});
  const currentChapter = 4; // Updated chapter number

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
            Chapter 3 Quiz
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

export default Chapter3Quiz;
