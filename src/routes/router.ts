import { Router } from "express";
import { UrlRepository } from "../repository/url-repository";
import { UrlService } from "../service/url-service";
import { UrlController } from "../controller/url-controller";
import { validateUrl } from "../middleware/validation-url-middleware";
import asyncHandler from "express-async-handler";


const router = Router();

const urlRepository = new UrlRepository();
const urlService = new UrlService(urlRepository);

const urlController = new UrlController(urlService);


router.post(
  "/shorten",
  validateUrl,
  asyncHandler(urlController.createShortUrl),
);

router.get("/:code", asyncHandler(urlController.redirectOriginalUrl));







export default router;
