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
  const token = localStorage.getItem("token");
  return axios.post("http://localhost:5000/api/quiz/submit", data, {
    headers: {
      Authorization: `Bearer ${token}`,
      "Content-Type": "application/json",
    },
  });
};

const quizData = [
  // --- Section A: Multiple Choice (Single Answer) ---
  {
    id: 1,
    type: "single",
    text: "Marselino Ferdinan is one of the most promising young football players in Indonesia. He was born on September 9, 2004, in Jakarta. He is known as a talented attacking midfielder. Even though he is still very young, he shows great maturity on the field. \n\n Marselino has excellent ball control, creative passing, and accurate shooting. When it comes to creating chances, he is one of the few national players who can compete with international-level midfielders. He plays an important role in both his club and the national team. \n\n Marselino is known for his sharp vision and high football intelligence. He often surprises defenders with quick movements and accurate through balls. He has contributed to many goals using this style of play.\n\n His intelligence is not his only strength. He is also known for his composure during set pieces. Marselino has scored from free kicks and has also provided assists from corners. Blessed with precise left-footed technique, his passes and shots are both powerful and accurate. His contributions have made him a fan favorite among Indonesian football supporters.",
    question: "The purpose of the text is…",
    options: [
      "A. to retell the achievements of Marselino Ferdinan",
      "B. to describe the skills and qualities of Marselino Ferdinan",
      "C. to explain how Marselino started his football career",
      "D. to amuse the readers with a story about Marselino Ferdinan",
      "E. to persuade people to support Indonesian football",
    ],
    correct: "B. to describe the skills and qualities of Marselino Ferdinan",
  },
  {
    id: 2,
    type: "single",
    question: "From the text, we can conclude that Marselino Ferdinan is...",
    options: [
      "A. shy and reserved",
      "B. quick-tempered",
      "C. creative and intelligent",
      "D. pessimistic",
      "E. humorous",
    ],
    correct: "C. creative and intelligent",
  },
  {
    id: 3,
    type: "single",
    question: "The main idea of the third paragraph is…",
    options: [
      "A. Marselino is excellent in taking penalty kicks",
      "B. Marselino often assists goals from corner kicks",
      "C. Marselino’s strength lies in his sharp vision and smart play",
      "D. Marselino enjoys passing more than scoring",
      "E. Marselino trains hard to become a defender",
    ],
    correct: "C. Marselino’s strength lies in his sharp vision and smart play",
  },
  {
    id: 4,
    type: "single",
    question:
      "We know from the text that Marselino Ferdinan is an attacking midfielder. An attacking midfielder is a player who…",
    options: [
      "A. blocks the ball from entering the goal",
      "B. stays at the back to support the defenders",
      "C. creates goal opportunities and supports strikers",
      "D. controls the entire match alone",
      "E. defends from the front line",
    ],
    correct: "C. creates goal opportunities and supports strikers",
  },
  {
    id: 5,
    type: "single",
    text: "Anthony Sinisuka Ginting is one of Indonesia’s top men’s singles badminton players who is regaining the spotlight in 2025. He was born on October 28, 1996, in Cimahi, West Java. Known for his aggressive and entertaining playing style, Ginting has built a strong fanbase especially among the youth on social media. \n\n Ginting is a highly talented athlete. Despite suffering a right shoulder injury earlier in 2025, he remains a prominent public figure. He recently greeted thousands of fans at Indonesia Masters 2025 through a special meet-and-greet session at Istora Senayan, even though he couldn’t compete in the tournament. \n\n On the court, Ginting is famous for his explosive playing style and powerful smashes. His speed and shot accuracy make him a tough opponent. However, the injury has affected his performance and forced him to withdraw from major tournaments such as the All England Open and the 2025 Asian Championships. \n\nOff the court, Ginting is known as a humble and determined figure. He has been undergoing intensive recovery therapy and is expected to make a comeback by July 2025. Despite the physical challenges, he actively connects with fans through social media and public appearances. His dedication and positive attitude have made him an inspiration and a role model for young badminton fans across Indonesia.",
    question: "We can infer from the text that Anthony Ginting is…",
    options: [
      "A. a reckless athlete",
      "B. a pessimistic figure",
      "C. a determined and humble person",
      "D. an unreliable player",
      "E. a selfish public figure",
    ],
    correct: "C. a determined and humble person",
  },
  {
    id: 6,
    type: "single",
    question:
      '“He recently greeted thousands of fans at Indonesia Masters 2025 through a special meet-and-greet session at Istora Senayan.” The synonym of the word "greeted" is…',
    options: [
      "A. ignored",
      "B. welcomed",
      "C. rejected",
      "D. questioned",
      "E. blamed",
    ],
    correct: "B. welcomed",
  },
  // --- Section B: Complex Multiple Choice (Multiple Answers) ---
  {
    id: 7,
    type: "multiple",
    text: "A volleyball player Megawati Hangestri Pertiwi became the 1 ranked female volleyball player in the world in 2025, according to Volleybox. She is an Indonesian opposite hitter who currently plays for the national team and the Red Sparks volleyball club in South Korea. \n\nThis 185 cm-tall athlete is known for her power and accuracy. Her spikes are explosive, and her serves are sharp and aggressive. Her playing style is said to represent the modern opposite hitter—strong, fast, and intelligent on the court. It’s no surprise that she is recognized internationally and often referred to by the nickname “Megatron.” \n\nMegawati is the third of four children in a humble family from Jember, East Java. Since childhood, she had a deep love for volleyball and showed strong determination. Despite facing limited facilities early on, she stayed motivated and trained hard. Her breakthrough came when she was selected to join the national team at a young age. \n\nMegawati is a humble and disciplined athlete. Even after achieving success with the Indonesian national team and international clubs, she remains grounded. She focuses on practice and fitness rather than enjoying luxury. In South Korea, she keeps her training consistent, manages her own nutrition, and communicates closely with her personal trainers to improve her performance. \n\nShe is deeply inspired by Indonesian volleyball legend Aprilia Manganang. Megawati once said that watching Aprilia play motivated her to become strong and confident. Now, many young girls in Indonesia say the same thing about Megawati.s",
    question:
      "Which personality traits of Megawati Hangestri can inspire people?",
    options: ["A. Arrogant", "B. Humble", "C. Reckless", "D. Lazy", "E. Shy"],
    correct: ["B. Humble"],
  },
  {
    id: 8,
    type: "multiple",
    question: "We know from the text that Megawati Hangestri....",
    options: [
      "A. is a tennis player",
      "B. plays for a European club",
      "C. was born in South Korea",
      "D. is called “Megatron” for her powerful smashes",
      "E. is an idol of Lionel Messi",
    ],
    correct: ["D. is called “Megatron” for her powerful smashes"],
  },
  {
    id: 9,
    type: "multiple",
    question:
      "“She is often referred to as ‘Megatron’ due to her powerful and consistent smashing.” The synonym of the underlined word “powerful” is....",
    options: ["A. weak", "B. gentle", "C. strong", "D. lazy", "E. normal"],
    correct: ["C. strong"],
  },
  // --- Section C: Matching ---
  {
    id: 10,
    type: "matching",
    question: "Draw a line from the prefix to the matching adjective!",
    prefixes: ["A. dis-", "B. im-", "C. un-"],
    adjectives: ["i. patient", "ii. disciplined", "iii. obedient"],
    correct: {
      "A. dis-": "iii. obedient",
      "B. im-": "i. patient",
      "C. un-": "ii. disciplined",
    },
  },
];

// Renamed to ChapterQuiz to be more generic
const Chapter1Quiz = () => {
  const navigate = useNavigate();

  const [answers, setAnswers] = useState({});
  const currentChapter = 1; // Updated chapter number

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
            Chapter {currentChapter} Quiz
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
                    Prefix
                  </div>
                  <div className="font-semibold text-center text-gray-600">
                    Adjective
                  </div>
                  {q.prefixes.map((prefix, i) => (
                    <React.Fragment key={i}>
                      <div className="p-2 bg-gray-100 rounded text-center">
                        {prefix}
                      </div>
                      <select
                        value={answers[q.id]?.[prefix] || ""}
                        onChange={(e) =>
                          handleMatchingChange(q.id, prefix, e.target.value)
                        }
                        className="w-full border border-gray-300 p-2 rounded-lg focus:ring-blue-500 focus:border-blue-500"
                      >
                        <option value="">Select an adjective</option>
                        {q.adjectives.map((adj) => (
                          <option key={adj} value={adj}>
                            {adj}
                          </option>
                        ))}
                      </select>
                    </React.Fragment>
                  ))}
                </div>
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

export default Chapter1Quiz;
