import { rest } from "msw"

const baseURL = "https://moments-drf.onrender.com/";

export const handlers = [
    rest.get(`${baseURL}dj-rest-auth/user/`, (req, res, ctx) => {
        return res(
            ctx.json({
                "pk": 4,
                "username": "JoWings",
                "email": "",
                "first_name": "",
                "last_name": "",
                "profile_id": 4,
                "profile_image": "https://res.cloudinary.com/codestar-blog/image/upload/v1/media/images/Cartoonify_3_iejssm"
                })
        )
    }),
    rest.post(`${baseURL}dj-rest-auth/logout/`, (req, res, ctx) => {
        return res(ctx.status(200));
    })
]