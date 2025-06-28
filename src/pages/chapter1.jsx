import React, { useState } from "react";
import { Link } from "react-router-dom";

import Header from "../components/header"; // Import the Header component

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

const Chapter1 = () => {
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
      id: "identifying-descriptive",
      title: "Identifying Descriptive Texts",
      icon: Eye,
    },
    { id: "language-features", title: "Language Features", icon: BookOpen },
    { id: "describing-athlete", title: "Describing Athletes", icon: User },
    {
      id: "writing-descriptive",
      title: "Writing Descriptive Text",
      icon: PenTool,
    },
  ];

  const languageFeatures = [
    {
      title: "Specific Participant/Subject",
      examples: [
        "we cannot describe professional athletes but a professional athlete Lionel Messi.",
        "Kevin Sanjaya Sukamuljo",
        "Erling Haaland",
      ],
      description:
        "When we write a descriptive text, we cannot describe subject in general.",
    },
    {
      title: "Linking Verbs",
      examples: [
        "Marselino Ferdinan is a talented Indonesian football player",
        "Jonatan looks so focused in preparing for every match",
      ],
      description:
        "A linking verb connects the subject of a sentence with a word that gives information about the subject, such as a condition or relationship. The linking verbs are be (is, are, am, were, was, has been, are being, etc.), become, seem, look, etc.",
    },
    {
      title: "Adjectives",
      examples: [
        "competitive, strong, agile (single adjectives)",
        "well-built, fair-skinned (compounds)",
        "capable-looking, stern-looking (with -looking)",
      ],
      description:
        "Each of us is unique. No one has exactly the same face, hands, hair, body, or voice as anyone else. Even identical twins are said to have different ears. Descriptive texts usually describe someone's appearance and personality. To describe them, we need adjectives. An adjective is a word that modifies a noun or a pronoun. In descriptive texts about a person, we can use the following ways of adjectives.",
    },
    {
      title: "Simple Present Tense",
      examples: [
        "He has two older brothers",
        "He usually prays before he starts the game",
      ],
      description:
        "Simple present tense is used to express general truths, habits, repeated actions, or unchanging situations. The form is S + V1/V1s/es.",
    },
    {
      title: "Passive Voice",
      examples: [
        "His nickname was given to him by his father in honor of his close friend in the army",
        "The athlete is called as 'Fabulous Kid' ",
      ],
      description:
        "In descriptive texts, there are sometimes passive voices whether in present or past.",
    },
    {
      title: "Use Pronouns",
      examples: [],
      description:
        "A pronoun is a word that takes the place of a noun. There are some types of pronouns: Subjective pronouns, objective pronouns, possessive pronouns, and relative pronouns",
    },
    {
      title: "Past Tense",
      examples: [
        "Alwi looks so promising after breaking into the world’s top‑30 badminton rankings in May 2025.",
      ],
      description:
        "To describe an athlete, sometimes we need to give example about the athlete's experience. Therefore, we use past tenses. They are used to tell past experiences.",
    },

    {
      title: "Descriptive Words",
      examples: [
        "Appearance: tall, well-built, curly hair",
        "Character: friendly, generous, disciplined",
        "Mannerisms: bites fingernails when nervous",
      ],
      description:
        "Words that help readers visualize and understand the person",
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
                      detailed information from descriptive texts about famous
                      athletes.
                    </p>
                  </div>
                  <div className="flex items-start space-x-3">
                    <div className="w-2 h-2 bg-green-500 rounded-full mt-2"></div>
                    <p className="text-gray-700">
                      Students can convey ideas and opinions in discussions and
                      presentations about famous athletes.
                    </p>
                  </div>
                  <div className="flex items-start space-x-3">
                    <div className="w-2 h-2 bg-purple-500 rounded-full mt-2"></div>
                    <p className="text-gray-700">
                      Students can write descriptive texts about famous athletes
                      and present them.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-yellow-50 p-4 rounded-lg border border-yellow-200">
              <h4 className="font-semibold text-xl text-yellow-800 mb-2">
                Literacy Strengthening
              </h4>
              <p className="font-bold text-yellow-700 mb-3">
                Kevin Sanjaya Sukamuljo: "The Minion with the Killer Instinct"
              </p>
              <p className="text-yellow-700 mb-2">
                Kevin Sanjaya Sukamuljo is not just a badminton player—he's a
                showman, a tactician, and a lightning-fast athlete who has
                redefined the game of men's doubles. Known around the world as
                one half of "The Minions" duo alongside Marcus Fernaldi Gideon,
                Kevin's playing style combines explosive speed, lightning
                reflexes, and dazzling net play that keeps fans on the edge of
                their seats.
              </p>
              <p className="text-yellow-700 mb-2">
                Nicknamed "The Minion" because of his height and energy, Kevin
                doesn't just play badminton—he electrifies it. In his prime, he
                dominated the BWF World Tour, winning back-to-back Superseries
                and World Tour titles with Marcus. He has beaten the best pairs
                in the world—Li Junhui/Liu Yuchen, Hendra/Ahsan, and even the
                mighty Japanese duo Kamura/Sonoda. At one point, they were
                ranked World No. 1 for over 150 consecutive weeks.
              </p>
              <p className="text-yellow-700 mb-2">
                Kevin was born in Banyuwangi, East Java. He started playing
                badminton at a young age, inspired by Indonesian legends. What
                separated Kevin from other players was always clear—his court
                vision. He reads the game like a chess master, anticipating
                shots and punishing any weak return with blistering pace and
                precision.
              </p>
              <p className="text-yellow-700">
                More than just skills, Kevin's winning formula lies in his
                mindset: aggressive, confident, and fearless.
              </p>
              <p className="font-semibold text-yellow-700 font-medium mb-2">
                "You have to dominate, not just play"
              </p>
              <p className="text-yellow-700 mb-2">
                Kevin once said in an interview. He carries this mentality into
                every match, never backing down, always pressuring his opponents
                with sharp flicks and rapid exchanges at the net. Even in recent
                years, as injuries and team changes affected his consistency,
                Kevin's presence still draws massive crowds. Whether he's
                partnering with young blood or training the next generation, his
                passion for the game remains untamed. Kevin Sanjaya is more than
                a champion—he's a symbol of modern Indonesian badminton: fast,
                fearless, and full of flair.
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
                      <li>• What is the purpose of descriptive texts?</li>
                      <li>
                        • What are the language features of descriptive texts?
                      </li>
                    </ul>
                  </div>
                  <div className="bg-blue-50 p-4 rounded-lg">
                    <h4 className="font-semibold text-blue-800 mb-3 flex items-center">
                      <Brain className="mr-2" size={20} />
                      Keywords
                    </h4>
                    <div className="flex flex-wrap gap-2">
                      {[
                        "Appearance",
                        "Athlete",
                        "Personality",
                        "Identification",
                        "Trait",
                        "Sport",
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

      case "identifying-descriptive":
        return (
          <div className="space-y-6">
            <div className="bg-white p-6 rounded-lg shadow-sm border">
              <h3 className="text-xl font-bold text-gray-800 mb-4 flex items-center">
                <Eye className="mr-2 text-green-500" size={24} />
                Identifying Descriptive Texts
              </h3>

              <div className="space-y-6">
                <div className="bg-green-50 p-4 rounded-lg">
                  <p className="text-green-700 mb-3">
                    An athlete is someone who excels in sports. Athletes often
                    serve as role models and sources of inspiration for others.
                    There are many people who idolize athletes. They idolize
                    them because of some reasons, such as their skills or
                    abilities, achievements, or even their looks. To describe an
                    athlete, we should recall descriptive texts
                  </p>
                </div>
                <h4 className="font-semibold text-gray-800 mb-3">
                  1. Social Function of Descriptive Texts
                </h4>
                <div className="bg-white p-3 rounded border-l-4 border-green-500">
                  <p className="text-green-700 text-m">
                    A descriptive text is a text which describes a place, a
                    thing, or a person. The main purpose of descriptive texts is
                    to help the reader visualize the objects that are being
                    described. Reading or hearing a description of someone can
                    give us a better idea of what they look like or act like.
                    <br></br>
                    <br></br>
                    All descriptive texts present one clear picture in the
                    reader's mind. Writers create this picture by describing the
                    subject's main features with clear details. The purposes of
                    descriptive text about an athlete are to describe a person,
                    introduce a person, or inform about a person.
                  </p>
                </div>
                <div className="space-y-4"></div>
              </div>

              <div className="space-y-4">
                <h4 className="font-semibold text-gray-800 mb-3">
                  2. General Structure of Descriptive Texts
                </h4>

                <div className="space-y-4">
                  <div className="border-l-4 border-blue-500 pl-4 bg-blue-50 p-3 rounded-r">
                    <h5 className="font-semibold text-blue-800">
                      1. Identification
                    </h5>
                    <p className="text-blue-700 text-sm">
                      Identifies the person to be described
                    </p>
                  </div>

                  <div className="border-l-4 border-purple-500 pl-4 bg-purple-50 p-3 rounded-r">
                    <h5 className="font-semibold text-purple-800">
                      2. Description
                    </h5>
                    <p className="text-purple-700 text-sm">
                      It describes the appearance or physical characteristics
                      and the personality of the person. Sometimes, descriptive
                      texts end with conclusion. It tells what the writer thinks
                      about the person. This part is optional.
                    </p>
                  </div>
                </div>
              </div>

              <div className="bg-gray-50 p-4 rounded-lg">
                <h4 className="font-semibold text-gray-800 mb-3">
                  Types of Information in Descriptive Texts
                </h4>
                <div className="grid md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <div className="flex items-center space-x-2">
                      <User className="text-blue-500" size={16} />
                      <span className="font-medium text-blue-800">
                        Appearance
                      </span>
                    </div>
                    <p className="text-sm text-gray-600 ml-6">
                      Height, weight, hair, face features
                    </p>
                  </div>
                  <div className="space-y-2">
                    <div className="flex items-center space-x-2">
                      <Heart className="text-red-500" size={16} />
                      <span className="font-medium text-red-800">
                        Character Traits
                      </span>
                    </div>
                    <p className="text-sm text-gray-600 ml-6">
                      Personality, behavior, attitude
                    </p>
                  </div>
                  <div className="space-y-2">
                    <div className="flex items-center space-x-2">
                      <Zap className="text-yellow-500" size={16} />
                      <span className="font-medium text-yellow-800">
                        Mannerisms
                      </span>
                    </div>
                    <p className="text-sm text-gray-600 ml-6">
                      Ways of acting or behaving
                    </p>
                  </div>
                  <div className="space-y-2">
                    <div className="flex items-center space-x-2">
                      <Brain className="text-purple-500" size={16} />
                      <span className="font-medium text-purple-800">
                        Emotions
                      </span>
                    </div>
                    <p className="text-sm text-gray-600 ml-6">
                      Feelings at certain times
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
                Language Features of Descriptive Texts
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

      case "describing-athlete":
        return (
          <div className="space-y-6">
            <div className="bg-white p-6 rounded-lg shadow-sm border">
              <h3 className="text-xl font-bold text-gray-800 mb-4 flex items-center">
                <User className="mr-2 text-orange-500" size={24} />
                Describing a Famous Athlete
              </h3>
              <div className="bg-green-50 p-4 rounded-lg">
                <div className="grid md:grid-cols-2 gap-3">
                  <p className="text-green-800 mb-3">
                    People who like sports must have their own favorite athlete.
                    There are some adjectives people might be used to describe
                    the athlete, such as strong, talented, powerful, and
                    energetic. There are still many other qualities to describe
                    someone who excels in sports.
                  </p>
                  <div className="bg-white p-2 rounded text-sm text-green-700">
                    <strong>Power Up </strong>
                    <p>1. What do you know about a good description? </p>
                    <p>2. How do you describe an athlete verbally?</p>
                  </div>
                </div>
              </div>

              <div className="space-y-6">
                <div className="bg-orange-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-orange-800 mb-3">
                    When we like an athlete, we should be able to describe
                    him/her. <br></br>A good description shows the following
                    things.
                  </h4>
                  <div className="space-y-3">
                    <div className="flex items-start space-x-3">
                      <div className="w-6 h-6 bg-orange-500 text-white rounded-full flex items-center justify-center text-xs font-bold">
                        1
                      </div>
                      <div>
                        <h5 className="font-medium text-orange-800">
                          Details about appearance
                        </h5>
                        <p className="text-sm text-orange-700">
                          Physical characteristics and features
                        </p>
                      </div>
                    </div>
                    <div className="flex items-start space-x-3">
                      <div className="w-6 h-6 bg-orange-500 text-white rounded-full flex items-center justify-center text-xs font-bold">
                        2
                      </div>
                      <div>
                        <h5 className="font-medium text-orange-800">
                          Examples of behavior
                        </h5>
                        <p className="text-sm text-orange-700">
                          How they act and behave in different situations
                        </p>
                      </div>
                    </div>
                    <div className="flex items-start space-x-3">
                      <div className="w-6 h-6 bg-orange-500 text-white rounded-full flex items-center justify-center text-xs font-bold">
                        3
                      </div>
                      <div>
                        <h5 className="font-medium text-orange-800">
                          Reasons why they are special
                        </h5>
                        <p className="text-sm text-orange-700">
                          What makes them unusual or valued
                        </p>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="bg-blue-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-blue-800 mb-3">
                    Steps for Verbal Description
                  </h4>
                  <div className="space-y-2 text-sm text-blue-700">
                    <div className="bg-white p-2 rounded">
                      <strong>1. Introduction:</strong> "I'm a massive fan of
                      sport" / "I'm obsessed with football"
                    </div>
                    <div className="bg-white p-2 rounded">
                      <strong>2. Identify:</strong> Telling the athlete you are
                      going to describe (who he/she is)
                    </div>
                    <div className="bg-white p-2 rounded">
                      <strong>3. Describe:</strong> How you know them,
                      achievements, why they're famous
                    </div>
                    <div className="bg-white p-2 rounded">
                      <strong>4. Conclude:</strong> Your opinion about them and
                      closing
                    </div>
                  </div>
                </div>

                <div className="bg-green-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-green-800 mb-3">
                    Key Questions to Answer
                  </h4>
                  <div className="grid md:grid-cols-2 gap-3">
                    {[
                      "Who is he/she?",
                      "How do you know him/her?",
                      "Why do you like him/her?",
                      "What has he/she achieved?",
                      "Why is he/she famous?",
                    ].map((question, index) => (
                      <div
                        key={index}
                        className="bg-white p-2 rounded text-sm text-green-700"
                      >
                        • {question}
                      </div>
                    ))}
                  </div>
                </div>

                <div className="bg-white border rounded-lg p-4">
                  <h4 className="font-semibold text-gray-800 mb-4">
                    Adjectives for Athletes - Matching Exercise
                  </h4>
                  <div className="grid md:grid-cols-2 gap-4">
                    {adjectiveMatching.map((item, index) => (
                      <div
                        key={index}
                        className="flex items-center justify-between p-3 bg-gray-50 rounded-lg"
                      >
                        <span className="font-medium text-gray-800 text-sm">
                          {item.adjective}
                        </span>
                        <span className="text-xs text-gray-600">
                          {item.meaning}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        );

      case "writing-descriptive":
        return (
          <div className="space-y-6">
            <div className="bg-white p-6 rounded-lg shadow-sm border">
              <h3 className="text-xl font-bold text-gray-800 mb-4 flex items-center">
                <PenTool className="mr-2 text-indigo-500" size={24} />
                Writing a Descriptive Text about a Famous Athlete
              </h3>

              <div className="space-y-6">
                <div className="bg-indigo-50 p-4 rounded-lg">
                  <p className="text-sm text-indigo-700">
                    If you think about your favorite athlete, you probably have
                    an image that comes to your mind. Then, you can describe
                    him/her. To describe a famous athlete, we should remember
                    the general structure and language features of descriptive
                    texts. A descriptive text consists of identification and
                    descriptions. Sometimes, it ends with a conclusion.
                  </p>
                  <br></br>
                  <p className="text-sm text-indigo-700">
                    Related to parts of text, a descriptive text usually
                    consists of three parts. They are introductory paragraph,
                    body, and conclusion. Introductory paragraph should grab the
                    reader's attention and state what the text will be about.
                    The body provides details about the subject. Sometimes, it
                    consists of some supporting paragraphs. Each paragraph has a
                    main idea and is supported by some evidences or examples.
                    The conclusion is optional. It usually tells what the writer
                    thinks about the subject.
                  </p>
                  <br></br>
                  <h4 className="font-semibold text-indigo-800 mb-3">
                    The key points of descriptive texts about an athlete are:
                  </h4>
                  <div className="grid md:grid-cols-2 gap-4">
                    <ul className="space-y-2 text-sm text-indigo-700">
                      <li>• Who is the athlete?</li>
                      <li>• How do you know the athlete?</li>
                    </ul>
                    <ul className="space-y-2 text-sm text-indigo-700">
                      <li>• What are his/her achievements?</li>
                      <li>• Why is he/she famous?</li>
                    </ul>
                  </div>
                </div>

                <div className="bg-white border rounded-lg p-4">
                  <h4 className="font-semibold text-gray-800 mb-3">
                    Text Structure
                  </h4>
                  <div className="space-y-3">
                    <div className="border-l-4 border-green-500 pl-4 bg-green-50 p-3 rounded-r">
                      <h5 className="font-semibold text-green-800">
                        Introductory Paragraph
                      </h5>
                      <p className="text-green-700 text-sm">
                        Grab reader's attention and state what the text will be
                        about
                      </p>
                    </div>
                    <div className="border-l-4 border-blue-500 pl-4 bg-blue-50 p-3 rounded-r">
                      <h5 className="font-semibold text-blue-800">
                        Body (Supporting Paragraphs)
                      </h5>
                      <p className="text-blue-700 text-sm">
                        Provide details about the subject with main ideas and
                        supporting evidence
                      </p>
                    </div>
                    <div className="border-l-4 border-purple-500 pl-4 bg-purple-50 p-3 rounded-r">
                      <h5 className="font-semibold text-purple-800">
                        Conclusion (Optional)
                      </h5>
                      <p className="text-purple-700 text-sm">
                        Tell what the writer thinks about the subject
                      </p>
                    </div>
                  </div>
                </div>

                <div className="bg-yellow-50 p-4 rounded-lg border border-yellow-200">
                  <h4 className="font-semibold text-yellow-800 mb-3">
                    Writing Tips
                  </h4>
                  <div className="space-y-2 text-sm text-yellow-700">
                    <div className="bg-white p-2 rounded">
                      <strong>a)</strong> Start with general descriptions
                      (gender, height, weight, age, hair, eyes) Remember, some
                      people can be sensitive about these descriptions
                      especially weight and age, so be careful
                    </div>
                    <div className="bg-white p-2 rounded">
                      <strong>b)</strong> Carefully choose adjectives - avoid
                      subjective or rude descriptions like "fat" or "ugly" is
                      very rude and hurtful
                    </div>
                    <div className="bg-white p-2 rounded">
                      <strong>c)</strong> Keep it positive - be nice when giving
                      opinions about appearance. Use your best judgment when
                      describing people subjectively
                    </div>
                    <div className="bg-white p-2 rounded">
                      <strong>d)</strong> Using clauses beginning with
                      which/that and phrases beginning with with makes your
                      descriptive style more mature. Example: He has straight,
                      dark hair, and blue eyes that make him look dreamy and
                      peaceful.
                    </div>
                    <div className="bg-white p-2 rounded">
                      <strong>e)</strong> Choose descriptive details you have
                      observed in real life
                    </div>
                    <div className="bg-white p-2 rounded">
                      <strong>f)</strong> Write your description, then edit your
                      writing
                    </div>
                  </div>
                </div>

                <div className="bg-red-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-red-800 mb-3 flex items-center">
                    <Heart className="mr-2" size={20} />
                    Power Up Questions
                  </h4>
                  <ul className="space-y-2 text-sm text-red-700">
                    <li>• What does a descriptive text consist of?</li>
                    <li>
                      • What are the key points of descriptive texts about an
                      athlete?
                    </li>
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
      {/* Header */}
      <div className="bg-gradient-to-r from-blue-600 to-green-600 text-white p-6">
        <div className="max-w-6xl mx-auto">
          <h1 className="text-3xl font-bold mb-2">
            Chapter 1: Famous Athletes
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
              to="/chapter1/quiz"
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

export default Chapter1;
