// pages/create.tsx
import { useForm, useFieldArray, Controller } from "react-hook-form"
import { z } from "zod"
import { zodResolver } from "@hookform/resolvers/zod"
import axios from "axios"
import { useState } from "react"
import { useRouter } from "next/router"
import '../styles/globals.css'
import '../styles/CreateQuiz.css'




const questionTypes = ["boolean", "input", "checkbox"] as const
const API_URL = process.env.NEXT_PUBLIC_API_URL
const questionSchema = z.object({
  type: z.enum(questionTypes),
  text: z.string().min(1, "Question text is required"),
  options: z.string().optional(),
  answer: z.string(),
}).superRefine((data, ctx) => {
  if (data.type === "checkbox") {
    if (!data.options || data.options.split(",").length < 2) {
      ctx.addIssue({
        path: ["options"],
        code: z.ZodIssueCode.custom,
        message: "At least two options (comma separated) are required for checkbox"
      })
    }
  }
})



const quizSchema = z.object({
  title: z.string().min(1, "Title is required"),
  questions: z.array(questionSchema)
})

type QuizForm = z.infer<typeof quizSchema>

export default function CreateQuiz() {
  const [loading, setLoading] = useState(false)
  const {
    register,
    control,
    handleSubmit,
    watch,
    reset
  } = useForm<QuizForm>({
    resolver: zodResolver(quizSchema),
    defaultValues: {
      title: "",
      questions: []
    }
  })

  const { fields, append, remove } = useFieldArray({
    control,
    name: "questions"
  })
const router = useRouter()

  const onSubmit = async (data: QuizForm) => {
    setLoading(true)
    try {
        await axios.post(`${API_URL}/quizzes`, data)
        alert("Quiz created!")
        reset()
    } catch (err) {
        alert("Error creating quiz")
    } finally {
        setLoading(false)
    }
  }

  const questions = watch("questions")

  return (
    <div className="container">
      <button onClick={() => router.push('/')} className="backButton">
        ← Back to main page
      </button>

      <h1 className="title">Create a New Quiz</h1>

      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="formGroup">
          <label className="label">Quiz Title</label>
          <input {...register("title")} className="inputField" />
        </div>

        <div>
          {fields.map((field, index) => {
            const type = questions?.[index]?.type
            return (
              <div key={field.id} className="questionCard">
                <div className="questionHeader">
                  <h2>Question {index + 1}</h2>
                  <button type="button" onClick={() => remove(index)} className="removeBtn">
                    Remove
                  </button>
                </div>

                <div className="formGroup">
                  <label className="label">Question Text</label>
                  <input {...register(`questions.${index}.text`)} className="inputField" />
                </div>

                <div className="formGroup">
                  <label className="label">Type</label>
                  <select {...register(`questions.${index}.type`)} className="inputField">
                    {questionTypes.map(type => (
                      <option key={type} value={type}>{type}</option>
                    ))}
                  </select>
                </div>

                {type === "checkbox" && (
                  <div className="formGroup">
                    <label className="label">Options (comma separated)</label>
                    <input {...register(`questions.${index}.options`)} className="inputField" placeholder="Option 1, Option 2" />
                  </div>
                )}

                <div className="formGroup">
                  <label className="label">Answer</label>
                  <input {...register(`questions.${index}.answer`)} className="inputField" placeholder={type === "checkbox" ? "Comma separated correct answers" : ""} />
                </div>
              </div>
            )
          })}
        </div>

        <button type="button" onClick={() => append({ type: "input", text: "", answer: "", options: [] })} className="addQuestionBtn">
          + Add Question
        </button>

        <div>
          <button type="submit" disabled={loading} className="submitBtn">
            {loading ? "Saving..." : "Create Quiz"}
          </button>
        </div>
      </form>
    </div>
  )

