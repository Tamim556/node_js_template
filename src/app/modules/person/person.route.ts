import express from 'express'
import { PersonController } from './person.controller'


const router = express.Router()



router.post('/person-create', PersonController.createPerson)



router.get('/:id', PersonController.singlePerson)


router.get('/', PersonController.getPerson)


export const personRoutes = router 