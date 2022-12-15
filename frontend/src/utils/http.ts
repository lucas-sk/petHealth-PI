import axios from 'axios';
import jwt from 'jwt-decode'


export const http = axios.create({
  baseURL: import.meta.env.API_URL
})

export const httpAuth = axios.create({
  baseURL: 'http://localhost:8080/auth/'
})



export const useApi = () => ({


  validateToken: async (token: string) => {

    // return {
    //   user: { id: "3", email: "teste123@gmail.com", password: "1234" },
    // }

    const res = await httpAuth.post('/login', { token })


    // const useToken = res.data.token;
    // const decode = jwt(useToken);
    // const id = decode.id;

    // const response = await httpAuth.get(`/users/${id}`)

    // return {
    //   user: { id: response.data.id, email: response.data.email },
    // }



    return res.data;

  },

  signin: async (email: string, password: string) => {

    const validate = await httpAuth.post('/login', {
      email, password
    })
    const useToken = validate.data.token;
    const decode = jwt(useToken);
    const id = decode.id;


    const response = await httpAuth.get(`/users/${id}`)

    const userPet = "80957fc6-1753-4bae-9063-bb51d44e2b00";

    const res = await httpAuth.get(`/users/${id}/pet/${userPet}`)

    const vaccines = await httpAuth.get(`/pets/${userPet}/vaccines`)


    console.log(vaccines)

    // return {
    //   user: { id: "3", email: "teste123@gmail.com", password: "1234" },
    //   token: "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6Ijk1YmJhMDRkLTk1ODgtNDdlZi1hODliLWEwYzlmYjI4MDZhNSIsImlhdCI6MTY3MDk1Nzg5NiwiZXhwIjoxNjcwOTU3OTE2fQ.mocLrcnowMxYwOez4sww5_D2mIhpfO6ALQur959pfoY"
    // }

    return {
      user: {
        id: response.data.id, email: response.data.email, name: response.data.name,
        /* --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- */
        // idPet: res.data.id, namePet: res.data.name, yearsPet: res.data.years, genderPet: res.data.gender, breedPet: res.data.breed, weightPet: res.data.weight
      },
      token: useToken
    };








    return console.log(response.data);


  },

  logout: async () => {

    const response = await httpAuth.post('/logout');

    return response.data;

  }

})