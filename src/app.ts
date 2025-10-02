import express from 'express'
import { authRouter } from './app/modules/auth/auth.route'
import cors from "cors"
import { userRoute } from './app/modules/user/user.route'
import { blogRouter } from './app/modules/blog/blog.route'
const app = express()

// -----------------middleware--------------

app.use(
  cors({
    origin: "http://localhost:3000",
    credentials: true,
  })
); // Enables Cross-Origin Resource Sharing 

app.use(express.json()); // Parse incoming JSON requests


app.use("/api/v1/auth", authRouter)
app.use("/api/v1/user", userRoute)
app.use("/api/v1/blog", blogRouter)

app.get('/', (req, res) => {
  res.send('Hello World!')
})

export default app;