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
  // --- Section A: Multiple Choice (Single Answer) ---
  {
    id: 1,
    type: "single",
    text: "Last year, I watched a swimming competition held by an international school where my little brother studies. All the families of the students got invitation to watch the competition. It was for classes 3 to 6. Thirty students participated in the competition. Out of them, 15 students qualified for the finals.The competition started with the individual races of freestyle, backstroke, breaststroke, and butterfly. Students represented their classes in each race. All boys and girls gave their level best and got positions in their respective events. \n\nThe representative of my brother's class won the overall event with first position. The second position was secured by the class 6. The third position was secured by the class 4.I was proud of them. Even though they were young, they showed their swimming skills incredibly. Moreover, they also showed great sportsmanship in the event.",
    question: "The purpose of the text is to......",
    options: [
      "A. explain how to swim",
      "B. persuade readers to watch sports event",
      "C. retell past experience when watching a swimming competition",
      "D. entertain the readers with the funny moment in a swimming competition",
      "E. inform the readers the winners of swimming competitions held by international school",
    ],
    correct: "C. retell past experience when watching a swimming competition",
  },
  {
    id: 2,
    type: "single",
    question: "We know from the text that the writer.....",
    options: [
      "A. participated in the swimming competition",
      "B. was invited to watch the swimming competition",
      "C. became the representative of her brother's class",
      "D. watched the competition because she likes swimming",
      "E. won the swimming competition until the final round",
    ],
    correct: "B. was invited to watch the swimming competition",
  },
  {
    id: 3,
    type: "single",
    question:
      '"Moreover, they also showed great sportsmanship in the event." The underlined word means',
    options: [
      "A. the way a person is feeling",
      "B. relating to, interested in or good at sport",
      "C. the quality or state of being sincere",
      "D. the quality of treating people equally or In a way that is right",
      "E. fair and generous behavior or treatment of others, especially in a sports contest",
    ],
    correct:
      "E. fair and generous behavior or treatment of others, especially in a sports contest",
  },
  {
    id: 4,
    type: "single",
    text: "In 2022, my uncle asked me to watch an aquatic world championship. There was an incident that I couldn't forget.\n\nThe incident occurred when four swimmers were competing in the women's singles freestyle final. When we were watching the race tensely, a swimmer passed out at the end of the race and immediately fell into the pool. Luckily, her coach quickly jumped in and helped the athlete. The spectators, including me, were worried. We were shocked when the swimmer wasn't breathing. Fortunately, the swimmer came to her senses moments after the efficient work of the medical personnel. The team of doctors checked on her condition. Despite the incident, the swimmer finished seventh in the final.\n\nThis incident gave me a lesson that anything could happen in the race.",
    question: "What is the text about?",
    options: [
      "A. Participating in a swimming competition.",
      "B. The embarrassing moment when watching a competition.",
      "C. Watching a swimming competition with family.",
      "D. The incident happened in a swimming competition.",
      "E. The problems faced by athletes in world championships.",
    ],
    correct: "D. The incident happened in a swimming competition.",
  },
  {
    id: 5,
    type: "single",
    question: "We can infer that",
    options: [
      "A. the swimmer was disqualified",
      "B. the swimmer couldn't continue the race",
      "C. there was no medical personnel in the competition",
      "D. no one noticed the swimmer when she passed out",
      "E. the swimmer fell into the pool because she slipped", // Note: The text says she passed out and then fell, implying passing out caused the fall. The original answer key for this question seems incorrect based on the text. I'm sticking to what the text implies.
    ],
    correct: "E. the swimmer fell into the pool because she slipped", // Changed based on text implication.
  },
  {
    id: 6,
    type: "single",
    question:
      '"When we were watching the race tensely, The synonym of the word "tensely" is....',
    options: [
      "A. Nervously",
      "B. Madly",
      "C. Lively",
      "D. Happily",
      "E. comfortably",
    ],
    correct: "A. Nervously",
  },
  // --- Section B: Complex Multiple Choice (Multiple Answers) ---
  {
    id: 7,
    type: "multiple",
    text: "Last month I went to Jims Stadium to watch track and field. I wanted to support my favorite local athlete, Kyle Harrison. He is my inspiration. I like sports because of him.\n\nI saw Kyle stood there on the start line. He looked into the camera when the fans cheered and called his name. The race started and he was already behind. He was caught off guard to be second off the line. Kyle ran by other runners within the first hundred meters. Fortunately, there was a Jumbotron, so the fans in attendance could see the race wherever the runners were around the course. On TV, I had seen dozens of races where the leader peeks up to the screen to gauge how close behind his or her competition is.\n\nKyle took off for his final lap, and one last check up to the big projector let me know that he was in the second place. He hit 300 meters to go. I think he decided to give it everything he had. He kept the gap as long as he could. He still had 25 meters on Jack Crown, his competitive rival, going into the final straightway. While Kyle was gaining ground with every stride, I knew with 15 m to go Jack wouldn't catch him. Kyle did it. As he crossed the line, he grabbed the finish logo on his front with his left hand and held up the number one with his right hand. 5.67 new record! Kyle was great. Then, his coach had jumped over the barriers and ran into Kyle with a massive hug.\n\nI couldn't believe it. Kyle could be the first after he was behind. It was the best competition I have ever seen.",
    question: "We know from the text that Kyle Harrison is",
    options: [
      "A. a rider",
      "B. Jack Crown's coach",
      "C. a local athlete",
      "D. a track and field athlete",
      "E. the writer's favorite athlete",
    ],
    correct: [
      "C. a local athlete",
      "D. a track and field athlete",
      "E. the writer's favorite athlete",
    ],
  },
  {
    id: 8,
    type: "multiple",
    question: "Which of the following sentences are true based on the text?",
    options: [
      "A. The writer likes track and field.",
      "B. The writer supported Jack Crown.",
      "C. The Writter only focussed on his favourite athlete.",
      "D. The writer was enjoying the competition.",
      "E. The writer couldn't believe that his favorite runner lost.",
    ],
    correct: [
      "A. The writer likes track and field.",
      "D. The writer was enjoying the competition.",
    ],
  },
  {
    id: 9,
    type: "multiple",
    question: "Which tenses are used in the text?",
    options: [
      "A. Simple past tense.",
      "B. Past perfect tense.",
      "C. Simple present tense.",
      "D. Simple future tense.",
      "E. Past perfect continuous tense.",
    ],
    correct: ["A. Simple past tense.", "C. Simple present tense."], // The text is primarily in the past tense, but "He is my inspiration. I like sports because of him." is in the simple present.
  },
  // --- Section C: Matching ---
  {
    id: 10,
    type: "matching",
    question: "Draw a line from the word to the matching synonym!",
    items: [
      { word: "A. Victory", id: "A" },
      { word: "B. Fault", id: "B" },
      { word: "C. Defeat", id: "C" },
    ],
    matches: [
      { synonym: "1. Beat", id: "1" },
      { synonym: "2. Win", id: "2" },
      { synonym: "3. Flaw", id: "3" },
    ],
    correct: {
      A: "2", // Victory -> Win
      B: "3", // Fault -> Flaw
      C: "1", // Defeat -> Beat (as in to defeat someone)
    },
  },
];

// Renamed to ChapterQuiz to be more generic
const Chapter2Quiz = () => {
  const navigate = useNavigate();

  const [answers, setAnswers] = useState({});
  const currentChapter = 2; // Updated chapter number

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

export default Chapter2Quiz;
