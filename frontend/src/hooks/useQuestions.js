import { addQuestion, getQuestions } from '../service/devQuizApiService'
import {useContext, useEffect, useState} from 'react'
import {AuthContext} from "../context/AuthProvider";

export default function useQuestions() {
  const [questions, setQuestions] = useState([])
  const {token} = useContext(AuthContext)

  const getAllQuestions = () => {
    getQuestions(token).then(result => setQuestions(result))
        .catch(err => console.error(err))
  }

  useEffect(() => {
    getAllQuestions(token)
  }, [token])

  const saveQuestion = newQuestion => {
    addQuestion(newQuestion, token).then(getAllQuestions)
  }
  return {
    getAllQuestions,
    saveQuestion,
    questions,
  }
}
