// API mock
export const api = {
  callSomeApi: (payload) => new Promise((resolve, rej) => {
    setTimeout(
      () => {
        console.log('API mock call / callSomeApi', payload)
        resolve({ data: payload })
      }, 1000
    )
  }),
  callAnotherApi: (payload) => new Promise((resolve, rej) => {
    setTimeout(
      () => {
        console.log('API mock call / callAnotherApi', payload)
        resolve({ data: payload })
      }, 1000
    )
  })
}
