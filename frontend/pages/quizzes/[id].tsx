import { useRouter } from 'next/router'
import { useEffect, useState } from 'react'
import '../styles/QuizPage.css'

export default function QuizPage() {
  const router = useRouter()
  const { id } = router.query

  const [quiz, setQuiz] = useState(null)
  const [loading, setLoading] = useState(true)
  const [showAnswers, setShowAnswers] = useState<boolean[]>([])
  const API_URL = process.env.NEXT_PUBLIC_API_URL
  useEffect(() => {
    if (!id) return

    const fetchQuiz = async () => {
      try {
        const res = await fetch(`${API_URL}/quizzes/${id}`)
        const data = await res.json()
        setQuiz(data)
        setShowAnswers(new Array(data.questions.length).fill(false))
      } catch (err) {
          console.error('Failed to fetch quiz', err)
      } finally {
          setLoading(false)
      }
    }

    fetchQuiz()
      }, [id])

      const toggleAnswer = (index: number) => {
        setShowAnswers(prev => {
          const updated = [...prev]
          updated[index] = !updated[index]
          return updated
        })
      }

      if (loading) return <p className="p-4">Loading...</p>
      if (!quiz) return <p className="p-4">Quiz not found</p>

      return (
        <div className="container">
          <button onClick={() => router.push('/')} className="backButton">
            ← Back to main page
          </button>

          <h1 className="title">{quiz.title}</h1>
          <div>
            {quiz.questions.map((question: any, index: number) => (
              <div key={question.id} className="question">
                <p className="questionText">{index + 1}. {question.text}</p>
                <p className="questionType">Type: {question.type}</p>

                {question.type === 'text' && (
                  <input type="text" disabled placeholder="Your answer" className="inputField" />
                )}
                {question.type === 'textarea' && (
                  <textarea disabled placeholder="Your detailed answer" className="textareaField" />
                )}
                {question.type === 'checkbox' && (
                  <div>
                    {question.options.map((opt: string, i: number) => (
                      <label key={i} className="checkboxLabel">
                        <input type="checkbox" disabled /> {opt}
                      </label>
                    ))}
                  </div>
                )}

                <button onClick={() => toggleAnswer(index)} className="toggleAnswerBtn">
                  {showAnswers[index] ? 'Hide answer' : 'Show answer'}
                </button>

                {showAnswers[index] && <p className="answer"><b>Answer:</b> {question.answer}</p>}
              </div>
            ))}
          </div>
        </div>
      )

