import { Request, Response } from "express"
import Model from "../model/product"
const controller = {
  getGenderWomen: function (req: Request, res: Response) {
    Model.findAll({ where: { gender: "women" } })
      .then((results) => res.json(results))
      .catch((err) => res.status(500).send(err))
  },
  getGenderMen: function (req: Request, res: Response) {
    Model.findAll({ where: { gender: "men" } })
      .then((results) => res.json(results))
      .catch((err) => res.status(500).send(err))
  },
  getAllProduct: function (req: Request, res: Response) {
    Model.findAll()
      .then((results) => res.json(results))
      .catch((err) => res.status(500).send(err))
  },
}
export default controller 