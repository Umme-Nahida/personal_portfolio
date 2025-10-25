import express from 'express'
import { authRouter } from './app/modules/auth/auth.route'
import cors from "cors"
import { userRoute } from './app/modules/user/user.route'
import { blogRouter } from './app/modules/blog/blog.route'
import { workRouter } from './app/modules/work/work.route'
const app = express()

// -----------------middleware--------------
app.use(
  cors({
    origin: ["https://portfolio-project-client.vercel.app"],
    credentials: true,
  })
); // Enables Cross-Origin Resource Sharing 

app.use(express.json()); // Parse incoming JSON requests


app.use("/api/v1/auth", authRouter)
app.use("/api/v1/user", userRoute)
app.use("/api/v1/blog", blogRouter)
app.use("/api/v1/project",workRouter)

app.get('/', (req, res) => {
  res.send('Hello ')
})

export default app;