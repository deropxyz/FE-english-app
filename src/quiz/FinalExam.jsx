import React, { useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";

// Placeholder untuk komponen Header
const Header = () => (
  <header className="bg-white shadow-md p-4 mb-6">
    <div className="max-w-5xl mx-auto">
      <h1 className="text-xl font-bold text-gray-800">
        English Learning Platform
      </h1>
    </div>
  </header>
);

// Placeholder untuk fungsi navigasi
const navigateToDashboard = (state) => {
  console.log("Navigating to dashboard with state:", state);
  alert(
    `Quiz Submitted!\nScore: ${state.score}\nCheck the console for full answer details.`
  );
};

// Placeholder untuk pemanggilan API dengan axios
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
  // --- Bagian I: Pilihan Ganda (Jawaban Tunggal) ---
  {
    id: 1,
    type: "single",
    sectionTitle: "I. MULTIPLE CHOICE",
    text: `Serena Williams is an American professional tennis player. She was born on September 26, 1981 in Compton, California... (text continues)`,
    question: "The purpose of the text is to......",
    options: [
      "A. Retell past events experienced by Serena Williams",
      "B. Describe the personality of Serena Williams",
      "C. Persuade the readers to watch Serena Williams",
      "D. Describe how to be a tennis player",
      "E. Explain how Serena Williams became an athlete",
    ],
    correct: "B. Describe the personality of Serena Williams",
  },
  {
    id: 2,
    type: "single",
    question:
      "“Serena has ever played against her sister on the court. It didn’t make her back down.”\nIt means that Serena is ........",
    options: [
      "A. Humble",
      "B. Competitive",
      "C. Aggressive",
      "D. Selfish",
      "E. Confident",
    ],
    correct: "B. Competitive",
  },
  {
    id: 3,
    type: "single",
    question:
      "“She has also devoted time and money to the development at a tennis center in Washington DC.”\nIt can be concluded that Serena is ......",
    options: [
      "A. Generous",
      "B. Passionate",
      "C. Humble",
      "D. Skillful",
      "E. Talented",
    ],
    correct: "A. Generous",
  },
  {
    id: 4,
    type: "single",
    text: `I don't think I have ever seen a more exciting volleyball match. The first two sets were far from exciting... (text continues)`,
    question: "Which set caught the writer’s attention the most?",
    options: [
      "A. The first set",
      "B. The second set",
      "C. The third set",
      "D. The fourth set",
      "E. The fifth set",
    ],
    correct: "E. The fifth set",
  },
  {
    id: 5,
    type: "single",
    question:
      "“The passes were precise.”\nThe synonym of the underlined word is.......",
    options: [
      "A. Accurate",
      "B. Loose",
      "C. Careless",
      "D. Imprecise",
      "E. Ambiguous",
    ],
    correct: "A. Accurate",
  },
  {
    id: 6,
    type: "single",
    question: "According to the writer, how was the game?",
    options: [
      "A. Boring",
      "B. Awful",
      "C. Chaotic",
      "D. Exciting",
      "E. Stressful",
    ],
    correct: "D. Exciting",
  },
  {
    id: 7,
    type: "single",
    question: "From the text, it can be inferred that the writer is.......",
    options: [
      "A. A fan of the Lions",
      "B. A volleyball player",
      "C. A journalist",
      "D. A critic of sport",
      "E. An athlete",
    ],
    correct: "A. A fan of the Lions",
  },
  {
    id: 8,
    type: "single",
    text: `Being physically active is one of the most important things you can do each day to maintain and improve your health... (text continues)`,
    question: "From the text, the best time to exercise is ............",
    options: [
      "A. In the morning",
      "B. In the afternoon",
      "C. In your spare time",
      "D. In the evening",
      "E. At night",
    ],
    correct: "C. In your spare time",
  },
  {
    id: 9,
    type: "single",
    question:
      "“You can record your activities on your journal or mobile app.”\nWhich tip is suitable for this sentence?",
    options: [
      "A. Find ways to fit exercise into your day.",
      "B. Do activities your enjoy to make it more fun.",
      "C. Make it social.",
      "D. It there’s a break in your routine, get back on track.",
      "E. Keep track of your progress.",
    ],
    correct: "E. Keep track of your progress.",
  },
  {
    id: 10,
    type: "single",
    question:
      "“Start slowly and gradually build back up to your previous level of activity.”\nThe underlined word has similar in meaning to ........",
    options: [
      "A. Regularly",
      "B. Hurriedly",
      "C. Quickly",
      "D. Abruptly",
      "E. Suddenly",
    ],
    correct: "A. Regularly",
  },

  // --- Bagian II: Pilihan Ganda Kompleks (Jawaban > 1) ---
  {
    id: 11,
    type: "multiple",
    sectionTitle: "II. Complex Multiple Choice",
    text: `Here are 5 good eating habits which will definitely help us to achieve our food goals... (text continues)`,
    question: "The unhealthy eating habits are ........",
    options: [
      "A. Consuming sugar-sweetened drinks",
      "B. Consuming vegetables and fruits",
      "C. Eating quickly",
      "D. Snacking at night",
      "E. Fating wholegrain foods",
    ],
    correct: [
      "A. Consuming sugar-sweetened drinks",
      "C. Eating quickly",
      "D. Snacking at night",
    ],
  },
  {
    id: 12,
    type: "multiple",
    question: "Why do we need fruits and vegetables?",
    options: [
      "A. They are high in unsaturated fat",
      "B. They are rich in carbohydrates",
      "C. They are low in saturated fat",
      "D. They are low in trans fat",
      "E. They are rich in dietary fiber, vitamins, and minerals.",
    ],
    correct: [
      "C. They are low in saturated fat",
      "D. They are low in trans fat",
      "E. They are rich in dietary fiber, vitamins, and minerals.",
    ],
  },
  {
    id: 13,
    type: "multiple",
    question: "Which of the following words belong to adverbs of manner?",
    options: [
      "A. Definitely",
      "B. Slowly",
      "C. Mindfully",
      "D. At every meal",
      "E. With weight management",
    ],
    correct: ["A. Definitely", "B. Slowly", "C. Mindfully"],
  },
  {
    id: 14,
    type: "multiple",
    question: "The synonyms of the word “persevere” are .........",
    options: ["A. Continue", "B. Stop", "C. Go on", "D. Keep on", "E. Give up"],
    correct: ["A. Continue", "C. Go on", "D. Keep on"],
  },
  {
    id: 15,
    type: "multiple",
    question: "Which sentences are imperative sentences?",
    options: [
      "A. Be patient",
      "B. Set a goal to drink water instead of sugar-sweetened drinks",
      "C. It takes about 20 minutes for your brain to send out signals that you are full",
      "D. Challenge yourself to stick to one serving and also standard portion sizes",
      "E. These 5 good eating habits take time to develop",
    ],
    correct: [
      "A. Be patient",
      "B. Set a goal to drink water instead of sugar-sweetened drinks",
      "D. Challenge yourself to stick to one serving and also standard portion sizes",
    ],
  },

  // --- Bagian III: Menjodohkan ---
  {
    id: 16,
    type: "matching",
    sectionTitle: "III. Matching",
    question: "From the term to the matching sport!",
    items: [
      { word: "A. Pitchers", id: "A" },
      { word: "B. Headers", id: "B" },
      { word: "C. Lay-up", id: "C" },
    ],
    matches: [
      { synonym: "1. Basketball", id: "1" },
      { synonym: "2. Baseball", id: "2" },
      { synonym: "3. Soccer", id: "3" },
    ],
    correct: { A: "2", B: "3", C: "1" },
  },
  {
    id: 17,
    type: "matching",
    question: "Form the habit to the matching benefit!",
    items: [
      { word: "A. Get enough sleep", id: "A" },
      { word: "B. Reduce screen time", id: "B" },
      { word: "C. Drink enough water", id: "C" },
    ],
    matches: [
      { synonym: "1. Reduce eye strain", id: "1" },
      { synonym: "2. Get sick less often", id: "2" },
      { synonym: "3. Keep a normal temperature", id: "3" },
    ],
    correct: { A: "2", B: "1", C: "3" },
  },

  // --- Bagian IV: Isian Singkat ---
  {
    id: 18,
    type: "fill",
    sectionTitle: "IV. Fill In",
    text: `· Make a game out of counting your daily steps\n· Buy a new pair of athletic shoes that fit properly, if you don’t have one... (text continues)`,
    question: "The steps are about",
    correct: "tips for starting a walking routine",
  },
  {
    id: 19,
    type: "fill",
    question: "The best posture to walk is",
    correct: "head up, spine straight, shoulders back",
  },
  {
    id: 20,
    type: "fill",
    question: "The equipment you need to do this activity is",
    correct: "athletic shoes that fit properly",
  },

  // --- Bagian V: Esai ---
  {
    id: 21,
    type: "essay",
    sectionTitle: "V. Essay",
    text: `Rodrigo hernandez, known as rodri, was born on Juni 22, 1996... (text continues)`,
    question: "What is the communicative purpose of the text?",
  },
  {
    id: 22,
    type: "essay",
    question: "What information can you get from the text?",
  },
  {
    id: 23,
    type: "essay",
    question: "What adjectives are suitable to describe Rodri?",
  },
  {
    id: 24,
    type: "essay",
    question: "Identify the structure of the text!",
  },
  {
    id: 25,
    type: "essay",
    question: "What tenses does the text use? Give examples!",
  },
];

