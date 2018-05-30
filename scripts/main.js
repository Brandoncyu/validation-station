console.log('Welcome to Validation Station!')

const submitButton = document.querySelector('#new-train-car-form')
const list = document.querySelector('#car-list')


let count = 0
submitButton.addEventListener('submit', (event) => {

  event.preventDefault()
  // const kind = document.querySelector('#train-kind')
  const kind = event.target.kind
  const seats = event.target.seats
  const brand = event.target.brand
  if ((kind.value === 'observation' || kind.value === 'passenger') && !seats.value){
    const error = document.querySelector('#error')
    error.querySelector('p').textContent = 'You must have a number of seats'
    error.classList.remove("d-none")
  } else{
    count++
    const li = document.createElement('li')
    li.textContent = `Car #${count} is a ${kind.value} car, brand ${brand.value}.`
    if (seats.value) li.textContent+= ` It seats ${seats.value} people.`
    list.append(li)
    error.querySelector('p').textContent = 'You added a car!'
    error.classList.remove('d-none', 'alert-danger')
    error.classList.add('alert-success')
    seats.value = ''
    kind.value = ''
    brand.value = ''
  }
})
