const ReadingPracticeScreen = () => {
  const { useState, useEffect } = window.React;
  const Layout = window.Layout;
  const STATIC_READING_PASSAGE = window.READING_PASSAGE;
  const STATIC_READING_QUESTIONS = window.READING_QUESTIONS;
  const RoutePath = window.RoutePath;

  const [passage, setPassage] = useState(null);
  const [questions, setQuestions] = useState([]);
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [selectedAnswers, setSelectedAnswers] = useState({});
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    const isAI = params.get('source') === 'ai';

    if (isAI) {
      const aiData = JSON.parse(sessionStorage.getItem('current_ai_practice'));
      if (aiData) {
        setPassage({
          title: aiData.title,
          content: Array.isArray(aiData.content) ? aiData.content : [aiData.content]
        });
        
        // Transform AI questions into the format used by the screen
        const formattedQuestions = Object.entries(aiData.questions).map(([id, q]) => ({
          id: parseInt(id),
          text: q.desc,
          options: q.options,
          correctAnswerIndex: q.answer
        }));
        setQuestions(formattedQuestions);
      }
    } else {
      setPassage(STATIC_READING_PASSAGE);
      setQuestions(STATIC_READING_QUESTIONS);
    }
    setIsLoading(false);
  }, []);

  if (isLoading) return <Layout><div>Loading...</div></Layout>;
  if (!passage || !questions.length) return <Layout><div>No content found.</div></Layout>;

  const question = questions[currentQuestionIndex];

  const handleSelectAnswer = (index) => {
    if (isSubmitted) return;
    setSelectedAnswers(prev => ({ ...prev, [question.id]: index }));
  };

  const handleSubmit = () => {
    setIsSubmitted(true);
  };

  return (
    <Layout>
      <div className="flex flex-col h-[calc(100vh-140px)]">
        {/* Header / Breadcrumbs / Timer */}
        <div className="flex flex-col md:flex-row justify-between items-center gap-4 mb-4 flex-shrink-0">
          <div className="flex items-center gap-2 text-sm text-gray-500">
             <span className="hover:text-primary cursor-pointer" onClick={() => window.location.href = RoutePath.DASHBOARD}>Home</span> / 
             <span className="hover:text-primary cursor-pointer" onClick={() => window.location.href = RoutePath.READING_LIB}>Reading</span> / 
             <span className="text-gray-900 font-medium">{passage.title}</span>
          </div>

          <div className="flex gap-2">
             <div className="flex flex-col items-center">
                <div className="w-10 h-10 flex items-center justify-center bg-white rounded border border-gray-200 shadow-sm text-lg font-bold">00</div>
                <span className="text-[10px] text-gray-500 uppercase mt-1">Hours</span>
             </div>
             <div className="flex flex-col items-center">
                <div className="w-10 h-10 flex items-center justify-center bg-white rounded border border-gray-200 shadow-sm text-lg font-bold">54</div>
                <span className="text-[10px] text-gray-500 uppercase mt-1">Mins</span>
             </div>
             <div className="flex flex-col items-center">
                <div className="w-10 h-10 flex items-center justify-center bg-white rounded border border-gray-200 shadow-sm text-lg font-bold">00</div>
                <span className="text-[10px] text-gray-500 uppercase mt-1">Secs</span>
             </div>
          </div>
        </div>

        {/* Split Content */}
        <div className="flex-1 grid grid-cols-1 lg:grid-cols-3 gap-6 overflow-hidden">
           {/* Left: Passage Text */}
           <div className="lg:col-span-2 bg-white rounded-xl border border-gray-200 shadow-sm flex flex-col overflow-hidden">
              <div className="p-6 overflow-y-auto">
                 <h1 className="text-2xl font-black text-gray-900 mb-6">{passage.title}</h1>
                 <div className="prose max-w-none text-gray-800 space-y-4 leading-relaxed font-body">
                    {passage.content.map((para, idx) => (
                       <p key={idx}>
                          <span className="font-bold text-primary mr-2">[{idx + 1}]</span>
                          {para}
                       </p>
                    ))}
                 </div>
              </div>
           </div>

           {/* Right: Questions */}
           <div className="lg:col-span-1 flex flex-col h-full overflow-hidden">
              <div className="bg-white rounded-xl border border-gray-200 shadow-sm p-6 flex flex-col h-full overflow-y-auto">
                 <div className="mb-4">
                    <span className="text-sm font-semibold text-gray-500">Question {currentQuestionIndex + 1} of {questions.length}</span>
                    <p className="font-medium text-gray-900 mt-2 text-base">{question.text}</p>
                 </div>

                 <div className="space-y-3 mb-6">
                    {question.options.map((option, idx) => {
                       const isSelected = selectedAnswers[question.id] === idx;
                       const isCorrect = question.correctAnswerIndex === idx;
                       
                       let containerClass = "flex items-start p-3 rounded-lg border cursor-pointer transition-all ";
                       if (isSubmitted) {
                          if (isCorrect) containerClass += "bg-green-50 border-green-200 ";
                          else if (isSelected && !isCorrect) containerClass += "bg-red-50 border-red-200 ";
                          else containerClass += "border-gray-200 opacity-60 ";
                       } else {
                          if (isSelected) containerClass += "bg-primary/5 border-primary ";
                          else containerClass += "border-gray-200 hover:border-primary/50 hover:bg-gray-50 ";
                       }

                       return (
                          <label key={idx} className={containerClass}>
                             <input 
                               type="radio" 
                               name={`question-${question.id}`}
                               className="mt-1 text-primary focus:ring-primary border-gray-300"
                               checked={isSelected}
                               onChange={() => handleSelectAnswer(idx)}
                               disabled={isSubmitted}
                             />
                             <span className="ml-3 text-sm text-gray-700">{option}</span>
                          </label>
                       );
                    })}
                 </div>

                 <div className="mt-auto pt-6 border-t border-gray-100 flex justify-between gap-4">
                    <button 
                       onClick={() => setCurrentQuestionIndex(prev => Math.max(0, prev - 1))}
                       disabled={currentQuestionIndex === 0}
                       className="px-4 py-2 text-sm font-bold text-gray-600 hover:text-gray-900 disabled:opacity-30"
                    >
                       Previous
                    </button>
                    
                    {currentQuestionIndex < questions.length - 1 ? (
                       <button 
                          onClick={() => setCurrentQuestionIndex(prev => Math.min(questions.length - 1, prev + 1))}
                          className="px-6 py-2 bg-black text-white rounded-lg text-sm font-bold hover:bg-gray-800 transition-all"
                       >
                          Next
                       </button>
                    ) : (
                       <button 
                          onClick={handleSubmit}
                          disabled={isSubmitted}
                          className="px-6 py-2 bg-primary text-white rounded-lg text-sm font-bold hover:opacity-90 transition-all disabled:opacity-50"
                       >
                          {isSubmitted ? 'Submitted' : 'Finish Test'}
                       </button>
                    )}
                 </div>
              </div>
           </div>
        </div>
      </div>
    </Layout>
  );
};

window.ReadingPracticeScreen = ReadingPracticeScreen;
