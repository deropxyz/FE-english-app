import React, { useState } from "react";
import { Link } from "react-router-dom";

import {
  ChevronDown,
  ChevronRight,
  BookOpen,
  Target,
  FileText,
  MessageCircle,
  PenTool,
  Lightbulb,
  Apple, // For Healthy Foods
  Carrot, // For Vegetables
  Heart, // For Health
  ClipboardList, // For Lists/Recipes
  ChefHat, // For Baking/Cooking
  Utensils,
  Brain,
  Sprout,
  Fish,
  Wheat,
  Droplets,
} from "lucide-react";

// Main Application Component - Exported as default
export default function App() {
  // State to manage which content section is visible
  const [activeSection, setActiveSection] = useState("overview");
  // State to manage which collapsible sections are open
  const [expandedSections, setExpandedSections] = useState({});

  /**
   * Toggles the expanded/collapsed state of a UI section.
   * @param {string} section - The identifier for the section to toggle.
   */
  const toggleSection = (section) => {
    setExpandedSections((prev) => ({
      ...prev,
      [section]: !prev[section],
    }));
  };

  // --- Data for the component ---

  // Navigation sections for the sidebar
  const sections = [
    { id: "overview", title: "Learning Objectives", icon: Target },
    { id: "healthy-eating", title: "What is Healthy Food?", icon: Apple },
    {
      id: "procedure-recipes",
      title: "Recipes & Tips Structure",
      icon: ClipboardList,
    },
    {
      id: "stating-preferences",
      title: "Stating Preferences",
      icon: MessageCircle,
    },
    { id: "writing-tips", title: "Writing Healthy Tips", icon: PenTool },
  ];

  // Data for the baking tips example
  const bakingTips = [
    { icon: Apple, text: "Swap out refined sugar for fruit." },
    { icon: Utensils, text: "Replace butter or oil with Greek yogurt." },
    { icon: Wheat, text: "Replace white flour for whole wheat flour." },
    {
      icon: Sprout,
      text: "Use nutritious eggs to naturally bind ingredients.",
    },
    { icon: Heart, text: "Opt for dark chocolate." },
  ];

  // Data for the practice task vocabulary
  const vocabTerms = [
    { term: "Nutritious", meaning: "Bergizi" },
    { term: "Nutrient", meaning: "Nutrisi / Zat Gizi" },
    { term: "Pattern", meaning: "Pola" },
    { term: "Salt", meaning: "Garam" },
    { term: "Fibre", meaning: "Serat" },
    { term: "Starchy Carbohydrates", meaning: "Karbohidrat Berpati" },
    { term: "Saturated Fat", meaning: "Lemak Jenuh" },
    { term: "Fluids", meaning: "Cairan" },
    { term: "Blood Pressure", meaning: "Tekanan Darah" },
    { term: "Balanced Diet", meaning: "Diet Seimbang" },
  ];

  /**
   * Renders the main content based on the activeSection state.
   * @returns {JSX.Element} The component to render for the active section.
   */
  const renderContent = () => {
    switch (activeSection) {
      case "overview":
        return (
          <div className="space-y-6 animate-fade-in">
            <div className="bg-gradient-to-r from-green-50 to-teal-50 p-6 rounded-lg border-l-4 border-green-500">
              <h3 className="text-xl font-bold text-gray-800 mb-4 flex items-center">
                <Target className="mr-3 text-green-600" size={24} />
                Learning Objectives
              </h3>
              <ul className="list-disc list-inside space-y-2 text-gray-700">
                <li>Identify and explain the importance of healthy foods.</li>
                <li>
                  Read and interpret texts about nutrition and food categories.
                </li>
                <li>Use appropriate vocabulary to describe food.</li>
                <li>Write short texts encouraging healthy eating habits.</li>
              </ul>
            </div>
            <div className="bg-yellow-50 p-4 rounded-lg border border-yellow-200">
              <h4 className="font-semibold text-yellow-800 mb-2 flex items-center">
                <Lightbulb className="mr-2" size={20} /> Trivia: Did You Know?
              </h4>
              <p className="text-yellow-700">
                According to the Indonesian Ministry of Health, only 1 in 3
                students eats vegetables and fruits daily.
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-sm border">
              <div className="prose max-w-none">
                <div className="grid md:grid-cols-2 gap-6 mt-6">
                  <div className="bg-red-50 p-4 rounded-lg">
                    <h4 className="font-semibold text-red-800 mb-3 flex items-center">
                      <Heart className="mr-2" size={20} />
                      Power Up Questions
                    </h4>
                    <ul className="space-y-2 text-sm text-red-700">
                      <li>
                        • What do you know about a goal of a procedure text
                      </li>
                      <li>
                        • What do you know about a goal of a procedure text
                      </li>
                      <li>• How is the format of tips? </li>
                    </ul>
                  </div>
                  <div className="bg-blue-50 p-4 rounded-lg">
                    <h4 className="font-semibold text-blue-800 mb-3 flex items-center">
                      <Brain className="mr-2" size={20} />
                      Keywords
                    </h4>
                    <div className="flex flex-wrap gap-2">
                      {[
                        "Ingredient",
                        "Nutrition",
                        "Personality",
                        "Preference",
                        "Recipe",
                      ].map((keyword, index) => (
                        <span
                          key={index}
                          className="px-2 py-1 bg-blue-200 text-blue-800 rounded text-xs font-medium"
                        >
                          {keyword}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        );

      case "healthy-eating":
        return (
          <div className="space-y-6 animate-fade-in">
            <div className="bg-white p-6 rounded-lg shadow-sm border">
              <h3 className="text-xl font-bold text-gray-800 mb-4 flex items-center">
                <Apple className="mr-3 text-red-500" size={24} />
                What is Healthy Food?
              </h3>
              <p className="text-gray-700 leading-relaxed mb-4">
                The phrase "healthy food" refers to a variety of foods that
                provide the nutrients your body needs to maintain good health,
                feel energized, and function properly. These foods include
                fruits, vegetables, whole grains, lean proteins, and low-fat
                dairy products. Consuming healthy food helps prevent chronic
                diseases, supports growth and development, and improves overall
                well-being.
              </p>
              <p className="text-gray-700 leading-relaxed mb-4">
                When we talk about healthy food, there are many useful tips to
                follow. Planning a balanced diet and preparing meals in a
                healthy way are examples of choosing healthy food. Texts that
                explain how to do something step by step are called procedure
                texts.
              </p>
              <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 mt-6">
                <div className="p-3 bg-red-50 rounded-lg text-center">
                  <Carrot className="mx-auto text-red-500 mb-1" /> Fruits &
                  Vegetables
                </div>
                <div className="p-3 bg-yellow-50 rounded-lg text-center">
                  <Wheat className="mx-auto text-yellow-600 mb-1" /> Whole
                  Grains
                </div>
                <div className="p-3 bg-blue-50 rounded-lg text-center">
                  <Fish className="mx-auto text-blue-500 mb-1" /> Lean Proteins
                </div>
                <div className="p-3 bg-gray-100 rounded-lg text-center">
                  <Droplets className="mx-auto text-gray-500 mb-1" /> Low-Fat
                  Dairy
                </div>
                <div className="p-3 bg-green-50 rounded-lg text-center">
                  <Heart className="mx-auto text-green-500 mb-1" /> Healthy Fats
                </div>
                <div className="p-3 bg-teal-50 rounded-lg text-center">
                  <Brain className="mx-auto text-teal-500 mb-1" /> Supports
                  Brain
                </div>
              </div>
            </div>
          </div>
        );

      case "procedure-recipes":
        return (
          <div className="space-y-6 animate-fade-in">
            <div className="bg-white p-6 rounded-lg shadow-sm border">
              <h3 className="text-xl font-bold text-gray-800 mb-4 flex items-center">
                <ClipboardList className="mr-3 text-blue-500" size={24} />
                Recipes & Tips Structure
              </h3>
              <p className="text-gray-700 leading-relaxed mb-4">
                Healthy foods are essential for a strong body and a clear mind.
                They provide the nutrients we need to grow, heal, and stay
                active. A balanced diet includes fruits, vegetables, whole
                grains, lean proteins, and water. It helps reduce the risk of
                disease, maintains a healthy weight, and supports brain
                development. Unhealthy foods, especially those high in sugar and
                fat, can lead to health problems like obesity and diabetes.
              </p>
              <p className="text-gray-700 leading-relaxed mb-4">
                Therefore, it's important to choose what we eat wisely. Choosing
                a healthy food is not easy. When you want to make a healthy
                dish, you can see a standardized food recipe. There is meal
                component contribution. It helps in forecasting about the
                nutritional requirements. Knowing nutrition means getting the
                food and nourishment that you need for health and growth.
              </p>
              <div className="grid md:grid-cols-2 gap-6 mt-6">
                <div className="bg-blue-50 p-4 rounded-lg border border-blue-200">
                  <h4 className="font-semibold text-blue-800 mb-3 flex items-center">
                    <ChefHat size={20} className="mr-2" />
                    Recipe Structure
                  </h4>
                  <ul className="list-decimal list-inside space-y-1 text-sm text-blue-700">
                    <li>Recipe Name (The Goal)</li>
                    <li>List of Ingredients (Materials)</li>
                    <li>Method / Directions (Steps)</li>
                    <li>Variations & Storing (Optional)</li>
                  </ul>
                </div>
                <div className="bg-purple-50 p-4 rounded-lg border border-purple-200">
                  <h4 className="font-semibold text-purple-800 mb-3 flex items-center">
                    <Lightbulb size={20} className="mr-2" />
                    Tips Structure
                  </h4>
                  <ul className="list-decimal list-inside space-y-1 text-sm text-purple-700">
                    <li>Title (The Goal)</li>
                    <li>Opening / Purpose</li>
                    <li>Series of Instructions / Steps</li>
                    <li>Closing (Optional)</li>
                  </ul>
                </div>
              </div>

              <div className="mt-6 border rounded-lg p-4">
                <h4 className="font-semibold text-gray-800 mb-4 text-center">
                  Example: 5 Simple Tips for Healthy Baking
                </h4>
                <div className="space-y-3">
                  {bakingTips.map((tip, index) => (
                    <div
                      key={index}
                      className="flex items-center space-x-3 p-3 bg-gray-50 rounded-lg"
                    >
                      <div className="flex-shrink-0 bg-green-500 text-white w-6 h-6 rounded-full flex items-center justify-center font-bold text-sm">
                        {index + 1}
                      </div>
                      <tip.icon className="text-green-600" size={22} />
                      <p className="text-gray-700">{tip.text}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        );

      case "stating-preferences":
        return (
          <div className="space-y-6 animate-fade-in">
            <div className="bg-white p-6 rounded-lg shadow-sm border">
              <h3 className="text-xl font-bold text-gray-800 mb-4 flex items-center">
                <MessageCircle className="mr-3 text-orange-500" size={24} />
                Talking About Food Preferences
              </h3>
              <p className="text-gray-700 leading-relaxed mb-6">
                The successful puspose of procedure text depends on the person
                to pas sit on accurately. Procedures should be brief and clear.
                Most procedures begin with imperatives and followed by some
                elaborations
              </p>
              <p className="text-gray-700 leading-relaxed mb-6">
                Procedure text are often said to be characterized by having
                sentences that begin with imperative verbs. Howover, some
                instructional texts include temporal connectives connectives
                that refer to time or sequence such as first, next, and finally.
                Instructions such as tips may include negative commandds
              </p>
              <p className="text-gray-700 leading-relaxed mb-6">
                Talking about healthy eating, we must talk about preference.
                Preference is a greater liking for one alternative over another
                or others. To state preference, we can use the word “prefer”. It
                means like more or like better.
              </p>
              <div className="grid md:grid-cols-2 gap-6">
                <div className="bg-orange-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-orange-800 mb-3">
                    Asking About Preference
                  </h4>
                  <ul className="list-disc list-inside space-y-2 text-sm text-orange-700">
                    <li>Which do you prefer, sandwich or fried rice?</li>
                    <li>Do you prefer hot water or ice water?</li>
                    <li>Would you prefer to eat out or eat at home?</li>
                  </ul>
                </div>
                <div className="bg-teal-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-teal-800 mb-3">
                    Stating a Preference
                  </h4>
                  <ul className="list-disc list-inside space-y-2 text-sm text-teal-700">
                    <li>I prefer vegetables to fruits.</li>
                    <li>I prefer to eat at home rather than to go out.</li>
                    <li>I would prefer to eat at home.</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        );

      case "writing-tips":
        return (
          <div className="space-y-6 animate-fade-in">
            <div className="bg-white p-6 rounded-lg shadow-sm border">
              <h3 className="text-xl font-bold text-gray-800 mb-4 flex items-center">
                <PenTool className="mr-3 text-indigo-500" size={24} />
                Writing Your Own Healthy Tips
              </h3>
              <p className="text-gray-700 leading-relaxed mb-6">
                A procedural writing is any text that provides instructions.
                Meanwhile, procedure texts explain us how to do something. It is
                a great way to teach someone something new. It belongs to
                non-fiction genre. There are many types of procedure text.
              </p>
              <p className="text-gray-700 leading-relaxed mb-6">
                The main thing that unites different types of procedural texts
                is their purpose. All examples of procedural writing are
                informational and directional. They aim to instruct the readers
                and help them towards a specific goal
              </p>
              <p className="text-gray-700 leading-relaxed mb-6">
                Let’s take a look at the structure! The general structure of
                procedure texts is goal, materials or ingredients, and steps. In
                tips, we use goal, pupose, and steps or suggestions. Tips
                usually consist of purpose and steps. Howover, your procedure
                text should have the following features.
              </p>
              <div className="grid md:grid-cols-2 gap-4">
                <div className="p-3 bg-indigo-50 rounded-lg flex items-start space-x-3">
                  <div className="w-2 h-2 bg-indigo-500 rounded-full mt-2 flex-shrink-0"></div>
                  <p>
                    <strong className="text-indigo-800">Introduction:</strong>{" "}
                    Clearly state the goal of the text.
                  </p>
                </div>
                <div className="p-3 bg-indigo-50 rounded-lg flex items-start space-x-3">
                  <div className="w-2 h-2 bg-indigo-500 rounded-full mt-2 flex-shrink-0"></div>
                  <p>
                    <strong className="text-indigo-800">
                      Numbered Instructions:
                    </strong>{" "}
                    Keep steps in a clear, logical order.
                  </p>
                </div>
                <div className="p-3 bg-indigo-50 rounded-lg flex items-start space-x-3">
                  <div className="w-2 h-2 bg-indigo-500 rounded-full mt-2 flex-shrink-0"></div>
                  <p>
                    <strong className="text-indigo-800">
                      Imperative Sentences:
                    </strong>{" "}
                    Start sentences with command verbs (e.g., "Choose",
                    "Avoid").
                  </p>
                </div>
                <div className="p-3 bg-indigo-50 rounded-lg flex items-start space-x-3">
                  <div className="w-2 h-2 bg-indigo-500 rounded-full mt-2 flex-shrink-0"></div>
                  <p>
                    <strong className="text-indigo-800">
                      Temporal Connectives:
                    </strong>{" "}
                    Use words like "First", "Next", and "Then".
                  </p>
                </div>
                <div className="p-3 bg-indigo-50 rounded-lg flex items-start space-x-3">
                  <div className="w-2 h-2 bg-indigo-500 rounded-full mt-2 flex-shrink-0"></div>
                  <p>
                    <strong className="text-indigo-800">
                      Simple Present Tense:
                    </strong>{" "}
                    Use for general instructions.
                  </p>
                </div>
                <div className="p-3 bg-indigo-50 rounded-lg flex items-start space-x-3">
                  <div className="w-2 h-2 bg-indigo-500 rounded-full mt-2 flex-shrink-0"></div>
                  <p>
                    <strong className="text-indigo-800">
                      Specific Vocabulary:
                    </strong>{" "}
                    Use words related to the topic (e.g., "nutrition",
                    "calories").
                  </p>
                </div>
              </div>
            </div>
          </div>
        );

      case "practice":
        return (
          <div className="space-y-6 animate-fade-in">
            <div className="bg-white p-6 rounded-lg shadow-sm border">
              <h3 className="text-xl font-bold text-gray-800 mb-4 flex items-center">
                <Lightbulb className="mr-3 text-yellow-500" size={24} />
                Practice Activities
              </h3>

              <div className="space-y-6">
                <div className="bg-yellow-50 p-4 rounded-lg border border-yellow-200">
                  <h4 className="font-semibold text-yellow-800 mb-3">
                    Task 1: Vocabulary Matching
                  </h4>
                  <p className="text-sm text-yellow-900 mb-4">
                    Match the English terms with their Indonesian meanings.
                  </p>
                  <div className="overflow-x-auto">
                    <table className="w-full text-sm text-left">
                      <thead className="bg-yellow-100 text-yellow-900">
                        <tr>
                          <th className="p-2">Term</th>
                          <th className="p-2">Meaning</th>
                        </tr>
                      </thead>
                      <tbody>
                        {vocabTerms.map((item, index) => (
                          <tr
                            key={index}
                            className="border-b border-yellow-200"
                          >
                            <td className="p-2 font-medium">{item.term}</td>
                            <td className="p-2">{item.meaning}</td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                </div>

                <div className="bg-blue-50 p-4 rounded-lg border border-blue-200">
                  <h4 className="font-semibold text-blue-800 mb-3">
                    Task 2: Reading Comprehension
                  </h4>
                  <div className="bg-white p-4 rounded-md shadow-sm mb-4 text-sm text-gray-700 italic leading-relaxed">
                    "Hello, mothers. I'm Yulia, a nutritionist from Parkhill
                    Hospital... When you shop, you should pay attention to the
                    products you will buy. Here are shopping tips for healthy
                    food. Number one, make a shopping list... Number two, keep
                    the pantry stocked... Number three, stock up on seasonal
                    vegetables, fruits, wholegrains... Number four, choose the
                    lower fat versions... Number five, choose lean meat cuts and
                    skinless chicken breasts... Lastly, limit fast foods, chips,
                    crisps, processed meats, pastries, and pies."
                  </div>
                  <ul className="space-y-2 text-sm">
                    <li className="bg-white p-2 rounded">
                      <strong>1. What is the speaker talking about?</strong>
                    </li>
                    <li className="bg-white p-2 rounded">
                      <strong>
                        2. Which is better, lean or non-lean meats? Why?
                      </strong>
                    </li>
                    <li className="bg-white p-2 rounded">
                      <strong>
                        3. After reading, which do you prefer, grilling or
                        frying? Why?
                      </strong>
                    </li>
                  </ul>
                </div>

                <div className="bg-green-50 p-4 rounded-lg border border-green-200">
                  <h4 className="font-semibold text-green-800 mb-3">
                    Power Up Questions
                  </h4>
                  <ul className="list-disc list-inside space-y-2 text-sm text-green-700">
                    <li>
                      What do you know about the goal of a procedure text?
                    </li>
                    <li>What is the purpose of healthy eating?</li>
                    <li>How is the format of tips different from a recipe?</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        );

      default:
        return null;
    }
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header Section */}
      <div className="bg-gradient-to-r from-blue-600 to-green-600 text-white p-6">
        <div className="max-w-6xl mx-auto">
          <h1 className="text-3xl font-bold mb-2">Chapter 4: Healthy Foods</h1>
        </div>
      </div>

      {/* Main Content Area */}
      <div className="max-w-7xl mx-auto p-4 sm:p-6">
        <div className="grid lg:grid-cols-4 gap-6">
          {/* Navigation Sidebar */}
          <div className="lg:col-span-1">
            <div className="bg-white rounded-lg shadow-sm border p-4 sticky top-6">
              <h2 className="font-bold text-gray-800 mb-4 text-lg">Contents</h2>
              <nav className="space-y-2">
                {sections.map((section) => {
                  const Icon = section.icon;
                  return (
                    <button
                      key={section.id}
                      onClick={() => setActiveSection(section.id)}
                      className={`w-full text-left p-3 rounded-lg transition-colors flex items-center space-x-3 ${
                        activeSection === section.id
                          ? "bg-blue-100 text-blue-800 border-l-4 border-blue-500"
                          : "hover:bg-gray-100 text-gray-700"
                      }`}
                    >
                      <Icon size={18} />
                      <span className="text-sm font-medium">
                        {section.title}
                      </span>
                    </button>
                  );
                })}
              </nav>
            </div>
          </div>

          {/* Dynamic Content Display */}
          <div className="lg:col-span-3">
            <div className="bg-white rounded-lg shadow-sm border min-h-[600px]">
              <div className="p-6">{renderContent()}</div>
            </div>
          </div>

          {/* Footer section with a placeholder for a "Next" button */}
          <div className="text-center">
            <Link
              to="/chapter4/quiz"
              className="bg-gradient-to-r from-green-500 to-emerald-600 hover:from-green-600 hover:to-emerald-700 text-white font-bold py-4 px-8 rounded-full shadow-lg transform hover:scale-105 transition-all duration-200 flex items-center mx-auto space-x-2"
            >
              <span>Next: Take the Quiz</span>
              <ChevronRight className="w-5 h-5" />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
