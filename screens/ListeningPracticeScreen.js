const ListeningPracticeScreen = () => {
  const { useState, useEffect } = window.React;
  const Layout = window.Layout;
  const STATIC_LISTENING_QUESTIONS = window.LISTENING_QUESTIONS;
  const RoutePath = window.RoutePath;

  const [questions, setQuestions] = useState([]);
  const [content, setContent] = useState(null);
  const [selectedAnswers, setSelectedAnswers] = useState({});
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  const [showTranscript, setShowTranscript] = useState(false);

  useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    const isAI = params.get('source') === 'ai';

    if (isAI) {
      const aiData = JSON.parse(sessionStorage.getItem('current_ai_practice'));
      if (aiData) {
        setContent(aiData);
        const formattedQuestions = Object.entries(aiData.questions).map(([id, q]) => ({
          id: parseInt(id),
          text: q.desc,
          options: q.options,
          correctAnswerIndex: q.answer
        }));
        setQuestions(formattedQuestions);
      }
    } else {
      setQuestions(STATIC_LISTENING_QUESTIONS);
    }
    setIsLoading(false);
  }, []);

  if (isLoading) return <Layout><div>Loading...</div></Layout>;
  if (!questions.length) return <Layout><div>No content found.</div></Layout>;

  const handleSelectAnswer = (qId, idx) => {
    if (isSubmitted) return;
    setSelectedAnswers(prev => ({ ...prev, [qId]: idx }));
  };

  return (
    <Layout>
      <div className="max-w-4xl mx-auto flex flex-col gap-6">
        
        {/* Header */}
        <div className="flex flex-col gap-1">
          <h1 className="text-3xl font-black text-gray-900 tracking-tight">
            {content ? content.title : "TPO 54 - Listening Section 1"}
          </h1>
          <p className="text-gray-500">
            {content ? `Topic: ${content.topic}` : "Listen to the conversation. Then answer the questions."}
          </p>
        </div>

        {/* AI Listening Content (Transcript) */}
        {content && (
          <div className="bg-white rounded-xl border border-gray-200 shadow-sm p-6">
            <div className="flex justify-between items-center mb-4">
              <h3 className="font-bold text-gray-900 flex items-center gap-2">
                <span className="text-primary text-xl">🎧</span> 
                {content.subtype === 'lecture' ? 'Lecture Transcript' : 'Conversation Transcript'}
              </h3>
              <button 
                onClick={() => setShowTranscript(!showTranscript)}
                className="text-sm font-bold text-primary hover:underline"
              >
                {showTranscript ? 'Hide Transcript' : 'Show Transcript'}
              </button>
            </div>
            
            {showTranscript ? (
              <div className="prose max-w-none text-gray-700 leading-relaxed font-body whitespace-pre-wrap italic">
                {content.content}
              </div>
            ) : (
              <div className="bg-gray-50 rounded-lg p-8 text-center border-2 border-dashed border-gray-200">
                <p className="text-gray-500 italic">In a real test, you would listen to the audio here. Since this is an AI-generated practice, you can view the transcript by clicking the button above.</p>
              </div>
            )}
          </div>
        )}

        {/* Questions List */}
        <div className="flex flex-col gap-6">
           {questions.map((q, qIdx) => {
              const isCorrect = selectedAnswers[q.id] === q.correctAnswerIndex;
              
              return (
                <div key={q.id} className={`rounded-xl border p-5 transition-all ${
                  isSubmitted 
                    ? (isCorrect ? "bg-green-50/50 border-success/30" : "bg-red-50/50 border-danger/30")
                    : "bg-white border-gray-200 shadow-sm"
                }`}>
                  <div className="flex justify-between items-start gap-4 mb-4">
                     <h3 className="font-medium text-gray-900"><span className="font-bold">{qIdx + 1}.</span> {q.text}</h3>
                     {isSubmitted && (
                       <span className={`flex items-center gap-1 px-2 py-0.5 rounded text-xs font-bold flex-shrink-0 ${
                         isCorrect ? "bg-success text-white" : "bg-danger text-white"
                       }`}>
                          <span className="material-symbols-outlined text-sm">
                            {isCorrect ? 'check_circle' : 'cancel'}
                          </span> 
                          {isCorrect ? 'Correct' : 'Incorrect'}
                       </span>
                     )}
                  </div>

                  <div className="space-y-3 pl-4">
                     {q.options.map((opt, idx) => {
                        const isSelected = selectedAnswers[q.id] === idx;
                        const isCorrectOption = q.correctAnswerIndex === idx;
                        
                        let style = "bg-white border-gray-200";
                        if (isSubmitted) {
                          if (isCorrectOption) style = "bg-white border-success ring-1 ring-success";
                          else if (isSelected && !isCorrectOption) style = "bg-white border-danger ring-1 ring-danger";
                          else style = "bg-white border-gray-100 opacity-60";
                        } else if (isSelected) {
                          style = "bg-primary/5 border-primary ring-1 ring-primary";
                        }

                        return (
                            <label key={idx} className={`flex items-start gap-3 p-3 rounded-lg border transition-all cursor-pointer ${style}`}>
                               <input 
                                 type="radio" 
                                 checked={isSelected} 
                                 onChange={() => handleSelectAnswer(q.id, idx)}
                                 disabled={isSubmitted}
                                 className="mt-0.5 text-primary focus:ring-primary" 
                               />
                               <span className={`text-sm ${isSelected ? "font-semibold text-gray-900" : "text-gray-600"}`}>{opt}</span>
                            </label>
                        );
                     })}
                  </div>
                </div>
              );
           })}
        </div>

        {/* Action Button */}
        {!isSubmitted && (
          <button 
            onClick={() => setIsSubmitted(true)}
            className="w-full py-4 bg-primary text-white rounded-xl font-black text-lg shadow-lg hover:opacity-90 transition-all"
          >
            Finish Test
          </button>
        )}
      </div>
    </Layout>
  );
};

window.ListeningPracticeScreen = ListeningPracticeScreen;
