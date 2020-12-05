import employee from './sagas';

const sagas = [
  employee
]

export const initSagas = (sagaMiddleware) =>
  sagas.forEach(sagaMiddleware.run.bind(sagaMiddleware))