const FinalExamQuiz = () => {
  const navigate = useNavigate();
  const [answers, setAnswers] = useState({});
  const currentChapter = 6; // Updated chapter number

  const calculateScore = () => {
    let correctSingle = 0;
    let correctMultiple = 0;
    let correctMatching = 0;

    const singleQs = quizData.filter((q) => q.type === "single");
    const multipleQs = quizData.filter((q) => q.type === "multiple");
    const matchingQs = quizData.filter((q) => q.type === "matching");

    // Skor Pilihan Ganda (Single)
    singleQs.forEach((q) => {
      if (answers[q.id] === q.correct) correctSingle++;
    });

    // Skor Pilihan Ganda Kompleks (Multiple)
    multipleQs.forEach((q) => {
      const userAns = new Set(answers[q.id] || []);
      const correctAns = new Set(q.correct);
      if (
        userAns.size === correctAns.size &&
        [...userAns].every((ans) => correctAns.has(ans))
      ) {
        correctMultiple++;
      }
    });

    // Skor Menjodohkan
    matchingQs.forEach((q) => {
      const userPairs = answers[q.id] || {};
      const correctPairs = q.correct;
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

    // Kalkulasi skor dengan bobot
    const score =
      (correctSingle / totalSingle) * 40 +
      (correctMultiple / totalMultiple) * 30 +
      (correctMatching / totalMatching) * 30;

    return score.toFixed(2);
  };

  const handleAnswerChange = (questionId, value) => {
    setAnswers((prev) => ({ ...prev, [questionId]: value }));
  };

  const handleMultiAnswerChange = (questionId, option) => {
    setAnswers((prev) => {
      const current = prev[questionId] || [];
      const updated = current.includes(option)
        ? current.filter((o) => o !== option)
        : [...current, option];
      return { ...prev, [questionId]: updated };
    });
  };

  const handleMatchingChange = (questionId, itemKey, matchValue) => {
    setAnswers((prev) => ({
      ...prev,
      [questionId]: {
        ...(prev[questionId] || {}),
        [itemKey]: matchValue,
      },
    }));
  };

  const handleSubmit = async () => {
    const autoScore = parseFloat(calculateScore());
    const totalScore = autoScore; // default = auto
    const manualScore = null; // belum direview

    // Format jawaban lengkap
    const formattedAnswers = {};
    quizData.forEach((q) => {
      if (answers[q.id] !== undefined) {
        formattedAnswers[q.id] = {
          answer: answers[q.id],
          type: q.type,
        };
      }
    });

    try {
      await submitQuizData({
        chapter: currentChapter,
        autoScore,
        manualScore,
        totalScore,
        answers: formattedAnswers,
      });

      navigate("/dashboard", { state: { reload: true } });
    } catch (err) {
      console.error(err);
      alert("Failed to submit quiz. See console for details.");
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 font-sans">
      <Header />
      <div className="max-w-4xl mx-auto p-4 sm:p-6">
        <div className="bg-white rounded-xl shadow-lg p-6 sm:p-8">
          <h1 className="text-3xl font-bold text-red-800 mb-2">Final Exam</h1>
          <p className="text-gray-500 mb-8">
            Read the texts carefully and answer the questions.
          </p>

          {quizData.map((q) => (
            <div key={q.id}>
              {q.sectionTitle && (
                <h2 className="text-2xl font-bold text-gray-700 mt-10 mb-4 border-b pb-2">
                  {q.sectionTitle}
                </h2>
              )}
              {q.text && (
                <div className="bg-gray-50 p-4 rounded-lg mb-4 text-gray-700 text-sm italic leading-relaxed whitespace-pre-line">
                  {q.text}
                </div>
              )}

              <div className="mb-8 pt-2">
                <p className="mb-4 font-semibold text-gray-800 text-lg">
                  {q.id}. {q.question}
                </p>

                {/* --- Render Berdasarkan Tipe Soal --- */}

                {q.type === "single" && (
                  <div className="space-y-2">
                    {q.options.map((opt, i) => (
                      <label
                        key={i}
                        className="flex items-center p-3 rounded-lg hover:bg-red-50 transition-colors cursor-pointer"
                      >
                        <input
                          type="radio"
                          name={`q-${q.id}`}
                          value={opt}
                          className="mr-3 h-4 w-4 text-red-600 border-gray-300 focus:ring-red-500"
                          checked={answers[q.id] === opt}
                          onChange={() => handleAnswerChange(q.id, opt)}
                        />
                        {opt}
                      </label>
                    ))}
                  </div>
                )}

                {q.type === "multiple" && (
                  <div className="space-y-2">
                    {q.options.map((opt, i) => (
                      <label
                        key={i}
                        className="flex items-center p-3 rounded-lg hover:bg-red-50 transition-colors cursor-pointer"
                      >
                        <input
                          type="checkbox"
                          value={opt}
                          className="mr-3 h-4 w-4 rounded text-red-600 border-gray-300 focus:ring-red-500"
                          checked={answers[q.id]?.includes(opt) || false}
                          onChange={() => handleMultiAnswerChange(q.id, opt)}
                        />
                        {opt}
                      </label>
                    ))}
                  </div>
                )}

                {q.type === "matching" && (
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 items-center">
                    <div className="font-semibold text-center text-gray-600">
                      Column A
                    </div>
                    <div className="font-semibold text-center text-gray-600">
                      Column B
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
                          className="w-full border border-gray-300 p-2 rounded-lg focus:ring-red-500 focus:border-red-500"
                        >
                          <option value="">Select a match</option>
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

                {q.type === "fill" && (
                  <input
                    type="text"
                    className="w-full border border-gray-300 p-2 rounded-lg focus:ring-red-500 focus:border-red-500"
                    placeholder="Type your answer here..."
                    value={answers[q.id] || ""}
                    onChange={(e) =>
                      handleAnswerChange(q.id, e.target.value.toLowerCase())
                    }
                  />
                )}

                {q.type === "essay" && (
                  <textarea
                    rows={5}
                    className="w-full border border-gray-300 p-2 rounded-lg focus:ring-red-500 focus:border-red-500"
                    placeholder="Type your answer here..."
                    value={answers[q.id] || ""}
                    onChange={(e) => handleAnswerChange(q.id, e.target.value)}
                  />
                )}
              </div>
            </div>
          ))}

          <div className="mt-8 text-center">
            <button
              onClick={handleSubmit}
              className="bg-red-600 hover:bg-red-700 text-white font-bold px-8 py-3 rounded-lg shadow-md transition-transform transform hover:scale-105"
            >
              Submit Final Exam
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FinalExamQuiz;
