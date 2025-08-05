import { PrismaClient } from '@prisma/client'
import express from 'express'
import type { Request, Response } from 'express'

const prisma = new PrismaClient()

export const createQuiz = async (req: Request, res: Response) => {
  const { title, questions } = req.body

  try {
    const formattedQuestions = questions.map((q: any) => {
      let optionsArray: string[] = []

      if (q.type === 'checkbox') {
        if (typeof q.options === 'string') {
          optionsArray = q.options
            .split(',')
            .map((opt: string) => opt.trim())
            .filter((opt: string) => opt.length > 0)
        } else if (Array.isArray(q.options)) {
          optionsArray = q.options // для безпечності
        }
      }

      return {
        type: q.type,
        text: q.text,
        options: q.type === 'checkbox' ? optionsArray : [],
        answer: q.answer
      }
    })

    const quiz = await prisma.quiz.create({
      data: {
        title,
        questions: {
          create: formattedQuestions
        }
      },
      include: { questions: true }
    })

    res.status(201).json(quiz)
  } catch (err) {
    console.error(err)
    res.status(500).json({ error: 'Failed to create quiz' })
  }
}

export const getQuizById = async (req: Request, res: Response) => {
  const { id } = req.params
  const quiz = await prisma.quiz.findUnique({
    where: { id },
    include: { questions: true }
  })
  if (!quiz) return res.status(404).json({ error: 'Quiz not found' })
  res.json(quiz)
}

export const deleteQuiz = async (req: Request, res: Response) => {
  const { id } = req.params
  try {
    await prisma.question.deleteMany({
      where: { quizId: id },
    })

    await prisma.quiz.delete({
      where: { id },
    })

    res.status(204).end()
  } catch (err) {
    console.error('Failed to delete quiz:', err)
    res.status(500).json({ error: 'Failed to delete quiz' })
  }
}

export const getAllQuizzes = async (req: Request, res: Response) => {
  try {
    const quizzes = await prisma.quiz.findMany({
      include: { questions: true },
    })
    res.json(quizzes)
  } catch (err) {
    console.error(err)
    res.status(500).json({ error: 'Failed to fetch quizzes' })
  }
}
