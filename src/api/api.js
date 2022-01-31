import * as axios from 'axios'

export const API = {
    sendFormData(reqType, email, password, nickname) {
        const data = {
            email,
            password,
            nickname
        }

        return axios.post(`http://localhost:5000/${reqType}`, data).then((req) => ({
                error: false,
                nickname: req.data.nickname,
                _id: req.data._id,
            })
        ).catch((error) => {
            return {error: true, data: error.response.data}
        })

    }
};
