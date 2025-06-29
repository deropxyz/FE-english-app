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
  const token = localStorage.getItem("token");
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
    sectionTitle: "I. Multiple Choice",
    text: `Lionel Messi\n\nLuis Lionel Andrés Messi Cuccittini was born on June 24, 1987 in Rosario, Argentina. Messi is an Argentinian soccer player. He has been universally recognized as the best soccer player in the world. His quick dribbling skills and elusive tricks on the ball put him in a class of his own... (text continues as provided)`, // Potongan teks untuk keringkasan
    question: "The purpose of the text is to ...........",
    options: [
      "A. Describe Lionel Messi",
      "B. Retell past life of Lionel Messi",
      "C. Persuade readers to idolize Lionel Messi",
      "D. Compare Lionel Messi with Cristiano Ronaldo",
      "E. Entertain the readers about a story about Lionel Messi",
    ],
    correct: "A. Describe Lionel Messi",
  },
  {
    id: 2,
    type: "single",
    question: "The main idea of the fourth paragraph is .........",
    options: [
      "A. Messi is the fastest player in the world",
      "B. Messi is faster than Cristiano Ronaldo",
      "C. Messi’s speed with the ball is quick",
      "D. Messi is an agile player",
      "E. Messi is feared by other sprinters",
    ],
    correct: "C. Messi’s speed with the ball is quick",
  },
  {
    id: 3,
    type: "single",
    question: "Based on the text, which statements is true?",
    options: [
      "A. Messi is not only tall but also fast",
      "B. Messi is good at decision making between passing and shooting",
      "C. Messi is quite fast than compared to Cristiano Ronaldo and Theo Walcott",
      "D. Messi will allow anyone to take the ball from him without a desperate chase",
      "E. Messi’s motion is easily read by opposing player",
    ],
    correct: "B. Messi is good at decision making between passing and shooting",
  },
  {
    id: 4,
    type: "single",
    question:
      "“...to elude opposing defenders...”\nThe synonym of the underlined word is ..........",
    options: ["A. Catch", "B. Face", "C. Seek", "D. Avoid", "E. Pursue"],
    correct: "D. Avoid",
  },
  {
    id: 5,
    type: "single",
    question:
      "A player whose main job is to organize and control a team’s attacking play is called ........",
    options: [
      "A. A scorer",
      "B. A sprinter",
      "C. A defender",
      "D. An opponent",
      "E. A playmaker",
    ],
    correct: "E. A playmaker",
  },
  {
    id: 6,
    type: "single",
    text: `The Swimming Gala\n\nThe Swimming Gala was an anticipated event in Concord College. It is another part of the highly competitive Inter-House Competition... (text continues as provided)`, // Potongan teks untuk keringkasan
    question: "What can you learn about the swimming Gala?",
    options: [
      "A. It was national swimming competition",
      "B. More than five boarding houses participated in this event",
      "C. It allowed students to complete in many sports",
      "D. It was a compotition where the writer participated",
      "E. It was a swimming competition held in Concord College",
    ],
    correct: "E. It was a swimming competition held in Concord College",
  },
  {
    id: 7,
    type: "single",
    question: "The second paragraph mainly tells about ..........",
    options: [
      "A. How the events happened",
      "B. Who participated in the competitions",
      "C. Who won the swimming Gala",
      "D. How many the participants of the events",
      "E. When the competitions were held",
    ],
    correct: "A. How the events happened",
  },
  {
    id: 8,
    type: "single",
    question: "The descriptive word found in the text is ..........",
    options: [
      "A. Cheer",
      "B. Anticipated",
      "C. Available",
      "D. Enthusiastic",
      "E. Winnings",
    ],
    correct: "D. Enthusiastic",
  },
  // --- Bagian II: Pilihan Ganda Kompleks (Jawaban > 1) ---
  {
    id: 9,
    type: "multiple",
    sectionTitle: "II. Complex Multiple Choice",
    text: `The Tennis Match\n\nThree years ago, I didn’t like tennis. But, something had changed me... (text continues as provided)`,
    question: "Based on the text, which statements are true?",
    options: [
      "A. The writer watched a tennis match",
      "B. The writer likes tennis",
      "C. After watching the match, the writer became the fan of David",
      "D. The writer watched tennis for the first time because of David",
      "E. David didn’t win the match at that time",
    ],
    correct: [
      "A. The writer watched a tennis match",
      "B. The writer likes tennis",
      "C. After watching the match, the writer became the fan of David",
      "E. David didn’t win the match at that time",
    ],
  },
  {
    id: 10,
    type: "multiple",
    question: "Which sentences contain descriptive words?",
    options: [
      "A. Three years ago, i didn’t like tennis",
      "B. In July 2019, I went to a tennis match held in my town",
      "C. Every time he scored a point or even made a good short, they would scream his name, while Drew only got a few polite claps",
      "D. At the start of the match, all the spectators were cheering for David, clapping, whooping, and shouting, “Come on, David!”",
      "E. Then I ate my sweet chocolate ice cream when something strange happened",
    ],
    correct: [
      "C. Every time he scored a point or even made a good short, they would scream his name, while Drew only got a few polite claps",
      "D. At the start of the match, all the spectators were cheering for David, clapping, whooping, and shouting, “Come on, David!”",
      "E. Then I ate my sweet chocolate ice cream when something strange happened",
    ],
  },
  {
    id: 11,
    type: "multiple",
    question:
      "“I watched complacently for a bit...”\nWhat are the synonyms of the underlined word?",
    options: [
      "A. Humbly",
      "B. Insecurely",
      "C. Happily",
      "D. Unsurely",
      "E. Calmly",
    ],
    // Note: Kunci jawaban C, D, E untuk 'complacently' (puas diri) kurang tepat.
    // Sinonim yang lebih akurat adalah 'smugly' atau 'self-satisfiedly'.
    // Saya akan mengikuti kunci jawaban yang diberikan, tapi ini perlu diperhatikan.
    correct: ["C. Happily", "D. Unsurely", "E. Calmly"],
  },
  {
    id: 12,
    type: "multiple",
    question:
      "Which of the following words belong to vocabulary related to tennis?",
    options: ["A. Shot", "B. Game", "C. Court", "D. Penalty", "E. Tackle"],
    // Note: Kunci jawaban A, B, E. Court (C) juga sangat relevan dengan tenis.
    // Saya akan mengikuti kunci jawaban yang diberikan.
    correct: ["A. Shot", "B. Game", "E. Tackle"],
  },
  // --- Bagian III: Menjodohkan ---
  {
    id: 13,
    type: "matching",
    sectionTitle: "III. Matching",
    question: "From prefix to the matching adjective!",
    items: [
      { word: "A. Ir-", id: "A" },
      { word: "B. Il-", id: "B" },
      { word: "C. In-", id: "C" },
    ],
    matches: [
      { synonym: "1. decisive", id: "1" },
      { synonym: "2. responsible", id: "2" },
      { synonym: "3. literate", id: "3" },
    ],
    correct: { A: "2", B: "3", C: "1" }, // Ir-responsible, Il-literate, In-decisive
  },
  {
    id: 14,
    type: "matching",
    question: "From the term to the matching sport!",
    items: [
      { word: "A. Free kick", id: "A" },
      { word: "B. Forehand", id: "B" },
      { word: "C. rebound", id: "C" },
    ],
    matches: [
      { synonym: "1. Badminton", id: "1" },
      { synonym: "2. Basketball", id: "2" },
      { synonym: "3. Soccer", id: "3" },
    ],
    correct: { A: "3", B: "1", C: "2" }, // Free kick -> Soccer, Forehand -> Badminton, Rebound -> Basketball
  },
  // --- Bagian IV: Isian Singkat ---
  {
    id: 15,
    type: "fill",
    sectionTitle: "IV. Fill In",
    text: `When he has the ball, Kevin De Bruyne thinks so quickly, and he makes the decision so fast that it’s hard for the opponent to react... (text continues)`,
    question:
      "From the text, it can be concluded that the characteristic of Kevin De Bruyne is...",
    correct: "smart and quick decision-maker",
  },
  {
    id: 16,
    type: "fill",
    question: "The synonym of the word “assist” is ......",
    correct: "help or support",
  },
  // --- Bagian V: Esai ---
  {
    id: 17,
    type: "essay",
    sectionTitle: "V. Essay",
    text: `Two years ago, I went to a stadium to watch a basketball game with my parents... (text continues)`,
    question: "What is the communicative purpose of the text?",
  },
  {
    id: 18,
    type: "essay",
    question: "What did the writer do when the game looked boring?",
  },
  {
    id: 19,
    type: "essay",
    question: "What can you conclude about the writer?",
  },
  {
    id: 20,
    type: "essay",
    question:
      "Based on the text, write a sentence using past continuous tense!",
  },
];

