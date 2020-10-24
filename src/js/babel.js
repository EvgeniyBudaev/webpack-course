async function work() {
  return await Promise.resolve('is working')
}

const notUse = 'eslint is working!'

import('lodash').then((_) => {
  console.log('Lodash:', _.random(9, 10, true))
})

work().then(console.log)
