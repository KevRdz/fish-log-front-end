import * as tokenService from './tokenService'
const BASE_URL = `${import.meta.env.VITE_BACK_END_SERVER_URL}/api/fishes`

async function create(fish) {
  try {
    const res = await fetch(BASE_URL, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "Authorization": `Bearer ${tokenService.getToken()}`
      },
      body: JSON.stringify(fish)
    })
    return res.json()
  } catch (err) {
    console.log(err);
  }
}

async function getAll() {
  const res = await fetch(BASE_URL)
  return res.json()
}

async function deleteOne(id) {
  const res = await fetch(`${BASE_URL}/${id}`, {
    method: 'DELETE',
    headers: {
      'Authorization': `Bearer ${tokenService.getToken()}`
    }
  })
  return res.json()
}

async function update(fish) {
  const res = await fetch(`${BASE_URL}/${fish._id}`, {
    method: 'PUT',
    headers: {
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${tokenService.getToken()}`
    },
    body: JSON.stringify(fish)
  })
  return res.json()
}

async function addPhoto(photoData, fishId) {
  const res = await fetch(`${BASE_URL}/${fishId}/add-photo`, {
    method: 'PUT',
    headers: {
      'Authorization': `Bearer ${tokenService.getToken()}`
    },
    body: photoData
  })
  return await res.json()
}

export {
  create,
  getAll,
  deleteOne,
  update,
  addPhoto,
}