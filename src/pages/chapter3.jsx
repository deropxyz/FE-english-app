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
  Users,
  Heart,
  Brain,
  Lightbulb,
  Sun,
  Utensils,
  Droplets,
  Clock,
  Cigarette,
  Smile,
  Moon,
} from "lucide-react";

const Chapter3 = () => {
  const [activeSection, setActiveSection] = useState("overview");
  const [expandedSections, setExpandedSections] = useState({});

  const toggleSection = (section) => {
    setExpandedSections((prev) => ({
      ...prev,
      [section]: !prev[section],
    }));
  };

  const sections = [
    { id: "overview", title: "Learning Objectives", icon: Target },
    { id: "sports-health", title: "Sports & Health Connection", icon: Heart },
    { id: "procedure-text", title: "Procedure Text Structure", icon: FileText },
    { id: "language-features", title: "Language Features", icon: BookOpen },
    { id: "telling-tips", title: "Telling Tips Verbally", icon: MessageCircle },
    { id: "writing-procedure", title: "Writing Procedure Text", icon: PenTool },
  ];

  const skinCareSteps = [
    {
      icon: Sun,
      title: "Protect from Sun",
      desc: "Use sunscreen SPF 15+, avoid 10am-4pm",
    },
    {
      icon: Utensils,
      title: "Eat Healthy",
      desc: "Fruits, vegetables, whole grains, lean proteins",
    },
    {
      icon: Droplets,
      title: "Stay Hydrated",
      desc: "Drink plenty of water for skin hydration",
    },
    {
      icon: Clock,
      title: "Limit Bath Time",
      desc: "Use warm water, not hot, shorter baths",
    },
    {
      icon: Heart,
      title: "Moisturize",
      desc: "Use moisturizer suitable for your skin type",
    },
    {
      icon: Cigarette,
      title: "Don't Smoke",
      desc: "Smoking causes wrinkles and ages skin",
    },
    {
      icon: Smile,
      title: "Manage Stress",
      desc: "Reduce stress to prevent skin problems",
    },
    {
      icon: Moon,
      title: "Get Sleep",
      desc: "Body repairs skin damage during sleep",
    },
  ];

  const languageFeatures = [
    {
      title: "Imperative Sentences",
      examples: [
        "Brush your teeth after meals",
        "Don't smoke",
        "Exercise regularly",
      ],
      description: "Commands or instructions, positive and negative",
    },
    {
      title: "First Conditionals",
      examples: [
        "If you don't warm up, you will get injured",
        "If you exercise daily, you will feel better",
      ],
      description: "Talking about possibilities in present/future",
    },
    {
      title: "Specific Vocabulary",
      examples: ["Mental, Mind, Energy, Fitness"],
      description: "Talking about health tips using specific vocabulary",
    },
    {
      title: "Action Verbs",
      examples: ["brush", "eat", "exercise", "drink", "sleep"],
      description: "Command verbs that start most sentences",
    },
    {
      title: "Simple Present Tense",
      examples: ["Adults need around eight hours of sleep a night"],
      description: "",
    },
    {
      title: "Adverbs",
      examples: ["physically, before going to bed."],
      description:
        "Prepositions and adverbial phrases to add detailed information about how, where, and when",
    },
  ];

  const renderContent = () => {
    switch (activeSection) {
      case "overview":
        return (
          <div className="space-y-6">
            <div className="bg-gradient-to-r from-blue-50 to-green-50 p-6 rounded-lg border-l-4 border-blue-500">
              <h3 className="text-xl font-bold text-gray-800 mb-4 flex items-center">
                <Target className="mr-2 text-blue-600" size={24} />
                Learning Objectives
              </h3>
              <div className="grid md:grid-cols-2 gap-4">
                <div className="space-y-3">
                  <div className="flex items-start space-x-3">
                    <div className="w-2 h-2 bg-blue-500 rounded-full mt-2"></div>
                    <p className="text-gray-700">
                      Understand the connection between sports and health
                    </p>
                  </div>
                  <div className="flex items-start space-x-3">
                    <div className="w-2 h-2 bg-green-500 rounded-full mt-2"></div>
                    <p className="text-gray-700">
                      Identify main ideas and details about physical activities
                    </p>
                  </div>
                </div>
                <div className="space-y-3">
                  <div className="flex items-start space-x-3">
                    <div className="w-2 h-2 bg-purple-500 rounded-full mt-2"></div>
                    <p className="text-gray-700">
                      Express ideas about the importance of sports
                    </p>
                  </div>
                  <div className="flex items-start space-x-3">
                    <div className="w-2 h-2 bg-orange-500 rounded-full mt-2"></div>
                    <p className="text-gray-700">
                      Write informative texts about sports benefits
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-yellow-50 p-4 rounded-lg border border-yellow-200">
              <h4 className="font-semibold text-yellow-800 mb-2">
                💡 Did You Know?
              </h4>
              <p className="text-yellow-700">
                Regular physical activity can reduce the risk of depression by
                up to 30% (World Health Organization, 2023).
              </p>
            </div>
          </div>
        );

      case "sports-health":
        return (
          <div className="space-y-6">
            <div className="bg-white p-6 rounded-lg shadow-sm border">
              <h3 className="text-xl font-bold text-gray-800 mb-4 flex items-center">
                <Heart className="mr-2 text-red-500" size={24} />
                The Sports-Health Connection
              </h3>
              <div className="prose max-w-none">
                <p className="text-gray-700 leading-relaxed mb-4">
                  Sport is an important part of a healthy lifestyle. When we
                  exercise, our heart becomes stronger, our muscles work better,
                  and our brain releases chemicals that make us feel happy.
                </p>
                <div className="grid md:grid-cols-2 gap-6 mt-6">
                  <div className="bg-red-50 p-4 rounded-lg">
                    <h4 className="font-semibold text-red-800 mb-3 flex items-center">
                      <Heart className="mr-2" size={20} />
                      Physical Benefits
                    </h4>
                    <ul className="space-y-2 text-sm text-red-700">
                      <li>• Stronger heart and cardiovascular system</li>
                      <li>• Better muscle function and strength</li>
                      <li>• Improved stamina and endurance</li>
                      <li>• Prevention of obesity and heart disease</li>
                    </ul>
                  </div>
                  <div className="bg-blue-50 p-4 rounded-lg">
                    <h4 className="font-semibold text-blue-800 mb-3 flex items-center">
                      <Brain className="mr-2" size={20} />
                      Mental Benefits
                    </h4>
                    <ul className="space-y-2 text-sm text-blue-700">
                      <li>• Release of happiness chemicals</li>
                      <li>• Stress reduction and management</li>
                      <li>• Better concentration and focus</li>
                      <li>• Improved academic performance</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-green-50 p-4 rounded-lg border border-green-200">
              <h4 className="font-semibold text-green-800 mb-3 flex items-center">
                <Users className="mr-2" size={20} />
                Life Skills from Sports
              </h4>
              <div className="grid grid-cols-3 gap-4 text-center">
                <div className="text-green-700">
                  <div className="font-semibold">Teamwork</div>
                  <div className="text-sm">Working together</div>
                </div>
                <div className="text-green-700">
                  <div className="font-semibold">Discipline</div>
                  <div className="text-sm">Self-control</div>
                </div>
                <div className="text-green-700">
                  <div className="font-semibold">Time Management</div>
                  <div className="text-sm">Planning skills</div>
                </div>
              </div>
            </div>
          </div>
        );

      case "procedure-text":
        return (
          <div className="space-y-6">
            <div className="bg-white p-6 rounded-lg shadow-sm border">
              <h3 className="text-xl font-bold text-gray-800 mb-4 flex items-center">
                <FileText className="mr-2 text-blue-500" size={24} />
                Procedure Text Structure
              </h3>

              <div className="mb-6">
                <h4 className="font-semibold text-gray-800 mb-2">
                  Social Function
                </h4>
                <p className="text-gray-700 bg-gray-50 p-3 rounded">
                  The social function of procedures is to describe how something
                  is made or done through a sequence of steps. By reading
                  procedure texts, readers can learn how to do new things.
                </p>
              </div>

              <div className="space-y-4">
                <h4 className="font-semibold text-gray-800 mb-3">
                  General Structure
                </h4>

                <div className="space-y-4">
                  <div className="border-l-4 border-blue-500 pl-4 bg-blue-50 p-3 rounded-r">
                    <h5 className="font-semibold text-blue-800">
                      1. Goal (Title)
                    </h5>
                    <p className="text-blue-700 text-sm">
                      The heading or aim of the text. Sometimes indicated in the
                      main heading.
                    </p>
                  </div>

                  <div className="border-l-4 border-green-500 pl-4 bg-green-50 p-3 rounded-r">
                    <h5 className="font-semibold text-green-800">
                      2. Materials
                    </h5>
                    <p className="text-green-700 text-sm">
                      Listing of materials or equipment needed for the
                      procedure.
                    </p>
                  </div>

                  <div className="border-l-4 border-purple-500 pl-4 bg-purple-50 p-3 rounded-r">
                    <h5 className="font-semibold text-purple-800">
                      3. Sequence of Steps
                    </h5>
                    <p className="text-purple-700 text-sm">
                      Steps or directions written clearly and concisely in
                      order, commonly numbered.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        );

      case "language-features":
        return (
          <div className="space-y-6">
            <div className="bg-white p-6 rounded-lg shadow-sm border">
              <h3 className="text-xl font-bold text-gray-800 mb-4 flex items-center">
                <BookOpen className="mr-2 text-purple-500" size={24} />
                Language Features of Procedure Texts
              </h3>

              <div className="space-y-6">
                {languageFeatures.map((feature, index) => (
                  <div
                    key={index}
                    className="border rounded-lg p-4 hover:shadow-md transition-shadow"
                  >
                    <div
                      className="flex items-center justify-between cursor-pointer"
                      onClick={() => toggleSection(`feature-${index}`)}
                    >
                      <h4 className="font-semibold text-gray-800">
                        {feature.title}
                      </h4>
                      {expandedSections[`feature-${index}`] ? (
                        <ChevronDown size={20} />
                      ) : (
                        <ChevronRight size={20} />
                      )}
                    </div>

                    {expandedSections[`feature-${index}`] && (
                      <div className="mt-4 space-y-3">
                        <p className="text-gray-600 text-sm">
                          {feature.description}
                        </p>
                        <div className="bg-gray-50 p-3 rounded">
                          <h5 className="font-medium text-gray-700 mb-2">
                            Examples:
                          </h5>
                          <ul className="space-y-1">
                            {feature.examples.map((example, i) => (
                              <li
                                key={i}
                                className="text-sm text-gray-600 bg-white px-2 py-1 rounded"
                              >
                                "{example}"
                              </li>
                            ))}
                          </ul>
                        </div>
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </div>
          </div>
        );

      case "telling-tips":
        return (
          <div className="space-y-6">
            <div className="bg-white p-6 rounded-lg shadow-sm border">
              <h3 className="text-xl font-bold text-gray-800 mb-4 flex items-center">
                <MessageCircle className="mr-2 text-green-500" size={24} />
                Telling Tips for Healthy Lifestyles
              </h3>

              <div className="space-y-6">
                <div className="bg-green-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-green-800 mb-3">
                    Writing Procedure
                  </h4>
                  <div className="space-y-3">
                    <div className="flex items-start space-x-3">
                      <div className="w-6 h-6 bg-green-500 text-white rounded-full flex items-center justify-center text-xs font-bold">
                        1
                      </div>
                      <div>
                        <h5 className="font-medium text-green-800">
                          Tell your title
                        </h5>
                        <p className="text-sm text-green-700">
                          The title can tell your audience what you want to do
                          <p>
                            "Good morning, I'm... I'm going to tell you about
                            how to..."
                          </p>
                        </p>
                      </div>
                    </div>
                    <div className="flex items-start space-x-3">
                      <div className="w-6 h-6 bg-green-500 text-white rounded-full flex items-center justify-center text-xs font-bold">
                        2
                      </div>
                      <div>
                        <h5 className="font-medium text-green-800">
                          Tell your preperations and steps
                        </h5>
                        <p className="text-sm text-green-700">
                          <p>
                            It is about the materials you use and where to get
                            them. When you share tips, you may not need to tell
                            the preparation.
                          </p>
                          " First, Firstly, Second, Then, After that, Finally...
                          ".
                        </p>
                      </div>
                    </div>
                    <div className="flex items-start space-x-3">
                      <div className="w-6 h-6 bg-green-500 text-white rounded-full flex items-center justify-center text-xs font-bold">
                        3
                      </div>
                      <div>
                        <h5 className="font-medium text-green-800">Closing </h5>
                        <p className="text-sm text-green-700">
                          "Well, that's all. I hope you can try it
                          successfully."
                        </p>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="bg-white border rounded-lg p-4">
                  <h4 className="font-semibold text-gray-800 mb-4">
                    Healthy Skin Care Tips Example
                  </h4>
                  <div className="grid md:grid-cols-2 gap-4">
                    {skinCareSteps.map((step, index) => (
                      <div
                        key={index}
                        className="flex items-start space-x-3 p-3 bg-gray-50 rounded-lg"
                      >
                        <step.icon className="text-blue-500 mt-1" size={20} />
                        <div>
                          <h5 className="font-medium text-gray-800 text-sm">
                            {step.title}
                          </h5>
                          <p className="text-xs text-gray-600">{step.desc}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        );

      case "writing-procedure":
        return (
          <div className="space-y-6">
            <div className="bg-white p-6 rounded-lg shadow-sm border">
              <h3 className="text-xl font-bold text-gray-800 mb-4 flex items-center">
                <PenTool className="mr-2 text-orange-500" size={24} />
                Writing Procedure Text About Healthy
              </h3>

              <div className="space-y-6">
                <div className="bg-orange-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-orange-800 mb-3">
                    Key Features of Good Procedure Texts
                  </h4>
                  <div className="grid md:grid-cols-2 gap-4">
                    <ul className="space-y-2 text-sm text-orange-700">
                      <li>• Clear topic identification in title</li>
                      <li>• Introduction explaining why to do the activity</li>
                      <li>• List of supplies or equipment needed</li>
                    </ul>
                    <ul className="space-y-2 text-sm text-orange-700">
                      <li>• Numbered steps or sequenced paragraphs</li>
                      <li>• Sentences starting with verbs</li>
                      <li>• Photographs or illustrations to help</li>
                    </ul>
                  </div>
                </div>

                <div className="border rounded-lg p-4">
                  <h4 className="font-semibold text-gray-800 mb-3">
                    Making Effective Posters
                  </h4>
                  <div className="grid md:grid-cols-2 gap-4">
                    <div className="space-y-3">
                      <div className="flex items-start space-x-2">
                        <div className="w-2 h-2 bg-red-500 rounded-full mt-2"></div>
                        <p className="text-sm text-gray-700">
                          Don't use too many words - use keywords and headings
                        </p>
                      </div>
                      <div className="flex items-start space-x-2">
                        <div className="w-2 h-2 bg-blue-500 rounded-full mt-2"></div>
                        <p className="text-sm text-gray-700">
                          Organize information for easy understanding
                        </p>
                      </div>
                    </div>
                    <div className="space-y-3">
                      <div className="flex items-start space-x-2">
                        <div className="w-2 h-2 bg-green-500 rounded-full mt-2"></div>
                        <p className="text-sm text-gray-700">
                          Use pictures, charts, or visuals
                        </p>
                      </div>
                      <div className="flex items-start space-x-2">
                        <div className="w-2 h-2 bg-purple-500 rounded-full mt-2"></div>
                        <p className="text-sm text-gray-700">
                          Make text large enough to read with open space
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        );

      case "practice":
        return (
          <div className="space-y-6">
            <div className="bg-white p-6 rounded-lg shadow-sm border">
              <h3 className="text-xl font-bold text-gray-800 mb-4 flex items-center">
                <Lightbulb className="mr-2 text-yellow-500" size={24} />
                Practice Activities
              </h3>

              <div className="space-y-6">
                <div className="bg-yellow-50 p-4 rounded-lg border border-yellow-200">
                  <h4 className="font-semibold text-yellow-800 mb-3">
                    Reading Comprehension Questions
                  </h4>
                  <div className="space-y-3 text-sm">
                    <div className="bg-white p-3 rounded border-l-4 border-yellow-500">
                      <p className="font-medium text-gray-800">
                        1. What is the text about?
                      </p>
                      <p className="text-gray-600 mt-1">
                        Think about the main topic and purpose of the skin care
                        tips.
                      </p>
                    </div>
                    <div className="bg-white p-3 rounded border-l-4 border-yellow-500">
                      <p className="font-medium text-gray-800">
                        2. Why shouldn't we take a bath for a long time?
                      </p>
                      <p className="text-gray-600 mt-1">
                        Consider the effect of hot water and long baths on skin
                        oils.
                      </p>
                    </div>
                    <div className="bg-white p-3 rounded border-l-4 border-yellow-500">
                      <p className="font-medium text-gray-800">
                        3. What would happen if we do not use sunscreen with SPF
                        of at least 15?
                      </p>
                      <p className="text-gray-600 mt-1">
                        Think about the consequences of sun exposure.
                      </p>
                    </div>
                  </div>
                </div>

                <div className="bg-blue-50 p-4 rounded-lg border border-blue-200">
                  <h4 className="font-semibold text-blue-800 mb-3">
                    Power Up Questions
                  </h4>
                  <div className="grid md:grid-cols-2 gap-4">
                    <div className="bg-white p-3 rounded">
                      <p className="font-medium text-blue-800 text-sm">
                        Sports & Health
                      </p>
                      <ul className="text-xs text-blue-700 mt-2 space-y-1">
                        <li>
                          • How do sports affect physical and mental health?
                        </li>
                        <li>• Why is teamwork important in sports?</li>
                      </ul>
                    </div>
                    <div className="bg-white p-3 rounded">
                      <p className="font-medium text-blue-800 text-sm">
                        Procedure Texts
                      </p>
                      <ul className="text-xs text-blue-700 mt-2 space-y-1">
                        <li>• How do you tell a procedure verbally?</li>
                        <li>• How do you tell tips?</li>
                      </ul>
                    </div>
                  </div>
                </div>

                <div className="bg-green-50 p-4 rounded-lg border border-green-200">
                  <h4 className="font-semibold text-green-800 mb-3">
                    Keywords to Remember
                  </h4>
                  <div className="flex flex-wrap gap-2">
                    {[
                      "Endurance",
                      "Stamina",
                      "Flexibility",
                      "Cardiovascular",
                      "Strength",
                      "Mental health",
                    ].map((keyword, index) => (
                      <span
                        key={index}
                        className="px-3 py-1 bg-green-200 text-green-800 rounded-full text-sm font-medium"
                      >
                        {keyword}
                      </span>
                    ))}
                  </div>
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
      {/* Header */}
      <div className="bg-gradient-to-r from-blue-600 to-green-600 text-white p-6">
        <div className="max-w-6xl mx-auto">
          <h1 className="text-3xl font-bold mb-2">
            Chapter 3: Sports & Health
          </h1>
        </div>
      </div>

      <div className="max-w-6xl mx-auto p-6">
        <div className="grid lg:grid-cols-4 gap-6">
          {/* Navigation Sidebar */}
          <div className="lg:col-span-1">
            <div className="bg-white rounded-lg shadow-sm border p-4 sticky top-6">
              <h2 className="font-bold text-gray-800 mb-4">Contents</h2>
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

          {/* Main Content */}
          <div className="lg:col-span-3">
            <div className="bg-white rounded-lg shadow-sm border min-h-[600px]">
              <div className="p-6">{renderContent()}</div>
            </div>
          </div>

          {/* Next Button */}
          <div className="text-center">
            <Link
              to="/chapter3/quiz"
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
};

export default Chapter3;
