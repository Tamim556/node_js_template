import express from 'express'
import { AuthRoutes } from '../modules/auth/auth.route'
import { UserRoutes } from '../modules/users/user.route'
import { personRoutes } from '../modules/person/person.route'
const routers = express.Router()

const moduleRoutes = [
  {
    path: '/auth',
    route: AuthRoutes
  },
  {
    path: '/user',
    route: UserRoutes
  },
  {
    path: '/person',
    route: personRoutes
  }
]

moduleRoutes.forEach(route => {
  routers.use(route.path, route.route)
})

export default routers
