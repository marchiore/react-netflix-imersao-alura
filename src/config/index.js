// usando a api do curso pois consumi todos os créditos free da minha conta da heroku :(
// https://reactnetflix-imersao-alura.herokuapp.com/

const URL_BACKEND_TOP = window.location.hostname.includes('localhost')
  ? 'http://localhost:8080'
  : 'https://devsoutinhoflix.herokuapp.com';

export default {
  URL_BACKEND_TOP,
};
