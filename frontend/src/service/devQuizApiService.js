import axios from 'axios'

const getHeader = (token) => {
  return {
    headers: {
      Authorization: `Bearer ${token}`
    },
  }
}

export function getQuestions(token) {
  return axios
    .get('/api/question', getHeader(token))
    .then(response => response.data)
}

export function addQuestion(newQuestion, token) {
  return axios
    .post('/api/question', newQuestion, getHeader(token))
    .then(response => response.data)
    .catch(console.error)
}

export function getQuestion(token){
  return axios
      .get('/api/question/quiz', getHeader(token))
      .then(response => response.data)
      .catch(console.error)
}
export function checkAnswer(question, chosenId){

  const answerValidation = {
    question : question,
    chosenId : chosenId
  }

  return axios
      .post('/api/question/quiz', answerValidation )
      .then(response => response.data)
      .catch(console.error)
}