const MidExamQuiz = () => {
  const navigate = useNavigate();
  const [answers, setAnswers] = useState({});
  const currentChapter = 3; // Updated chapter number

  const calculateScore = () => {
    let correctSingle = 0;
    let correctMultiple = 0;
    let correctMatching = 0;

    const singleQs = quizData.filter((q) => q.type === "single");
    const multipleQs = quizData.filter((q) => q.type === "multiple");
    const matchingQs = quizData.filter((q) => q.type === "matching");

    singleQs.forEach((q) => {
      if (answers[q.id] === q.correct) correctSingle++;
    });

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

    // Hitung auto score hanya dari PG, multiple, matching
    const autoScore =
      (correctSingle / totalSingle) * 40 +
      (correctMultiple / totalMultiple) * 30 +
      (correctMatching / totalMatching) * 30;

    return autoScore.toFixed(2);
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

  const handleMatchingChange = (questionId, prefix, adjective) => {
    setAnswers((prev) => ({
      ...prev,
      [questionId]: {
        ...(prev[questionId] || {}),
        [prefix]: adjective,
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
          <h1 className="text-3xl font-bold text-blue-800 mb-2">Mid Exam</h1>
          <p className="text-gray-500 mb-8">
            Read the texts carefully and answer the questions.
          </p>

          {quizData.map((q) => (
            <div key={q.id}>
              {/* Judul Bagian dan Teks Bacaan */}
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

                {/* Pilihan Ganda (Single) */}
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

                {/* Pilihan Ganda (Multiple) */}
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

                {/* Menjodohkan */}
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
                          className="w-full border border-gray-300 p-2 rounded-lg focus:ring-blue-500 focus:border-blue-500"
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

                {/* Isian Singkat */}
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

                {/* Esai */}
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
            </div>
          ))}

          <div className="mt-8 text-center">
            <button
              onClick={handleSubmit}
              className="bg-blue-600 hover:bg-blue-700 text-white font-bold px-8 py-3 rounded-lg shadow-md transition-transform transform hover:scale-105"
            >
              Submit Exam
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MidExamQuiz;
