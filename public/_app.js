const { axios } = window

document.getElementById('addItem').addEventListener('click', event => {
  event.preventDefault()

  axios.post('/api/items', {
    text: document.getElementById('text').value,
    isDone: false
  })
    .then(({ data: item }) => {
      const itemElem = document.createElement('div')
      itemElem.innerHTML = `
        <p>${item.text}</p>
        <button class="isDone" data-id="${item.id}">${item.isDone ? 'Done' : 'Not Done'}</button>
        <button class="delete" data-id="${item.id}">X</button>
        <hr>
      `
      document.getElementById('items').append(itemElem)

      document.getElementById('text').value = ''
    })
    .catch(err => console.error(err))
})

document.addEventListener('click', event => {
  if (event.target.className === 'delete') {
    const id = event.target.dataset.id
    axios.delete(`/api/items/${id}`)
      .then(() => event.target.parentNode.remove())
      .catch(err => console.error(err))
  }
})

document.addEventListener('click', event => {
  if (event.target.className === 'isDone') {
    const id = event.target.dataset.id

    axios.put(`/api/items/${id}`, {
      isDone: event.target.textContent !== 'Done'
    })
      .then(() => {
        if (event.target.textContent === 'Done') {
          event.target.textContent = 'Not Done'
        } else {
          event.target.textContent = 'Done'
        }
      })
      .catch(err => console.error(err))
  }
})

axios.get('/api/items')
  .then(({ data: items }) => {
    items.forEach(item => {
      const itemElem = document.createElement('div')
      itemElem.innerHTML = `
        <p>${item.text}</p>
        <button class="isDone" data-id="${item.id}">${item.isDone ? 'Done' : 'Not Done'}</button>
        <button class="delete" data-id="${item.id}">X</button>
        <hr>
      `
      document.getElementById('items').append(itemElem)
    })
  })
  .catch(err => console.error(err))
