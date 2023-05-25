import { Request, Response } from "express";
import User from "../model/user";

export const getUser = async (req: Request, res: Response) => {
  try {
    const users = await User.findAll();
    res.json(users);
  } catch (error) {
    console.error("Error retrieving users:", error);
    res.status(500).send("Error retrieving users");
  }
};

export const userLogin = async (req: Request, res: Response) => {
  const { email, password } = req.body;

  try {
    const user = await User.findOne({ where: { email, password } });

    if (user) {
      res.json(user);
    } else {
      res.status(401).send("Invalid email or password");
    }
  } catch (error) {
    console.error("Error logging in user:", error);
    res.status(500).send("Error logging in user");
  }
};

export const signupUser = async (req: Request, res: Response) => {
  const { firstname, lastname, email, password } = req.body;

  try {
    const user = await User.create({
      firstname,
      lastname,
      email,
      password,
    });

    res.json(user);
  } catch (error) {
    console.error("Error signing up user:", error);
    res.status(500).send("Error signing up user");
  }
};
