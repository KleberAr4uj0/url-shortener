import { Router } from "express";
import { UrlRepository } from "../repository/url-repository";
import { UrlService } from "../service/url-service";



const router = Router();

const urlRepository = new UrlRepository();
const urlService = new UrlService(urlRepository);









export default router;