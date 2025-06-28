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
  Star,
  Trophy,
  Eye,
  User,
  Zap,
  Award,
} from "lucide-react";

const Chapter2 = () => {
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
    {
      id: "identifying-personal-recounts",
      title: "Identifying Personal Recounts",
      icon: Eye,
    },
    { id: "language-features", title: "Language Features", icon: BookOpen },

    { id: "sport-event", title: "Describing Sports Event", icon: Users },
    {
      id: "writing-personal-recount",
      title: "Writing Personal Recounts",
      icon: PenTool,
    },
  ];

  const languageFeatures = [
    {
      title: "Specific Participant/Subject",
      examples: [null],
      description:
        "Personal recounts are written in the first person. It uses pronouns 'T' or 'we' ",
    },
    {
      title: "Simple Past Tense",
      examples: [
        "I watched a football game with my father last night (Past Actions)",
        "I was extremely happy because my favorite team won (Past for adjectives)",
      ],
      description:
        "Recount texts usually use simple past tense. It shows the activity began and ended in the past.",
    },
    {
      title: "Action Verbs & Mental Verbs",
      examples: [
        "Ran, kicked (Action Verbs)",
        "Felt, thought, saw (Mental Verbs)",
      ],
      description: "",
    },
    {
      title: "Temporal Sequence, Time Connectives, Conjunctions",
      examples: ["first, then, after that, before, when, at last, finally"],
      description:
        "Recounts are written in chronological order, so we use time connectives to connect events.",
    },
    {
      title: "Adverbs and adverbial phrases",
      examples: [
        "On December 18, 2022 at 10 a.m. my daddy and I were sitting in front of TV",
      ],
      description:
        "Recounts present the past experiences in order of time or place. Therefore, we need adverbs or adverbial phrases.",
    },
    {
      title: "Descriptive Words and Phrases",
      examples: [null],
      description:
        "Most recounts use descriptive words and phrases. They really help understand what an experience was like. They also make it seem like the readers is there with you.",
    },
  ];

  const adjectiveMatching = [
    { adjective: "Talented", meaning: "Having great ability to do something" },
    { adjective: "Energetic", meaning: "Having lots of energy and movement" },
    { adjective: "Determined", meaning: "Never gives up easily" },
    { adjective: "Humble", meaning: "Not arrogant despite success" },
    {
      adjective: "Skilled",
      meaning: "Good at doing something through practice",
    },
    { adjective: "Famous", meaning: "Known by many people" },
    { adjective: "Strong", meaning: "Having physical power and fitness" },
    {
      adjective: "Passionate",
      meaning: "Having lots of love and enthusiasm for something",
    },
  ];

  const renderContent = () => {
    switch (activeSection) {
      case "overview":
        return (
          <div className="space-y-6">
            <div className="bg-gradient-to-r from-blue-50 to-purple-50 p-6 rounded-lg border-l-4 border-blue-500">
              <h3 className="text-xl font-bold text-gray-800 mb-4 flex items-center">
                <Target className="mr-2 text-blue-600" size={24} />
                Learning Objectives
              </h3>
              <div className="grid md:grid-cols-1 gap-4">
                <div className="space-y-3">
                  <div className="flex items-start space-x-3">
                    <div className="w-2 h-2 bg-blue-500 rounded-full mt-2"></div>
                    <p className="text-gray-700">
                      Students can identify the context, main ideas, and
                      detailed information from a recount text about a sporting
                      event
                    </p>
                  </div>
                  <div className="flex items-start space-x-3">
                    <div className="w-2 h-2 bg-green-500 rounded-full mt-2"></div>
                    <p className="text-gray-700">
                      Students can convey ideas and opinions in discussions and
                      presentations about sporting events.
                    </p>
                  </div>
                  <div className="flex items-start space-x-3">
                    <div className="w-2 h-2 bg-purple-500 rounded-full mt-2"></div>
                    <p className="text-gray-700">
                      Students can write a recount text about a sporting event
                      and present it
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-yellow-50 p-4 rounded-lg border border-yellow-200">
              <h2 className="font-semibold text-yellow-800 mb-2">
                Literacy Strengthening
              </h2>
              <p className="text-yellow-700 text-center">
                <strong>
                  What Was the Most Memorable Sporting Event You Attended?
                </strong>
              </p>
              <br></br>
              <p className="text-yellow-700">
                <strong>Nayla Pramesti:</strong>
              </p>
              <p className="text-yellow-700">
                Attending the 2023 FIFA U-17 World Cup in Surakarta, Indonesia,
                was a dream come true. It was my first time seeing an
                international football match live. The moment the Indonesian
                national team scored, the whole stadium roared — I’ll never
                forget that electrifying atmosphere. Sharing it with my younger
                brother made it even more special.
              </p>
              <br />
              <p className="text-yellow-700">
                <strong>Fajar Nugroho: </strong>
              </p>
              <p className="text-yellow-700">
                For me, it was watching Anthony Ginting’s gold medal match at
                the 2023 SEA Games in Cambodia. Seeing him fight point by point
                with so much passion gave me goosebumps. I’ve always loved
                badminton, but seeing it live, especially surrounded by fellow
                Indonesians waving flags and chanting his name, was truly
                unforgettable.
              </p>
              <br></br>
              <p className="text-yellow-700">
                <strong>Clara Santoso: </strong>
              </p>
              <p className="text-yellow-700">
                The 2024 Indonesia Open Badminton Final in Istora Senayan was an
                unforgettable experience. The crowd energy was unlike anything
                I’ve ever felt. When Apriyani and Fadia clinched the women's
                doubles title, the arena exploded with joy. That moment reminded
                me of how powerful sports can be in uniting people.
              </p>
              <br></br>
              <p className="text-yellow-700">
                <strong>Rafi Alhabsyi: </strong>
              </p>
              <p className="text-yellow-700">
                I’ll never forget watching the Para Games 2023 in Solo. Seeing
                athletes with disabilities compete with such strength and focus
                was beyond inspiring. One cycling event had me in tears — not
                from sadness, but from admiration. It was a powerful reminder
                that determination knows no limits.
              </p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-sm border">
              <div className="prose max-w-none">
                <div className="bg-red-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-red-800 mb-3 flex items-center">
                    <Heart className="mr-2" size={20} />
                    Power Up Questions
                  </h4>
                  <ul className="space-y-2 text-sm text-red-700">
                    <li>
                      • How do you share your past experience about watching
                      sports events?
                    </li>
                    <li>
                      • How do you write a personal recount about watching
                      sports events?
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        );

      case "identifying-personal-recounts":
        return (
          <div className="space-y-6">
            <div className="bg-white p-6 rounded-lg shadow-sm border">
              <h3 className="text-xl font-bold text-gray-800 mb-4 flex items-center">
                <Eye className="mr-2 text-green-500" size={24} />
                Identifying Personal Recounts
              </h3>

              <div className="space-y-6">
                <div className="bg-green-50 p-4 rounded-lg">
                  <p className="text-green-700 mb-3">
                    Watching sports event is an activity that brings people
                    together and allows them to share in the joys of the
                    competition. When you watch a sports event, you can share to
                    others from the beginning to the end. Telling past
                    experience when watching sports event belongs to recounts
                  </p>
                  <p className="text-green-700 mb-3">
                    A recount is one of the easier non-fiction text because it
                    focuses on telling what happened. There are many kinds of
                    recounts, such as personal recounts, diary entries,
                    biographies, autobiographies, and news reports. A recount
                    that tells past experience that the author was involved
                    directly is called personal recounts.
                  </p>
                </div>
                <h4 className="font-semibold text-gray-800 mb-3">
                  1. Social Function of Personal Recounts
                </h4>
                <div className="bg-white p-3 rounded border-l-4 border-green-500">
                  <p className="text-green-700 text-m">
                    A personal recount is a recount that the writer or speaker
                    has experienced personally. The social function is to retell
                    past events or experiences.
                  </p>
                </div>
                <div className="space-y-4"></div>
              </div>

              <div className="space-y-4">
                <h4 className="font-semibold text-gray-800 mb-3">
                  2. General Structure of Personal Recounts
                </h4>

                <div className="space-y-4">
                  <div className="border-l-4 border-blue-500 pl-4 bg-blue-50 p-3 rounded-r">
                    <h5 className="font-semibold text-blue-800">
                      1. Orientation
                    </h5>
                    <p className="text-blue-700 text-sm">
                      It tells who were involved, where and when the event
                      happened.
                    </p>
                  </div>

                  <div className="border-l-4 border-purple-500 pl-4 bg-purple-50 p-3 rounded-r">
                    <h5 className="font-semibold text-purple-800">2. Events</h5>
                    <p className="text-purple-700 text-sm">
                      This part tells the sequence of the events in
                      chronological order. The events should be written in the
                      order.
                    </p>
                  </div>

                  <div className="border-l-4 border-yellow-500 pl-4 bg-yellow-50 p-3 rounded-r">
                    <h5 className="font-semibold text-yellow-800">
                      3. Reorientation
                    </h5>
                    <p className="text-yellow-700 text-sm">
                      It tells the writer's subjective feeling concerning the
                      events.
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
                Language Features of Personal Recounts
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

      case "sport-event":
        return (
          <div className="space-y-6">
            <div className="bg-white p-6 rounded-lg shadow-sm border">
              <h3 className="text-xl font-bold text-gray-800 mb-4 flex items-center">
                <User className="mr-2 text-orange-500" size={24} />
                Telling a Sports Events
              </h3>
              <div className="bg-green-50 p-4 rounded-lg">
                <div className="grid md:grid-cols-2 gap-3">
                  <p className="text-green-800 mb-3">
                    Past events are things that we did in the past. When we
                    watched a sports event on the last Saturday night, and then
                    we want to retell it today, it means we retell a past event.
                    To retell past events, we should pay attention to the
                    following features.
                  </p>
                  <div className="bg-white p-2 rounded text-sm text-green-700">
                    <strong>Power Up </strong>
                    <p>1. What do you know about past time expressions?</p>
                    <p>2. How do you tell a sports event?</p>
                  </div>
                </div>
              </div>
              <br></br>
              <div className="space-y-6">
                <div className="bg-orange-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-orange-800 mb-3">
                    A good description shows the following things.
                  </h4>
                  <div className="space-y-3">
                    <div className="flex items-start space-x-3">
                      <div className="w-6 h-6 bg-orange-500 text-white rounded-full flex items-center justify-center text-xs font-bold">
                        1
                      </div>
                      <div>
                        <h5 className="font-medium text-orange-800">
                          Past Time Expressions
                        </h5>
                        <p className="text-sm text-orange-700">
                          Time expressions used for the past are yesterday, last
                          month, a week ago, etc.
                        </p>
                      </div>
                    </div>
                    <div className="flex items-start space-x-3">
                      <div className="w-6 h-6 bg-orange-500 text-white rounded-full flex items-center justify-center text-xs font-bold">
                        2
                      </div>
                      <div>
                        <h5 className="font-medium text-orange-800">
                          Simple Past Tense
                        </h5>
                        <p className="text-sm text-orange-700">
                          Use Simple past tense to talk about:
                          <div className="bg-white p-2 rounded mb-2">
                            <p>
                              a. Something that happened once in the past
                              <strong> Example: </strong> The match started at 3
                              p.m
                            </p>
                            <p>
                              b. Something that was true for some time in the
                              past
                              <strong> Example: </strong> The footballers played
                              well through the summer.
                            </p>
                          </div>
                        </p>
                      </div>
                    </div>
                    <div className="flex items-start space-x-3">
                      <div className="w-6 h-6 bg-orange-500 text-white rounded-full flex items-center justify-center text-xs font-bold">
                        3
                      </div>
                      <div>
                        <h5 className="font-medium text-orange-800">
                          Past Continuous Tense
                        </h5>
                        <p className="text-sm text-orange-700">
                          use past continuous tense or past progressive tense
                          for
                          <div className="bg-white p-2 rounded mb-2">
                            <p>
                              a. Something that happened before and after a
                              specific time in the past.
                              <strong> Example: </strong> At the first round, we
                              were losing 2-0.
                            </p>
                            <p>
                              b. Something that happened before and after
                              another action in the past.
                              <strong> Example: </strong> When the player was
                              dribbling, his opponent grabbed the ball.
                            </p>
                          </div>
                        </p>
                      </div>
                    </div>
                    <div className="flex items-start space-x-3">
                      <div className="w-6 h-6 bg-orange-500 text-white rounded-full flex items-center justify-center text-xs font-bold">
                        4
                      </div>
                      <div>
                        <h5 className="font-medium text-orange-800">
                          Past Perfect Tense
                        </h5>
                        <p className="text-sm text-orange-700">
                          Use this tense when we are looking back from a point
                          in the past to something earlier in the past.
                        </p>
                      </div>
                    </div>
                    <div className="flex items-start space-x-3">
                      <div className="w-6 h-6 bg-orange-500 text-white rounded-full flex items-center justify-center text-xs font-bold">
                        5
                      </div>
                      <div>
                        <h5 className="font-medium text-orange-800">
                          Time Connectives
                        </h5>
                        <p className="text-sm text-orange-700">
                          To show the chronology, we can use then, after that,
                          next, finally, etc.
                        </p>
                      </div>
                    </div>

                    <div className="flex items-start space-x-3">
                      <div className="w-6 h-6 bg-orange-500 text-white rounded-full flex items-center justify-center text-xs font-bold">
                        6
                      </div>
                      <div>
                        <h5 className="font-medium text-orange-800">
                          Adjectives to Explain the Feelings
                        </h5>
                        <p className="text-sm text-orange-700">
                          When we tell past events that we experienced, we
                          usually use adjectives of feelings, such as upset,
                          happy, excited, disappointed, etc.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        );

      case "writing-personal-recount":
        return (
          <div className="space-y-6">
            <div className="bg-white p-6 rounded-lg shadow-sm border">
              <h3 className="text-xl font-bold text-gray-800 mb-4 flex items-center">
                <PenTool className="mr-2 text-indigo-500" size={24} />
                Writing a Personal Recount about a Sports Event
              </h3>

              <div className="space-y-6">
                <div className="bg-indigo-50 p-4 rounded-lg">
                  <div className="grid md:grid-cols-2 gap-3">
                    <p className="text-sm text-indigo-700">
                      Recounts retell events for the purpose of informing or
                      entertaining. The events are usually arranged in a
                      temporal sequence. Let's remember the general structure.
                      The structure is orientation, sequence of events, and
                      reorientation.
                    </p>
                    <div className="bg-white p-2 text-sm text-indigo-900">
                      <strong>Power Up </strong>
                      <p>1. What do you know about past time expressions?</p>
                      <p>2. How do you tell a sports event?</p>{" "}
                    </div>
                  </div>
                  <br></br>
                  <p className="text-sm text-indigo-700">
                    The orientation provides information about the situation.
                    The sequence of events presents events in temporal sequence.
                    The reorientation is an optional stage. It is usually
                    bringing the events into the present. To be able to write a
                    personal recount, let's review the structure and language
                    features of recount texts. Personal recounts are written in
                    the first person, and normally include a personal evaluation
                    of events. Writing diary entries will help you write
                    personal recounts.
                  </p>
                </div>

                <div className="bg-yellow-50 p-4 rounded-lg border border-yellow-200">
                  <h4 className="font-semibold text-yellow-800 mb-3">
                    Writing Tips
                  </h4>
                  <div className="space-y-2 text-sm text-yellow-700">
                    <div className="bg-white p-2 rounded">
                      <strong>a)</strong> Remember, your aim is to give details
                      about events that you experienced.
                    </div>
                    <div className="bg-white p-2 rounded">
                      <strong>b)</strong> Write the introduction to topic. This
                      paragraph can answer what, who, when, and where.
                    </div>
                    <div className="bg-white p-2 rounded">
                      <strong>c)</strong> Arrange the series of events. Tell
                      what happened in order. The paragraphs are organized by
                      time periods. Sometimes it tells interesting details about
                      the event, people, or places. Remember, use past tenses to
                      tell events in the past.
                    </div>
                    <div className="bg-white p-2 rounded">
                      <strong>d)</strong> Write your personal comments on the
                      event. Use thinking and feeling verbs to comment on the
                      events.
                    </div>
                    <div className="bg-white p-2 rounded">
                      <strong>e)</strong> Edit your writing. Pay attention to
                      the language features you use. Check also the spellings
                      and punctuations.
                    </div>
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
            Chapter 2: Watching Sports Events
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
              to="/chapter2/quiz"
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

export default Chapter2;
